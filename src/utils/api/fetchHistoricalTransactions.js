// src/api/fetchHistoricalTransactions.js
import { Connection, PublicKey } from "@solana/web3.js";

const SOLANA_URL = `https://solana-mainnet.core.chainstack.com/${
  import.meta.env.VITE_CHAINSTACK_API_KEY
}`;

const HELIUS_API_KEY = "a77ffb03-f3b8-4d0a-ab94-5364bdbefc02";
const HELIUS_URL = `https://api.helius.xyz/v0/transactions/?api-key=${HELIUS_API_KEY}`;

const connection = new Connection(SOLANA_URL);

// Helper function to introduce a delay (in ms)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchHistoricalTransactions(tokenAddress) {
  try {
    const pubKey = new PublicKey(tokenAddress);

    // Fetch signatures with a reduced limit to avoid rate limiting
    const signatures = await connection.getSignaturesForAddress(pubKey, {
      limit: 100,
    });

    if (!Array.isArray(signatures)) {
      throw new Error("Unexpected signatures format");
    }

    // Extract just the transaction signatures
    const transactionSignatures = signatures.map((sig) => sig.signature);

    // Fetch and parse the transaction details using Helius API
    const parsedTransactions = await parseTransaction(transactionSignatures);

    // Detect all unique transaction types
    const transactionTypes = [...new Set(parsedTransactions.map(tx => tx.type))];
    
    // Create an object to hold transactions by type
    const transactionsByType = {};

    // Populate transactionsByType with transactions of each type
    transactionTypes.forEach(type => {
      transactionsByType[type] = parsedTransactions.filter(tx => tx.type === type);
    });

    // Log all transaction types and their transactions
    transactionTypes.forEach(type => {
      console.log(`${type} Transactions: `, transactionsByType[type]);
    });

    // Return all transactions by type
    return transactionsByType;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return {};
  }
}

// Function to parse transaction signatures via Helius API
const parseTransaction = async (transactionSignatures) => {
  try {
    const response = await fetch(HELIUS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transactions: transactionSignatures, // Pass the transaction signatures here
      }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Parsed transactions: ", data);

    return data;
  } catch (error) {
    console.error("Error parsing transactions:", error);
    return [];
  }
};
