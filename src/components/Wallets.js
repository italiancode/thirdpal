import { LitElement, html, css } from "lit";
import {
  getFirestoreUserData,
  updateUserDataInFirestore,
} from "../utils/firestoreUtils";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import kebab from "../../public/icons/menu-kebab-vertical-2-svgrepo-com.svg";
import copyIcon from "../../public/icons/copy.png";
import verifiedIcon from "../../public/icons/verified.png";
import ethIcon from "../../public/icons/eth.png";
import bscIcon from "../../public/icons/bsc.png";
import arbIcon from "../../public/icons/arb.png";
// import solIcon from "/../../public/icons/sol.png";
import { getAccount } from "@wagmi/core";

class Wallet extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      :host {
        padding: 0;
      }

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
    walletBalances: { type: Array },
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
    const userData = await getFirestoreUserData();

    if (userData) {
      this.walletAddresses = userData.walletAddresses || [];
      this.userEmail = userData.email;
      this.userId = userData.userId;
      this.generateDummyBalances(this.walletAddresses);
    }
  }

  toggleDropdown(index) {
    const dropContainer = this.shadowRoot.getElementById(
      `dropdown-content-${index}`
    );
    if (dropContainer) {
      const isActive = dropContainer.classList.contains("active");
      dropContainer.classList.toggle("active", !isActive);
    }

    const allDropdowns = this.shadowRoot.querySelectorAll(".dropdown-content");
    allDropdowns.forEach((dropdown) => {
      if (
        dropdown.id !== `dropdown-content-${index}` &&
        dropdown.classList.contains("active")
      ) {
        dropdown.classList.remove("active");
      }
    });
  }

  handleButtonBlur(event) {
    const dropdownContents =
      this.shadowRoot.querySelectorAll(".dropdown-content");

    dropdownContents.forEach((dropdown) => {
      const isClickInsideDropdown = dropdown.contains(event.relatedTarget);
      if (!isClickInsideDropdown) {
        dropdown.classList.remove("active");
      }
    });
  }

  async removeWalletAddress(index) {
    const removedAddress = this.walletAddresses.splice(index, 1)[0];

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
      this.walletAddresses.splice(index, 0, removedAddress);
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
      this.toastMessage = "";
    }, 3000);
  }

  generateDummyBalances() {
    const getUserBalance = false;

    this.walletAddresses.forEach((wallet) => {
      wallet.balance = getUserBalance
        ? Math.floor(Math.random() * 1000)
        : "Not authorized";
    });

    if (getUserBalance) {
      updateUserDataInFirestore(
        this.userId,
        "walletAddresses",
        this.walletAddresses
      );
    }
  }

  async verifyWalletOwnership(walletAddress, network) {
    // Function to open the Web3 modal
    const wallet = getAccount();

    if (!wallet.isConnected) {
      this.handleToastMessage(
        "Please connect your wallet to proceed.",
        "error"
      );
    } else {
      if (wallet.address !== walletAddress) {
        this.handleToastMessage(
          "Please connect the correct wallet address to verify.",
          "error"
        );
      } else {
        const walletToUpdate = this.walletAddresses.find(
          (walletItem) =>
            walletItem.address === walletAddress &&
            walletItem.network === network
        );

        if (walletToUpdate && !walletToUpdate.verified) {
          // Update the found wallet's 'verified' field to true
          walletToUpdate.verified = true;

          try {
            // Update the Firestore document with the modified 'walletAddresses' array
            await updateUserDataInFirestore(
              this.userId,
              "walletAddresses",
              this.walletAddresses
            );
            this.handleToastMessage(
              "Wallet address verified successfully!",
              "success"
            );
          } catch (error) {
            console.error("Error updating wallet address:", error);
            this.handleToastMessage(
              "Failed to verify the wallet address. Please try again.",
              "error"
            );
          }
        } else {
          this.handleToastMessage(
            "This wallet address is already verified or not found for the specified network.",
            "error"
          );
        }
      }
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
        <h2 class="mb-3">Your Wallet Addresses:</h2>
        <div
          class="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          ${this.walletAddresses.length > 0
            ? html`
                ${this.walletAddresses.map(
                  (wallet, index) => html`
                    <div class="bg-gray-100 p-4 rounded-lg w-full">
                      <div class="flex justify-between items-center">
                        <div
                          class="text-sm font-medium w-full grid justify-between"
                        >
                          <div class="w-full flex justify-start">
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

                            <div class="flex gap-1 ml-2">
                              <label class="text-xs text-gray-400 font-normal">
                                ${wallet.verified
                                  ? html`
                                      <img
                                        src=${verifiedIcon}
                                        alt="verified-icon"
                                        height="16"
                                        width="16"
                                      />
                                    `
                                  : "Not verified"}
                              </label>

                              <!-- Display network icon -->
                              ${this.renderNetworkIcon(wallet.network)}
                            </div>
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
                            @click=${(event) => this.toggleDropdown(index)}
                            @blur=${this.handleButtonBlur}
                            class="p-2 text-sm font-medium text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:outline-none"
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
                            ${!wallet.verified
                              ? html`
                                  <div class="py-2 w-full">
                                    <a
                                      href="javascript:void(0);"
                                      @click=${() => {
                                        this.verifyWalletOwnership(
                                          wallet.address,
                                          wallet.network
                                        ); // Pass both wallet address and network
                                        this.toggleDropdown(index);
                                      }}
                                      class="block text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                      Verify Wallet
                                    </a>
                                  </div>
                                `
                              : ""}

                            <div class="py-2 w-full">
                              <a
                                href="javascript:void(0);"
                                @click=${() => {
                                  this.removeWalletAddress(index);
                                  this.toggleDropdown(index);
                                }}
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
      // case "SOL":
      //   return `https://explorer.solana.com/address/${address}`;
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
      // case "SOL":
      //   iconSrc = solIcon;
      //   break;
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
