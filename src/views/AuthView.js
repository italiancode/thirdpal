import { html, css, LitElement } from "lit";
import "./auth/LoginView";
import "./auth/RegistrationView";

import "../components/SocialLinks";

import appLogo from "../module/config/app-config";

import globalSemanticCSS from "../css/global-semanticCSS";

class AuthView extends LitElement {
  static styles = [
    globalSemanticCSS,
    css`
      /* Auth Container Styles */

      .auth-container {
        display: flex;
        flex-direction: row; /* Flex direction for responsiveness */
        align-items: center;
        justify-content: start;
        height: inherit;
        padding: 0 7%;
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
        max-width: 320px;
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
        color: #0077cc;
        text-decoration: none;
        text-align: center;
        padding: 0.4rem;
        cursor: pointer;
        transition: color 0.3s ease;
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

      .slogan {
        font-size: 26px;
        color: #303030;
        text-align: center;
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

      /* Meta Description Container Styles */

      .meta-desc-container {
        text-align: center;
        margin-top: auto;
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
      <div class="auth">
        <div class="auth-container">
          <div class="banner-container">
            <div class="logo-slogan-container">
              <app-logo src=${appLogo} alt="Token Mama Logo"></app-logo>

              <h2 class="">
                Experience effortless conversions for even the most challenging
                tokens.
              </h2>
              <social-links></social-links>
              <div class="meta-desc-container">
                <p>
                  <a href="/">TokenMama</a> empowers you to effortlessly
                  exchange and convert hard-to-swap tokens and coins across
                  various blockchain networks, putting the power of
                  decentralized finance in your hands.
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
      </div>
    `;
  }
}

customElements.define("auth-view", AuthView);
