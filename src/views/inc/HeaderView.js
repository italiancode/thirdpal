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

import logo from "../../../public/logo.webp";

class HeaderView extends LitElement {
  static properties = {
    currentBuildVersion: { type: String },
    authenticated: { type: Boolean },
    topLinkTxet: { type: String },
    isOpen: false,
  };

  constructor() {
    super();
    this.currentBuildVersion = "Loading...";
    this.authenticated = false;
    this.hideDynamicLink = window.innerWidth <= 768;
    this.topLinkTxet = "Wallets";
    this.topLinkHref = "/dashboard";
    this.fetchBuildVersion();
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

  async logOut() {
    await logout();
    window.location.href = appMainPath;
  }

  logIn() {
    window.location.href = appLoginRoute;
  }

  toggleMenu() {
    const menuContainer = this.shadowRoot.getElementById("menu-modal");
    menuContainer.classList.toggle("active");
  }

  render() {
    return html`
      <header>
        <div class="header">
          <div class="flex items-center gap-3">
            <div class="">
              <a href=${appMainPath} class="">
                <img src=${logo} class="logo" />
              </a>
            </div>

            <div class="link-container">
              <a href="/faqs" class="nav-icon-link nav-item flex items-center">
                <label class="nav-icon-text hidden">FAQs</label>
                <label class="nav-icon">?</label>
              </a>
            </div>
          </div>

          <nav class="app-links font-bold text-md">
            <ul class="link-container flex gap-3 justify-between">
              <li id="dynamic-links" class="flex gap-3">
                ${!this.hideDynamicLink
                  ? html`
                      <div class="link-container">
                        <a href="/home" class="nav-item">Home</a>
                      </div>
                      <div class="link-container">
                        <a href="/reports" class="nav-item">Reports</a>
                      </div>
                    `
                  : ""}
              </li>
              <li id="top-links" class="flex gap-3">
                <div class="link-container">
                  <a href=${this.topLinkHref} class="nav-item"
                    >${this.topLinkTxet}</a
                  >
                </div>
              </li>

              <li>
                <div class="link-container">
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
              </li>
            </ul>

            <div id="menu-modal" class="menu-modal">
              <div id="menu-container" class="menu-container">
                <div class="w-full p-3 flex justify-end bg-blue-500">
                  <div class="w-1/6 link-container p-1">
                    <a
                      href="javascript:void(0);"
                      @click=${this.toggleMenu}
                      class="flex items-center justify-center p-1 m-0 h-full bg-white"
                    >
                      <label class="close-button">X</label>
                    </a>
                  </div>
                </div>

                <div class="grid">
                  <div class="menu-item-container grid gap-3">
                    <div class="link-container nav-item p-1">
                      <a href="/home" class="">Home</a>
                    </div>
                    <div class="link-container nav-item p-1">
                      <a href="/reports" class="">Reports</a>
                    </div>
                    <div class="link-container nav-item p-1">
                      <a href="/faqs" class=""> FAQs </a>
                    </div>
                  </div>

                  <div class="menu-item-container grid gap-3">
                    <div class="link-container nav-item">
                      <a href=${this.topLinkHref} class=""
                        >${this.topLinkTxet}</a
                      >
                    </div>
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
          Build Version: ${this.currentBuildVersion}
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
        font-family: Arial, sans-serif;
      }

      /* Header Styles */
      .header,
      .app-core {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
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
        display: block;
      }

      /* Menu Container Styles */
      .menu-container {
        display: block;
        background-color: #f9f9f9;
        border-radius: 5px;
        position: absolute;
        right: 0;
        width: 50%;
        height: 100vh;
        z-index: 1;
      }

      /* Close Button Styles */
      .close-button {
        background-color: #fff;
        cursor: pointer;
      }

      /* Menu Item Container Styles */
      .menu-item-container {
        margin-top: 0.5rem;
        padding: 9px;
        transition: background-color 0.3s;
      }

      /* Navigation Item Styles */
      .nav-item {
        padding: 9px;
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
    `,
  ];
}

customElements.define("header-view", HeaderView);
