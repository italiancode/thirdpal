import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { Buffer } from "buffer";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineConfig({
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
      process: true,
    }),
  ],

  resolve: {
    alias: {
      "@views": "./src/views",
      buffer: "buffer",
      crypto: "crypto-browserify", // Polyfill for the crypto module
    },
  },

  server: {
    hmr: {
      overlay: false,
    },
  },

  define: {
    Buffer: "globalThis.Buffer",
    global: {},
  },

  optimizeDeps: {
    include: ["buffer", "crypto-browserify"], // Add crypto-browserify to optimizeDeps
  },
});
