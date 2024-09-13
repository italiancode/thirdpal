import { LitElement, html, css } from "lit";
import { TWStyles } from "../../css/twlit";
import globalSemanticCSS from "../../css/global-semanticCSS";
import TokenDataDisplay from "./TokenDataDisplay";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

class TokenAnalyzer extends LitElement {
  static properties = {
    address: { type: String },
    bigdata: { type: Object },
    loadingData: { type: Object },
    error: { type: String },
    loading: { type: Boolean },
    darkMode: { type: Boolean },
  };

  constructor() {
    super();
    this.address = "";
    this.bigdata = null;
    this.loadingData = null;
    this.error = null;
    this.loading = false;
  }

  // Helper function to add timeout to fetch requests
  async fetchWithTimeout(url, options, timeout = 10000) {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), timeout)
      ),
    ]);
  }

  async fetchData() {
    // Set placeholder values while awaiting real data
    this.loading = true; // Show loading state
    this.error = null;

    // Initialize bigdata with placeholders (dummy data)
    this.bigdata = {
      onChain: "fetching",
      offChain: "fetching",
      accountInfo: "fetching",
      jupiterData: "fetching",
      analytics: "fetching",
    };

    const apiKey = import.meta.env.VITE_HELIUS_API_KEY;
    const URL = `https://api.helius.xyz/v0/token-metadata?api-key=${apiKey}`;
    const tokenAddresses = [this.address.trim()];

    try {
      // Fetch token metadata
      const response = await this.fetchWithTimeout(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mintAccounts: tokenAddresses,
          includeOffChain: true,
          disableCache: false,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Response: ${errorText}`
        );
      }

      const data = await response.json();
      if (!data || data.length === 0) {
        throw new Error("No metadata found for this token.");
      }

      const tokenData = data[0];

      // Update bigdata with real token metadata
      this.bigdata = {
        ...this.bigdata, // Retain placeholders for other data
        onChain: tokenData.onChainMetadata?.metadata || "N/A",
        offChain: tokenData.offChainMetadata?.metadata || "N/A",
        accountInfo: tokenData.onChainAccountInfo?.accountInfo || "N/A",
      };

      this.requestUpdate(); // Request UI update

      // Fetch liquidity data
      this.loading = "Fetching liquidity data...";
      const jupiterData = await this.fetchJupiterLiquidity(this.address.trim());

      this.bigdata = {
        ...this.bigdata,
        jupiterData: jupiterData || "N/A",
      };

      this.requestUpdate(); // Request UI update

      // Fetch token analytics
      this.loading = "Fetching token analytics...";
      const tokenAnalytics = await this.fetchTokenAnalytics();

      this.bigdata = {
        ...this.bigdata,
        analytics: tokenAnalytics || "N/A",
      };

      this.requestUpdate(); // Request UI update
      this.error = null; // Reset error state
    } catch (error) {
      console.error("Fetch Error:", error);
      this.error = `Failed to fetch metadata: ${error.message}. Please check the token address.`;
      this.bigdata = null;
    } finally {
      this.loading = false; // Hide loading state
    }
  }

  async fetchJupiterLiquidity(mintAddress) {
    try {
      const response = await this.fetchWithTimeout(
        `https://price.jup.ag/v6/price?ids=${mintAddress}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const tokenData = data.data?.[mintAddress];

      if (!tokenData) {
        throw new Error("No data found for this token on Jupiter");
      }

      return {
        tokenData,
        price: tokenData.price,
      };
    } catch (error) {
      console.error("Error fetching Jupiter liquidity:", error);
      return null;
    }
  }

  async fetchTokenAnalytics() {
    try {
      const apiKey = import.meta.env.VITE_CHAINSTACK_API_KEY;
      const URL = `https://solana-mainnet.core.chainstack.com/${apiKey}`;
      const connection = new Connection(URL);
      const publicKey = new PublicKey(this.address.trim());

      const tokenAccounts = await connection.getProgramAccounts(
        TOKEN_PROGRAM_ID,
        {
          filters: [
            { dataSize: 165 },
            {
              memcmp: {
                offset: 0,
                bytes: publicKey.toBase58(),
              },
            },
          ],
        }
      );

      const tokenHolders = tokenAccounts.map(({ pubkey, account }) => {
        const data = account.data;
        const amountBuffer = data.slice(64, 72);
        const amount = Buffer.from(amountBuffer).readBigUInt64LE();

        return {
          publicKey: pubkey.toBase58(),
          amount: amount / BigInt(1e9),
        };
      });

      const tokenSupply = await connection.getTokenSupply(publicKey);

      return {
        supply: tokenSupply?.value?.amount || "N/A",
        holders: tokenHolders || [],
      };
    } catch (error) {
      console.error("Error fetching token analytics:", error);
      return null;
    }
  }

  render() {
    return html`
      <div class="">
        <h2 class="text-2xl font-medium mb-5">Token Analyzer</h2>
        <div class="input-container">
          <input
            type="text"
            placeholder="Enter Token Address"
            .value="${this.address}"
            @input="${(e) => (this.address = e.target.value)}"
          />
          <button ?disabled="${this.loading}" @click="${this.fetchData}">
            ${this.loading ? "Loading..." : "Analyze Token"}
          </button>
        </div>

        ${this.error ? html`<p class="error">${this.error}</p>` : ""}
        ${this.loading ? html`<p class="loader">${this.loading}</p>` : ""}
        ${this.renderData()}
      </div>
    `;
  }

  closeOverlay() {
    this.bigdata = null;
  }

  renderData() {
    const dataToDisplay = this.bigdata || this.loadingData;

    if (!dataToDisplay) return null;

    return html`
      <token-data-display
        .bigdata="${dataToDisplay}"
        .darkMode="${this.darkMode}"
        @close-overlay="${this.closeOverlay}"
      >
      </token-data-display>
    `;
  }

  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      * {
        box-sizing: border-box;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
      }

      input {
        flex: 1;
        padding: 12px;
        font-size: 16px;
        border: none;
        border-radius: 6px;
        outline: none;
        color: black;
        background-color: white;
      }

      button {
        padding: 12px;
        font-size: 16px;
        background-color: #85ffb6;
        border: none;
        color: black;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #6bff8a;
      }

      button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .error {
        color: #ff6b6b;
        margin-bottom: 20px;
        text-align: center;
      }

      .loader {
        text-align: center;
        color: #85ffb6;
      }
    `,
  ];
}

customElements.define("token-analyzer", TokenAnalyzer);

export default TokenAnalyzer;
