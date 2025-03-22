"use client";

import { useState } from "react";
import { ChevronsDown } from "lucide-react";

interface ConfigurationSetupProps {
  className?: string;
}

const ConfigurationSetup = ({ className = "" }: ConfigurationSetupProps) => {
  const [operationMode, setOperationMode] = useState("local");
  const [localModel, setLocalModel] = useState("llama3.1:8b");
  const [apiProvider, setApiProvider] = useState("Groq");
  const [configStep, setConfigStep] = useState(1);

  const localModels = [
    "llama3.1:8b",
    "llama3:8b-instruct-q4_1",
    "deepseek-r1:latest",
    "mistral:latest",
  ];
  const apiProviders = [
    "Groq",
    "OpenAI",
    "Google",
    "Anthropic",
    "Fireworks",
    "OpenRouter",
    "Deepseek",
  ];

  return (
    <div className={`max-w-4xl py-18 mx-auto mt-5 mb-5 bg-white ${className}`}>
      <h3 className="text-4xl text-center font-bold mb-3">
        <span
          style={{
            textShadow:
              "0 2px 4px #4b5563, 0 0 8px #6b728080, 2px 4px 12px #9ca3af40",
          }}
          className="text-3xl"
        >
          {">"}_{" "}
        </span>
        Interactive Configuration Setup
      </h3>
      <div className="text-center mt-6">
        <p className="text-lg text-gray-700 font-semibold">
          Try it out right here!
        </p>
        <ChevronsDown className="mx-auto mt-2 w-6 h-6 text-gray-600 animate-bounce" />
      </div>

      <div
        className={"mb-10 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl"}
      >
        <div className="rounded-lg overflow-hidden bg-[#1e1e1e] shadow-lg">
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-6 py-3 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            <div className="flex items-start mb-4">
              <span className="text-[#27c93f] mr-2">$</span>
              <span className="text-white"> --config</span>
            </div>

            {/* Operation Mode Selection */}
            <div className="mb-6">
              <div className="text-gray-400 animate-pulse mb-2">
                ? Select operation mode:
              </div>
              <div className="space-y-1">
                {["local", "api"].map((mode) => (
                  <div
                    key={mode}
                    className={`flex items-center cursor-pointer ${
                      operationMode === mode ? "text-white" : "text-gray-400"
                    }`}
                    onClick={() => {
                      setOperationMode(mode);
                      setConfigStep(2);
                    }}
                  >
                    <span className="mr-2">
                      {operationMode === mode ? "»" : " "}
                    </span>
                    <span>
                      {mode === "local"
                        ? "local (Privacy-first, needs 4GB+ RAM)"
                        : "api (Faster but requires internet)"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Selection - Local */}
            {configStep >= 2 && operationMode === "local" && (
              <div className="mb-6">
                <div className="text-gray-400 animate-pulse mb-2">
                  ? Choose local model: # displays installed ollama models
                </div>
                <div className="space-y-1">
                  {localModels.map((model) => (
                    <div
                      key={model}
                      className={`flex items-center cursor-pointer ${
                        localModel === model ? "text-white" : "text-gray-400"
                      }`}
                      onClick={() => {
                        setLocalModel(model);
                        setConfigStep(3);
                      }}
                    >
                      <span className="mr-2">
                        {localModel === model ? "»" : " "}
                      </span>
                      <span>{model}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* API Provider Selection */}
            {configStep >= 2 && operationMode === "api" && (
              <div className="mb-6">
                <div className="text-gray-400 animate-pulse mb-2">
                  ? API provider selection:
                </div>
                <div className="space-y-1">
                  {apiProviders.map((provider) => (
                    <div
                      key={provider}
                      className={`flex items-center cursor-pointer ${
                        apiProvider === provider
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                      onClick={() => {
                        setApiProvider(provider);
                        setConfigStep(3);
                      }}
                    >
                      <span className="mr-2">
                        {apiProvider === provider ? "»" : " "}
                      </span>
                      <span>{provider}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Configuration Summary */}
            {configStep >= 3 && (
              <div className="mt-4">
                <div className="text-gray-400">
                  Active model:{" "}
                  {operationMode === "local" ? localModel : apiProvider}
                </div>
                <div className="text-green-500 mt-2">
                  ✅ Configuration updated!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationSetup;
