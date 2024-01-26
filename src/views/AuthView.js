import { html, css, LitElement } from "lit";

import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { appMainPath } from "../module/config/app-config";

import "./auth/LoginView";
import "./auth/RegistrationView";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";

class AuthView extends LitElement {
  static properties = {
    currentView: { type: String },
    authenticated: { type: Boolean },
    loading: { type: Boolean },
  };

  constructor() {
    super();
    this.currentView = "login";
    this.authenticated = false;
    this.checkUserAuthAccess();
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

  toggleView() {
    this.currentView = this.currentView === "login" ? "registration" : "login";
  }

  closeButtonClick() {
    if (this.authenticated) {
      window.location.href = "/dashboard"; // Redirect to dashboard if authenticated
    } else {
      const formContainer = this.shadowRoot.querySelector(".form-container");
      const authView = this.shadowRoot.querySelector("auth-view");

      // Toggle the class on the form container
      formContainer.classList.toggle("hidden");

      // If the form container is becoming hidden, remove the auth-view element
      if (formContainer.classList.contains("hidden")) {
        authView.remove();
      } else {
        // If the form container is not hidden, append the auth-view element back
        formContainer.appendChild(authView);
      }
    }
  }

  render() {
    return html`
      <div class="auth-container gap-5 mt-5">
        <div class="form-container p-6">
          <div class="flex items-center justify-end w-full p-2">
            <button
              class="close-btn px-2 text-3xl border-solid border-4 rounded-full"
              @click=${this.closeButtonClick}
            >
              X
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
      /* Auth Container Styles */
      .auth-container {
        display: flex;
        flex-direction: row; /* Flex direction for responsiveness */
        align-items: center;
        justify-content: center;
        height: 70%;
        padding: 0 auto;
      }

      /* Form Container Styles */
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
        background-color: rgba(
          255,
          255,
          255,
          0.9
        ); /* Semi-transparent background */
        z-index: 9999; /* Ensure it's on top of other elements */
      }
      /* Form Card Styles */
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

      /* Switch Container Styles */
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

      /* Media Query for Small Screens */
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

      /* Meta Description Container Styles */
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
