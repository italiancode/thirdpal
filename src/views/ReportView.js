import { html, css, LitElement } from "lit";

class ReportView extends LitElement {
  static properties = {
    sliderValue: { type: Number },
  };

  constructor() {
    super();
    this.sliderValue = 0;
    import("../components/ReportForm");
  }

  static styles = css``;

  render() {
    return html`<report-form></report-form>`;
  }
}

customElements.define("report-view", ReportView);
export default ReportView;
