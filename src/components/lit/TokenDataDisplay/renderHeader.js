import { html } from "lit";
import { renderTags } from "./Header/renderTags";
import renderStats from "./Header/renderStats";
import renderHeaderPriceInfo from "./Header/renderPriceInfo_Header";

export function renderHeader(tokenData) {
  const {
    tokenIcon,
    tokenName,
    tokenSymbol,
    tokenDescription,
    tokenStandard,
    tokenTags,
    numberOfAccounts,
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
            <p class="text-sm text-gray-500 dark:text-gray-400 m-0">
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
            ${renderTags(tokenStandard, tokenTags)}
          </div>
          <div class="flex flex-wrap gap-4 sm:gap-8">
            ${renderStats(numberOfAccounts, numberOfTransactions)}
          </div>
        </div>
        <div class="flex flex-col items-start sm:items-end">
          ${renderHeaderPriceInfo(tokenPrice, priceChange24h)}
        </div>
      </div>
    </header>
  `;
}
