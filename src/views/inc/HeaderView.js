import { LitElement, html, css } from "lit";
import appIcon, {
  appLoginRoute,
  appMainPath,
  appName,
  loginButtonText,
  logoutButtonText,
} from "../../module/config/app-config";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";

import "../../css/ToggleTheme";
import { router } from "../../core/router";

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
    this.hideDynamicLink = window.innerWidth <= 768;
    this.authenticated = router.checkUserAuthAccess().then((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  connectedCallback() {
    super.connectedCallback();

    const themeManager = document.querySelector("app-manager");
    if (themeManager) {
      this.darkMode = themeManager.darkMode;
      themeManager.addEventListener(
        "theme-updated",
        this.handleThemeUpdate.bind(this)
      );
    }
  }

  handleThemeUpdate(event) {
    this.darkMode = event.detail;
  }

  toggleMenu() {
    const menuContainer = this.shadowRoot.getElementById("menu-modal");
    menuContainer.classList.toggle("active");
  }

  isLinkActive(linkPath) {
    return window.location.pathname === linkPath;
  }

  async updated() {
    requestAnimationFrame(() => {
      this.requestUpdate();
    });
  }

  render() {
    return html`
      <div class="flex items-center h-11 nav-utils">
        <!-- -->
        <div class="flex gap-3 items-center rounded overflow-hidden h-10">
          <!-- header logo -->
          <a href="${appMainPath}" class="px-3 py-2 flex items-center">
            <img
              src="${appIcon}"
              class="w-10 h-10 mr-3 rounded"
              alt="KEEPISS Logo"
            />
            <h1 class="text-xl font-bold tracking-normal leading-snug">
              KEEPISS
            </h1>
          </a>
        </div>

        <div class="flex items-center gap-3">
          <toggle-theme></toggle-theme>
          <!-- <button
            @click=${this.toggleUtilsMenu}
            class=" flex justify-center items-center"
            aria-label="Toggle Menu"
            role="button"
            tabindex="0"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="16"
              fill="currentColor"
              class=""
              style="--color: var(--primary-icon)"
            >
              <circle cx="12" cy="12" r="2.5"></circle>
              <circle cx="19.5" cy="12" r="2.5"></circle>
              <circle cx="4.5" cy="12" r="2.5"></circle>
            </svg>
          </button> -->
        </div>
      </div>

      <nav class="app-links text-md font-semibold">
        <ul class="link-container flex gap-2 justify-between">
          ${!this.hideDynamicLink
            ? html`
                <li id="dynamic-links" class="flex">
                  <a
                    href="/"
                    class="nav-item ${window.location.pathname === "/"
                      ? "active"
                      : ""}"
                    >Home</a
                  >
                </li>
                <!-- <li id="dynamic-links" class="flex">
                      <a
                        href="/airdrops"
                        class="nav-item ${window.location.pathname ===
                "/airdrops"
                  ? "active"
                  : ""}"
                        >Airdrops</a
                      >
                    </li> -->
                <li id="dynamic-links" class="flex">
                  <a
                    href="/guides"
                    class="nav-item ${window.location.pathname === "/guides"
                      ? "active"
                      : ""}"
                    >Guides</a
                  >
                </li>
                <!-- 
                    <li id="dynamic-links" class="flex">
                      <a
                        href="/docs"
                        class="nav-item ${window.location.pathname === "/docs"
                  ? "active"
                  : ""}"
                        >Docs</a
                      >
                    </li> -->

                <!-- <li id="dynamic-links" class="flex">
                      <a
                        href="/reports"
                        class="nav-item ${window.location.pathname ===
                "/reports"
                  ? "active"
                  : ""}"
                        >Reports</a
                      >
                    </li> -->
                <!-- <li id="dynamic-links" class="flex">
                      <a
                        href="/dashboard"
                        class="nav-item ${window.location.pathname ===
                "/dashboard"
                  ? "active"
                  : ""}"
                        >Dashboard</a
                      >
                    </li> -->
                <!-- <li id="dynamic-links" class="flex">
                      <a
                        href="/wallets"
                        class="nav-item ${window.location.pathname ===
                "/wallets"
                  ? "active"
                  : ""}"
                        >Wallets</a
                      >
                    </li> -->
              `
            : ""}
        </ul>

        <div id="menu-modal" class="menu-modal">
          <!--  -->
          <div
            @click=${this.toggleMenu}
            class="w-full h-full close-modal"
            aria-label="Close Menu"
            tabindex="0"
            role="button"
          >
            <div class="h-16"></div>
          </div>
          <!--  -->
          <div
            id="menu-container "
            @click=${this.toggleMenu}
            class="menu-container  ${this.darkMode ? "dark" : "light"}"
          >
            <div class="h-16"></div>
            <div class="menu-item-container grid gap-3">
              <a
                href="/"
                class="link-container nav-item p-2 text-start ${window.location
                  .pathname === "/"
                  ? "active"
                  : ""}"
                >Home</a
              >
              <!-- <a
                      href="/airdrops"
                      class="link-container nav-item p-2 text-start ${window
                .location.pathname === "/airdrops"
                ? "active"
                : ""}"
                      >Airdrops</a
                    > -->

              <a
                href="/guides"
                class="link-container nav-item p-2 text-start ${window.location
                  .pathname === "/guides"
                  ? "active"
                  : ""}"
                >Guides</a
              >

              <!-- <a
                      href="/docs"
                      class="link-container nav-item p-2 text-start ${window
                .location.pathname === "/docs"
                ? "active"
                : ""}"
                      >Docs</a
                    > -->

              <!-- <a
                    href="/reports"
                    class="link-container nav-item p-2 text-start ${window
                .location.pathname === "/reports"
                ? "active"
                : ""}"
                    >Reports</a
                  > -->
            </div>

            <!-- <div class="menu-item-container grid gap-3">
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
                  </div> -->

            <div class="menu-item-container grid gap-3">
              <div class="nav-item flex-container justify-center items-end">
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
      </nav>

      <div id="dynamic-links" class="flex md:hidden lg:hidden">
        <button
          @click=${this.toggleMenu}
          class="nav-icon-link nav-item flex items-center"
          aria-label="Toggle Menu"
          role="button"
          tabindex="0"
        >
          <svg height="24" width="24" fill="currentcolor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
      </div>

      <div
        class="floating-card w-72 rounded-md ${this.isOpen
          ? "visible"
          : "hidden"}"
      ></div>
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

      .nav-utils {
        display: grid;
        grid-template-columns: repeat(
          2,
          1fr
        ); /* Adjust the number of columns as needed */
        gap: 8px; /* Adjust the gap between circles as needed */
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

      .color-mode-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: transparent;
        cursor: pointer;
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
