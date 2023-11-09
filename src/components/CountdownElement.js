import { html, css, LitElement } from "lit";

class CountdownElement extends LitElement {
  static styles = css`
    /* Add your countdown element styles here */
  `;

  render() {
    return html`<div id="countdown">
      You need to be authenticated to access this page. Redirecting in
      <slot name="countdown">5</slot> seconds...
    </div>`;
  }
}

customElements.define("countdown-element", CountdownElement);
