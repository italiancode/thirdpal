import { html, css, LitElement } from "lit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { TWStyles } from "../css/twlit";
import "./inc/HeaderView";
import { appMainPath, appName } from "../module/config/app-config";

class AppCore extends LitElement {
  static styles = [
    globalSemanticCSS,
    TWStyles,
    css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto; /* Header, Main Content, Footer */
        min-height: 100vh;
        margin: auto 1%;
        padding: auto;
      }

      header-view {
        grid-row: 1; /* Place the header at the top */
        background-color: #fff;
        color: inherit;
      }

      main {
        background-color: #fff;
        color: inherit;
        padding: 20px;
        display: flex; /* Add padding to the main content */
        width: 100%;
        height: 100%;
        align-items: center;
      }

      footer {
        background-color: #fff;
        color: inherit;
        padding: 20px;
        text-align: center;
      }
    `,
  ];

  render() {
    return html`
      <header-view></header-view>
      <main class="p-5 m-auto">
        <slot> </slot>
      </main>
      <footer class="flex justify-between">
        <a href=${appMainPath}><h2>${appName}</h2></a>
        <label> 2024</label>
      </footer>
    `;
  }
}

customElements.define("app-core", AppCore);
