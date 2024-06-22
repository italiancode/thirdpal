import { html, css, LitElement } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { appMainPath } from "../module/config/app-config";

import "./auth/LoginView";
import "./auth/RegistrationView";
import { router } from "../core/router";

class AuthView extends LitElement {
  static properties = {
    currentView: { type: String },
    authenticated: { type: Boolean },
    loading: { type: Boolean },
  };

  constructor() {
    super();
    this.currentView = "login";
    this.authenticated = router.checkUserAuthAccess().then((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  toggleView() {
    this.currentView = this.currentView === "login" ? "registration" : "login";
  }

  closeButtonClick() {
    const formContainer = this.shadowRoot.querySelector(".form-container");
    const authView = this.closest("auth-view");

    if (formContainer) {
      formContainer.classList.toggle("hidden");

      if (formContainer.classList.contains("hidden") && authView) {
        authView.remove();
      }
    }
  }

  render() {
    return html`
      <div class="auth-container gap-5 mt-5">
        <div class="form-container p-6">
          <div class="flex items-center justify-end w-full p-2">
            <button
              class="close-btn px-2 text-3xl"
              @click=${this.closeButtonClick}
            >
              <svg
                class="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          </div>
          <div class="form-card">
            <h2>${this.currentView === "login" ? "Log in" : "Register"}</h2>
            ${this.currentView === "login"
              ? html`<login-view></login-view>`
              : html`<registration-view></registration-view>`}
            <div class="switch-container">
              <p @click=${this.toggleView}>
                ${this.currentView === "login"
                  ? "Don't have an account? "
                  : "Already have an account? "}
              </p>
              <a @click=${this.toggleView} class="nav-item">
                ${this.currentView === "login"
                  ? "Register here"
                  : "Log in here"}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      .auth-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 70%;
        padding: 0 auto;
      }

      .form-container.hidden {
        display: none;
      }

      .form-container {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 9999;
      }

      .form-card {
        width: 100%;
        max-width: 90%;
        padding: 20px;
        background: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin-top: 1rem;
        margin-bottom: 3rem;
      }

      .form-card h2 {
        font-size: 24px;
        margin: 0 0 20px;
      }

      .switch-container {
        text-align: center;
        display: block;
        justify-content: start;
        gap: auto;
        margin: auto;
        margin-top: 0.75rem;
      }

      .switch-container p {
        margin: 0;
        font-size: 14px;
        text-align: center;
        padding: 0.5rem;
        color: #999;
      }

      .switch-container a {
        padding: 0.4rem;
      }

      .switch-container a:hover {
        color: #0056b3;
      }

      @media (max-width: 935px) {
        .auth-container {
          flex-direction: column;
        }
        .form-card {
          max-width: 90%;
        }

        .form-container {
          max-width: 100%;
        }
      }

      @media (min-width: 935px) {
      }

      .meta-desc-container {
        text-align: center;
        margin-top: auto;
      }

      #meta-description {
        font-size: 16px;
        margin-top: 15px;
        line-height: 1.5;
      }
    `,
  ];
}

customElements.define("auth-view", AuthView);

export default AuthView;
