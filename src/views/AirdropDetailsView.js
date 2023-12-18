import { LitElement, html, css } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { airdropData } from "../data/airdropData";

class AirdropDetailsView extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Add your custom styles for the airdrop details view */
      .task {
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
      }

      .task-type {
        font-weight: bold;
      }
    `,
  ];

  static properties = {
    airdropId: { type: String }, // Change the type to String as it's coming from the URL
  };

  constructor() {
    super();
    this.airdropId = ""; // Initialize airdropId
  }

  connectedCallback() {
    super.connectedCallback();

    const url = window.location.pathname;
    const parts = url.split("/");
    this.airdropId = parts[parts.length - 1]; // Extract the airdrop ID from the URL path
  }

  render() {
    const airdrop = airdropData.find(
      (item) => item.id === parseInt(this.airdropId)
    );

    if (!airdrop) {
      return html`<div>Airdrop not found.</div>`;
    }

    const task = airdrop.task; // Fetch the task details

    return html`
      <div>
        <h1>${airdrop.name}</h1>
        <p>Description: ${airdrop.description}</p>
        <h2>Task:</h2>
        <div class="task">
          <strong>${task.taskName}</strong>
          <p>${task.description}</p>
          <p class="task-type">Type: ${task.taskType}</p>
          <p>Reward: ${task.reward}</p>
          <!-- Include other task details as needed -->
        </div>
      </div>
    `;
  }
}

customElements.define("airdrop-details-view", AirdropDetailsView);
