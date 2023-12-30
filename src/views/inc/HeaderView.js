import { LitElement, html, css } from "lit";
import { doc, getDoc } from "firebase/firestore";
import { isAuthenticated, logout } from "../../utils/authUtils";
import appLogo, {
  appLoginRoute,
  appMainPath,
  loginButtonText,
  logoutButtonText,
} from "../../module/config/app-config";
import { firestore_db } from "../../../utils/firebase";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";

import locationIcon from "../../../public/icons/location-marker.png";

import { web3modal } from "../../module/Web3/web3-config";
import { getAccount } from "@wagmi/core";

class HeaderView extends LitElement {
  static properties = {
    currentBuildVersion: { type: String },
    authenticated: { type: Boolean },
    topLinkTxet: { type: String },
    topLinkHref: { type: String },
    isOpen: false,
  };

  constructor() {
    super();
    this.currentBuildVersion = "Loading...";
    this.fetchBuildVersion();
    this.authenticated = false;
    this.hideDynamicLink = window.innerWidth <= 768;

    // Bind 'this' to the event listener function
    this.handlePopState = this.handlePopState.bind(this);

    // Add event listener for 'popstate' when the component is constructed
    window.addEventListener("popstate", this.handlePopState);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Remove event listener when the component is removed from the DOM
    window.removeEventListener("popstate", this.handlePopState);
  }

  // Function to handle 'popstate' event
  handlePopState() {
    // Call 'updated' method to update the header based on the current URL
    this.updated(new Map());
  }

  async firstUpdated() {
    // Fetch user data when the component is first updated
    await this.fetchUserData();
    this.checkUserAuthAccess();
    this.checkWalletConnectionState();
  }

  async fetchBuildVersion() {
    try {
      const buildVersionRef = doc(firestore_db, "appInfo/buildVersion");
      const docSnap = await getDoc(buildVersionRef);

      if (docSnap.exists()) {
        const buildVersion = docSnap.data().version;
        this.currentBuildVersion = buildVersion;
      } else {
        console.error("No build version found in Firestore.");
      }
    } catch (error) {
      console.error("Error fetching build version:", error);
    }
  }

  async fetchUserData() {
    if (this.authenticated) {
      try {
        const userData = await getFirestoreUserData();
        if (userData) {
          this.userData = userData;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }

  async checkUserAuthAccess() {
    this.authenticated = await isAuthenticated();
    try {
      if (this.authenticated) {
        this.topLinkTxet = "Dashboard";
      }
    } catch (error) {
      console.error("Error completing user state:", error);
    }
  }

  toggleMenu() {
    const menuContainer = this.shadowRoot.getElementById("menu-modal");
    menuContainer.classList.toggle("active");
  }

  async logOut() {
    await logout();
    window.location.href = appMainPath;
  }

  logIn() {
    window.location.href = appLoginRoute;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    const currentPath = window.location.pathname;
    const pathMapping = {
      "/airdrops": { text: "Airdrops", href: "/airdrops" },
      "/blogs": { text: "Blogs", href: "/blogs" },
      "/docs": { text: "Docs", href: "/docs" },
      "/reports": { text: "Reports", href: "/reports" },
      "/dashboard": { text: "Dashboard", href: "/dashboard" },
      "/wallets": { text: "Wallets", href: "/wallets" },
    };

    if (currentPath.startsWith("/airdrop/")) {
      const parts = currentPath.split("/");
      const id = parts[2];

      this.topLinkTxet = "Airdrop";
      this.topLinkHref = `/airdrop/${id}`;
    } else if (currentPath in pathMapping) {
      this.topLinkTxet = pathMapping[currentPath].text;
      this.topLinkHref = pathMapping[currentPath].href;
    } else {
      this.topLinkTxet = "Welcome";
      this.topLinkHref = "/";
    }
    // Check if an update is needed and if one is already scheduled
    if (!this._updateScheduled) {
      // Set a flag to indicate that an update has been scheduled
      this._updateScheduled = true;

      // Request an update asynchronously using requestAnimationFrame
      requestAnimationFrame(() => {
        // Reset the flag before triggering the update
        this._updateScheduled = false;
        this.requestUpdate();
      });
    }
  }

  async triggerConnectWalletModal() {
    if (web3modal) {
      try {
        await web3modal.openModal(); // Use await to open the wallet modal
        await this.checkWalletConnectionState();
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    }
  }

  async checkWalletConnectionState() {
    const wallet = getAccount();

    // Check if the wallet instance exists and is connected
    if (wallet.status === "connected" || wallet.status === "reconnecting") {
      try {
        await this.updateConnectWalletButton(wallet.address);
      } catch (error) {
        console.error("Error updating Connect Wallet button:", error);
      }
    } else if (wallet.status === "connecting") {
      // If the wallet status is not connected, initiate a recursive check
      await this.waitForConnection();
    }
  }

  async waitForConnection() {
    const maxAttempts = 5; // Set a maximum number of attempts to prevent infinite looping
    let attempts = 0;

    while (attempts < maxAttempts) {
      await this.delay(11000); // Wait for a brief period before rechecking the wallet status

      const wallet = getAccount();

      if (wallet.status !== "connecting") {
        break;
      }

      attempts++;
    }

    // After the loop, check the final status
    const wallet = getAccount();
    if (wallet.status === "connecting") {
      // Handle the situation where the wallet is still connecting after max attempts
      console.log("Wallet is still connecting after maximum attempts.");
    } else {
      // Wallet status changed from "connecting", update the UI or take necessary actions
      await this.checkWalletConnectionState();
    }
  }

  // Function to create a delay using Promises
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async updateConnectWalletButton(walletAddress) {
    try {
      const connectWalletButton =
        this.shadowRoot.querySelector(".connect-wallet");

      // Display a partial wallet address in the button text
      const partialAddress = `${walletAddress.substr(
        0,
        4
      )}....${walletAddress.substr(-4)}`;

      // Update the Connect Wallet button text and link attributes
      connectWalletButton.innerHTML = `
        
          ${partialAddress}
        
      `;
    } catch (error) {
      console.error("Error updating Connect Wallet button:", error);
    }
  }

  render() {
    return html`
      <header>
        <div class="header justify-between">
          <div class="flex items-center gap-3 h-11">
            <!-- -->
            <div class="flex h-11 rounded-full overflow-hidden border-4">
              <a href="${appMainPath}" class="w-2/5">
                <responsive-image-frame
                  mainSrc="${appLogo}"
                  alt="Token Mama icon logo"
                  fallbackLabel="this is our website logo"
                  type="optimized"
                  class="w-9"
                >
                </responsive-image-frame>
              </a>

              <button
                @click=${this.triggerConnectWalletModal}
                class="w-3/3 connect-wallet rounded-full shadow text-center text-sm font-medium"
              >
                Connect wallet
              </button>
            </div>

            <a href="/faqs" class="nav-icon-link nav-item flex items-center">
              <span
                class="nav-icon bg-gray-300 rounded-full p-2 text-white font-bold text-lg"
                >?</span
              >
            </a>
          </div>

          <nav class="app-links text-md font-semibold">
            <ul class="link-container flex gap-3 justify-between">
              ${!this.hideDynamicLink
                ? html`
                    ${this.topLinkHref !== "/airdrops"
                      ? html`
                          <li id="dynamic-links" class="flex">
                            <a
                              href="/airdrops"
                              class="nav-item ${"/airdrops" ===
                              window.location.pathname
                                ? "active"
                                : ""}"
                              >Airdrops</a
                            >
                          </li>
                        `
                      : ""}
                    ${this.topLinkHref !== "/blogs"
                      ? html`
                          <li id="dynamic-links" class="flex">
                            <a
                              href="/blogs"
                              class="nav-item ${"/blogs" ===
                              window.location.pathname
                                ? "active"
                                : ""}"
                              >Blogs</a
                            >
                          </li>
                        `
                      : ""}
                    ${this.topLinkHref !== "/docs"
                      ? html`
                          <li id="dynamic-links" class="flex">
                            <a
                              href="/docs"
                              class="nav-item ${"/docs" ===
                              window.location.pathname
                                ? "active"
                                : ""}"
                              >Docs</a
                            >
                          </li>
                        `
                      : ""}
                    ${this.topLinkHref !== "/reports"
                      ? html`
                          <li id="dynamic-links" class="flex">
                            <a
                              href="/reports"
                              class="nav-item ${"/reports" ===
                              window.location.pathname
                                ? "active"
                                : ""}"
                              >Reports</a
                            >
                          </li>
                        `
                      : ""}
                    ${this.topLinkHref !== "/dashboard"
                      ? html`
                          <li id="dynamic-links" class="flex">
                            <a
                              href="/dashboard"
                              class="nav-item ${"/dashboard" ===
                              window.location.pathname
                                ? "active"
                                : ""}"
                              >Dashboard</a
                            >
                          </li>
                        `
                      : ""}
                    ${this.topLinkHref !== "/wallets"
                      ? html`
                          <li id="dynamic-links" class="flex">
                            <a
                              href="/wallets"
                              class="nav-item ${"/wallets" ===
                              window.location.pathname
                                ? "active"
                                : ""}"
                              >Wallets</a
                            >
                          </li>
                        `
                      : ""}
                  `
                : ""}
            </ul>

            <div id="dynamic-links" class="flex md:hidden lg:hidden">
              <a
                href="javascript:void(0);"
                @click=${this.toggleMenu}
                class="nav-icon-link nav-item flex items-center"
              >
                <svg height="24" width="24" fill="currentcolor">
                  <path
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  ></path>
                </svg>
              </a>
            </div>

            <div id="menu-modal" class="menu-modal ">
              <!--  -->
              <div
                @click=${this.toggleMenu}
                class="w-full h-full close-modal"
              ></div>
              <!--  -->
              <div
                id="menu-container "
                @click=${this.toggleMenu}
                class="menu-container"
              >
                <div class="grid">
                  <div class="menu-item-container grid gap-3">
                    <a
                      href="/airdrops"
                      class="link-container nav-item p-2 text-start"
                      >Airdrops</a
                    >

                    <a
                      href="/blogs"
                      class="link-container nav-item p-2 text-start"
                      >Blogs</a
                    >

                    <a
                      href="/docs"
                      class="link-container nav-item p-2 text-start"
                      >Docs</a
                    >

                    <a
                      href="/reports"
                      class="link-container nav-item p-2 text-start"
                      >Reports</a
                    >
                  </div>

                  <div class="menu-item-container grid gap-3">
                    <a
                      href="/dashboard"
                      class="link-container nav-item p-2 text-start"
                      >Dashboard</a
                    >

                    <a
                      href="/wallets"
                      class="link-container nav-item p-2 text-start"
                      >Wallets</a
                    >
                  </div>

                  <div class="menu-item-container grid gap-3">
                    <div
                      class="nav-item flex-container justify-center items-end"
                    >
                      ${this.authenticated === true
                        ? html`
                            <a
                              id="logoutBtn"
                              class=""
                              @click=${this.logOut}
                              part="button"
                            >
                              ${logoutButtonText}
                            </a>
                          `
                        : html`
                            <a
                              id="loginBtn"
                              class=""
                              @click=${this.logIn}
                              part="button"
                            >
                              ${loginButtonText}
                            </a>
                          `}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div id="app-core" class="app-core items-center justify-between gap-5">
          <div class="flex ml-2">
            <label class="text-sm">
              Build Version: ${this.currentBuildVersion}
            </label>
          </div>

          <div id="top-links active-link" class="flex items-center gap-2">
            <a
              for="site navigation map"
              class="flex items-center gap-1 rounded-md bg-yellow-300 p-2"
              @click=${this.handleBreadcrumbClick}
            >
              <img
                class=""
                src=${locationIcon}
                alt="kebab-icon"
                height="16"
                width="16"
              />
            </a>
            <a
              href=${this.topLinkHref}
              class="nav-item ${this.topLinkHref === window.location.pathname
                ? "active"
                : ""}"
              >${this.topLinkTxet}</a
            >
          </div>
        </div>

        <div
          class="floating-card w-72 rounded-md ${this.isOpen
            ? "visible"
            : "hidden"}"
        ></div>
      </header>
    `;
  }

  handleBreadcrumbClick() {
    const breadcrumb = this.topLinkTxet;
    const currentPath = window.location.pathname;

    const breadcrumbAnchor = this.shadowRoot.querySelector(
      'a[for="site navigation map"]'
    );

    const rect = breadcrumbAnchor.getBoundingClientRect();

    const floatingCard = this.shadowRoot.querySelector(".floating-card");
    floatingCard.innerHTML = `
    <p class="bg-transparent text-white">${breadcrumb}: ${currentPath}</p>
  `;

    const floatingCardTop = rect.top - floatingCard.offsetHeight - -50;
    const floatingCardLeft = rect.left;

    floatingCard.style.top = `${floatingCardTop}px`;
    floatingCard.style.left = `auto`;
    floatingCard.style.right = `10px`;

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      setTimeout(() => {
        this.isOpen = false;
      }, 3000);
    }
  }

  static styles = [
    globalSemanticCSS,
    TWStyles,
    css`
      /* Add this CSS to your existing styles */
      .floating-card {
        position: fixed;
        background-color: #0000003b;
        padding: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        transition: opacity 0.3s ease-in-out;
      }
      .visible {
        display: block; /* show the card when the 'isOpen' property is true */
      }

      .hidden {
        display: none; /* hide the card when the 'isOpen' property is false */
      }

      /* Reset and Common Styles */
      :host {
        display: block;
      }

      .connect-wallet {
        background-color: #4c82af; /* or any other color code from the options */
        color: #ffffff; /* text color */

        padding: 7.5px;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
        display: block;
        opacity: 1;
        transition: color 0.3s, background-color 0.3s;
      }

      .connect-wallet:hover {
        color: #2980b9;
        background-color: #b3b3b32a;
      }

      .connect-wallet.active {
        color: #2980b9;
        background-color: #b3b3b32a;
        border-radius: 5px;
      }

      /* Header Styles */
      .header,
      .app-core {
        display: flex;
        align-items: center;
        padding: 1rem 0.5rem 1rem 0.5rem;
        padding-bottom: 0;
      }

      /* App Links Container */
      .app-links {
        display: flex;
        margin: 0;
        max-width: 800px;
      }

      /* App Core Styles */
      .app-core {
        font-size: 12px;
        color: #555;
      }

      /* Toggle Menu Icon */
      .toggle-menu-icon {
        color: #555;
        background-color: #fff;
        display: block;
        padding: 6px;
        width: 34px;
        height: 34px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
      }

      /* Button Styles */
      .button {
        color: #555;
        padding: 10px 20px;
        border: 1px solid #3498db;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
      }

      /* Button Hover */
      .button:hover {
        background-color: #2980b9;
        color: #fff;
      }

      /* Nav Icon Link Styles */
      .nav-icon-link {
        display: block;
      }

      /* Nav Icon Styles */
      .nav-icon {
        color: #555;
        font-size: 18px;
        padding: auto;
        border-radius: 50px;
        background-color: #fff;
        display: flex;
        width: 18px;
        height: 18px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
      }

      .nav-icon-link .nav-icon {
        color: #2980b9;
        background-color: #b3b3b32a;
        border-radius: 5px;
      }

      /* Nav Icon Text Styles */
      .nav-icon-text {
        position: relative;
        opacity: 1;
        padding: 9px;
        padding-left: 13px;
        padding-right: 0;
        margin-right: 5px;
        font-size: 16px;
        color: #555;
        z-index: 0;
        min-width: fit-content;
        height: fit-content;
        white-space: nowrap;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s, background-color 0.3s;
      }

      /* Link Container Styles */
      .link-container {
        width: 100%;
        display: flex;
        align-items: center;
      }

      .link-container > * {
        display: flex;
        align-items: center;
      }

      /* Toggle Menu Icon Styles */
      .toggle-menu-icon {
        font-size: 24px;
        cursor: pointer;
      }

      /* Menu Modal Styles */
      .menu-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 999;
      }

      .menu-modal.active {
        display: flex;
      }

      .close-modal {
        background-color: transparent;
      }

      /* Close Button Styles */
      .close-button {
        background-color: #fff;
        cursor: pointer;
      }

      /* Menu Container Styles */
      .menu-container {
        display: block;
        background-color: #f9f9f9;
        border-radius: 5px;
        position: absolute;
        right: 0;
        width: 50%;
        height: 100%;
        z-index: 1;
      }

      /* Menu Item Container Styles */
      .menu-item-container {
        margin-top: 0.5rem;
        padding: 9px;
        transition: background-color 0.3s;
      }
    `,
  ];
}

customElements.define("header-view", HeaderView);
