"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const Installation = () => {
  const [activeTab, setActiveTab] = useState("linux");
  const [installCopied, setInstallCopied] = useState(false);
  const [runCopied, setRunCopied] = useState(false);

  const copyToClipboard = async (text: string, type: "install" | "run") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "install") {
        setInstallCopied(true);
        setTimeout(() => setInstallCopied(false), 2000);
      } else {
        setRunCopied(true);
        setTimeout(() => setRunCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div id="installation" className="w-full max-w-4xl mx-auto py-10">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-4">
          <span
            style={{
              textShadow:
                "0 2px 4px #4b5563, 0 0 8px #6b728080, 2px 4px 12px #9ca3af40",
            }}
            className="text-3xl"
          >
            {">"}_{" "}
          </span>
          Installation Guide
        </h2>
        <p className="text-gray-400">
          Get started instantly with just one command - copy, paste, and
          you&apos;re ready to go!
        </p>
      </div>
      {/* Installation Steps */}
      <div className="w-full border border-gray-100 bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Choose Platform</h3>
        {/* Tab Headers */}
        <div className="grid w-full grid-cols-2 rounded-md bg-gray-100 shadow-sm p-1">
          <button
            className={`rounded-md  cursor-pointer px-6 py-2 transition-colors ${
              activeTab === "linux"
                ? "bg-white text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("linux")}
          >
            Linux & macOS
          </button>
          <button
            className={`rounded-md cursor-pointer px-6 py-2 transition-colors ${
              activeTab === "windows"
                ? "bg-white text-black"
                : "text-gray-500 hover:text-black "
            }`}
            onClick={() => setActiveTab("windows")}
          >
            Windows
          </button>
        </div>

        {/* Terminal Window */}
        <div className="mt-3 rounded-lg overflow-hidden bg-[#1e1e1e] shadow-lg">
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-6 py-3 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm relative">
            <div className="flex items-start">
              <span className="text-[#27c93f] mr-2">$</span>
              <span className="text-white">
                {activeTab === "linux"
                  ? "pipx install promptshell"
                  : "pip install promptshell"}
              </span>
            </div>
            <button
              onClick={() =>
                copyToClipboard(
                  activeTab === "linux"
                    ? "pipx install promptshell"
                    : "pip install promptshell",
                  "install"
                )
              }
              className="p-2 cursor-pointer text-gray-400 hover:text-white rounded transition-colors absolute top-4 right-4"
              aria-label={installCopied ? "Copied" : "Copy to clipboard"}
            >
              {installCopied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Run PromptShell */}
      <div className="w-full border border-gray-100 mt-5 bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Run PromptShell</h3>
        <div className=" rounded-lg overflow-hidden bg-[#1e1e1e] shadow-lg">
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-6 py-3 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm relative">
            <div className="flex items-start">
              <span className="text-[#27c93f] mr-2">$</span>
              <span className="text-white">promptshell</span>
            </div>
            <button
              onClick={() => copyToClipboard("promptshell", "run")}
              className="p-2 cursor-pointer text-gray-400 hover:text-white rounded transition-colors absolute top-4 right-4"
              aria-label={runCopied ? "Copied" : "Copy to clipboard"}
            >
              {runCopied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
