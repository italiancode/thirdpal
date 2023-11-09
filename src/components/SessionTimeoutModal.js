import { html, css, LitElement } from "lit-element";
import {
  getFirestoreUserData,
  updateUserDataInFirestore,
} from "../utils/firestoreUtils"; // Import this utility

class SessionTimeoutModal extends LitElement {
  static styles = css`
    .session-timeout-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  `;

  constructor() {
    super();
    this.userData = null; // Property to store user data

    this.inactivityTimer = null;
    this.passKey = null;
    this.sessionTimeout = 11.93 * 60 * 1000;

    this.checkAndSetPassKey();

    this.userHasPassKey = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async fetchUserData() {
    this.userData = await getFirestoreUserData();
  }

  async checkAndSetPassKey() {
    await this.fetchUserData();

    if (!this.userData.passKey) {
      this.showSessionTimeoutModal();
    } else {
      this.hideSessionTimeoutModal();
      this.userHasPassKey = true;
    }
  }

  async setPassKey() {
    await this.fetchUserData();
    const keyInput = this.shadowRoot.querySelector("#keyInput");
    const confirmInput = this.shadowRoot.querySelector("#confirmInput");

    if (keyInput.value === confirmInput.value) {
      try {
        await updateUserDataInFirestore(
          this.userData.userId,
          "passKey",
          keyInput.value
        );

        this.hideSessionTimeoutModal();
      } catch (error) {
        console.error("Error setting pass key:", error);
      }
    } else {
      console.log("Key and confirmation do not match.");
    }
  }

  showSessionTimeoutModal() {
    const modal = this.shadowRoot.querySelector("#sessionTimeoutModal");
    modal.style.display = "flex";
  }

  hideSessionTimeoutModal() {
    const modal = this.shadowRoot.querySelector("#sessionTimeoutModal");
    modal.style.display = "none";
  }

  render() {
    return html`
      <div id="sessionTimeoutModal" class="session-timeout-modal">
        <div class="modal-content">
          ${this.userHasPassKey === true
            ? html`
                <input type="password" id="keyInput" placeholder="Enter Key" />
              `
            : html`<input
                  type="password"
                  id="keyInput"
                  placeholder="Enter Key"
                />
                <input
                  type="password"
                  id="confirmInput"
                  placeholder="Confirm Key"
                />
                <button @click=${this.setPassKey}>Set Key</button> `}
        </div>
      </div>
    `;
  }
}

customElements.define("session-timeout-modal", SessionTimeoutModal);
