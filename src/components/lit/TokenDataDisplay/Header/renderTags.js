import { html } from "lit";

export function renderTags(tokenStandard, tokenTags) {
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
