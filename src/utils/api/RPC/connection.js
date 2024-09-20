import { Connection, PublicKey } from "@solana/web3.js";

const chainstackApiKey = import.meta.env.VITE_CHAINSTACK_API_KEY;

const CS_URL = `https://solana-mainnet.core.chainstack.com/${chainstackApiKey}`;

// Setup Solana connection
export const connection = new Connection(CS_URL);
