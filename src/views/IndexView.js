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
                  <h1
                    class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
                  >
                    <span class="block xl:inline">Your</span>
                    <span class="block xl:inline">Web3 Companion</span>
                    <span class="block text-primary xl:inline">on Solana.</span>
                  </h1>
                  <p
                    class="text-base lg:text-xl mx-auto sm:max-w-md md:max-w-3xl"
                  >
                    ThirdPal provides token insights, wallet analytics, and
                    security tools for crypto enthusiasts on the Solana
                    blockchain.
                  </p>
                </div>
              </div>
              <!-- Right Image Section -->
              <div class="w-full md:w-1/2">
                <div class="h-auto overflow-hidden rounded-md sm:rounded-xl">
                  <img
                    src=${assets.appIcon}
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
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
            >
              Features
            </h2>
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
              ${this.renderFeatureCard(
                "Token Analyzer",
                "Deep analytical insights into Solana tokens, providing a holistic view of a token's market behavior and technical indicators."
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
          id="why-thirdpal"
          class="w-full py-12 md:py-24 lg:py-32 ${this.darkMode
            ? "dark"
            : "light"}"
        >
          <div class=" px-4 md:px-6 mx-auto">
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
            >
              Why ThirdPal?
            </h2>
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-12">
              ${this.renderWhyThirdPalCard(
                "Ease of Use",
                "Designed for non-technical users, ThirdPal presents complex data in a simplified and understandable way."
              )}
              ${this.renderWhyThirdPalCard(
                "Security First",
                "With address reputation checks and transaction simulators, users can protect themselves from malicious actors in the crypto space."
              )}
              ${this.renderWhyThirdPalCard(
                "Comprehensive Analytics",
                "From token performance to wallet insights, ThirdPal provides everything users need to navigate the blockchain confidently."
              )}
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          class="w-full py-12 md:py-24 lg:py-32 ${this.darkMode
            ? "section-dark"
            : "section-light"}"
        >
          <div class=" px-4 md:px-6 mx-auto">
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
            >
              Roadmap
            </h2>
            <div class="relative">
              <!-- Vertical line -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"
              ></div>

              ${this.renderRoadmapItem(
                "Phase 1: Core Features",
                "Q3 2024",
                [
                  "Token Analyzer Launch: Release the initial Token Analyzer, which includes performance insights, ownership distribution, and transaction history.",
                  "Wallet Insights: Launch wallet activity tracking and reputation scoring.",
                  "Address Reputation Checker: Implement a basic version of address reputation scoring and drainer detection.",
                ],
                "rocket"
              )}
              ${this.renderRoadmapItem(
                "Phase 2: Security and Simulations",
                "Q4 2024",
                [
                  "Transaction Simulator: Develop and release the Transaction Simulator, helping users preview transaction outcomes, including gas fees and contract interactions.",
                  "Enhanced Drainer Checker: Expand drainer detection capabilities to include phishing alerts and suspicious activity monitoring.",
                ],
                "shield"
              )}
              ${this.renderRoadmapItem(
                "Phase 3: Advanced Token and Contract Analysis",
                "Q1 2025",
                [
                  "Smart Contract Analyzer: Introduce a tool that allows users to analyze the risk of interacting with Solana smart contracts.",
                  "Contract Functionality Insights: Provide insights into smart contract functionality, helping users understand the terms of interaction before committing transactions.",
                ],
                "magnifying-glass"
              )}
              ${this.renderRoadmapItem(
                "Phase 4: Real-Time Alerts and Notifications",
                "Q2 2025",
                [
                  "Activity Alerts: Implement real-time push notifications and alerts for significant wallet activities (e.g., large transfers, malicious transactions).",
                  "Token Performance Alerts: Notify users of significant changes in token performance, such as sudden liquidity drops or price swings.",
                ],
                "bell"
              )}
              ${this.renderRoadmapItem(
                "Phase 5: Developer API",
                "Q3 2025",
                [
                  "Developer API Release: Provide developers with access to ThirdPal's analytics and security tools via API, enabling them to integrate these features into their own applications.",
                ],
                "code"
              )}
              ${this.renderRoadmapItem(
                "Phase 6: User Engagement and Growth",
                "Q4 2025",
                [
                  "Community Features: Launch community-driven features such as user-generated token insights, wallet activity sharing, and collaborative contract reviews.",
                  "Educational Tools: Introduce guides, tutorials, and interactive features to educate users on blockchain analytics and how to use ThirdPal effectively.",
                ],
                "users"
              )}
            </div>
          </div>
        </section>

        <section
          id="tech-stack"
          class="w-full py-12 md:py-24 lg:py-32 ${this.darkMode
            ? "dark"
            : "light"}"
        >
          <div class=" px-4 md:px-6 mx-auto">
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
            >
              Technology Stack
            </h2>
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-12">
              ${this.renderTechStackCard(
                "Blockchain",
                "Built on the Solana network, offering fast and scalable interactions."
              )}
              ${this.renderTechStackCard(
                "APIs",
                "Powered by the Helius API for fetching real-time on-chain data and analytics."
              )}
              ${this.renderTechStackCard(
                "Front-end",
                "The platform uses lit.js and Vite.js for a lightweight, fast, and modern user interface."
              )}
            </div>
          </div>
        </section>

        <section
          id="audience"
          class="w-full py-12 md:py-24 lg:py-32 ${this.darkMode
            ? "section-dark"
            : "section-light"}"
        >
          <div class=" px-4 md:px-6 mx-auto">
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
            >
              Who It's For
            </h2>
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
              ${this.renderAudienceCard(
                "Crypto Enthusiasts",
                "Perfect for individuals who are passionate about cryptocurrencies and want to gain deeper insights into their Solana investments."
              )}
              ${this.renderAudienceCard(
                "Solana Users",
                "Ideal for active users of the Solana blockchain who want to track their portfolio, analyze token performance, and enhance their security."
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

  renderRoadmapItem(phase, date, items, icon) {
    return html`
      <div class="relative mb-16 md:mb-24">
        <div class="flex flex-col md:flex-row items-center">
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 text-gray-500 mb-4 md:mb-0 md:mr-8 z-10"
          >
            ${this.renderIcon(icon)}
          </div>
          <div
            class="md:w-1/2 ${this.darkMode
              ? "dark"
              : "light"} p-6 rounded-lg shadow-lg md:ml-8"
          >
            <h3 class="text-xl font-bold mb-2">${phase}</h3>
            <p class=" mb-4">${date}</p>
            <ul class="space-y-2">
              ${items.map(
                (item) => html`
                  <li class="flex items-start">
                    <svg
                      class="w-5 h-5 text-gray-400 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>${item}</span>
                  </li>
                `
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  renderIcon(icon) {
    const icons = {
      rocket: html`<svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>`,
      shield: html`<svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>`,
      "magnifying-glass": html`<svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>`,
      bell: html`<svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        ></path>
      </svg>`,
      code: html`<svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>`,
      users: html`<svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>`,
    };
    return icons[icon] || "";
  }
  renderTechStackCard(title, description) {
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
  //

  static styles = [TWStyles, globalSemanticCSS, css``];
}

customElements.define("index-view", IndexView);

export default IndexView;
