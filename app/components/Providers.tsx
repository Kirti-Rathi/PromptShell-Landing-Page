"use client";

import { Cloud, Cpu, Code2, MemoryStick, Wifi, Lock } from "lucide-react";

export default function Providers() {
  return (
    <section className="max-w-4xl mx-auto py-8 md:py-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-4xl font-bold flex items-center gap-2">
            <span
              style={{
                textShadow:
                  "0 2px 4px #4b5563, 0 0 8px #6b728080, 2px 4px 12px #9ca3af40",
              }}
              className="text-3xl"
            >
              {">"}_{" "}
            </span>
            Supported Providers
          </h2>
          <p className="text-gray-400 text-center">
            Choose between local processing for privacy or cloud providers for
            enhanced capabilities
          </p>
          <div className="w-full max-w-[900px] grid gap-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Local Processing */}
              <div className="flex flex-col items-center space-y-2 p-0 bg-white/5 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px] overflow-hidden">
                <div className="w-full pl-4 pt-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex flex-col items-center space-y-2 px-4 pt-1 w-full">
                  <div className="flex items-center space-x-1">
                    <Cpu />
                    <h3 className="text-2xl font-bold">Local Processing</h3>
                  </div>
                  <p className="text-gray-400">Via Ollama integration</p>
                  <div className="flex items-center mt-4 justify-center w-full">
                    <img
                      src="/provider-logo/ollama.png"
                      alt="Ollama"
                      className="h-14"
                    />
                    <span className="text-4xl pl-3 font-semibold">Ollama</span>
                  </div>
                  <div className="w-full my-4"></div>
                  <div className="w-full space-y-4 text-md text-gray-600 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-blue-500" />
                      <span>
                        Python 3.9+{" "}
                        <span className="text-gray-400 text-sm">
                          Required for core functionality
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MemoryStick className="h-4 w-4 text-purple-500" />
                      <span>
                        4GB+ RAM{" "}
                        <span className="text-gray-400 text-sm">
                          Recommened for local models
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-green-500" />
                      <span>
                        Internet Connection{" "}
                        <span className="text-gray-400 text-sm">
                          Required for initial setup
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-yellow-500" />
                      <span>Local models retain 100% privacy</span>
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                </div>
              </div>

              {/* Cloud Providers */}
              <div className="flex flex-col items-center space-y-2 p-0 bg-white/5 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px] overflow-hidden">
                <div className="w-full pl-4 pt-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex flex-col items-center space-y-2 px-4 pt-1 w-full flex-grow">
                  <div className="flex items-center space-x-1">
                    <Cloud />
                    <h3 className="text-2xl font-bold">Cloud Providers</h3>
                  </div>
                  <p className="text-gray-400">Multiple API options</p>
                  <div className="grid grid-cols-2 gap-2 w-full place-items-center">
                    <img
                      src="/provider-logo/groq.png"
                      alt="Groq"
                      className="h-7"
                    />
                    <img
                      src="/provider-logo/openai.png"
                      alt="OpenAI"
                      className="h-18"
                    />
                    <img
                      src="/provider-logo/gemini.png"
                      alt="gemini"
                      className="h-8"
                    />
                    <img
                      src="/provider-logo/anthropic.png"
                      alt="Anthropic"
                      className="h-5"
                    />
                    <img
                      src="/provider-logo/fireworks.png"
                      alt="Fireworks.ai"
                      className="h-24"
                    />
                    <img
                      src="/provider-logo/openrouter.svg"
                      alt="OpenRouter"
                      className="h-14"
                    />
                    <div className="col-span-2 flex justify-center">
                      <img
                        src="/provider-logo/deepseek.png"
                        alt="DeepSeek"
                        className="h-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
