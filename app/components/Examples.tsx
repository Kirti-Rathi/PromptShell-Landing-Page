"use client";

import { useState, useEffect } from "react";

const Examples = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const features = [
    {
      title: "Simple Agent Workflow",
      description: "Create a basic AI agent workflow with multiple agents.",
    },
    {
      title: "Multi-Agent Collaboration",
      description:
        "Set up multiple AI agents to work together on a complex task.",
    },
    {
      title: "Tool Integration",
      description:
        "Integrate external tools and APIs into an AI agent workflow.",
    },
    {
      title: "Customizable Agent Behavior",
      description:
        "Design a specialized AI agent with custom decision-making logic.",
    },
  ];

  const terminalCode = [
    `import { Swarm, Agent } from 'ai-agent-sdk';

const client = new Swarm();
const agent = new Agent({
  name: "Basic Agent",
  instructions: "Complete simple tasks"
});`,
    `import { Swarm, Agent } from 'ai-agent-sdk';

const swarm = new Swarm();
const agents = [
  new Agent({ name: "Planner" }),
  new Agent({ name: "Executor" })
];`,
    `import { Swarm, Agent, Tool } from 'ai-agent-sdk';

const agent = new Agent({
  name: "Tool User",
  tools: [new Calculator(), new WebSearch()]
});`,
    `import { Swarm, Agent } from 'ai-agent-sdk';

const agent = new Agent({
  name: "Custom Agent",
  decisionLogic: (input) => {
    // Custom logic here
  }
});`,
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span
              style={{
                textShadow:
                  "0 2px 4px #4b5563, 0 0 8px #6b728080, 2px 4px 12px #9ca3af40",
              }}
            >
              {">"}_{" "}
            </span>
            Explore Our Features
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our platform can transform your AI development workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 flex flex-col space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setProgress(0);
                }}
                className={`p-6 rounded-lg border cursor-pointer transition-colors duration-300 relative ${
                  activeTab === index
                    ? " bg-[#f8f8f8]"
                    : "border-gray-100 bg-white "
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {/* <p className="text-gray-600">{feature.description}</p> */}
                {activeTab === index && (
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-[#9c9c9c] transition-all duration-30"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="md:col-span-8">
            <div className="bg-black h-full rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center mb-4 space-x-2 bg-[#2d2d2d] px-6 py-3 rounded-t-lg -mt-4 -mx-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-green-400 whitespace-pre-wrap">
                {terminalCode[activeTab]}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
