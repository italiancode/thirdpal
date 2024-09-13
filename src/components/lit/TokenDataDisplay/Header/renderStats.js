import { html } from "lit";

export default function renderStats(numberOfAccounts, numberOfTransactions) {
  return html`
    <div class="flex items-center space-x-1">
      <span class="text-sm sm:text-base font-bold">${numberOfAccounts}</span>
      <span class="text-xs sm:text-sm text-gray-500">Accounts</span>
    </div>
    <div class="flex items-center space-x-1">
      <span class="text-sm sm:text-base font-bold"
        >${numberOfTransactions}</span
      >
      <span class="text-xs sm:text-sm text-gray-500">Txs 24h</span>
    </div>
  `;
}
