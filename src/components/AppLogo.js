import { html, css, LitElement } from "lit";

class AppLogo extends LitElement {
  static styles = css`
    .app-logo {
      width: 206px;
      height: 206px;
      display: flex;
      align-items: center;
    }

    .logo {
      max-width: 100%; /* Adjust the maximum width as needed */
      height: auto;
      margin-bottom: 0.5rem;
    }
  `;

  static properties = {
    src: { type: String },
    alt: { type: String },
  };

  render() {
    return html`
      <div class="app-logo">
        <img src=${this.src} alt=${this.alt} class="logo" />
      </div>
    `;
  }
}

customElements.define("app-logo", AppLogo);
