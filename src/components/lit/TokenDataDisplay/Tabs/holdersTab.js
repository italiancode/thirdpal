import { css, html, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import globalSemanticCSS from "../../../../css/global-semanticCSS";
import { TWStyles } from "../../../../css/twlit";

class TokenHoldersTab extends LitElement {
  static properties = {
    tokenHolders: { type: Array },
    tokenSupply: { type: String },
    displayCount: { type: Number },
    isLoading: { type: Boolean },
    error: { type: String },
  };

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      :host {
        display: block;
        width: 100%;
      }

      #circular-progress {
        position: relative;
        width: 100px;
        height: 100px;
      }

      #circular-progress svg {
        transform: rotate(-90deg);
      }

      #circular-progress circle {
        fill: none;
        stroke-width: 10;
        stroke-linecap: round;
      }

      #circular-progress-bg {
        stroke: #e5e7eb;
      }

      #circular-progress-progress {
        stroke: #7be7c4;
        transition: stroke-dashoffset 0.5s ease;
      }

      #percentage-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--text-gray-900, #1f2937);
      }

      .holder-item {
        transition: all 0.3s ease;
      }

      .holder-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      @media (max-width: 640px) {
        .circular-progress {
          width: 120px;
          height: 120px;
        }

        .percentage-text {
          font-size: 1.25rem;
        }
      }
    `,
  ];

  constructor() {
    super();
    this.isLoading = false;
    this.error = "";
    this.displayCount = 10;
  }

  get validTokenSupply() {
    return this.tokenSupply ? Number(this.tokenSupply.replace(/,/g, "")) : 0;
  }

  handleDisplayCountChange(event) {
    const newValue = Number(event.target.value);
    this.displayCount = newValue;
    this.requestUpdate();
  }

  getTotalPercentageOfDisplayedHolders(displayedHolders) {
    const totalHoldings = displayedHolders.reduce(
      (sum, holder) => sum + (holder.totalAmount || 0),
      0
    );
    return this.validTokenSupply > 0
      ? (totalHoldings / this.validTokenSupply) * 100
      : 0;
  }

  formatAddress(address) {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "N/A";
  }

  renderProgressCircle(totalPercentage, circumference, offset) {
    return html`
      <div id="circular-progress">
        <svg width="100" height="100">
          <circle id="circular-progress-bg" cx="50" cy="50" r="45"></circle>
          <circle
            id="circular-progress-progress"
            cx="50"
            cy="50"
            r="45"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${offset}"
          ></circle>
        </svg>
        <div id="percentage-text">${totalPercentage}%</div>
      </div>
    `;
  }

  renderTokenHolderItem(holder, index, percentage) {
    return html`
      <li class="holder-item bg-white rounded-lg p-4 shadow-sm">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium text-gray-900">
            ${index + 1}. ${this.formatAddress(holder.holder)}
          </span>
          <span class="text-sm text-gray-600">
            ${holder.totalAmount.toLocaleString()} (${percentage.toFixed(2)}%)
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-primary h-2 rounded-full"
            style=${styleMap({ width: `${percentage}%` })}
          ></div>
        </div>
      </li>
    `;
  }

  render() {
    if (this.isLoading) {
      return html`<div>Loading...</div>`;
    }

    if (this.error) {
      return html`
        <div role="alert" class="text-red-500">
          <strong>Error: </strong><span>${this.error}</span>
        </div>
      `;
    }

    const filteredHolders = this.tokenHolders.filter(
      (holder) => holder.totalAmount > 0
    );

    const sortedHolders = filteredHolders
      .sort((a, b) => (b.totalAmount || 0) - (a.totalAmount || 0))
      .slice(0, this.displayCount);

    const totalPercentage =
      this.getTotalPercentageOfDisplayedHolders(sortedHolders).toFixed(2);

    const circumference = 2 * Math.PI * 45;
    const offset =
      circumference - (parseFloat(totalPercentage) / 100) * circumference;

    return html`
      <div class="max-w-3xl mx-auto">
        <div class="flex justify-between items-center w-full mb-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            Token Holders
          </h3>
          <select
            @change=${this.handleDisplayCountChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-32"
            aria-label="Select number of holders to display"
          >
            <option value="10" ?selected=${this.displayCount === 10}>
              Top 10
            </option>
            <option value="20" ?selected=${this.displayCount === 20}>
              Top 20
            </option>
            <option value="50" ?selected=${this.displayCount === 50}>
              Top 50
            </option>
          </select>
        </div>

        <div
          class="flex flex-row justify-between items-center p-4 mb-8 border-primary border rounded-lg"
        >
          ${this.renderProgressCircle(totalPercentage, circumference, offset)}
          <div class="text-right mt-2">
            <p class="text-lg font-medium text-gray-900">
              Total Supply Held by Top ${this.displayCount} Holders
            </p>
            <p class="text-sm text-gray-500">
              Combined holdings of the top holders.
            </p>
          </div>
        </div>

        <ul class="space-y-4 list-none p-0">
          ${sortedHolders.map((holder, index) => {
            const percentage =
              this.validTokenSupply > 0
                ? (holder.totalAmount / this.validTokenSupply) * 100
                : 0;
            return this.renderTokenHolderItem(holder, index, percentage);
          })}
        </ul>
      </div>
    `;
  }
}

customElements.define("token-holders-tab", TokenHoldersTab);
export default TokenHoldersTab;
