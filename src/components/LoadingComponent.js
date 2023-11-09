// src/components/LoadingComponent.js
import { html, css, LitElement } from "lit";

class LoadingComponent extends LitElement {
  static styles = css`
    /* Define your loading component styles here */
  `;

  render() {
    return html`
      <div id="loading">
        <!-- Add loading spinner or animation here -->
        Loading...
      </div>
    `;
  }
}

customElements.define("loading-component", LoadingComponent);
