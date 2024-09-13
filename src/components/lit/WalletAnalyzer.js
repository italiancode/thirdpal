import { LitElement, html, css } from "lit";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { TWStyles } from "../../css/twlit";

class WalletAnalyzer extends LitElement {
  static properties = {
    address: { type: String },
    walletInfo: { type: Object },
    loading: { type: Boolean },
    error: { type: String },
  };

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      .input-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
      }

      input {
        flex: 1;
        padding: 12px;
        font-size: 16px;
        border: none;
        border-radius: 6px;
        outline: none;
        color: black; /* Set the text color to black */
        background-color: white; /* Optional: set background color for better contrast */
      }

      button {
        padding: 12px;
        font-size: 16px;
        background-color: #85ffb6;
        border: none;
        color: black;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #6bff8a;
      }

      button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .error {
        color: #ff6b6b;
        margin-top: 20px;
      }

      .wallet-info {
        margin-top: 20px;
        padding: 20px;
        background-color: #2d3748;
        border-radius: 8px;
        color: white;
      }

      .wallet-info h4 {
        margin-bottom: 12px;
      }

      .token-holdings,
      .transaction-history {
        margin-top: 20px;
      }

      .token-holdings div,
      .transaction-history div {
        margin-bottom: 10px;
      }

      .loader {
        margin-top: 20px;
        text-align: center;
      }
    `,
  ];

  constructor() {
    super();
    this.address = "";
    this.walletInfo = null;
    this.loading = false;
    this.error = null;
  }

  // Analyze wallet function
  async analyzeWallet() {
    this.loading = true;
    this.error = null;

    try {
      // Mock API request URL (Replace with your actual API)
      const response = await fetch(
        `https://api.blockchain.com/wallet/${this.address}/analyze`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      this.walletInfo = data;
    } catch (error) {
      this.error = "Failed to fetch wallet info. Please check the address.";
      this.walletInfo = null;
    } finally {
      this.loading = false;
    }
  }

  // Render wallet info
  renderWalletInfo() {
    if (!this.walletInfo) return null;

    return html`
      <div class="wallet-info">
        <h3>Wallet Analysis for ${this.address}</h3>
        <div class="token-holdings">
          <h4>Token Holdings</h4>
          ${this.walletInfo.holdings.map(
            (holding) => html`<div>${holding.token}: ${holding.balance}</div>`
          )}
        </div>
        <div class="transaction-history">
          <h4>Transaction History</h4>
          ${this.walletInfo.transactions.map(
            (tx) => html`<div>${tx.type}: ${tx.amount} (${tx.date})</div>`
          )}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        <h2 class="text-2xl font-medium mb-5">Wallet Analyzer</h2>
        <div class="input-container">
          <input
            type="text"
            placeholder="Enter Wallet Address"
            .value="${this.address}"
            @input="${(e) => (this.address = e.target.value)}"
          />
          <button ?disabled="${this.loading}" @click="${this.analyzeWallet}">
            ${this.loading ? "Analyzing..." : "Analyze Wallet"}
          </button>
        </div>

        ${this.error ? html`<p class="error">${this.error}</p>` : ""}
        ${this.loading ? html`<p class="loader">Loading data...</p>` : ""}
        ${this.renderWalletInfo()}
      </div>
    `;
  }
}

customElements.define("wallet-analyzer", WalletAnalyzer);

export default WalletAnalyzer;
