// src/views/RegistrationView.js
import { html, css, LitElement } from "lit";

import { auth } from "../../../utils/firebase";

import { storeUserDataInFirestore } from "../../utils/firestoreUtils";
import { routePathAfterRegitration } from "../../module/config/app-config";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";
import { sendEmailVerification } from "firebase/auth";

class RegistrationView extends LitElement {
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

  async handleRegistration(event) {
    event.preventDefault();
    const email = this.shadowRoot.querySelector("#register-email").value;
    const password = this.shadowRoot.querySelector("#register-password").value;
    const walletAddress = "";
    const sendEmailVerification = this.shadowRoot.querySelector(
      "#send-email-verification"
    ).checked; // Check if the checkbox is checked

    try {
      // Register the user with email and password
      await register(email, password, sendEmailVerification);
      const user = auth.currentUser; // Get the currently authenticated user

      await storeUserDataInFirestore(user);

      window.location.href = routePathAfterRegitration;

      console.log(user);

      // Optionally, you can also perform any other actions after registration
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error);
      // Display an error message to the user
    }
  }

  // Function for user registration
  async register(email, password, sendEmailVerification) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (sendEmailVerification) {
        await sendEmailVerificationToUser(userCredential.user);
      }

      // console.log("Registration successful");

      return userCredential.user;
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  }

  // Function to send email verification
  async sendEmailVerificationToUser(user) {
    try {
      await sendEmailVerification(user);
      // console.log("Verification email sent to " + user.email);
    } catch (error) {
      console.error("Failed to send verification email:", error.message);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const passwordInput = this.shadowRoot.querySelector("#register-password");
    passwordInput.type = this.showPassword ? "text" : "password";
  }

  render() {
    return html`
      <div>
        <form id="registration-form" @submit=${this.handleRegistration}>
          <div class="form">
            <!-- <div class="form-item">
              <input type="text" id="wallet-address" placeholder="" />
              <label for="wallet">Wallet Address (optional)</label>
            </div> -->

            <div class="form-item">
              <label for="email">Email</label>
              <input
                type="email"
                aria-label="email"
                id="register-email"
                placeholder=""
                required
              />
            </div>

            <!-- Add the checkbox for email verification -->
            <div class="check-container">
              <input
                type="checkbox"
                id="send-email-verification"
                class="checkbox"
              />
              <label for="send-email-verification"
                >Send email verification</label
              >
            </div>

            <div class="form-item">
              <label for="password">Password</label>
              <input
                type="password"
                aria-label="password"
                id="register-password"
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

            <button type="submit" class="form-button rounded-md">
              Register
            </button>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define("registration-view", RegistrationView);
