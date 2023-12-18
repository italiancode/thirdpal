import { html, css, LitElement } from "lit";
import "./auth/LoginView";
import "./auth/RegistrationView";

import "../components/SocialLinks";

import appLogo, { appMainPath } from "../module/config/app-config";

import globalSemanticCSS from "../css/global-semanticCSS";
import { TWStyles } from "../css/twlit";

class AuthView extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      :host {
        display: block; /* Add padding to the main content */
        width: 100%;
        height: fit-content;
      }
      /* Auth Container Styles */
      .auth-container {
        display: flex;
        flex-direction: row; /* Flex direction for responsiveness */
        align-items: center;
        justify-content: start;
        height: 100%;
        padding: 0 auto;
      }

      /* Banner Container Styles */
      .banner-container {
        display: grid;
        place-items: center;
        text-align: center;
        width: 100%;
        max-width: 50%;
        height: 100%;
        background: transparent;
      }

      /* Form Container Styles */
      .form-container {
        display: grid;
        place-items: center;
        width: 100%;
        max-width: 50%;
        height: 100%;
      }

      /* Form Card Styles */
      .form-card {
        width: 100%;
        max-width: 70%;
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
        display: flex;
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
        .auth-container {
          padding: 0 5%;
        }
      }

      /* Meta Description Container Styles */
      .meta-desc-container {
        text-align: center;
        margin-top: auto;
      }

      /* #app-sub-header {
        color: #354955;
      } */

      #meta-description {
        font-size: 16px;
        margin-top: 15px;
        line-height: 1.5;
      }
    `,
  ];

  static properties = {
    currentView: { type: String },
  };

  constructor() {
    super();
    this.currentView = "login";
  }

  toggleView() {
    this.currentView = this.currentView === "login" ? "registration" : "login";
  }

  render() {
    return html`
      <div class="auth-container">
        <div class="banner-container">
          <div class="logo-slogan-container">
            <app-logo src=${appLogo} alt="Token Mama Logo"></app-logo>

            <h2 id="app-sub-header" class="app-sub-header">
              TokenMama: Unleash the Power of Authentic Airdrops
            </h2>

            <social-links></social-links>

            <div class="meta-desc-container">
              <p id="meta-description">
                Empowering Authentic Crypto Users:
                <a href=${appMainPath}>TokenMama</a> Ensures Genuine Airdrops.
              </p>
            </div>
          </div>
        </div>
        <div class="form-container">
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
              <a @click=${this.toggleView}>
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
}

customElements.define("auth-view", AuthView);
