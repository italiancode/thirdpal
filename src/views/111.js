<section
id="roadmap"
class="w-full py-12 md:py-24 lg:py-32 ${this.darkMode
? "dark"
: "light"}"
>
<div class=" px-4 md:px-6 mx-auto">
  <h2
    class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary"
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
"rocket",
[
  "Phase 1: Core Features", // Phase is ready
  "Token Analyzer Launch: Release the initial Token Analyzer, which includes performance insights, ownership distribution, and transaction history.", // Feature is ready
]
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



renderRoadmapItem(phase, date, items, icon, readyFeatures = []) {
  const isPhaseReady = readyFeatures.includes(phase);

  return html`
    <div class="relative mb-16 md:mb-24">
      <div class="flex flex-col md:flex-row items-center">
        <div
          class="flex items-center justify-center w-16 h-16 rounded-full 
          ${isPhaseReady
      ? "bg-green-200 text-green-500"
      : "bg-gray-200 text-gray-500"} mb-4 md:mb-0 md:mr-8 z-10"
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
                    class="w-5 h-5 ${readyFeatures.includes(item)
            ? "text-green-400"
            : "text-gray-400"} mr-2 mt-1 flex-shrink-0"
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
      class="w-8 h-8 bg-green-200 text-green-500"
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
