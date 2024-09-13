import { LitElement, html, css } from "lit";
import { TWStyles } from "../../css/twlit";
import globalSemanticCSS from "../../css/global-semanticCSS";
import TokenDataDisplay from "./TokenDataDisplay";
import {
  fetchMetaData,
  fetchJupiterData,
  fetchTokenSupply,
  fetchTokenAccounts,
  fetchRaydiumLiquidity,
} from "../../utils/api/api";
import { log } from "../../utils/logger";

class TokenAnalyzer extends LitElement {
  static properties = {
    address: { type: String },
    bigdata: { type: Object },
    loadingData: { type: Object },
    error: { type: String },
    loading: { type: Boolean },
    darkMode: { type: Boolean },
  };

  constructor() {
    super();
    this.address = "";
    this.bigdata = null;
    this.loadingData = null;
    this.error = null;
    this.loading = false;
  }

  async fetchData() {
    this.loading = true;
    this.error = null;

    this.bigdata = {
      onChain: "fetching",
      offChain: "fetching",
      accountInfo: "fetching",
      jupiterData: "fetching",
      tokenSupplyData: "fetching",
      liquidityPoolData: "fetching",
      tokenAccountsData: "fetching",
    };

    try {
      const data = await fetchMetaData(this.address.trim());

      log(data);

      this.bigdata = {
        ...this.bigdata,
        onChain: data.onChain || "N/A",
        offChain: data.offChain || "N/A",
        accountInfo: data.accountInfo || "N/A",
      };

      this.requestUpdate();

      const jupiterData = await fetchJupiterData(this.address.trim());

      log(jupiterData);

      this.bigdata = {
        ...this.bigdata,
        jupiterData: jupiterData || "N/A",
      };

      this.requestUpdate();

      const tokenSupply = await fetchTokenSupply(this.address.trim());

      log(tokenSupply);

      this.bigdata = {
        ...this.bigdata,
        tokenSupplyData: tokenSupply || "N/A",
      };

      this.requestUpdate();

      const liquidityPool = await fetchRaydiumLiquidity(this.address.trim());

      log(liquidityPool);

      this.bigdata = {
        ...this.bigdata,
        liquidityPoolData: liquidityPool || "N/A",
      };

      this.requestUpdate();

      const tokenAccounts = await fetchTokenAccounts(this.address.trim());

      log(tokenAccounts);

      this.bigdata = {
        ...this.bigdata,
        tokenAccountsData: tokenAccounts || "N/A",
      };

      this.requestUpdate();
      this.error = null;
    } catch (error) {
      console.error("Fetch Error:", error);
      this.error = `Failed to fetch metadata: ${error.message}. Please check the token address.`;
      this.bigdata = null;
    } finally {
      this.loading = false;
    }
  }

  closeOverlay() {
    this.bigdata = null;
  }

  connectedCallback() {
    super.connectedCallback();
    const themeManager = document.querySelector("app-manager");
    if (themeManager) {
      this.darkMode = themeManager.darkMode;
      themeManager.addEventListener(
        "theme-updated",
        this.handleThemeUpdate.bind(this)
      );
    }
  }

  handleThemeUpdate(event) {
    this.darkMode = event.detail;
    this.requestUpdate();
  }

  renderData() {
    const dataToDisplay = this.bigdata || this.loadingData;

    if (!dataToDisplay) return null;

    return html`
      <token-data-display
        .bigdata="${dataToDisplay}"
        .darkMode="${this.darkMode}"
        @close-overlay="${this.closeOverlay}"
      >
      </token-data-display>
    `;
  }

  render() {
    return html`
      <div class="">
        <h2 class="text-2xl font-medium mb-5">Token Analyzer</h2>
        <div class="input-container gap-3">
          <input
            type="text"
            placeholder="Enter Token Address"
            .value="${this.address}"
            @input="${(e) => (this.address = e.target.value)}"
            class="${this.darkMode ? "dark" : "light"}"
          />
          <button ?disabled="${this.loading}" @click="${this.fetchData}">
            ${this.loading ? "Loading..." : "Analyze Token"}
          </button>
        </div>

        ${this.error ? html`<p class="error">${this.error}</p>` : ""}
        ${this.loading ? html`<p class="loader">${this.loading}</p>` : ""}
        ${this.renderData()}
      </div>
    `;
  }

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      * {
        box-sizing: border-box;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
      }

      input {
        flex: 1;
        padding: 12px;
        font-size: 16px;
        border: none;
        border-radius: 6px;
        outline: none;
        color: black;
        background-color: white;
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
        margin-bottom: 20px;
        text-align: center;
      }

      .loader {
        text-align: center;
        color: #85ffb6;
      }
    `,
  ];
}

customElements.define("token-analyzer", TokenAnalyzer);

export default TokenAnalyzer;
