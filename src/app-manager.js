import { LitElement, css, html } from "lit";
import globalSemanticCSS from "./css/global-semanticCSS";
import { TWStyles } from "./css/twlit";
import { appMainPath, appName } from "./module/config/app-config";

import "./components/RIF/ResponsiveImageFrame";

import "./css/styles.css";

class AppManager extends LitElement {
  static styles = [
    globalSemanticCSS,
    TWStyles,
    css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto; /* Header, Main Content, Footer */
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color: transparent;
      }

      header {
        grid-row: 1;
        position: relative;
       
        white-space: nowrap;
        z-index: 999;
      }

      .header-shadow {
        box-shadow: 0px 2px 5px rgba(59, 130, 231, 0.1);
      }

      main {
        grid-row: 2;

        padding: 16px auto;
        display: block;
        position: "";
        width: 100%;
        height: auto;
        min-height: 100%;
        overflow-y: auto;

        /* Hide the scrollbar */
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: transparent transparent; /* For Firefox */

        /* For WebKit-based browsers (Chrome, Safari) */
        &::-webkit-scrollbar {
          width: 12px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: transparent;
        }
      }

      footer {
        grid-row: 3;

        padding: 16px;
        margin: 0;
        text-align: center;

        height: auto;
        margin-top: auto; /* Adjust the margin-top to take up remaining space */
      }
    `,
  ];

  static properties = {
    darkMode: { type: Boolean },
  };

  constructor() {
    super();
    this.header = () => import("./views/inc/HeaderView");
    const storedMode = localStorage.getItem("theme");
    this.darkMode = storedMode
      ? storedMode === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  setTheme(darkMode) {
    this.darkMode = darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    this.dispatchEvent(new CustomEvent("theme-updated", { detail: darkMode }));
  }

  firstUpdated() {
    import("./core/router");
  }

  connectedCallback() {
    super.connectedCallback();
  }

  connectedCallback() {
    super.connectedCallback();

    this.header();
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

  render() {
    return html` <div class="h-full min-h-full ">
      <header class="">
        <header-view
          class="header flex justify-between items-center h-16 w-full p-3 fixed header-shadow ${this
            .darkMode
            ? "dark"
            : "light"}"
        >
        </header-view>
      </header>

      <main class="mt-16 ${this.darkMode ? "dark" : "light"}">
        <slot> </slot>
      </main>

      <footer class="grid gap-3 ${this.darkMode ? "dark" : "light"}">
        <div class="flex justify-between items-center">
          <a href=${appMainPath}>${appName}</a>

          <div class="flex gap-5 justify-start items-center">
            <label> 2024</label>
          </div>
        </div>
      </footer>
    </div>`;
  }
}

customElements.define("app-manager", AppManager);
