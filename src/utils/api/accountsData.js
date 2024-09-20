import { PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { connection } from "./RPC/connection";

export async function fetchTokenAccounts(address) {
  try {
    const publicKey = new PublicKey(address.trim());
    const token_Accounts = await connection.getProgramAccounts(
      TOKEN_PROGRAM_ID,
      {
        filters: [
          { dataSize: 165 }, // Filter for token account size
          {
            memcmp: {
              offset: 0,
              bytes: publicKey.toBase58(),
            },
          },
        ],
      }
    );

    // Extract public keys, amounts, and holders from token accounts
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

        // Extract the amount (bytes 64 to 72)
        const amountBuffer = data.slice(64, 72);
        const amount = Buffer.from(amountBuffer).readBigUInt64LE(); // Token amount in raw units (smallest units)
        const tokenAmount = Number(amount) / 1e9; // Convert to token units

        // Extract the token holder (account owner)
        const holderPublicKey = new PublicKey(data.slice(32, 64)); // The owner of the token account

        // Return all accounts, regardless of token amount
        return {
          publicKey: pubkey.toBase58(), // The token account's public key
          amount: tokenAmount, // Token amount in token units
          holder: holderPublicKey.toBase58(), // The owner of the token account (holder)
        };
      })
      .filter(Boolean); // Filter out any null or invalid token accounts

    // Group token amounts by holder
    const holderBalances = tokenAccounts.reduce((acc, { holder, amount }) => {
      // If the holder is already in the object, accumulate the token amount
      if (acc[holder]) {
        acc[holder] += amount;
      } else {
        acc[holder] = amount; // If the holder is not in the object, initialize with the current amount
      }
      return acc;
    }, {});

    // Convert holderBalances object to an array of holders with their total balances
    const uniqueHoldersWithBalances = Object.entries(holderBalances)
      .map(([holder, totalAmount]) => ({
        holder,
        totalAmount, // Total amount held by this holder
      }))
      .filter(({ totalAmount }) => totalAmount > 0); // Filter out holders with zero balance

    return {
      accounts: tokenAccounts || [], // Return all token accounts
      holders: uniqueHoldersWithBalances || [], // Return the unique holders list with their total balances
    };
  } catch (error) {
    console.error("Error fetching token accounts and holders:", error);
    return { accounts: [], holders: [] }; // Return empty arrays to prevent crashes
  }
}
