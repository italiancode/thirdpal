import { html, css, LitElement } from "lit";
import { TWStyles } from "../css/twlit.js";
import globalSemanticCSS from "../css/global-semanticCSS.js";
import assets from "../module/assets.js";

class IndexView extends LitElement {
  static properties = {
    authenticated: { type: Boolean },
    darkMode: { type: Boolean },
  };

  constructor() {
    super();
    this.authenticated = false;
    const storedMode = localStorage.getItem("theme");
    this.darkMode = storedMode
      ? storedMode === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  async connectedCallback() {
    super.connectedCallback();
    const themeManager = document.querySelector("app-manager");
    if (themeManager) {
      this.darkMode = themeManager.darkMode;
      themeManager.addEventListener(
        "theme-updated",
        this.handleThemeUpdate.bind(this)
      );
    }
  }

  handleThemeUpdate(event) {
    this.darkMode = event.detail;
  }

  render() {
    return html`
      <div class="flex flex-col min-h-screen bg-white text-[#131c23]">
        <section
          class="w-full py-12 md:py-12 lg:py-14 xl:py-24 ${this.darkMode
            ? "dark"
            : "light"}"
        >
          <div class="container max-w-6xl mx-auto px-8 xl:px-5">
            <div class="flex flex-wrap items-center sm:-mx-3">
              <!-- Left Text Section -->
              <div class="w-full md:w-1/2 md:px-3">
                <div
                  class="space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 pb-6 md:pb-0 sm:pr-5 lg:pr-0"
                >
                  <!-- Title -->
                  <h1
                    class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
                  >
                    Smart Blockchain Analysis Tool
                  </h1>
                  <!-- Subtitle -->
                  <h2
                    class="text-2xl font-bold tracking-tight sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl"
                  >
                    <span class="block xl:inline">AI-Powered</span>
                    <span class="block text-primary xl:inline"
                      >Blockchain Insights</span
                    >
                    <span class="block xl:inline">for Everyone</span>
                  </h2>
                  <!-- Description -->
                  <p
                    class="text-base lg:text-xl mx-auto sm:max-w-md md:max-w-3xl"
                  >
                    ThirdPal transforms complex Solana blockchain data into
                    clear, actionable insights, empowering analysts, traders,
                    and enthusiasts to make informed decisions for a smarter
                    digital economy.
                  </p>
                </div>
              </div>
              <!-- Right Image Section -->
              <div class="w-full md:w-1/2">
                <div class="h-auto overflow-hidden rounded-md sm:rounded-xl">
                  <img
                    src="${assets.appIcon}"
                    alt="ThirdPal App Icon"
                    class="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          class="w-full py-12 md:py-24 lg:py-32  ${this.darkMode
            ? "section-dark"
            : "section-light"}"
        >
          <div class=" px-4 md:px-6 mx-auto">
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-primary mb-8"
            >
              Features
            </h2>
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
              ${this.renderFeatureCard(
                "Token Analyzer",
                html`
                  <p>
                    Gain deep analytical insights into Solana tokens, offering a
                    comprehensive overview of key token metrics and blockchain
                    interactions.
                  </p>
                  <ul class="mt-4 space-y-2">
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Detailed Token Metadata
                    </li>

                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Token Authority Details
                    </li>

                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Real-time Market Data and Price Information
                    </li>

                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Token Holder Distribution Insights
                    </li>

                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Recent Transaction History and Activity
                    </li>
                  </ul>
                  <div class="mt-6">
                    <a
                      href="/token-analyzer"
                      class="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 ease-in-out"
                    >
                      Explore the Token Analyzer
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                `
              )}
              ${this.renderFeatureCard(
                "Wallet Insights",
                "Comprehensive wallet tracking with insights into wallet activities, reputation, and security alerts."
              )}
              ${this.renderFeatureCard(
                "Transaction Simulator",
                "Understand the potential outcomes of transactions before executing them on the blockchain."
              )}
              ${this.renderFeatureCard(
                "Address Reputation and Drainer Checker",
                "Assess the safety and reputation of addresses, with real-time warnings for malicious activities."
              )}
            </div>
          </div>
        </section>

        <section
          id="audience"
          class="w-full py-12 md:py-24 lg:py-32 ${this.darkMode
            ? "dark"
            : "light"}"
        >
          <div class=" px-4 md:px-6 mx-auto">
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-primary mb-8"
            >
              Who It's For
            </h2>
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-12">
              ${this.renderAudienceCard(
                "Crypto Analysts",
                "Ideal for professionals who need deep insights into Solana tokens, market trends, and blockchain data for informed decision-making and research."
              )}
              ${this.renderAudienceCard(
                "Traders & Investors",
                "Perfect for those actively trading or investing in Solana-based assets, offering real-time data, price information, and transaction simulation for strategic planning."
              )}
              ${this.renderAudienceCard(
                "Solana Users",
                "Ideal for active users of the Solana blockchain who want to track their portfolio, analyze token performance, and enhance their security."
              )}
              ${this.renderAudienceCard(
                "Blockchain Developers",
                "Valuable for developers building on Solana, providing detailed token metadata, transaction insights, and wallet analysis to enhance their projects and understanding."
              )}
            </div>
          </div>
        </section>
      </div>
    `;
  }

  renderFeatureCard(title, description) {
    return html`
      <div
        class=" ${this.darkMode
          ? "dark"
          : "light"} border-primary border rounded-lg p-6"
      >
        <h3 class="text-xl font-bold mb-2">${title}</h3>
        <p class="">${description}</p>
      </div>
    `;
  }

  renderWhyThirdPalCard(title, description) {
    return html`
      <div
        class="${this.darkMode
          ? "dark"
          : "light"} border-primary border rounded-lg p-6"
      >
        <h3 class="text-xl font-bold mb-2">${title}</h3>
        <p class="">${description}</p>
      </div>
    `;
  }

  renderAudienceCard(title, description) {
    return html`
      <div
        class="${this.darkMode
          ? "dark"
          : "light"} border-primary border rounded-lg p-6"
      >
        <h3 class="text-xl font-bold mb-2">${title}</h3>
        <p class="">${description}</p>
      </div>
    `;
  }

  renderTeamMember(name, role, description) {
    return html`
      <div
        class="${this.darkMode
          ? "dark"
          : "light"} border-primary border rounded-lg p-6"
      >
        <h3 class="text-xl font-bold mb-2">${name}</h3>
        <p class="font-semibold mb-2">${role}</p>
        <p>${description}</p>
      </div>
    `;
  }
  //

  static styles = [TWStyles, globalSemanticCSS, css``];
}

customElements.define("index-view", IndexView);

export default IndexView;
