import { html } from "lit";

export default function renderStats(
  numberOfAccounts,
  numberOfHolders,
  tokenTx24H
) {
  return html`
    <div class="flex items-center space-x-1">
      <span class="text-sm sm:text-base font-bold">${numberOfHolders}</span>
      <span class="text-xs sm:text-sm text-gray-500">Holders</span>
    </div>

    <div class="flex items-center space-x-1">
      <span class="text-sm sm:text-base font-bold">${tokenTx24H}</span>
      <span class="text-xs sm:text-sm text-gray-500">Txs 24h</span>
    </div>
  `;
}
