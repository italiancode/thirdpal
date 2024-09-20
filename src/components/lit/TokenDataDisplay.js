import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/twlit";
import globalSemanticCSS from "../../css/global-semanticCSS";

import Spinner from "../Spinner";

import { renderHeader } from "./TokenDataDisplay/Header/header";
import renderHoldersTab from "./TokenDataDisplay/Tabs/HoldersTab";
import renderOverviewTab from "./TokenDataDisplay/Tabs/overviewTab";
import TokenHoldersTab from "./TokenDataDisplay/Tabs/HoldersTab";

class TokenDataDisplay extends LitElement {
  static properties = {
    bigdata: { type: Object },
    darkMode: { type: Boolean },
    activeTab: { type: String },
    showOverlay: { type: Boolean },
  };

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      .overlay {
        z-index: 100;
        overflow-y: auto;
      }
    `,
  ];

  constructor() {
    super();
    this.activeTab = "overview";
    this.showOverlay = true;
  }

  getTokenData(
    onChain,
    offChain,
    accountInfo,
    jupiterData,
    tokenSupplyData,
    liquidityPoolData,
    tokenTxData,
    tokenAccountsData
  ) {
    const rawTokenPrice = jupiterData?.price || 0;

    const getDecimals = accountInfo?.data?.parsed?.info?.decimals || 0;

    const tokenSupply =
      tokenSupplyData === "fetching"
        ? html`<my-spinner></my-spinner>`
        : this.formatSupply(
            tokenSupplyData?.supply,
            accountInfo?.data?.parsed?.info?.decimals
          ) || 0; // Default to 0 if no supply data

    // Market cap calculation
    let marketCap;
    if (jupiterData === "fetching" || tokenSupplyData === "fetching") {
      marketCap = html`<my-spinner></my-spinner>`;
    } else {
      const numericTokenSupply =
        typeof tokenSupply === "string"
          ? parseFloat(tokenSupply.replace(/,/g, ""))
          : tokenSupply;
      marketCap = rawTokenPrice * numericTokenSupply;
    }

    return {
      tokenIcon: offChain?.image || "https://via.placeholder.com/80",
      tokenName: onChain?.data?.name || "N/A",
      tokenSymbol: onChain?.data?.symbol || "N/A",
      tokenDescription: offChain?.description || "No bio available",

      tokenTags: offChain?.tags || [],
      tokenStandard: this.getTokenStandard(onChain?.tokenStandard),
      numberOfTransactions: accountInfo?.transactions || "N/A",
      tokenDecimals: accountInfo?.data?.parsed?.info?.decimals || "N/A",

      tokenSupply:
        tokenSupplyData === "fetching"
          ? html`<my-spinner></my-spinner>`
          : this.formatSupply(
              tokenSupplyData?.supply,
              accountInfo?.data?.parsed?.info?.decimals
            ) || "N/A",

      tokenTx24H:
        tokenTxData === "fetching"
          ? html`<my-spinner></my-spinner>`
          : tokenTxData?.transactions24H || "N/A",

      tokenLiquidityUSD:
        liquidityPoolData === "fetching"
          ? html`<my-spinner></my-spinner>`
          : `$${this.formatNumber(liquidityPoolData.liquidityLockedInUSD)}` ||
            "N/A",

      numberOfAccounts:
        tokenAccountsData === "fetching"
          ? html`<my-spinner></my-spinner>`
          : tokenAccountsData?.accounts?.length || "N/A",

      numberOfHolders:
        tokenAccountsData === "fetching"
          ? html`<my-spinner></my-spinner>`
          : tokenAccountsData?.holders.length || "N/A",

      tokenHolders: tokenAccountsData?.holders || [],

      tokenPrice:
        jupiterData === "fetching"
          ? html`<my-spinner></my-spinner>`
          : `$${rawTokenPrice.toFixed(getDecimals)}` || "N/A",

      priceChange24h: jupiterData?.priceChange24h || null,
      volume24h: jupiterData?.volume24h || null,

      marketCap: marketCap || "N/A", // Assign calculated market cap or html`<my-spinner></my-spinner>`

      creatorName:
        offChain === "fetching"
          ? html`<my-spinner></my-spinner>`
          : offChain?.creator?.name || "N/A",

      creatorSite:
        offChain === "fetching"
          ? html`<my-spinner></my-spinner>`
          : offChain?.creator?.site || "N/A",
    };
  }

  getTokenStandard(standard) {
    switch (standard) {
      case "Fungible":
        return "SPL Token";
      case "ProgrammableNonFungible":
        return "Programmable NFT";
      default:
        return standard || "N/A";
    }
  }

  render() {
    if (!this.bigdata || !this.showOverlay) return null;

    const {
      onChain,
      offChain,
      accountInfo,
      jupiterData,
      tokenSupplyData,
      liquidityPoolData,
      tokenTxData,
      tokenAccountsData,
    } = this.bigdata;

    const tokenData = this.getTokenData(
      onChain,
      offChain,
      accountInfo,
      jupiterData,
      tokenSupplyData,
      liquidityPoolData,
      tokenTxData,
      tokenAccountsData
    );

    return html`
      <div
        class="overlay fixed inset-0 bg-black/50 flex justify-center items-start mt-16 ${this
          .darkMode
          ? "dark"
          : "light"}"
      >
        <section
          class="relative w-full max-w-lg sm:max-w-2xl h-full overflow-y-auto"
        >
          <button
            @click="${this.closeOverlay}"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          ${renderHeader(tokenData)} ${this.renderTabs()}
          <div class="p-4 sm:p-6">${this.renderTabContent(tokenData)}</div>
        </section>
      </div>
    `;
  }

  renderTabs() {
    const tabs = ["overview", "holders"];
    return html`
      <div class="flex border-b border-gray-200 dark:border-gray-700">
        ${tabs.map(
          (tab) => html`
            <button
              class="px-4 py-2 ${this.activeTab === tab
                ? "border-b-2 border-secondary text-secondary"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}"
              @click=${() => this.switchTab(tab)}
            >
              ${tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          `
        )}
      </div>
    `;
  }

  renderTabContent(tokenData) {
    const { tokenHolders, tokenSupply } = tokenData; // Extract tokenHolders and tokenSupply

    switch (this.activeTab) {
      case "overview":
        return renderOverviewTab(tokenData);
      case "analytics":
        return this.renderAnalyticsTab(tokenData);
      case "holders":
        return html` <token-holders-tab
          .tokenHolders=${tokenHolders}
          .tokenSupply=${tokenSupply}
        ></token-holders-tab>`;
      default:
        return html`<p>Tab content not available.</p>`;
    }
  }

  switchTab(tab) {
    this.activeTab = tab;
    this.requestUpdate();
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  formatSupply(supply, decimals) {
    const rawSupply = supply || 0;
    const tokenDecimals = decimals || 0;
    return (rawSupply / Math.pow(10, tokenDecimals)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  // Utility function for formatting numbers
  formatNumber(value) {
    if (typeof value !== "number") return value; // Check if the value is a number

    const absValue = Math.abs(value);

    if (absValue >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(2) + "B";
    } else if (absValue >= 1_000_000) {
      return (value / 1_000_000).toFixed(2) + "M";
    } else if (absValue >= 1_000) {
      return (value / 1_000).toFixed(2) + "K";
    }

    return value.toFixed(2); // Otherwise return the value as is
  }

  formatAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
}

customElements.define("token-data-display", TokenDataDisplay);

export default TokenDataDisplay;
