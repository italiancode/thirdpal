// src/api/fetchHistoricalPriceData.js

// Function to fetch historical price data
export async function fetchHistoricalPriceData(tokenAddress) {
  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": "5ad9c61cb90c4433ad2783f42c60223c", // Your API key
    },
  };

  const url = `https://public-api.birdeye.so/defi/history_price?address=${tokenAddress}&address_type=token&type=15m`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Error fetching price data");
    }
    const data = await response.json();
    console.log("Historical Price Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching historical price data:", error);
    return null;
  }
}
