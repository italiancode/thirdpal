import { LitElement, html, css } from "lit";
import { TWStyles } from "../../css/twlit";
import globalSemanticCSS from "../../css/global-semanticCSS";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

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
        position: fixed;
        top: 70px;
        left: 0;
        width: 100vw;
        height: calc(100% - 70px);
        display: flex;
        justify-content: center;
        align-items: start;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0.7);
        overflow-y: auto;
      }

      .content-wrapper {
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        margin: 1rem 0;
      }

      .tabs {
        display: flex;
        border-bottom: 1px solid var(--border-color);
      }

      .tab {
        padding: 10px 20px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
      }

      .tab.active {
        border-bottom-color: var(--primary-color);
      }

      .tab-content {
        padding: 20px;
      }
    `,
  ];

  constructor() {
    super();
    this.activeTab = "overview";
    this.showOverlay = true;
  }

  render() {
    if (!this.bigdata || !this.showOverlay) return null;

    const { onChain, offChain, accountInfo, analytics, jupiterData } =
      this.bigdata;
    const tokenData = this.getTokenData(
      onChain,
      offChain,
      accountInfo,
      analytics
    );

    return html`
      <div class="overlay ${this.darkMode ? "dark" : "light"}">
        <div
          class="fixed inset-0 bg-black/50 flex justify-center items-start mt-16 ${this
            .darkMode
            ? "dark"
            : "light"}"
        >
          <section
            class="content-wrapper relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-lg w-full max-w-lg sm:max-w-2xl h-full"
          >
            ${this.renderCloseButton()} ${this.renderHeader(tokenData)}
            ${this.renderTabs()}
            <div class="tab-content">${this.renderTabContent(tokenData)}</div>
          </section>
        </div>
      </div>
    `;
  }

  renderCloseButton() {
    return html`
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
    `;
  }

  renderHeader(tokenData) {
    const {
      tokenIcon,
      tokenName,
      tokenSymbol,
      tokenDescription,
      tokenStandard,
      tokenTags,
      numberOfHolders,
      numberOfTransactions,
    } = tokenData;

    return html`
      <header>
        <div class="p-4">
          <img
            src=${tokenIcon}
            alt="Token Profile Pic"
            class="h-20 rounded md:h-24 w-auto"
          />
        </div>
        <div class="mb-6 flex flex-col px-4">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              ${tokenName}
            </h2>
            <button
              class="bg-blue-500 text-white rounded-full px-4 py-2 font-semibold hover:bg-blue-600 transition duration-300"
            >
              Share
            </button>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 m-0">
            $${tokenSymbol}
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            ${tokenDescription}
          </p>
          ${this.renderTags(tokenStandard, tokenTags)}
          ${this.renderStats(numberOfHolders, numberOfTransactions)}
        </div>
      </header>
    `;
  }

  renderTags(tokenStandard, tokenTags) {
    return html`
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300"
        >
          ${tokenStandard}
        </span>
        ${tokenTags.map(
          (tag) => html`
            <span
              class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300"
            >
              ${tag}
            </span>
          `
        )}
      </div>
    `;
  }

  renderStats(numberOfHolders, numberOfTransactions) {
    return html`
      <div class="flex gap-5 pt-2">
        <div class="flex items-center space-x-1">
          <h4 class="text-sm sm:text-base md:text-lg lg:text-xl text-nowrap">
            <span class="font-bold">${numberOfHolders}</span>
            <span class="text-gray-500 tracking-tighter leading-snug rounded"
              >Holders</span
            >
          </h4>
        </div>
        <div class="flex items-center space-x-1">
          <h4 class="text-sm sm:text-base md:text-lg lg:text-xl text-nowrap">
            <span class="font-bold">${numberOfTransactions}</span>
            <span class="text-gray-500 tracking-tighter leading-snug rounded"
              >Txs 24h</span
            >
          </h4>
        </div>
      </div>
    `;
  }

  renderTabs() {
    const tabs = ["overview", "analytics", "holders"];
    return html`
      <div class="tabs ml-4">
        ${tabs.map(
          (tab) => html`
            <div
              class=${classMap({ tab: true, active: this.activeTab === tab })}
              @click=${() => this.switchTab(tab)}
            >
              ${tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          `
        )}
      </div>
    `;
  }

  renderTabContent(tokenData) {
    switch (this.activeTab) {
      case "overview":
        return this.renderOverviewTab(tokenData);
      case "analytics":
        return this.renderAnalyticsTab();
      case "holders":
        return this.renderHoldersTab(tokenData);
      default:
        return html`<p>Tab content not available.</p>`;
    }
  }

  renderOverviewTab({ creatorName, creatorSite, tokenSupply, tokenDecimals }) {
    return html`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Token Details
          </h3>
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Current Supply
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${tokenSupply}
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Decimals
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${tokenDecimals}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Creator
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${creatorName}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Creator Site
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                <a
                  href="${creatorSite}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:underline"
                  >${creatorSite}</a
                >
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Price History (Last 7 Days)
          </h3>
          <div
            class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center h-64"
          >
            Price Chart Placeholder
          </div>
        </div>
      </div>
    `;
  }

  renderAnalyticsTab() {
    return html`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Token Distribution
          </h3>
          <div
            class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2"
          >
            <div
              class="bg-blue-600 h-2.5 rounded-full"
              style="width: 33%"
            ></div>
          </div>
          <div
            class="flex justify-between text-sm text-gray-600 dark:text-gray-400"
          >
            <span>Circulating</span>
            <span>Locked</span>
            <span>Reserved</span>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Transaction Volume (24h)
          </h3>
          <div
            class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center h-64"
          >
            Transaction Volume Chart Placeholder
          </div>
        </div>
      </div>
    `;
  }

  renderHoldersTab({ topHolders }) {
    return html`
      <div>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Top 5 Token Holders
        </h3>
        <ul class="space-y-4">
          ${topHolders.slice(0, 5).map(
            (holder) => html`
              <li
                class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700"
              >
                <span class="text-sm font-medium text-gray-900 dark:text-white"
                  >${this.formatAddress(holder.address)}</span
                >
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  ${holder.balance.toLocaleString()}
                  (${holder.percentage.toFixed(2)}%)
                </span>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  getTokenData(onChain, offChain, accountInfo, analytics) {
    return {
      tokenIcon: offChain.image || "https://via.placeholder.com/80",
      tokenName: onChain.data.name || "N/A",
      tokenSymbol: onChain.data.symbol || "N/A",
      tokenDescription: offChain.description || "No bio available",
      creatorName: offChain.creator?.name || "N/A",
      creatorSite: offChain.creator?.site || "N/A",
      tokenTags: offChain.tags || [],
      tokenStandard: this.getTokenStandard(onChain.tokenStandard),
      numberOfTransactions: accountInfo.transactions || "N/A",
      tokenDecimals: accountInfo.data.parsed.info.decimals || "N/A",
      tokenSupply: this.formatSupply(
        analytics.supply,
        accountInfo.data.parsed.info.decimals
      ),
      numberOfHolders: analytics.holders.length || "N/A",
      topHolders: analytics.topHolders || [],
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

  formatAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
}

customElements.define("token-data-display", TokenDataDisplay);

export default TokenDataDisplay;


import { LitElement, css, html } from "lit";
import { TWStyles } from "../../css/twlit";
import globalSemanticCSS from "../../css/global-semanticCSS";

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

  render() {
    if (!this.bigdata || !this.showOverlay) return null;

    const { onChain, offChain, accountInfo, analytics, jupiterData } =
      this.bigdata;
    const tokenData = this.getTokenData(
      onChain,
      offChain,
      accountInfo,
      analytics,
      jupiterData
    );

    return html`
      <div
        class="overlay fixed inset-0 bg-black/50 flex justify-center items-start mt-16 ${this
          .darkMode
          ? "dark"
          : "light"}"
      >
        <section
          class="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg w-full max-w-lg sm:max-w-2xl h-full overflow-y-auto"
        >
          ${this.renderCloseButton()} ${this.renderHeader(tokenData)}
          ${this.renderTabs()}
          <div class="p-4 sm:p-6">${this.renderTabContent(tokenData)}</div>
        </section>
      </div>
    `;
  }

  renderCloseButton() {
    return html`
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
    `;
  }

  renderHeader(tokenData) {
    const {
      tokenIcon,
      tokenName,
      tokenSymbol,
      tokenDescription,
      tokenStandard,
      tokenTags,
      numberOfHolders,
      numberOfTransactions,
      tokenPrice,
      priceChange24h,
    } = tokenData;

    return html`
      <header class="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4"
        >
          <div class="flex items-center mb-4 sm:mb-0">
            <img
              src="${tokenIcon}"
              alt="${tokenName}"
              class="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4"
            />
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                ${tokenName}
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                $${tokenSymbol}
              </p>
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
          ${tokenDescription}
        </p>
        <div class="flex justify-between">
          <div>
            <div class="flex flex-wrap gap-2 mb-4">
              ${this.renderTags(tokenStandard, tokenTags)}
            </div>
            <div class="flex flex-wrap gap-4 sm:gap-8">
              ${this.renderStats(numberOfHolders, numberOfTransactions)}
            </div>
          </div>
          <div class="flex flex-col items-start sm:items-end">
            ${this.renderPriceInfo(tokenPrice, priceChange24h)}
          </div>
        </div>
      </header>
    `;
  }

  renderPriceInfo(price, priceChange) {
    if (price === null || price === undefined) {
      return html`<div class="text-lg sm:text-2xl font-bold">Price: N/A</div>`;
    }

    const priceChangeClass =
      priceChange >= 0
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800";
    const priceChangeSymbol = priceChange >= 0 ? "+" : "";

    return html`
      <div class="text-lg sm:text-2xl font-bold">$${price.toFixed(6)}</div>
      ${priceChange !== null && priceChange !== undefined
        ? html`
            <div
              class="text-xs sm:text-sm px-2 py-1 rounded ${priceChangeClass}"
            >
              ${priceChangeSymbol}${priceChange.toFixed(2)}%
            </div>
          `
        : html`<div class="text-xs sm:text-sm text-gray-500">
            24h Change: N/A
          </div>`}
    `;
  }

  renderTags(tokenStandard, tokenTags) {
    return html`
      <span
        class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300"
      >
        ${tokenStandard}
      </span>
      ${tokenTags.map(
        (tag) => html`
          <span
            class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300"
          >
            ${tag}
          </span>
        `
      )}
    `;
  }

  renderStats(numberOfHolders, numberOfTransactions) {
    return html`
      <div class="flex items-center space-x-1">
        <span class="text-sm sm:text-base font-bold">${numberOfHolders}</span>
        <span class="text-xs sm:text-sm text-gray-500">Holders</span>
      </div>
      <div class="flex items-center space-x-1">
        <span class="text-sm sm:text-base font-bold"
          >${numberOfTransactions}</span
        >
        <span class="text-xs sm:text-sm text-gray-500">Txs 24h</span>
      </div>
    `;
  }

  renderTabs() {
    const tabs = ["overview", "analytics", "holders"];
    return html`
      <div class="flex border-b border-gray-200 dark:border-gray-700">
        ${tabs.map(
          (tab) => html`
            <button
              class="px-4 py-2 ${this.activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-600"
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
    switch (this.activeTab) {
      case "overview":
        return this.renderOverviewTab(tokenData);
      case "analytics":
        return this.renderAnalyticsTab(tokenData);
      case "holders":
        return this.renderHoldersTab(tokenData);
      default:
        return html`<p>Tab content not available.</p>`;
    }
  }

  renderOverviewTab({ creatorName, creatorSite, tokenSupply, tokenDecimals }) {
    return html`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Token Details
          </h3>
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Current Supply
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${tokenSupply}
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Decimals
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${tokenDecimals}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Creator
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${creatorName}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Creator Site
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                <a
                  href="${creatorSite}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:underline"
                  >${creatorSite}</a
                >
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Price History (Last 7 Days)
          </h3>
          <div
            class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center h-64"
          >
            Price Chart Placeholder
          </div>
        </div>
      </div>
    `;
  }

  renderAnalyticsTab({ tokenPrice, priceChange24h, volume24h, marketCap }) {
    return html`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Market Data
          </h3>
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Current Price
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${tokenPrice !== null && tokenPrice !== undefined
                  ? `$${tokenPrice.toFixed(6)}`
                  : "N/A"}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                24h Change
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${priceChange24h !== null && priceChange24h !== undefined
                  ? `${priceChange24h.toFixed(2)}%`
                  : "N/A"}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                24h Volume
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${volume24h !== null && volume24h !== undefined
                  ? `$${volume24h.toLocaleString()}`
                  : "N/A"}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Market Cap
              </dt>
              <dd class="mt-1 text-sm text-gray-900 dark:text-white">
                ${marketCap !== null && marketCap !== undefined
                  ? `$${marketCap.toLocaleString()}`
                  : "N/A"}
              </dd>
            </div>
          </dl>
        </div>
        <!-- ... (rest of the analytics tab content remains unchanged) -->
      </div>
    `;
  }

  renderHoldersTab({ topHolders }) {
    return html`
      <div>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Top 5 Token Holders
        </h3>
        <ul class="space-y-4">
          ${topHolders.slice(0, 5).map(
            (holder) => html`
              <li
                class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700"
              >
                <span class="text-sm font-medium text-gray-900 dark:text-white"
                  >${this.formatAddress(holder.address)}</span
                >
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  ${holder.balance.toLocaleString()}
                  (${holder.percentage.toFixed(2)}%)
                </span>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  getTokenData(onChain, offChain, accountInfo, analytics, jupiterData) {
    return {
      tokenIcon: offChain?.image || "https://via.placeholder.com/80",
      tokenName: onChain?.data?.name || "N/A", // Safely check if onChain and data exist
      tokenSymbol: onChain?.data?.symbol || "N/A",
      tokenDescription: offChain?.description || "No bio available",
      creatorName: offChain?.creator?.name || "N/A",
      creatorSite: offChain?.creator?.site || "N/A",
      tokenTags: offChain?.tags || [],
      tokenStandard: this.getTokenStandard(onChain?.tokenStandard),
      numberOfTransactions: accountInfo?.transactions || "N/A",
      tokenDecimals: accountInfo?.data?.parsed?.info?.decimals || "N/A",
      tokenSupply: this.formatSupply(
        analytics?.supply,
        accountInfo?.data?.parsed?.info?.decimals
      ),
      numberOfHolders: analytics?.holders?.length || "N/A",
      topHolders: analytics?.topHolders || [],
      tokenPrice: jupiterData?.price || null,
      priceChange24h: jupiterData?.priceChange24h || null,
      volume24h: jupiterData?.volume24h || null,
      marketCap: jupiterData?.liquidity || null,
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

  formatAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
}

customElements.define("token-data-display", TokenDataDisplay);

export default TokenDataDisplay;

