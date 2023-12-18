import { html, css, LitElement } from "lit";
import { getFirestoreUserData, reportIssue } from "../utils/firestoreUtils";

class ReportForm extends LitElement {
  static styles = css`
    .form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }

    .form-input {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    .form-input:focus {
      outline: none;
      border-color: #3498db;
    }

    .submit-button {
      background-color: #3498db;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
    }

    .submit-button:hover {
      background-color: #2684c6;
    }
  `;

  constructor() {
    super();
    this.userId = "";
    this.userData = null; // Property to store user data
    this.fetchUserData(); // Fetch user data when the component is initialized
  }

  async fetchUserData() {
    this.userData = await getFirestoreUserData();
    if (this.userData) {
      this.userId = this.userData.userId;
    } else {
      this.userId = false;
    }
  }

  async submitReport() {
    const issueTitle = this.shadowRoot.getElementById("issue-title").value;
    const issue = this.shadowRoot.getElementById("issue").value;
    const userName = this.shadowRoot.getElementById("gorvenment-name").value;
    const userEmail = this.shadowRoot.getElementById("user-email").value;
    const walletAddress =
      this.shadowRoot.getElementById("wallet-address").value;

    const userId = this.userId || null; // Use the stored userId if available, otherwise set as null

    // Send the report with the respective userId
    await reportIssue(
      issueTitle,
      issue,
      userId,
      userName,
      userEmail,
      walletAddress
    );

    // Clear the form by resetting the input field values
    this.shadowRoot.getElementById("issue-title").value = "";
    this.shadowRoot.getElementById("issue").value = "";
    this.shadowRoot.getElementById("gorvenment-name").value = "";
    this.shadowRoot.getElementById("user-email").value = "";
    this.shadowRoot.getElementById("wallet-address").value = "";
  }

  render() {
    return html`
      <div class="form-container">
        <div>
          <label for="issue-title" class="form-label">Issue Title:</label>
          <input id="issue-title" type="text" class="form-input" />
          <label for="issue" class="form-label">Issue:</label>
          <textarea id="issue" class="form-input"></textarea>
          <label for="gorvenment-name" class="form-label">Your Name:</label>
          <input id="gorvenment-name" type="text" class="form-input" />
          <label for="user-email" class="form-label">Your Email:</label>
          <input id="user-email" type="email" class="form-input" />
          <label for="wallet-address" class="form-label">Wallet Address:</label>
          <input id="wallet-address" type="text" class="form-input" />
          <input id="user" type="text" value="${this.userId}" hidden />
          <button @click="${this.submitReport}" class="submit-button">
            Submit Report
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("report-form", ReportForm);
