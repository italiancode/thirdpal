import { LitElement, html, css } from "lit";
import { TWStyles } from "../css/twlit";
import {
  getFirestoreUserData,
  updateUserDataInFirestore,
} from "../utils/firestoreUtils";
import globalSemanticCSS from "../css/global-semanticCSS";

import pasteIcon from "../../public/icons/paste.png";

// Initialization for ES Users

class AddWallet extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      .add-wallet {
        display: block;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
      }

      .form-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
        margin: 0 auto;
      }

      .form-input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }

      .network-selection {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }

      .add-wallet-button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 4px;
        background-color: #28a745;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .add-wallet-button:hover {
        background-color: #218838;
      }
    `,
  ];

  static properties = {
    walletAddresses: { type: Array },
    toastMessage: { type: String },
    walletInput: { type: String },
    selectedNetwork: { type: String }, // Add property for selected network
    networks: { type: Array }, // Add property for networks
    userEmail: { type: String },
    userId: { type: String },
  };

  constructor() {
    super();
    this.walletAddresses = [];
    this.toastMessage = "";
    this.walletInput = "";
    this.selectedNetwork = ""; // Initialize selected network
    this.networks = ["ETH", "BSC", "ARB"]; // Define available networks

    this.userEmail = null;
    this.userId = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.fetchUserData();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  async fetchUserData() {
    const userData = await getFirestoreUserData();

    if (userData) {
      this.walletAddresses = userData.walletAddresses || [];
      this.userEmail = userData.email;
      this.userId = userData.userId;
    }
  }

  async updateWalletAddress() {
    if (this.walletInput.trim() !== "") {
      // Check if the selected network matches the address format
      if (
        !this.isValidAddressForNetwork(
          this.selectedNetwork,
          this.walletInput.trim()
        )
      ) {
        this.handleToastMessage(
          "Invalid address for the selected network. Please check.",
          "error"
        );
        return;
      }

      // Check if any address exists for the selected network
      const existingAddresses = this.walletAddresses.filter(
        (wallet) => wallet.network === this.selectedNetwork
      );
      if (existingAddresses.length > 0) {
        this.handleToastMessage(
          "A wallet address for the selected network already exists. You can't add more than one address per network.",
          "error"
        );
        return;
      }

      // If the address is valid and doesn't exist, proceed to add it
      const newWallet = {
        address: this.walletInput.trim(),
        verified: false,
        balance: "",
        timestamp: new Date().toISOString(),
        additionalDetails: "",
        network: this.selectedNetwork, // Store selected network in the wallet object
      };
      this.walletAddresses = [...this.walletAddresses, newWallet];

      try {
        await updateUserDataInFirestore(
          this.userId,
          "walletAddresses",
          this.walletAddresses
        );
        this.handleToastMessage(
          "Wallet address added successfully.",
          "success"
        );
      } catch (error) {
        this.handleToastMessage(
          "Failed to add wallet address. Please try again.",
          "error"
        );
        console.log(error);
      }

      this.walletInput = "";
    }
  }

  isValidAddressForNetwork(network, address) {
    if (network === "ETH" || network === "BSC" || network === "ARB") {
      const hexRegex = /^0x[0-9A-Fa-f]+$/;
      return (
        address.startsWith("0x") &&
        address.length === 42 &&
        hexRegex.test(address)
      );
    }

    if (network === "SOL") {
      // SOL address validation: Should consist of alphanumeric characters and have a length of 44
      const SOLRegex = /^[0-9A-Za-z]{44}$/;
      return SOLRegex.test(address);
    }

    return false;
  }

  async pasteWalletAddress() {
    try {
      const clipboardData = await navigator.clipboard.readText();
      const walletInput = this.shadowRoot.getElementById("walletAddress");

      if (walletInput) {
        walletInput.value = clipboardData;
        walletInput.dispatchEvent(
          new Event("input", { bubbles: true, composed: true })
        );
      }
    } catch (error) {
      console.error("Error pasting wallet address:", error);
      // Handle errors or display a message to the user if clipboard access fails
    }
  }

  handleToastMessage(message, type) {
    this.toastMessage =
      type === "error" ? `error:${message}` : `success:${message}`;
    setTimeout(() => {
      this.toastMessage = ""; // Clear the toast message after a delay
    }, 3000);
  }

  render() {
    return html`
      <div class="mb-5 grid">
        <div class="mb-5 sm:w-full md:w-1/2 lg:w-1/3">
          <h2 class="mb-3">Add Wallet Address:</h2>
          <!-- <label for="walletAddress">Add Wallet Address:</label> -->
          <div class="add-wallet border">
            <div class="grid gap-1 mb-5">
              <label for="id" class="block text-sm font-medium text-gray-500"
                >Blockchain network</label
              >
              <div class="select-network">
                <select
                  id="networkSelection"
                  class="h-8 text-sm bg-white border border-gray-300 rounded-md outline-none"
                  @change=${(e) => (this.selectedNetwork = e.target.value)}
                >
                  <option value="" selected disabled hidden>
                    Select Network
                  </option>
                  ${this.networks.map(
                    (network) =>
                      html` <option value=${network}>${network}</option> `
                  )}
                </select>
              </div>
            </div>
            <div class="grid gap-1">
              <label for="id" class="block text-sm font-medium text-gray-500"
                >Wallet address</label
              >
              <div
                class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]"
              >
                <input
                  id="walletAddress"
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 pr-11 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  placeholder="Enter Wallet Address"
                  .value=${this.walletInput}
                  @input=${(e) => (this.walletInput = e.target.value)}
                  required
                />

                <button
                  class="absolute right-1 top-1 z-10 select-none rounded py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all"
                  type="button"
                  @click=${this.pasteWalletAddress}
                >
                  <img
                    src=${pasteIcon}
                    alt="paste-icon"
                    height="16"
                    width="16"
                  />
                </button>
              </div>
            </div>
            <div
              class="flex w-full min-w-[200px] max-w-[24rem] justify-end mt-5"
            >
              <button
                class="rounded bg-green-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                @click=${this.updateWalletAddress}
              >
                Add Wallet
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Display toast message based on type -->
      ${this.toastMessage
        ? html`
            <div
              class="
                toast-message
                ${this.toastMessage.includes("success")
                ? "toast-success"
                : "toast-error"}
                toast-bottom"
            >
              ${this.toastMessage.split(":")[1]}
            </div>
          `
        : ""}
    `;
  }
}

customElements.define("add-wallet", AddWallet);
