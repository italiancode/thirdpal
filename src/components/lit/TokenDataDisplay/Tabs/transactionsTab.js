import { LitElement, css, html } from "lit";
import { TWStyles } from "../../../../css/twlit";
import globalSemanticCSS from "../../../../css/global-semanticCSS";

class TokenTxsTab extends LitElement {
  static properties = {
    tokenTxsData: { type: Object },
    transactionsToShow: { type: Number },
    selectedType: { type: String }, // New property to store the selected type for sorting
  };

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      :host {
        display: block;
      }

      .transaction-list {
        max-height: 400px;
        overflow-y: auto;
      }

      .load-more-btn {
        background-color: #007bff;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }

      .load-more-btn:hover {
        background-color: #0056b3;
      }

      .load-more-container {
        text-align: center;
        margin-top: 1rem;
      }

      .selected-type {
        background-color: #cfcfcfbe;
        color: white;
      }
    `,
  ];

  constructor() {
    super();
    this.tokenTxsData = { transactionsAll: [] };
    this.transactionsToShow = 10; // Initially show 10 transactions
    this.selectedType = null; // Initialize selectedType to null (no filter)
  }

  handleTypeClick(type) {
    this.selectedType = this.selectedType === type ? null : type; // Toggle selection
  }

  formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diff = (now.getTime() - date.getTime()) / 1000;

    if (diff < 60) return `${Math.floor(diff)}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date.toLocaleDateString([], { month: "short", day: "numeric" });
  }

  formatAddress(address) {
    return address && address.length > 10
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : "N/A";
  }

  formatFee(fee) {
    const formattedFee = (fee / 1e9).toFixed(6); // Ensure six decimal places
    return parseFloat(formattedFee); // Remove unnecessary trailing zeros
  }

  renderTransactionItem(transaction) {
    const { type, signer, signature, fee, timestamp, description } =
      transaction;
    const typeColor =
      {
        TOKEN_MINT:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
        BURN: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
        TRANSFER:
          "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
        SWAP: "bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100",
      }[type] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";

    return html`
      <div
        class="flex flex-col p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-lg shadow-md"
      >
        <div class="flex items-start space-x-4">
          <div class="text-4xl" aria-hidden="true">
            ${{
              TOKEN_MINT: "🪙",
              BURN: "🔥",
              TRANSFER: "↔️",
              SWAP: "🔄",
            }[type] || "📄"}
          </div>

          <div class="flex-1 min-w-0">
            <a
              href="https://solscan.io/tx/${signature}"
              class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 truncate underline transition duration-150 ease-in-out group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>${this.formatAddress(signature)}</span>
              <svg
                class="w-4 h-4 ml-1 text-blue-500 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                />
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                />
              </svg>
            </a>
            <p class="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
              Fee: ${this.formatFee(fee)} SOL
            </p>
            ${description
              ? html`<div class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  ${description}
                </div>`
              : ""}
          </div>

          <div class="flex-shrink-0 flex flex-col items-end gap-3">
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${typeColor}"
            >
              ${type}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400">
              ${this.formatTime(timestamp)}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  loadMoreTransactions() {
    const totalTransactions = this.tokenTxsData.transactionsAll.length;
    if (this.transactionsToShow + 10 <= totalTransactions) {
      this.transactionsToShow += 10; // Load 10 more transactions
    } else {
      this.transactionsToShow = totalTransactions; // Load all remaining transactions
    }
  }

  render() {
    const { transactionsAll } = this.tokenTxsData;

    if (!transactionsAll || transactionsAll.length === 0) {
      return html`
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <p class="text-center text-gray-500 dark:text-gray-400">
            No transactions available.
          </p>
        </div>
      `;
    }

    const transactionCounts = {
      TOKEN_MINT: 0,
      BURN: 0,
    };

    transactionsAll.forEach((tx) => {
      transactionCounts[tx.type] = (transactionCounts[tx.type] || 0) + 1;
    });

    // Filter transactions based on the selected type, if any
    const filteredTransactions = this.selectedType
      ? transactionsAll.filter((tx) => tx.type === this.selectedType)
      : transactionsAll;

    return html`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            Transaction Summary
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            ${Object.keys(transactionCounts).map(
              (type) => html`
                <dl
                  class="border-primary border overflow-hidden rounded-lg p-4 cursor-pointer ${this
                    .selectedType === type
                    ? "selected-type"
                    : ""}"
                  @click="${() => this.handleTypeClick(type)}"
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <dt
                        class="text-sm font-medium text-gray-500 dark:text-gray-400"
                      >
                        ${type}
                      </dt>
                      <dd
                        class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white"
                      >
                        ${transactionCounts[type]}
                      </dd>
                    </div>
                    <div class="text-4xl" aria-hidden="true">
                      ${{
                        TOKEN_MINT: "🪙",
                        BURN: "🔥",
                        TRANSFER: "↔️",
                        SWAP: "🔄",
                      }[type] || "📄"}
                    </div>
                  </div>
                </dl>
              `
            )}
          </div>
        </div>

        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            Recent Transactions
          </h3>
          <div class="transaction-list">
            ${filteredTransactions
              .slice(0, this.transactionsToShow)
              .map((tx) => this.renderTransactionItem(tx))}
            ${this.transactionsToShow < filteredTransactions.length
              ? html`
                  <div class="text-center mt-6">
                    <button
                      @click="${this.loadMoreTransactions}"
                      class="load-more-btn"
                    >
                      Load More Transactions
                    </button>
                  </div>
                `
              : ""}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("token-txs-tab", TokenTxsTab);

export default TokenTxsTab;
