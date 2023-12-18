import { html, css, LitElement } from "lit";

class ToastNotification extends LitElement {
  static styles = css`
    /* Add your toast notification styles here */
    /* Example styles */
    :host {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }

    :host(.visible) {
      opacity: 1;
    }
  `;

  static properties = {
    message: { type: String },
    type: { type: String },
    visible: { type: Boolean },
  };

  constructor() {
    super();
    this.message = "";
    this.type = "info";
    this.visible = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.clearMessagesHandler = this.clearMessages.bind(this);
    window.addEventListener("clear-toast-messages", this.clearMessagesHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(
      "clear-toast-messages",
      this.clearMessagesHandler
    );
  }

  show(message, type = "info") {
    this.message = message;
    this.type = type;
    this.visible = true;

    // Automatically hide after 3 seconds (adjust duration as needed)
    setTimeout(() => {
      this.clearMessages();
    }, 3000);
  }

  clearMessages() {
    // Hide the toast notification and reset the message
    this.visible = false;
    this.message = "";
  }

  render() {
    return html`
      <div class="toast ${this.visible ? "visible" : ""} ${this.type}">
        ${this.message}
      </div>
    `;
  }
}

customElements.define("toast-notification", ToastNotification);
