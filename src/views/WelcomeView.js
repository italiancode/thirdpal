import { html, css, LitElement } from "lit";
import { isAuthenticated } from "../utils/authUtils";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { appMainPath } from "../module/config/app-config";

import "./auth/LoginView";
import "./auth/RegistrationView";
import "../components/SocialLinks";

class WelcomeView extends LitElement {
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

  async checkUserAuthAccess() {
    this.authenticated = await isAuthenticated();
  }

  toggleView() {
    this.currentView = this.currentView === "login" ? "registration" : "login";
  }

  enrollButtonClick() {
    if (this.authenticated) {
      window.location.href = "/dashboard"; // Redirect to dashboard if authenticated
    } else {
      const formContainer = this.shadowRoot.querySelector(".form-container");
      formContainer.classList.toggle("fullscreen");
    }
  }

  closeButtonClick() {
    const formContainer = this.shadowRoot.querySelector(".form-container");
    formContainer.classList.remove("fullscreen");
  }

  render() {
    return html`
      <div class="auth-container gap-5 mt-5">
        <div class="banner-container grid ">
          <div class="logo-slogan-container ">
            <div class="flex flex-col justify-start text-start">
              <div
                id="app-sub-header"
                class="app-sub-header w-full text-start mb-9"
              >
                <h2 class="tracking-tighter leading-snug text-5xl font-medium">
                  Empowering authentic crypto users
                </h2>
              </div>

              <div class="mb-12 block font-medium text-base leading-6">
                <span class=""
                  ><h3 class="">
                    <a href=${appMainPath}>TokenMama</a> ensures genuine
                    airdrops: Unleash the power of authentic airdrops
                  </h3></span
                >
              </div>

              <div class="flex items-center gap-5">
                <span>
                  <button
                    class="enroll-btn w-56 nav-item items-center gap-1 rounded-md bg-white border-double border-4 border-gray-300 font-medium p-2 hover:border-solid "
                    @click=${this.enrollButtonClick}
                  >
                    ${this.authenticated ? "Go to Dashboard" : "Enroll Today"}
                  </button>
                </span>
                <social-links></social-links>
              </div>
            </div>
          </div>
        </div>

        <div class="form-container ">
          <div class="flex items-center justify-end w-full p-2">
            <button
              class="close-btn px-2 text-3xl border-solid border-4"
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
      :host {
        display: block; /* Add padding to the main content */
        width: 100%;
        height: 100%;
        align-items: center;
      }
      /* Auth Container Styles */
      .auth-container {
        display: flex;
        flex-direction: row; /* Flex direction for responsiveness */
        align-items: center;
        justify-content: start;
        height: 80%;
        padding: 0 auto;
      }

      /* Banner Container Styles */
      .banner-container {
        place-items: center;
        text-align: center;
        width: 100%;
        max-width: 50%;
        height: 100%;
        background: transparent;
      }

      /* Form Container Styles */
      .form-container {
        display: none; /* Hide by default */
        place-items: center;
        width: 100%;
        max-width: 50%;
        height: 100%;
      }

      .form-container.fullscreen {
        display: block; /* Show in fullscreen */
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

      /* Banner Container Image Styles */
      .banner-container img {
        max-width: 100%;
        height: auto;
      }

      /* Logo Slogan Container Styles */
      .logo-slogan-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 2rem;
      }

      .logo-slogan-container img {
        max-width: 100%;
        height: auto;
      }

      /* Media Query for Small Screens */
      @media (max-width: 935px) {
        .auth-container {
          flex-direction: column;
        }
        .form-card {
          max-width: 90%;
        }
        .banner-container {
          margin-top: 1rem;
        }

        .banner-container,
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

customElements.define("welcome-view", WelcomeView);

export default WelcomeView;
