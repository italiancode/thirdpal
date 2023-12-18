import { LitElement, html, css } from "lit";
import {
  getFirestoreUserData,
  updateUserDataInFirestore,
} from "../../../utils/firestoreUtils";
import { TWStyles } from "../../../css/twlit";
import globalSemanticCSS from "../../../css/global-semanticCSS";

import kebab from "../../../../public/icons/menu-kebab-vertical-2-svgrepo-com.svg";
import copyIcon from "../../../../public/icons/copy.png";
import ethIcon from "../../../../public/icons/eth.png";
import bscIcon from "../../../../public/icons/bsc.png";
import arbIcon from "../../../../public/icons/arb.png";
import solIcon from "../../../../public/icons/sol.png";

class Wallet extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Additions and Modifications for Enhanced Styles */
      :host {
        padding: 0;
      }

      /* Modified Dropdown Styles */
      .dropdown {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        width: 28px;
      }

      .dropdown button {
        padding: 0;
      }

      .dropdown button img {
        height: 100%;
        width: 100%;
        display: block;
      }

      .dropdown-content {
        position: absolute;
        display: none;
        top: calc(100% + 5px);
        right: calc(50% + 5px);
      }

      .dropdown-content.active {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    `,
  ];

  static properties = {
    walletAddresses: { type: Array },
    userEmail: { type: String },
    userId: { type: String },
    walletBalances: { type: Array }, // Add this line
    toastMessage: { type: String },
  };

  constructor() {
    super();
    this.walletAddresses = [];
    this.userEmail = null;
    this.userId = null;
    this.walletBalances = [];
    this.toastMessage = "";
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchUserData();
  }

  async fetchUserData() {
    // Fetch user data, including wallet addresses
    const userData = await getFirestoreUserData();

    if (userData) {
      this.walletAddresses = userData.walletAddresses || [];
      this.userEmail = userData.email;
      this.userId = userData.userId;

      // Call generateDummyBalances after setting walletAddresses
      this.generateDummyBalances(this.walletAddresses);
    }
  }

  toggleDropdown(index) {
    const dropContainer = this.shadowRoot.getElementById(
      `dropdown-content-${index}`
    );
    if (dropContainer) {
      dropContainer.classList.toggle("active");
    }

    const allDropdowns = this.shadowRoot.querySelectorAll(".dropdown-content");
    allDropdowns.forEach((dropdown, i) => {
      if (i !== index && dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
      }
    });
  }

  async removeWalletAddress(index) {
    this.walletAddresses.splice(index, 1);

    try {
      await updateUserDataInFirestore(
        this.userId,
        "walletAddresses",
        this.walletAddresses
      );
      this.handleToastMessage(
        "Wallet address removed successfully.",
        "success"
      );
    } catch (error) {
      this.handleToastMessage(
        "Failed to remove wallet address. Please try again.",
        "error"
      );
    }
  }

  handleToastMessage(message, type) {
    this.toastMessage =
      type === "error" ? `error:${message}` : `success:${message}`;
    setTimeout(() => {
      this.toastMessage = ""; // Clear the toast message after a delay
    }, 3000);
  }

  // Modify the generateDummyBalances function
  generateDummyBalances() {
    const getUserBalance = false; // Set getUserBalance to the desired configuration value

    // Generate dummy balances for existing wallet addresses
    this.walletAddresses.forEach((wallet) => {
      wallet.balance = getUserBalance
        ? Math.floor(Math.random() * 1000)
        : "Not authorized"; // Update balance based on verification setting
    });

    // Update the user data in Firestore with updated balances only if verification is set to true
    if (getUserBalance) {
      updateUserDataInFirestore(
        this.userId,
        "walletAddresses",
        this.walletAddresses
      );
    }
  }

  render() {
    return html`
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

      <div class="wallet-overview mb-5 wallet">
        <h2>Your Wallet Addresses:</h2>
        <div
          class="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          ${this.walletAddresses.length > 0
            ? html`
                ${this.walletAddresses.map(
                  (wallet, index) => html`
                    <div class="bg-gray-100 p-4 mb-4 rounded-lg w-full">
                      <div class="flex justify-between items-center">
                        <div
                          class="text-sm font-medium w-full grid justify-between"
                        >
                          <div class="w-full flex justify-start">
                            <!-- Display network icon -->
                            ${this.renderNetworkIcon(wallet.network)}

                            <!-- Display wallet address -->
                            <label>
                              ${wallet.address &&
                              typeof wallet.address === "string"
                                ? html`
                                    <a
                                      href=${this.generateLink(
                                        wallet.address,
                                        wallet.network
                                      )}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      ${wallet.address.substr(
                                        0,
                                        6
                                      )}....${wallet.address.substr(-4)}
                                    </a>
                                  `
                                : "Invalid Address"}
                            </label>
                            <label>
                              <button
                                class="ml-3 btn btn-sm btn-outline-secondary"
                                @click=${() =>
                                  this.copyWalletAddress(wallet.address)}
                              >
                                <img
                                  src=${copyIcon}
                                  alt="copy-icon"
                                  height="16"
                                  width="16"
                                />
                              </button>
                            </label>

                            <label
                              class="text-xs text-gray-400 font-normal ml-3"
                            >
                              ${wallet.verified ? "Yes" : "Not verified"}
                            </label>
                          </div>

                          <div class="w-full flex justify-start mt-3">
                            <label class="text-xs text-gray-400 font-normal">
                              <span class="font-bold text-gray-400"
                                >Balance:</span
                              >
                              ${wallet.balance}
                            </label>
                          </div>
                        </div>

                        <div class="dropdown">
                          <button
                            @click=${() => this.toggleDropdown(index)}
                            class="p-2 text-sm font-medium text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none"
                          >
                            <img
                              src=${kebab}
                              alt="kebab-icon"
                              height="16"
                              width="16"
                            />
                          </button>

                          <div
                            id="dropdown-content-${index}"
                            class="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dropdown-content"
                          >
                            <div class="py-2 w-full">
                              <a
                                href="javascript:void(0);"
                                @click=${() => this.removeWalletAddress(index)}
                                class="block text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >Remove</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  `
                )}
              `
            : html`<p>No Wallet Address Found</p>`}
        </div>
      </div>
    `;
  }

  generateLink(address, network) {
    // Generate links based on the network
    switch (network) {
      case "ETH":
        return `https://etherscan.io/address/${address}`;
      case "BSC":
        return `https://bscscan.com/address/${address}`;
      case "ARB":
        return `https://arbiscan.io/address/${address}`;
      case "SOL":
        return `https://explorer.solana.com/address/${address}`;
      // Add more cases for other networks if needed

      // Default case if network not recognized
      default:
        return ""; // You can add a default link or handle accordingly
    }
  }

  renderNetworkIcon(network) {
    let iconSrc = ""; // Set the icon source based on the network

    switch (network) {
      case "ETH":
        iconSrc = ethIcon; // Replace with your Ethereum icon URL
        break;
      case "BSC":
        iconSrc = bscIcon; // Replace with your Binance Smart Chain icon URL
        break;
      // Add cases for other networks as needed
      case "ARB":
        iconSrc = arbIcon;
        break;
      case "SOL":
        iconSrc = solIcon;
        break;
      default:
        iconSrc = "https://example.com/default-icon.png"; // Default icon URL for unrecognized networks
        break;
    }

    return html` <div>
      <img
        src=${iconSrc}
        alt=${network}
        height="16"
        width="16"
        class="mr-3 rounded-full"
      />
    </div>`;
  }

  copyWalletAddress(address) {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        this.handleToastMessage("Address copied to clipboard.", "success");
      })
      .catch((error) => {
        console.error("Unable to copy address to clipboard.", error);
        this.handleToastMessage(
          "Failed to copy address. Please try again.",
          "error"
        );
      });
  }
}

customElements.define("wallet-overview", Wallet);
