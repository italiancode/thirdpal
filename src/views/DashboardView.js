import { html, css, LitElement } from "lit";
import { logout } from "../utils/authUtils";
import globalSemanticCSS from "../css/global-semanticCSS";
import {
  getFirestoreUserData,
  updateUserDataInFirestore,
} from "../utils/firestoreUtils";

class DashboardView extends LitElement {
  static styles = [
    globalSemanticCSS,
    css`
      /* Add your CSS styles here to create a bank app-like layout */
      :host {
        padding: 0;
      }

      .header {
        background-color: #f5f5f5;
        padding: 20px;
        border-bottom: 1px solid #ddd;
        text-align: center;
      }

      .wallet-container {
        margin-top: 20px;
        text-align: center;
      }

      .wallet-input {
        margin-bottom: 10px;
      }

      .wallet-address {
        font-size: 18px;
        font-weight: bold;
      }

      button {
        padding: 8px 20px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #45a049;
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
    this.walletInput = "";
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUserData();
  }

  async fetchUserData() {
    const userData = await getFirestoreUserData();

    if (userData) {
      this.walletAddress = userData.walletAddress;
      this.userEmail = userData.email;
      this.userId = userData.userId;
    }
  }

  async updateWalletAddress() {
    if (this.walletInput.trim() !== "") {
      this.walletAddress = this.walletInput.trim();
      await updateUserDataInFirestore(
        this.userId,
        "walletAddress",
        this.walletAddress
      );
      this.walletInput = "";
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
          <button @click=${this.logOut}>Logout</button>
        </div>
        <div class="wallet-container">
          <div class="wallet-input">
            <input
              type="text"
              placeholder="Enter Wallet Address"
              .value=${this.walletInput}
              @input=${(e) => (this.walletInput = e.target.value)}
            />
            <button @click=${this.updateWalletAddress}>Add Wallet</button>
          </div>
          <div class="wallet-address">
            ${this.walletAddress
              ? `Wallet Address: ${this.walletAddress}`
              : "No Wallet Address Found"}
          </div>
        </div>
        <!-- You can add more bank-like features and components here -->
      </div>
    `;
  }
}

customElements.define("dashboard-view", DashboardView);
