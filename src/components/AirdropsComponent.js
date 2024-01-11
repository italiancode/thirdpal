import { LitElement, html, css } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";

// Network icons
import ethIcon from "../../public/icons/eth.png";
import bscIcon from "../../public/icons/bsc.png";
import arbIcon from "../../public/icons/arb.png";
import solIcon from "../../public/icons/sol.png";
import { firestore_db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

class AirdropsComponent extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Custom CSS for demarcation effect */
      .airdrop-details {
        color: var(--text-color-primary, #333);
      }
      .airdrop-name {
        color: var(--text-color-heading, #0d2b3e);
      }
      .network-info {
        color: var(--text-color-secondary, #6b7280);
      }
      .reward-info {
        color: var(--text-color-accent, #4b5563);
      }
    `,
  ];

  static properties = {
    airdrops: { type: Array },
  };

  constructor() {
    super();
    this.airdrops = [];
    this.fetchAirdrops();
  }

  async fetchAirdrops() {
    try {
      const querySnapshot = await getDocs(
        collection(firestore_db, "airdropForms")
      ); // Get a snapshot of the airdropForms collection
      querySnapshot.forEach((doc) => {
        // Iterate through documents and push data to airdrops array
        this.airdrops.push(doc.data());
      });
      this.requestUpdate(); // Trigger an update to render the fetched data
    } catch (error) {
      console.error("Error fetching airdrops: ", error);
    }
  }

  render() {
    const limitedAirdrops = this.airdrops.slice(0, 3); // Limit to the first three airdrops

    return html`
      <div>
        <h2 class="text-2xl font-bold mb-4">Airdrops</h2>
        <div>
        ${
          this.airdrops.length === 0
            ? html`<p>No airdrops found.</p>`
            : html`
                <ul
                  class="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
                >
                  ${this.airdrops.map(
                    (airdrop, index) => html`
                      <li class="ad-card-link list-none">
                        <a
                          href="/airdrop/${airdrop.slug}"
                          class="ad-card grid gap-3 bg-white border p-4 rounded-lg w-full overflow-hidden text-start"
                        >
                          <h3
                            class="airdrop-name min-w-full mb-1 capitalize whitespace-nowrap text-lg text-ellipsis overflow-hidden"
                          >
                            ${airdrop.title}
                          </h3>
                          <div
                            class="airdrop-details grid grid-cols-3 items-center gap-2 text-sm min-w-full"
                          >
                            <div
                              class="network-info whitespace-nowrap flex gap-2 px-2 bg-gray-300 rounded-full w-full overflow-hidden"
                            >
                              <label
                                for="blockchain network"
                                class="font-medium"
                                >🌐</label
                              >
                              ${
                                airdrop.network === "ETH"
                                  ? html`<a
                                      href="http://etherscan.io/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="text-ellipsis overflow-hidden"
                                      >etherscan.io</a
                                    >`
                                  : airdrop.network === "BSC"
                                  ? html`<a
                                      href="https://bscscan.com/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="text-ellipsis overflow-hidden"
                                      >bscscan.com</a
                                    >`
                                  : airdrop.network === "ARB"
                                  ? html`<a
                                      href="https://arbiscan.io/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="text-ellipsis overflow-hidden"
                                      >arbiscan.io</a
                                    >`
                                  : "" // You can add similar conditions for other networks or handle accordingly
                              }
                            </div>

                            <div
                              class="network-info whitespace-nowrap flex gap-2 px-2 bg-white border rounded-full w-full overflow-hidden items-center justify-center"
                            >
                              <div class="text-ellipsis overflow-hidden">
                                ${airdrop.taskType.name} task
                              </div>
                            </div>

                            <div
                              class="network-info whitespace-nowrap flex gap-2 px-2 bg-white border rounded-full w-full overflow-hidden items-center justify-center"
                            >
                              <div class="text-ellipsis overflow-hidden">
                                ${airdrop.completed === false
                                  ? html`Active`
                                  : html`Completed`}
                                ${new Date(airdrop.endDate) < new Date()
                                  ? html`Ended`
                                  : html``}
                              </div>
                            </div>
                          </div>

                          <div
                            class="flex items-start gap-3 min-h-10 max-h-fit"
                          >
                            <div
                              class="airdrop-details w-2/3 h-full grid gap-2 text-sm"
                            >
                              <div class="reward-info whitespace-nowrap">
                                <label class="font-normal">Reward:</label>
                                ${airdrop.totalRewards} ${airdrop.rewardToken}
                              </div>

                              <div class="reward-info">
                                <label class="font-normal">Start Date: </label
                                >${airdrop.startDate}
                              </div>

                              <div class="reward- info">
                                <label class="font-normal">End Date: </label
                                >${airdrop.endDate}
                              </div>
                            </div>

                            <div class="w-1/3 rounded-md overflow-hidden">
                              ${airdrop.organizer.projectImage
                                ? html`
                                    <responsive-image-frame
                                      mainSrc="${airdrop.organizer
                                        .projectImage}"
                                      alt="${airdrop.organizer.name} logo"
                                      fallbackLabel="this is an organizer logo"
                                      type="thumbnail"
                                      class="object-fill"
                                    >
                                    </responsive-image-frame>
                                  `
                                : html`
                                    ${airdrop.network === "ETH"
                                      ? html` <responsive-image-frame
                                          mainSrc="${ethIcon}"
                                          alt="${ethIcon} logo"
                                          fallbackLabel="this is an organizer logo"
                                          type="thumbnail"
                                          class="w-full"
                                        >
                                        </responsive-image-frame>`
                                      : airdrop.network === "BSC"
                                      ? html`<responsive-image-frame
                                          mainSrc="${bscIcon}"
                                          alt="bsc icon logo"
                                          fallbackLabel="this is an organizer logo"
                                          type="thumbnail"
                                          class="w-full"
                                        >
                                        </responsive-image-frame> `
                                      : airdrop.network === "ARB"
                                      ? html` <responsive-image-frame
                                          mainSrc="${arbIcon}"
                                          alt="arb icon logo"
                                          fallbackLabel="this is an organizer logo"
                                          type="thumbnail"
                                          class="w-full"
                                        >
                                        </responsive-image-frame>`
                                      : html` <responsive-image-frame
                                          mainSrc="${airdrop.organizer
                                            .projectImage}"
                                          alt="${airdrop.organizer.name} logo"
                                          fallbackLabel="this is an organizer logo"
                                          type="thumbnail"
                                          class="w-full"
                                        >
                                        </responsive-image-frame>`}
                                  `}
                            </div>
                          </div>
                        </a>
                      </li>
                    `
                  )}
                </ul>
              `
        }
      </div>
        </div>
        <!-- Link to /airdrops to view more airdrops -->
        ${
          this.airdrops.length > 3
            ? html`<div class="text-center md:text-start w-full mt-5">
                <a href="/airdrops" class="nav-item w-fit">
                  View More Airdrops
                </a>
              </div>`
            : ""
        }
      </div>
    `;
  }
}

customElements.define("airdrops-component", AirdropsComponent);
export default AirdropsComponent;
