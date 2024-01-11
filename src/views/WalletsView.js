import { LitElement, html, css } from "lit";
import { getFirestoreUserData } from "../utils/firestoreUtils.js";
import { TWStyles } from "../css/twlit.js";
import globalSemanticCSS from "../css/global-semanticCSS.js";

class WalletsView extends LitElement {
  static styles = [TWStyles, globalSemanticCSS, css``];

  static properties = {};

  constructor() {
    super();
    import("../components/AddWallet.js");
    import("../components/Wallets.js");
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

customElements.define("wallets-view", WalletsView);
export default WalletsView;
