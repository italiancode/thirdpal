import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@material/mwc-icon-button";
import "@material/mwc-icon";

@customElement("rich-action")
export class RichAction extends LitElement {
  static styles = [
    css`
      * {
        --mdc-icon-size: var(--icon-size);
        --mdc-icon-button-size: var(--icon-size);
      }
      button {
        padding: 5px 10px;
        border-radius: 50px;
        cursor: pointer;
        background-color: #55667738;
        border: 1px solid #96bcdb;
      }

      button:hover {
        background-color: #96bcdb;
        color: #fff;
      }
      .side-slot {
        display: flex;
      }
      section {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
      }
      section * {
        margin: 3px;
      }

      mwc-icon-button[active] {
        color: var(--rich-action-active-color);
      }
      .info-tooltip {
        position: absolute;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 5px;
        z-index: 999;
        display: none;
      }
      mwc-icon {
        cursor: pointer;
      }
    `,
  ];

  @property({ type: String }) command = "";
  @property({ type: String }) value?: string;
  @property({ type: String }) icon = "info";
  @property({ type: Boolean }) active = false;
  @property({ type: Array, hasChanged: () => true }) values: Option[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mouseenter", this.showTooltip);
    this.addEventListener("mouseleave", this.hideTooltip);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("mouseenter", this.showTooltip);
    this.removeEventListener("mouseleave", this.hideTooltip);
  }

  showTooltip() {
    const tooltip = this.shadowRoot?.querySelector(
      ".info-tooltip"
    ) as HTMLDivElement;
    if (tooltip) {
      tooltip.style.display = "block";
    }
  }

  hideTooltip() {
    const tooltip = this.shadowRoot?.querySelector(
      ".info-tooltip"
    ) as HTMLDivElement;
    if (tooltip) {
      tooltip.style.display = "none";
    }
  }

  render() {
    const { icon, command, value, active, values } = this;

    const hasItems = values.length > 0;
    return html`<section class=" h-64">
      ${hasItems
        ? html`
            <div>
              <label>${icon}</label>
              <select
                @change=${(e: Event) => {
                  const event = e as CustomEvent;
                  const select = event.target as HTMLSelectElement;
                  const selectedValue = select.value;
                  if (selectedValue === "--") {
                    editorCommand("removeFormat", undefined);
                  } else {
                    editorCommand(command, selectedValue);
                  }
                }}
              >
                ${values.map(
                  (v) =>
                    html`<option
                      value=${v.value}
                      ?selected=${v.value === value}
                    >
                      ${v.name}
                    </option>`
                )}
              </select>
              <!-- <div class="info-tooltip">Additional Information</div> -->
            </div>
          `
        : html`<button
            ?active="${active}"
            @click=${() => {
              if (command) {
                editorCommand(command, value);
              } else {
                this.dispatchEvent(
                  new Event("action", {
                    bubbles: true,
                    composed: true,
                  })
                );
              }
            }}
          >
            ${icon}
          </button>`}
      <div class="side-slot"><slot></slot></div>
    </section>`;
  }
}

// <mwc-icon-button
//             ?active="${active}"
//             icon=${icon}
//             @click=${() => {
//               if (command) {
//                 editorCommand(command, value);
//               } else {
//                 this.dispatchEvent(
//                   new Event("action", {
//                     bubbles: true,
//                     composed: true,
//                   })
//                 );
//               }
//             }}
//           >
//             <div class="info-tooltip">Additional Information</div>
//           </mwc-icon-button>

interface Option {
  name: string;
  value: string;
}

export function editorCommand(command: string, value?: string) {
  document.execCommand(command, true, value);
}

declare global {
  interface HTMLElementTagNameMap {
    "rich-action": RichAction;
  }
}
