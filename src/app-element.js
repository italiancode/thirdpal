import { LitElement, css, html } from "lit";
import "./core/router";
import globalSemanticCSS from "./css/global-semanticCSS";
import { TWStyles } from "./css/twlit";
import { appMainPath, appName } from "./module/config/app-config";
// import "./views/inc/HeaderView";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppElement extends LitElement {
  static styles = [
    globalSemanticCSS,
    TWStyles,
    css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto; /* Header, Main Content, Footer */
        min-height: 100vh;
        margin: 0;
        padding: 0;
      }

      header-view {
        grid-row: 1; /* Place the header at the top */
        background-color: #fff;
        color: inherit;
      }

      main {
        background-color: #fff;
        color: inherit;
        padding: 16px;
        display: block; /* Add padding to the main content */
        width: 100%;
        height: 100%;
        align-items: auto;
      }

      footer {
        background-color: #fff;
        color: inherit;
        padding: 16px;
        text-align: center;
      }
    `,
  ];
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    // import("./views/AppCore");

    this.header = () =>
      import(/* webpackChunkName: "header-view" */ "./views/inc/HeaderView");

    import("./components/RIF/ResponsiveImageFrame");
    import("./core/app.core");
  }

  render() {
    this.header();
    return html`
      <!--  -->
      <header-view></header-view>

      <main class="mt-16">
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

  _onClick() {
    this.count++;
  }

  static get styles() {
    return css``;
  }
}

window.customElements.define("app-element", AppElement);
