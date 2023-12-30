import { html, css, LitElement } from "lit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { TWStyles } from "../css/twlit";
import "./inc/HeaderView";
import { appMainPath, appName } from "../module/config/app-config";
import { doc, getDoc } from "firebase/firestore";
import { firestore_db } from "../../utils/firebase";

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
        display: block; /* Add padding to the main content */
        width: 100%;
        height: 100%;
        align-items: auto;
      }

      footer {
        background-color: #fff;
        color: inherit;
        padding: 20px;
        text-align: center;
      }
    `,
  ];

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <header-view></header-view>
      <main class="p-5 m-auto">
        <slot> </slot>
      </main>

      <footer class="grid gap-3">
        <div class="flex justify-between">
          <a href=${appMainPath}><h2>${appName}</h2></a>
          <label> 2024</label>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-core", AppCore);
