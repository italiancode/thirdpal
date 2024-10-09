// src/api/fetchHistoricalTransactions.js
import { Connection, PublicKey } from "@solana/web3.js";
import { connection } from "./RPC/connection";
import { error, log } from "../logger";

const HELIUS_API_KEY = "a77ffb03-f3b8-4d0a-ab94-5364bdbefc02";
const HELIUS_URL = `https://api.helius.xyz/v0/transactions/?api-key=${HELIUS_API_KEY}`;

// Helper function to introduce a delay (in ms)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to split array into chunks
const chunkArray = (arr, chunkSize) => {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

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

    // Extract just the transaction signatures from recent transactions
    const transactionSignatures = recentTransactions.map(
      (sig) => sig.signature
    );

    // After fetching signatures
    log(`Total signatures to process: ${transactionSignatures.length}`);
    log(`Transaction signatures: ${JSON.stringify(transactionSignatures)}`);

    // Split the transaction signatures into chunks of 100
    const chunks = chunkArray(transactionSignatures, 100);
    let allParsedTransactions = [];

    // Process each chunk of 100 transaction signatures
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      log(`Processing chunk ${i + 1} of ${chunks.length}`);

      const response = await fetch(HELIUS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactions: chunk }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch transactions: ${response.statusText}`);
      }

      const parsedTransactions = await response.json();

      allParsedTransactions = [...allParsedTransactions, ...parsedTransactions];

      // Add a delay between requests to avoid rate limits (optional)
      await delay(500); // 500ms delay between each request
    }

    // Filter out any empty transactions
    allParsedTransactions = allParsedTransactions.filter((tx) => tx);

    // Detect all unique transaction types
    const transactionTypes = [
      ...new Set(allParsedTransactions.map((tx) => tx.type)),
    ];

    // Create an object to hold transactions by type
    const transactionsByType = {};

    // Populate transactionsByType with transactions of each type
    transactionTypes.forEach((type) => {
      transactionsByType[type] = allParsedTransactions.filter(
        (tx) => tx.type === type
      );
    });

    // Extract more useful transaction information
    const transactionsAll = allParsedTransactions.map((tx) => {
      return {
        type: tx.type,
        signer: tx.feePayer,
        signature: tx.signature,
        fee: tx.fee, // Transaction fee
        timestamp: tx.timestamp,
        description: tx.description,
      };
    });

    log(transactions24H, transactionsByType, transactionsAll);

    // Return all transactions, including useful analysis data
    return {
      transactions24H,
      transactionsByType,
      transactionsAll,
    };
  } catch (err) {
    error("Error fetching transactions:", err);
    return {};
  }
}
