import { LitElement, html, css } from "lit";
import { getFirestoreUserData } from "../utils/firestoreUtils";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import "../components/AddWallet.js";
import "./inc/overview/Wallets.js";

class WalletView extends LitElement {
  static styles = [TWStyles, globalSemanticCSS, css``];

  static properties = {};

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUserData();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  async fetchUserData() {
    const userData = await getFirestoreUserData();

    if (userData) {
      this.walletAddresses = userData.walletAddresses || [];
      this.userEmail = userData.email;
      this.userId = userData.userId;

      // Once userId is obtained, perform any necessary operations, e.g., updating the wallet address
      // Example:
      // this.updateWalletAddress();
    }
  }

  render() {
    return html`
      <div class="grid gap-3">
        <add-wallet></add-wallet>

        <wallet-overview></wallet-overview>
      </div>
    `;
  }
}

customElements.define("wallet-view", WalletView);
