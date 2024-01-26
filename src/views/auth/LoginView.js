import { html, css, LitElement } from "lit";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";
import { auth } from "../../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { routePathAfterLogin } from "../../module/config/app-config";

class LoginView extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Add your CSS styles here */
      :host {
        width: 100%;
      }
    `,
  ];

  constructor() {
    super();
    this.showPassword = false; // Initialize the state of password visibility
  }

  async handleLogin(event) {
    event.preventDefault();
    const email = this.shadowRoot.querySelector("#login-email").value;
    const password = this.shadowRoot.querySelector("#login-password").value;
    try {
      await this.login(email, password); // Update this line
    } catch (error) {
      console.error("Login failed:", error.message);
      // Show an error message to the user (e.g., display a message on the UI)
    }
  }

  // Function for user login
  async login(email, password) {
    let userId; // Declare userId here

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      userId = userCredential.user.uid; // Store the user ID
      // console.log("Login successful");
      window.location.href = routePathAfterLogin;
      return userCredential.user;
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const passwordInput = this.shadowRoot.querySelector("#login-password");
    passwordInput.type = this.showPassword ? "text" : "password";
  }

  render() {
    return html`
      <form id="login-form" @submit=${this.handleLogin}>
        <!-- Login form fields -->
        <div class="form">
          <div class="form-item">
            <label for="email">Email</label>
            <input
              type="email"
              aria-label="email"
              id="login-email"
              placeholder=""
              required
            />
          </div>

          <div class="form-item">
            <label for="password">Password</label>
            <input
              type="password"
              aria-label="password"
              id="login-password"
              placeholder=""
              required
            />
          </div>

          <div class="check-container">
            <input
              type="checkbox"
              id="show-password"
              class="checkbox"
              @change=${this.togglePasswordVisibility}
            />
            <label for="show-password">Show password</label>
          </div>
          <button type="submit" class="form-button rounded-md">Login</button>
        </div>
      </form>
    `;
  }
}

customElements.define("login-view", LoginView);
