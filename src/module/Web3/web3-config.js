// path: ./src/module/Web3/web3-config.js
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
  InjectedConnector,
  configureChains,
  createConfig,
  mainnet,
} from "@wagmi/core";

import { chains, projectId } from "./data";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";

// Define your custom logger function
function customLogger(level, message) {
  // Customize the logging based on the level (e.g., 'warn', 'info', 'error')
  switch (level) {
    case "warn":
      console.warn(`[Custom Logger] ${message}`);
      break;
    case "info":
      console.info(`[Custom Logger] ${message}`);
      break;
    case "error":
      console.error(`[Custom Logger] ${message}`);
      break;
    default:
      console.log(`[Custom Logger] ${message}`);
  }
}

const { provider, webSocketProvider, publicClient, webSocketPublicClient } =
  configureChains(chains, [w3mProvider({ projectId })]);

const config = createConfig({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ projectId, chains }),
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    }),
  ],
  logger: {
    warn: (message) => customLogger("warn", message), // Customize warn logging
    info: (message) => customLogger("info", message), // Customize info logging
    error: (message) => customLogger("error", message), // Customize error logging
  },
  provider,
  webSocketProvider,
  publicClient,
  webSocketPublicClient,
});

const ethereumClient = new EthereumClient(config, chains);
export const web3modal = new Web3Modal({ projectId }, ethereumClient);
