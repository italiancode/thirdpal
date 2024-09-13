import { LitElement, html, css } from "lit";
import TokenAnalyzer from "./lit/TokenAnalyzer";
import WalletAnalyzer from "./lit/WalletAnalyzer";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";

class AnalyzerElement extends LitElement {
  static properties = {
    currentTool: { type: String },
  };

  constructor() {
    super();
    this.currentTool = "token";
  }

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      :host {
        --primary-color: #85ffb6;
        --secondary-color: #7ded93;
        --bg-color: #1a202c;
        --text-color-selected: #000;
        --text-color-unselected: #fff;
        --button-bg-unselected: #333;
        --hover-color: #7ded93;
      }

      .container {
        color: var(--text-color-unselected);
        max-width: 700px;
      }

      nav {
        width: 100%;
        max-width: 1024px;
        background-color: var(--bg-color);
        padding: 16px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .buttons {
        display: flex;
        gap: 16px;
      }

      button {
        padding: 8px 16px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        border: none;
        transition: background-color 0.3s;
        cursor: pointer;
      }

      button.selected {
        background-color: var(--primary-color);
        color: var(--text-color-selected);
      }

      button.unselected {
        background-color: var(--button-bg-unselected);
        color: var(--text-color-unselected);
      }

      button:hover {
        background-color: var(--hover-color);
        color: var(--text-color-selected);
      }

      .content {
        width: 100%;
        max-width: 1024px;
        background-color: var(--bg-color);
        margin-top: 32px;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
      }
    `,
  ];

  handleButtonClick(tool) {
    this.currentTool = tool;
  }

  render() {
    return html`
      <div class="flex w-full justify-center">
        <div class="container grid w-full">
          <nav>
            <div class="buttons">
              <button
                class="${this.currentTool === "token"
                  ? "selected"
                  : "unselected"}"
                @click="${() => this.handleButtonClick("token")}"
              >
                Token Analyzer
              </button>
              <button
                class="${this.currentTool === "wallet"
                  ? "selected"
                  : "unselected"}"
                @click="${() => this.handleButtonClick("wallet")}"
              >
                Wallet Analyzer
              </button>
            </div>
          </nav>

          <div class="content">
            ${this.currentTool === "token"
              ? html`<token-analyzer></token-analyzer>`
              : html`<wallet-analyzer></wallet-analyzer>`}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("analyzer-element", AnalyzerElement);

export default AnalyzerElement;
