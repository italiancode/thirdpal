import { LitElement, html, css } from "lit";
import { doc, getDoc } from "firebase/firestore";
import { isAuthenticated, logout } from "../../utils/authUtils";
import {
  appLoginRoute,
  appMainPath,
  loginButtonText,
  logoutButtonText,
} from "../../module/config/app-config";
import { firestore_db } from "../../../utils/firebase";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";

import logo from "../../../public/tm.webp";

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
    this.authenticated = false;
    this.hideDynamicLink = window.innerWidth <= 768;
    this.fetchBuildVersion();

    // Bind 'this' to the event listener function
    this.handlePopState = this.handlePopState.bind(this);

    // Add event listener for 'popstate' when the component is constructed
    window.addEventListener("popstate", this.handlePopState);
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

  render() {
    return html`
      <header>
        <div class="header">
          <div class="flex items-center gap-3">
            <a
              href="${appMainPath}"
              class="rounded-full overflow-hidden border-4"
            >
              <img src="${logo}" class="w-9" />
            </a>

            <a href="/faqs" class="nav-icon-link nav-item flex items-center">
              <span
                class="nav-icon bg-gray-300 rounded-full p-2 text-white font-bold text-lg"
                >?</span
              >
            </a>
          </div>

          <nav class="app-links font-bold text-md">
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

              <li id="dynamic-links" class="flex">
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
              </li>
            </ul>

            <div id="menu-modal" class="menu-modal">
              <!--  -->
              <div
                @click=${this.toggleMenu}
                class="w-full h-full close-modal"
              ></div>
              <!--  -->
              <div
                id="menu-container"
                @click=${this.toggleMenu}
                class="menu-container"
              >
                <div class="grid">
                  <div class="menu-item-container grid gap-3">
                    <a
                      href="/airdrops"
                      class="link-container nav-item p-1 text-start"
                      >Airdrops</a
                    >

                    <a
                      href="/blogs"
                      class="link-container nav-item p-1 text-start"
                      >Blogs</a
                    >

                    <a
                      href="/docs"
                      class="link-container nav-item p-1 text-start"
                      >Docs</a
                    >

                    <a
                      href="/reports"
                      class="link-container nav-item p-1 text-start"
                      >Reports</a
                    >
                  </div>

                  <div class="menu-item-container grid gap-3">
                    <a
                      href="/dashboard"
                      class="link-container nav-item p-1 text-start"
                      >Dashboard</a
                    >

                    <a
                      href="/wallets"
                      class="link-container nav-item p-1 text-start"
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

        <div id="app-core" class="app-core">
          <div>Build Version: ${this.currentBuildVersion}</div>

          <div id="top-links active-link" class="flex">
            <a
              href=${this.topLinkHref}
              class="nav-item ${this.topLinkHref === window.location.pathname
                ? "active"
                : ""}"
              >${this.topLinkTxet}</a
            >
          </div>
        </div>
      </header>
    `;
  }

  static styles = [
    globalSemanticCSS,
    TWStyles,
    css`
      /* Reset and Common Styles */
      :host {
        display: block;
      }

      /* Header Styles */
      .header,
      .app-core {
        display: flex;
        justify-content: space-between;
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
        margin: auto 0.5rem auto 0.5rem;
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

      /* Navigation Item Styles */
      .nav-item {
        padding: 7.5px;
        text-decoration: none;
        cursor: pointer;
        display: block;
        opacity: 1;
        transition: color 0.3s, background-color 0.3s;
      }

      .nav-item:hover,
      .toggle-menu-icon:hover,
      .nav-icon-link:hover .nav-icon {
        color: #2980b9;
        background-color: #b3b3b32a;
        border-radius: 5px;
      }

      .nav-item.active {
        color: #2980b9;
        background-color: #b3b3b32a;
        border-radius: 5px;
      }
    `,
  ];
}

customElements.define("header-view", HeaderView);
