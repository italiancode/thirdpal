import { html, css, LitElement } from "lit";

class NotFoundView extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      margin: 2rem;
    }

    h1 {
      font-size: 2rem;
      color: #ff0000;
    }

    p {
      font-size: 1rem;
      color: #333;
    }
  `;

  render() {
    return html`
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    `;
  }
}

customElements.define("not-found-view", NotFoundView);

export default NotFoundView;
