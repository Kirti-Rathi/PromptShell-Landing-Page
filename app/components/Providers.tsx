"use client";

export default function Providers() {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter ">
            <span
              style={{
                textShadow:
                  "0 2px 4px #4b5563, 0 0 8px #6b728080, 2px 4px 12px #9ca3af40",
              }}
            >
              {">"}_{" "}
            </span>
            Supported Platforms
          </h2>
          <div className="w-full max-w-[900px] grid gap-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Local Processing */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white/5 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-[400px]">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/5 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Local Processing</h3>
                </div>
                <p className="text-gray-400">Via Ollama integration</p>
                <div className="flex items-center justify-center w-full">
                  <img src="/globe.svg" alt="Ollama" className="h-12" />
                </div>
              </div>

              {/* Cloud Providers */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white/5 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px]">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/5 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Cloud Providers</h3>
                </div>
                <p className="text-gray-400">Multiple API options</p>
                <div className="grid grid-cols-3 gap-4 w-full place-items-center">
                  <img src="/globe.svg" alt="Groq" className="h-8" />
                  <img src="/globe.svg" alt="OpenAI" className="h-8" />
                  <img src="/globe.svg" alt="Anthropic" className="h-8" />
                  <img src="/globe.svg" alt="Fireworks.ai" className="h-8" />
                  <img src="/globe.svg" alt="OpenRouter" className="h-8" />
                  <img src="/globe.svg" alt="DeepSeek" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
