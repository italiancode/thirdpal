import { html, css, LitElement } from "lit";

class HomeView extends LitElement {
  static properties = {
    sliderValue: { type: Number },
  };

  constructor() {
    super();
    this.sliderValue = 0;
  }

  static styles = css``;

  render() {
    return html``;
  }
}

customElements.define("home-view", HomeView);
