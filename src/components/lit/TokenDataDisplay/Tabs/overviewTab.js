import { html } from "lit";

export default function renderOverviewTab({
  tokenLiquidityUSD,
  marketCap,
  tokenSupply,
  tokenDecimals,
  creatorName,
  creatorSite,
  freezeAuthority,
  mintAuthority,
}) {
  return html`
    <div class="space-y-6">
      <!-- Token Details Section -->
      <div>
        <div class="flex justify-between items-center w-full mb-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            Token Details
          </h3>
        </div>
        <dl class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Liquidity (USD)
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white">
              ${tokenLiquidityUSD}
            </dd>
          </div>

          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Market Cap (USD)
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white">
              ${marketCap !== null && marketCap !== undefined
                ? `$${parseFloat(marketCap).toLocaleString()}`
                : "N/A"}
            </dd>
          </div>

          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Token Supply
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white">
              ${tokenSupply !== null && tokenSupply !== undefined
                ? `${tokenSupply.toLocaleString()}`
                : "N/A"}
            </dd>
          </div>

          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Decimals
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white">
              ${tokenDecimals !== null && tokenDecimals !== undefined
                ? `${tokenDecimals}`
                : "N/A"}
            </dd>
          </div>

          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Creator
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white">
              ${creatorName || "N/A"}
            </dd>
          </div>

          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Creator Website
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white">
              ${creatorSite
                ? html`<a
                    href="${creatorSite}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:underline"
                    >${creatorSite}</a
                  >`
                : "N/A"}
            </dd>
          </div>
        </dl>
      </div>

      <!-- Token Authorities Section -->
      <div>
        <div class="flex justify-between items-center w-full mb-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            Token Authorities
          </h3>
        </div>
        <dl class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Mint Authority
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white break-all">
              ${mintAuthority !== null && mintAuthority.length > 0
                ? mintAuthority
                : "None"}
            </dd>
          </div>

          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Freeze Authority
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white break-all">
              ${freezeAuthority !== null && freezeAuthority.length > 0
                ? freezeAuthority
                : "None"}
            </dd>
          </div>
        </dl>
      </div>

      <!-- Price History Section -->
      <div>
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Price History (Last 7 Days)
        </h3>
        <div
          class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center h-64"
        >
          Price Chart N/A
        </div>
      </div>
    </div>
  `;
}
