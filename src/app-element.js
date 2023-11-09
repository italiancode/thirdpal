import { LitElement, css, html } from "lit";

import "./views/AppCore";
import globalSemanticCSS from "./css/global-semanticCSS";
import { TWStyles } from "./css/twlit";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppElement extends LitElement {
  static styles = [globalSemanticCSS, TWStyles, css``];
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
    this.docsHint = "Click on the Vite and Lit logos to learn more";
    this.count = 0;
  }

  render() {
    return html`
      <!--  -->
      <app-core>
        <slot> </slot>
      </app-core>

      <!--  -->
      <session-timeout-modal></session-timeout-modal>
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
