import { html } from "lit";

export default function renderHeaderPriceInfo(price, priceChange) {
  const priceChangeClass =
    priceChange >= 0
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  const priceChangeSymbol = priceChange >= 0 ? "+" : "";

  return html`
    <div class="text-lg sm:text-2xl font-bold">$${price}</div>
    ${priceChange !== null &&
    priceChange !== undefined &&
    typeof priceChange === "number"
      ? html`
          <div class="text-xs sm:text-sm px-2 py-1 rounded ${priceChangeClass}">
            ${priceChangeSymbol}${priceChange.toFixed(2)}%
          </div>
        `
      : html`<div class="text-xs sm:text-sm text-gray-500">
          24h Change: N/A
        </div>`}
  `;
}
