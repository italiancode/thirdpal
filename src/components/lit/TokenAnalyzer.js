import { LitElement, html, css } from "lit";
import { TWStyles } from "../../css/twlit";
import globalSemanticCSS from "../../css/global-semanticCSS";
import TokenDataDisplay from "./TokenDataDisplay";
import {
  fetchMetaData,
  fetchJupiterData,
  fetchTokenSupply,
  fetchRaydiumLiquidity,
  fetchTokenTransactions,
} from "../../utils/api/api";
import { log } from "../../utils/logger";
import { fetchTokenAccounts } from "../../utils/api/accountsData";
import { fetchTransactions } from "../../utils/api/fetchTxs";

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
    this.darkMode = false;
  }

  async fetchData() {
    this.loading = true;
    this.error = null;
    this.metadataReady = false; // Add a flag for metadata readiness

    // Initialize loading state for each part of data
    this.loadingData = {
      onChain: "fetching",
      offChain: "fetching",
      accountInfo: "fetching",
      jupiterData: "fetching",
      tokenSupplyData: "fetching",
      liquidityPoolData: "fetching",
      tokenTxsData: "fetching",
      tokenAccountsData: "fetching",
    };

    try {
      // Fetch MetaData (The crucial first part)
      const data = await fetchMetaData(this.address.trim());
      log(data);

      this.loadingData = {
        ...this.loadingData,
        onChain: data.onChain || "N/A",
        offChain: data.offChain || "N/A",
        accountInfo: data.accountInfo || "N/A",
      };

      // Mark metadata as ready so it can be rendered
      this.metadataReady = true;
      this.requestUpdate();

      // Fetch additional data asynchronously after metadata is ready
      const jupiterData = await fetchJupiterData(this.address.trim());
      log(jupiterData);
      this.loadingData = {
        ...this.loadingData,
        jupiterData: jupiterData || "N/A",
      };
      this.requestUpdate();

      const tokenSupply = await fetchTokenSupply(this.address.trim());
      log(tokenSupply);
      this.loadingData = {
        ...this.loadingData,
        tokenSupplyData: tokenSupply || "N/A",
      };
      this.requestUpdate();

      const liquidityPool = await fetchRaydiumLiquidity(this.address.trim());
      log(liquidityPool);
      this.loadingData = {
        ...this.loadingData,
        liquidityPoolData: liquidityPool || "N/A",
      };
      this.requestUpdate();

      const tokenTransactions = await fetchTransactions(this.address.trim());
      log(tokenTransactions);
      this.loadingData = {
        ...this.loadingData,
        tokenTxsData: tokenTransactions || "N/A",
      };
      this.requestUpdate();

      const tokenAccounts = await fetchTokenAccounts(this.address.trim());
      log(tokenAccounts);
      this.loadingData = {
        ...this.loadingData,
        tokenAccountsData: tokenAccounts || "N/A",
      };

      this.bigdata = { ...this.loadingData };
      this.loadingData = null;
      this.error = null;
    } catch (error) {
      console.error("Fetch Error:", error);
      this.error = `Failed to fetch metadata: ${error.message}. Please check the token address.`;
      this.bigdata = null;
      this.loadingData = null;
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

  disconnectedCallback() {
    super.disconnectedCallback();
    const themeManager = document.querySelector("app-manager");
    if (themeManager) {
      themeManager.removeEventListener(
        "theme-updated",
        this.handleThemeUpdate.bind(this)
      );
    }
  }

  handleThemeUpdate(event) {
    this.darkMode = event.detail;
  }

  renderData() {
    // Check if metadata is ready to be displayed
    if (!this.metadataReady) {
      return null; // Don't render anything if metadata is not ready
    }

    const dataToDisplay = this.bigdata || this.loadingData;

    if (!dataToDisplay) return null;

    return html`
      <token-data-display
        .bigdata="${dataToDisplay}"
        .darkMode="${this.darkMode}"
        @close-overlay="${this.closeOverlay}"
      ></token-data-display>
    `;
  }

  render() {
    return html`
      <div class="${this.darkMode ? "dark" : "light"}">
        <h2 class="text-2xl font-medium mb-5">Token Analyzer</h2>
        <div class="relative max-w-[700px]">
          <input
            type="text"
            placeholder="Enter Token Address"
            .value="${this.address}"
            @input="${(e) => (this.address = e.target.value)}"
            class="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85ffb6] focus:border-transparent pr-24 text-lg ${this
              .darkMode
              ? "section-dark"
              : "section-light"}"
          />
          <button
            ?disabled="${this.loading}"
            @click="${this.fetchData}"
            class="absolute right-1 top-1 bottom-1 px-4 rounded-full transition-colors duration-300 ease-in-out"
          >
            ${this.loading
              ? html`<svg
                  class="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>`
              : html`<span class="hidden sm:inline">Analyze</span>
                  <svg
                    class="h-5 w-5 sm:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>`}
          </button>
        </div>

        ${this.error
          ? html`<p class="error mt-4 text-red-500">${this.error}</p>`
          : ""}
        ${this.loading && !this.metadataReady
          ? html`<p class="loader mt-4">Loading... Please wait.</p>`
          : ""}
        ${this.renderData()}
      </div>
    `;
  }

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      button {
        background-color: #6bcc92; /* Softer shade */
        color: white; /* Keep text white for contrast */
        transition: background-color 0.3s ease, transform 0.2s ease;
      }

      button:hover {
        background-color: #58a779; /* Darker shade for hover */
      }

      button:disabled {
        background-color: #d1d5db; /* Light gray for disabled state */
        cursor: not-allowed; /* Indicate that the button is disabled */
      }
    `,
  ];
}

customElements.define("token-analyzer", TokenAnalyzer);

export default TokenAnalyzer;
