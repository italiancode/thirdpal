import { html, css, LitElement } from "lit";
import { TWStyles } from "../css/twlit.js";
import globalSemanticCSS from "../css/global-semanticCSS.js";
import { auth, firestore_db } from "../../utils/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

import TokenAnalyzer from "../components/lit/TokenAnalyzer.js";

class TokenAnalyzerView extends LitElement {
  static properties = {
    authenticated: { type: Boolean },
    posts: { type: Array }, // Add posts property to store fetched data
    loading: { type: Boolean },
    darkMode: { type: Boolean },
  };

  constructor() {
    super();
    this.authenticated = false;
    this.posts = []; // Initialize posts array
    this.loading = true; // Initial loading state
    this.importView = () => import("./AuthView.js");

    const storedMode = localStorage.getItem("theme");
    this.darkMode = storedMode
      ? storedMode === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkUserAuthAccess();
    // ... rest of your logic
  }

  async isAuthenticated() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const authenticated = true;

          // console.log("Is authenticated:", authenticated);

          resolve(authenticated);
        } else {
          const authenticated = false;
          // console.log("Is authenticated:", authenticated);
          resolve(authenticated);
        }
      });
    });
  }

  async checkUserAuthAccess() {
    this.authenticated = await this.isAuthenticated();
  }

  async connectedCallback() {
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

  render() {
    return html`
      <div class="grid h-full">
        <div id="analyzer" class="grid gap-3 mt-3 p-5">
          <token-analyzer></token-analyzer>
        </div>
      </div>
    `;
  }

  //

  static styles = [TWStyles, globalSemanticCSS, css``];
}

customElements.define("token-analyzer-view", TokenAnalyzerView);

// export default TokenAnalyzerView;
