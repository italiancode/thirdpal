import { html, css, LitElement } from "lit";

class AirDropSubmissionView extends LitElement {
  static properties = {
    sliderValue: { type: Number },
  };

  constructor() {
    super();
    import("../components/AirdropSubmission");
    this.sliderValue = 0;
  }

  static styles = css``;

  render() {
    return html`<airdrop-submission></airdrop-submission>`;
  }
}

customElements.define("adsub-view", AirDropSubmissionView);
export default AirDropSubmissionView;
