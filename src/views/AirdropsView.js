import { LitElement, html, css } from "lit";
import { airdropData } from "../data/airdropData";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";

// Network icons
import ethIcon from "../../public/icons/eth.png";
import bscIcon from "../../public/icons/bsc.png";
import arbIcon from "../../public/icons/arb.png";
import solIcon from "../../public/icons/sol.png";

class AirdropsView extends LitElement {
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
    this.airdrops = airdropData;
  }

  render() {
    return html`
      <div>
        <h2 class="text-2xl font-bold mb-4">All Airdrops</h2>
        <div
          class="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          ${this.airdrops.map(
            (airdrop, index) => html`
              <a href="/airdrop/${airdrop.id}" class="text-start">
                <div class="flex bg-gray-100 p-4 rounded-lg w-full list-none">
                  <div class="w-2/3 p-1 space-y-2">
                    <div class="airdrop-name text-lg font-bold">
                      ${airdrop.name}
                    </div>
                    <div class="airdrop-details grid gap-2 text-sm">
                      <div>
                        <span class="network-info font-semibold"
                          ><label class="">Network: </label
                          >${airdrop.network}</span
                        >
                        |
                        <span class="">
                          <label class="reward-info font-semibold">Task:</label>
                          ${airdrop.type}
                        </span>
                      </div>

                      <div>
                        <span class="reward-info font-semibold">
                          <label>Reward:</label> ${airdrop.totalRewards}
                          ${airdrop.rewardToken}
                        </span>
                      </div>

                      <div class="reward-info">
                        <span class="">
                          <label class="font-semibold">Start Date: </label
                          >${airdrop.startDate}
                        </span>
                      </div>

                      <div class="reward-info">
                        <span class="">
                          <label class="font-semibold">End Date: </label
                          >${airdrop.endDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/3 flex justify-center items-center">
                    ${airdrop.organizer.projectImage
                      ? html`
                          <img
                            src="${airdrop.organizer.projectImage}"
                            alt="Project Image"
                            class="h-16 w-16"
                          />
                        `
                      : html`
                          ${airdrop.network === "ETH"
                            ? html`<img
                                src="${ethIcon}"
                                alt="ETH Icon"
                                class="h-16 w-16"
                              />`
                            : airdrop.network === "BSC"
                            ? html`<img
                                src="${bscIcon}"
                                alt="BSC Icon"
                                class="h-16 w-16"
                              />`
                            : airdrop.network === "ARB"
                            ? html`<img
                                src="${arbIcon}"
                                alt="ARB Icon"
                                class="h-16 w-16"
                              />`
                            : airdrop.network === "SOL"
                            ? html`<img
                                src="${solIcon}"
                                alt="SOL Icon"
                                class="h-16 w-16"
                              />`
                            : html`<!-- Default image or icon if network is not specified -->`}
                        `}
                  </div>
                </div>
              </a>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("airdrops-view", AirdropsView);
export default AirdropsView;
