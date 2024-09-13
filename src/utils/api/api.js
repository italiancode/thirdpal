import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { LIQUIDITY_STATE_LAYOUT_V4 } from "@raydium-io/raydium-sdk";
import axios from "axios";
import { log } from "../logger";

const chainstackApiKey = import.meta.env.VITE_CHAINSTACK_API_KEY;
const CS_URL = `https://solana-mainnet.core.chainstack.com/${chainstackApiKey}`;

// Helper function to add timeout to fetch requests
export async function fetchWithTimeout(url, options, timeout = 10000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    ),
  ]);
}

export async function fetchMetaData(address) {
  const apiKey = import.meta.env.VITE_HELIUS_API_KEY;
  if (!apiKey) throw new Error("Helius API key is missing.");

  const URL = `https://api.helius.xyz/v0/token-metadata?api-key=${apiKey}`;
  const tokenAddresses = [address.trim()];

  try {
    const response = await fetchWithTimeout(URL, {
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

    return {
      onChain: tokenData.onChainMetadata?.metadata || "N/A",
      offChain: tokenData.offChainMetadata?.metadata || "N/A",
      accountInfo: tokenData.onChainAccountInfo?.accountInfo || "N/A",
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

export async function fetchJupiterData(mintAddress) {
  try {
    const response = await fetchWithTimeout(
      `https://price.jup.ag/v6/price?ids=${mintAddress}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const tokenData = data.data?.[mintAddress];

    if (!tokenData) {
      throw new Error("No data found for this token on Jupiter.");
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

export async function fetchTokenSupply(address) {
  try {
    const connection = new Connection(CS_URL);
    const publicKey = new PublicKey(address.trim());

    // Fetch the token supply
    const tokenSupply = await connection.getTokenSupply(publicKey);

    return {
      supply: tokenSupply?.value?.amount || "N/A",
    };
  } catch (error) {
    console.error("Error fetching token supply:", error);
    return null;
  }
}

export async function fetchTokenAccounts(address) {
  try {
    const connection = new Connection(CS_URL);
    const publicKey = new PublicKey(address.trim());

    const token_Accounts = await connection.getProgramAccounts(
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

    // Extract public keys and amounts from token accounts
    const tokenAccounts = token_Accounts
      .map(({ pubkey, account }) => {
        const data = account.data;
        if (data.length < 72) {
          console.warn(
            "Invalid token account data length for account:",
            pubkey.toBase58()
          );
          return null;
        }
        const amountBuffer = data.slice(64, 72);
        const amount = Buffer.from(amountBuffer).readBigUInt64LE();

        return {
          publicKey: pubkey.toBase58(),
          amount: Number(amount) / 1e9, // Convert lamports to SOL
        };
      })
      .filter(Boolean); // This filters out any null values from invalid accounts

    return {
      accounts: tokenAccounts || [],
    };
  } catch (error) {
    console.error("Error fetching token analytics:", error);
    return { accounts: [] }; // Return an empty array to prevent crashes
  }
}

const SOL_ID = "So11111111111111111111111111111111111111112";

export async function fetchRaydiumLiquidity(tokenId) {
  try {
    const connection = new Connection(CS_URL);

    // Fetch the Raydium liquidity pools
    const pools = await fetchRaydiumPools();

    const SOL_PAIR_ID = tokenId + "-" + SOL_ID;

    // Create a map for fast lookup
    const poolMap = new Map(pools.map((pool) => [pool["token-id"], pool]));

    // Find the pool info based on token-id
    const poolInfo = poolMap.get(SOL_PAIR_ID);

    // Liquidity locked in USD
    const liquidityLockedInUSD = poolInfo ? poolInfo.liquidity_locked : null;

    // Fetch current SOL price in USD from Jupiter
    const solPriceData = await fetchJupiterData(SOL_ID);
    const solPriceInUSD = solPriceData?.price || null;

    // Convert locked liquidity from USD to SOL if the price is available
    const liquidityLockedInSOL =
      liquidityLockedInUSD && solPriceInUSD
        ? liquidityLockedInUSD / solPriceInUSD
        : null;

    return {
      poolInfo,
      liquidityLockedInUSD, // Liquidity in USD
      liquidityLockedInSOL, // Liquidity in SOL
    };
  } catch (error) {
    console.error("Error fetching Raydium liquidity:", error);
    return null;
  }
}

async function fetchRaydiumPools() {
  try {
    const response = await axios.get("https://api.raydium.io/pools"); // Ensure this is the correct URL

    // log("Raydium Pools API Response:", response.data); // Log the response data to understand the format

    // Check if response data is an array
    if (Array.isArray(response.data)) {
      return response.data; // Return the array of pools
    } else {
      throw new Error("Unexpected response format from Raydium pools API.");
    }
  } catch (error) {
    console.error("Error fetching Raydium pools:", error);
    return [];
  }
}
