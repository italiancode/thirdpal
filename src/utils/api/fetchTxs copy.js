// src/api/fetchHistoricalTransactions.js
import { Connection, PublicKey } from "@solana/web3.js";
import { connection } from "./RPC/connection";
import { error, log } from "../logger";

const HELIUS_API_KEY = "a77ffb03-f3b8-4d0a-ab94-5364bdbefc02";
const HELIUS_URL = `https://api.helius.xyz/v0/transactions/?api-key=${HELIUS_API_KEY}`;

// Helper function to introduce a delay (in ms)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchTransactions(tokenAddress) {
  try {
    const pubKey = new PublicKey(tokenAddress);

    // Fetch signatures with a reduced limit to avoid rate limiting
    const signatures = await connection.getSignaturesForAddress(pubKey, {
      limit: 1000,
    });

    if (!Array.isArray(signatures)) {
      throw new Error("Unexpected signatures format");
    }

    // Get the current time and the time 24 hours ago
    const currentTime = Date.now();
    const oneDayAgo = currentTime - 24 * 60 * 60 * 1000;

    // Filter transactions based on timestamp
    const recentTransactions = signatures.filter((tx) => {
      const txTime = tx.blockTime * 1000; // Convert to milliseconds
      return txTime >= oneDayAgo;
    });

    const transactions24H = recentTransactions;

    // Extract just the transaction signatures
    const transactionSignatures = signatures.map((sig) => sig.signature);

    // Fetch and parse the transaction details using Helius API
    const parsedTransactions = await parseTransaction(transactionSignatures);

    // Detect all unique transaction types
    const transactionTypes = [
      ...new Set(parsedTransactions.map((tx) => tx.type)),
    ];

    // Create an object to hold transactions by type
    const transactionsByType = {};

    // Populate transactionsByType with transactions of each type
    transactionTypes.forEach((type) => {
      transactionsByType[type] = parsedTransactions.filter(
        (tx) => tx.type === type
      );
    });

    // Extract more useful transaction information
    const transactionsAll = parsedTransactions.map((tx) => {
      return {
        type: tx.type,
        signer: tx.feePayer,
        signature: tx.signature,
        fee: tx.fee, // Transaction fee
        timestamp: tx.timestamp,
      };
    });

    log(transactions24H, transactionsByType, transactionsAll);

    // Return all transactions, including useful analysis data
    return {
      transactions24H,
      transactionsByType,
      transactionsAll, // Additional data for transaction analysis
    };
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

    // We assume Helius API returns detailed transaction information here
    return data;
  } catch (error) {
    error("Error parsing transactions:", error);
    return [];
  }
};
