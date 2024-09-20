import { html } from "lit";

export default function renderOverviewTab({
  tokenLiquidityUSD,
  marketCap,
  tokenSupply,
  tokenDecimals,
  creatorName,
  creatorSite,
}) {
  return html`
    <div class="space-y-6">
      <div>
        <div class="flex justify-between items-center w-full mb-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            Token Details
          </h3>
        </div>
        <dl class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Liquidity
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white">
              ${tokenLiquidityUSD}
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
