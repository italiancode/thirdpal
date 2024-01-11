import { LitElement, html, css } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { firestore_db } from "../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore"; // Adjusted imports

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
    airdropId: { type: String },
    airdrop: { type: Object }, // Define airdrop property to hold retrieved data
  };

  constructor() {
    super();
    this.airdropId = "";
    this.airdrop = {}; // Initialize airdrop object
  }

  connectedCallback() {
    super.connectedCallback();

    const url = window.location.pathname;
    const parts = url.split("/");
    this.airdropId = parts[parts.length - 1];
    this.fetchAirdropDetails(); // Fetch airdrop details on component load
  }

  async fetchAirdropDetails() {
    try {
      const airdropRef = doc(firestore_db, "airdropForms", this.airdropId);
      const airdropSnapshot = await getDoc(airdropRef);

      if (airdropSnapshot.exists()) {
        this.airdrop = airdropSnapshot.data(); // Update airdrop property with retrieved data
      } else {
        this.airdrop = null; // Set airdrop to null if not found
      }

      this.requestUpdate(); // Trigger a re-render after data retrieval
    } catch (error) {
      console.error("Error fetching airdrop details:", error);
    }
  }

  render() {
    return html`
      <div>
        ${this.airdrop ? this.renderAirdrop() : this.renderAirdropNotFound()}
      </div>
    `;
  }

  renderAirdrop() {
    return html`
      <div class="grid gap-3">
        <h1>${this.airdrop.title}</h1>
        <p>Description: ${this.airdrop.description}</p>
        <h2>Task:</h2>
        <div class="task">
          <strong>${this.airdrop.taskName}</strong>
          <p>${this.airdrop.taskDescription}</p>
          ${this.airdrop.taskType
            ? html`<p class="task-type">
                Task Type: ${this.airdrop.taskType.name}
              </p>`
            : ""}
          <p>Reward: ${this.airdrop.reward}</p>
          <!-- Include other task details as needed -->
        </div>
      </div>
    `;
  }

  renderAirdropNotFound() {
    return html` <p>Airdrop not found.</p> `;
  }
}

customElements.define("airdrop-details-view", AirdropDetailsView);
export default AirdropDetailsView;
