import { LitElement, html, css } from "lit";
import appLogo, {
  appLoginRoute,
  appMainPath,
  loginButtonText,
  logoutButtonText,
} from "../../module/config/app-config";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";

// import { web3modal } from "../../module/Web3/web3-config";
// import { getAccount } from "@wagmi/core";
import { auth } from "../../../utils/firebase";
import { isAuthenticated } from "../../utils/authUtils";

class HeaderView extends LitElement {
  static properties = {
    authenticated: { type: Boolean },
    updateScheduled: { type: Boolean },
    topLinkTxet: { type: String },
    topLinkHref: { type: String },
    isOpen: false,
  };

  constructor() {
    super();
    this.currentPath = "";

    this.wallet = "";

    this.hideDynamicLink = window.innerWidth <= 768;
    this.authenticated = false;
    this.checkUserAuthAccess();
  }

  toggleMenu() {
    const menuContainer = this.shadowRoot.getElementById("menu-modal");
    menuContainer.classList.toggle("active");
  }

  async checkUserAuthAccess() {
    this.authenticated = await isAuthenticated();
    console.log(this.authenticated);
  }

  async logout() {
    await auth.signOut();
    window.location.href = appMainPath;
  }

  logOut() {
    return this.logout(); // Correcting the function name to "this.logout()"
  }

  logIn() {
    window.location.href = appLoginRoute;
  }

  isLinkActive(linkPath) {
    return window.location.pathname === linkPath;
  }

  // async triggerConnectWalletModal() {
  //   if (web3modal) {
  //     try {
  //       await web3modal.openModal(); // Use await to open the wallet modal
  //       await this.checkWalletConnectionState();
  //     } catch (error) {
  //       console.error("Error connecting wallet:", error);
  //     }
  //   }
  // }

  // async checkWalletConnectionState() {
  //   const wallet = getAccount();

  //   // Check if the wallet instance exists and is connected
  //   if (wallet.status === "connected" || wallet.status === "reconnecting") {
  //     try {
  //       // Update the Connect Wallet button based on the wallet status
  //       await this.updateConnectWalletButton();
  //     } catch (error) {
  //       console.error("Error updating Connect Wallet button:", error);
  //     }
  //   } else if (wallet.status === "connecting") {
  //     await this.waitForConnection();
  //   }
  // }

  // async waitForConnection() {
  //   const maxAttempts = 5; // Set a maximum number of attempts to prevent infinite looping
  //   let attempts = 0;

  //   while (attempts < maxAttempts) {
  //     await this.delay(11000); // Wait for a brief period before rechecking the wallet status

  //     const wallet = getAccount();

  //     if (wallet.status !== "connecting") {
  //       break;
  //     }

  //     attempts++;
  //   }

  //   // After the loop, check the final status
  //   const wallet = getAccount();
  //   if (wallet.status === "connecting") {
  //     // Handle the situation where the wallet is still connecting after max attempts
  //     console.log("Wallet is still connecting after maximum attempts.");
  //   } else {
  //     // Wallet status changed from "connecting", update the UI or take necessary actions
  //     this.updateScheduled = true;
  //   }
  // }

  // // Function to create a delay using Promises
  // delay(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  // async updateConnectWalletButton() {
  //   const wallet = getAccount();
  //   try {
  //     const connectWalletButton =
  //       this.shadowRoot.querySelector(".connect-wallet");

  //     if (wallet.status === "connected" || wallet.status === "reconnecting") {
  //       // Display a partial wallet address in the button text
  //       const partialAddress = `${wallet.address.substr(
  //         0,
  //         4
  //       )}....${wallet.address.substr(-4)}`;
  //       connectWalletButton.textContent = partialAddress;
  //     } else if (wallet.status === "disconnected") {
  //       // If the wallet is disconnected, display "Connect" in the button text
  //       connectWalletButton.textContent = "Connect";
  //     }
  //   } catch (error) {
  //     console.error("Error updating Connect Wallet button:", error);
  //   }
  // }

  render() {
    return html`
      <header
        class="header flex justify-between items-center h-16 w-full bg-white border-0 border-b p-3 fixed"
      >
        <div class="flex items-center gap-2 h-11">
          <!-- -->
          <div class="flex gap-3 rounded-full border-4 overflow-hidden">
            <a href="${appMainPath}" class="p-1 flex items-center">
              <responsive-image-frame
                mainSrc="${appLogo}"
                alt="Token Mama icon logo"
                fallbackLabel="this is our website logo"
                type="optimized"
                class="w-9 h-9 object-fill"
              >
              </responsive-image-frame>
            </a>
          </div>

          <!-- <div class="flex gap-3 h-12 rounded-full border-4 overflow-hidden">
            <button
              @click=${this.triggerConnectWalletModal}
              class="connect-wallet p-2 px-3 rounded-full shadow text-center text-sm font-medium"
              aria-label="Connect Wallet"
              role="button"
              tabindex="0"
            >
              Connect
            </button>
          </div> -->

          <a href="/faqs" class="nav-icon-link nav-item flex items-center">
            <span
              class="nav-icon bg-gray-300 rounded-full p-2 text-white font-bold text-lg"
              >?</span
            >
          </a>
        </div>

        <div class="flex items-center gap-2 h-11">
          <nav class="app-links text-md font-semibold">
            <ul class="link-container flex gap-2 justify-between">
              ${!this.hideDynamicLink
                ? html`
                    <li id="dynamic-links" class="flex">
                      <a
                        href="/airdrops"
                        class="nav-item ${window.location.pathname ===
                        "/airdrops"
                          ? "active"
                          : ""}"
                        >Airdrops</a
                      >
                    </li>
                    <li id="dynamic-links" class="flex">
                      <a
                        href="/blogs"
                        class="nav-item ${window.location.pathname === "/blogs"
                          ? "active"
                          : ""}"
                        >Blogs</a
                      >
                    </li>
                    <li id="dynamic-links" class="flex">
                      <a
                        href="/docs"
                        class="nav-item ${window.location.pathname === "/docs"
                          ? "active"
                          : ""}"
                        >Docs</a
                      >
                    </li>
                    <li id="dynamic-links" class="flex">
                      <a
                        href="/reports"
                        class="nav-item ${window.location.pathname ===
                        "/reports"
                          ? "active"
                          : ""}"
                        >Reports</a
                      >
                    </li>
                    <li id="dynamic-links" class="flex">
                      <a
                        href="/dashboard"
                        class="nav-item ${window.location.pathname ===
                        "/dashboard"
                          ? "active"
                          : ""}"
                        >Dashboard</a
                      >
                    </li>
                    <li id="dynamic-links" class="flex">
                      <a
                        href="/wallets"
                        class="nav-item ${window.location.pathname ===
                        "/wallets"
                          ? "active"
                          : ""}"
                        >Wallets</a
                      >
                    </li>
                  `
                : ""}
            </ul>

            <div id="dynamic-links" class="flex md:hidden lg:hidden">
              <button
                @click=${this.toggleMenu}
                class="nav-icon-link nav-item flex items-center"
                aria-label="Toggle Menu"
                role="button"
                tabindex="0"
              >
                <svg height="24" width="24" fill="currentcolor">
                  <path
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  ></path>
                </svg>
              </button>
            </div>

            <div id="menu-modal" class="menu-modal ">
              <!--  -->
              <div
                @click=${this.toggleMenu}
                class="w-full h-full close-modal"
                aria-label="Close Menu"
                tabindex="0"
                role="button"
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
                      class="link-container nav-item p-2 text-start ${window
                        .location.pathname === "/airdrops"
                        ? "active"
                        : ""}"
                      >Airdrops</a
                    >

                    <a
                      href="/blogs"
                      class="link-container nav-item p-2 text-start ${window
                        .location.pathname === "/blogs"
                        ? "active"
                        : ""}"
                      >Blogs</a
                    >

                    <a
                      href="/docs"
                      class="link-container nav-item p-2 text-start ${window
                        .location.pathname === "/docs"
                        ? "active"
                        : ""}"
                      >Docs</a
                    >

                    <a
                      href="/reports"
                      class="link-container nav-item p-2 text-start ${window
                        .location.pathname === "/reports"
                        ? "active"
                        : ""}"
                      >Reports</a
                    >
                  </div>

                  <div class="menu-item-container grid gap-3">
                    <a
                      href="/dashboard"
                      class="link-container nav-item p-2 text-start ${window
                        .location.pathname === "/dashboard"
                        ? "active"
                        : ""}"
                      >Dashboard</a
                    >

                    <a
                      href="/wallets"
                      class="link-container nav-item p-2 text-start ${window
                        .location.pathname === "/wallets"
                        ? "active"
                        : ""}"
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

  async updated() {
    // this.pathMapping = {
    //   "/airdrops": { text: "Airdrops", href: "/airdrops" },
    //   "/blogs": { text: "Blogs", href: "/blogs" },
    //   "/docs": { text: "Docs", href: "/docs" },
    //   "/reports": { text: "Reports", href: "/reports" },
    //   "/dashboard": { text: "Dashboard", href: "/dashboard" },
    //   "/wallets": { text: "Wallets", href: "/wallets" },
    // };

    // this.currentPath = window.location.pathname;

    // if (this.currentPath.startsWith("/airdrop/")) {
    //   const parts = this.currentPath.split("/");
    //   const id = parts[2];

    //   this.topLinkTxet = "Airdrop";
    //   this.topLinkHref = `/airdrop/${id}`;
    // } else if (this.currentPath in this.pathMapping) {
    //   this.topLinkTxet = this.pathMapping[this.currentPath].text;
    //   this.topLinkHref = this.pathMapping[this.currentPath].href;
    // } else {
    //   this.topLinkTxet = "Welcome";
    //   this.topLinkHref = "/";
    // }

    // Fetch the wallet status
    this.wallet = getAccount();

    if (
      this.wallet.status === "connected" ||
      this.wallet.status === "disconnected"
    ) {
      await this.updateConnectWalletButton(); // Added 'await' to make sure the update is completed before proceeding
    }

    requestAnimationFrame(() => {
      this.requestUpdate();
    });
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
        background-color: #1b6fb4; /* or any other color code from the options */
        color: #ffffff; /* text color */

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
export default HeaderView;
