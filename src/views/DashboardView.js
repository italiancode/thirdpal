// src/views/DashboardView.js
import { html, css, LitElement } from "lit";
import { logout } from "../utils/authUtils";
import globalSemanticCSS from "../css/global-semanticCSS";
import { getFirestoreUserData } from "../utils/firestoreUtils";

class DashboardView extends LitElement {
  static styles = [
    globalSemanticCSS,
    css`
      /* Add your CSS styles here to create a bank app-like layout */
      :host {
        padding: 0;
      }
    `,
  ];

  static properties = {
    walletAddress: { type: String },
    userEmail: { type: String }, // Add property for user email
    userId: { type: String }, // Add property for user ID
  };

  constructor() {
    super();
    this.currentUser = null;
    this.walletAddress = null;
    this.userEmail = null;
    this.userId = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUserData();
  }

  async fetchUserData() {
    const userData = await getFirestoreUserData();

    // console.log(userData);

    if (userData) {
      this.walletAddress = userData.walletAddress;
      this.userEmail = userData.email;
      this.userId = userData.userId;
    }
  }

  async logOut() {
    logout();
    window.location.href = "/";
  }

  render() {
    return html`
      <div class="">
        <div class="header">
          <h2>Welcome to Your TokenMama Dashboard</h2>
          <p>Email: ${this.userEmail}</p>
        </div>
        <div class="">
          <p>Wallet Address: ${this.walletAddress}</p>
        </div>
        <!-- You can add more bank-like features and components here -->
      </div>
    `;
  }
}

customElements.define("dashboard-view", DashboardView);
