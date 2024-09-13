import { html, css } from "lit";
import { LitElement } from "lit";

class Spinner extends LitElement {
  static styles = css`
    .spinner-wrapper {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 40px; /* Adjust the width as needed */
      height: 15px; /* Adjust the height as needed */
      border-radius: 8px; /* Adjust the border radius as needed */
      background-color: rgba(0, 0, 0, 0.05); /* Light background color */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Optional shadow for emphasis */
      animation: pulse 1.5s infinite;
      overflow: hidden;
    }

    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top: 4px solid #3498db;
      width: 5px; /* Adjust the spinner size as needed */
      height: 5px; /* Adjust the spinner size as needed */
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.5;
      }
      100% {
        transform: scale(1);
        opacity: 0.7;
      }
    }
  `;

  render() {
    return html`
      <div class="spinner-wrapper">
        <div class="spinner"></div>
      </div>
    `;
  }
}

customElements.define("my-spinner", Spinner);

export default Spinner;
