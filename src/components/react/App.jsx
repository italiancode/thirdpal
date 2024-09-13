import React, { useState } from "react";
import TokenAnalyzer from "../lit/TokenAnalyzer";
import WalletAnalyzer from "../lit/WalletAnalyzer";

function App() {
  const [currentTool, setCurrentTool] = useState("token");

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white flex flex-col items-center p-4">
      {/* Navigation */}
      <nav className="w-full max-w-4xl bg-[#1A202C] p-4 rounded-lg flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
        {/* Buttons */}
        <div className="flex flex-wrap items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg text-sm text-black border font-medium transition duration-300 ${
              currentTool === "token"
                ? "bg-primary text-black"
                : "bg-button-unselected-bg text-button-unselected-text"
            } hover:bg-secondary`}
            onClick={() => setCurrentTool("token")}
          >
            Token Analyzer
          </button>

          <button
            className={`px-4 py-2 rounded-lg text-sm text-black border font-medium transition duration-300 ${
              currentTool === "wallet"
                ? "bg-primary text-black"
                : "bg-button-unselected-bg text-button-unselected-text"
            } hover:bg-secondary`}
            onClick={() => setCurrentTool("wallet")}
          >
            Wallet Analyzer
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="w-full max-w-4xl bg-[#1A202C] mt-8 p-6 rounded-lg shadow-lg">
        {currentTool === "token" && (
          <div className="animate-fadeIn">
            <token-analyzer></token-analyzer>
          </div>
        )}

        {currentTool === "wallet" && (
          <div className="animate-fadeIn">
            <wallet-analyzer></wallet-analyzer>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
