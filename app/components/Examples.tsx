"use client";

import { useState, useEffect } from "react";

const Examples = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 3000);

      progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 30);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isHovered]);

  const features = [
    {
      title: "Natural Language Commands Simplifying Complex Workflows",
    },
    {
      title: "Ask Questions, Run Commands Directly and Ensure Secure Execution",
    },
    {
      title: "Seamless Integration with Git, Docker, and Developer Tools",
    },
    {
      title:
        "Generate Code Snippets Using Prompts and Save Directly to Desired Locations",
    },
  ];

  const terminalCode = [
    `$ make 2 .js and 3 .txt files
? Do you want to run the command 'type nul > script1.js && type nul > script2.js && type nul > file1.txt && type nul >
file2.txt && type nul > file3.txt'? Yes
Command: type nul > script1.js && type nul > script2.js && type nul > file1.txt && type nul > file2.txt && type nul > file3.txt

$ backup add .txt files to a folder named backup
? Do you want to run the command 'mkdir backup && copy *.txt backup\\'? Yes
Command: mkdir backup && copy *.txt backup\\
file1.txt
file2.txt
file3.txt
3 file(s) copied.`,

    `$ how to find ssh keys?
Answer:
Use 'ls ~/.ssh/' (Linux/macOS) or 'ls C:\\Users\\Kirti\\.ssh/' (Windows) to list SSH keys. Example: 'ls ~/.ssh/id_rsa.pub' to view the public key. Alternatives: 'ssh-keygen -t rsa -b 4096' to generate new keys. Safety: Never share private keys (id_rsa).

$ !cd OneDrive
Direct Command: cd OneDrive
Changed directory to C:\\Users\\username\\OneDrive

$ delete file1.txt
? Do you want to run the command 'CONFIRM: del file1.txt'? Yes
? Warning: This command may be destructive. Are you sure you want to run ' del file1.txt'? Yes
Command:  del file1.txt`,

    `$ show last 2 commits
? Do you want to run the command 'git log -n 2'? Yes
Command: git log -n 2
commit b8299077fe7e17addf354
Author: unknown <example@gmail.com>
Date:   Sun Mar 23 20:50:25 2025 +0530

Refactor Navbar and Hero components

commit 98c0b28c972d7cba7
Author: unknown <example@gmail.com>
Date:   Sat Mar 22 21:06:43 2025 +0530

Refactor CSS and UI components +  minor visual adjustments`,
    `$ generate a python script to automate file renaming and save it to rename.py
? Do you want to run the command 'echo '#!/usr/bin/env python
import os
# Rename all files with .txt extension to .log
for filename in os.listdir("."):
    if filename.endswith(".txt"):
        os.rename(filename, filename[:-4] + ".log")
        print(f"Renamed {filename} to {filename[:-4]}.log")

print("File renaming completed!")' > rename.py'? Yes`,
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <span
              style={{
                textShadow:
                  "0 2px 4px #4b5563, 0 0 8px #6b728080, 2px 4px 12px #9ca3af40",
              }}
              className="text-3xl"
            >
              {">"}_{" "}
            </span>
            PromptShell in Action
          </h2>
          <p className="text-gray-400">
            See how PromptShell makes your CLI tasks easier with AI-powered
            commands
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
                onMouseEnter={() => activeTab === index && setIsHovered(true)}
                onMouseLeave={() => activeTab === index && setIsHovered(false)}
                className={`p-5 rounded-md bg-background border cursor-pointer transition-colors duration-300 relative ${
                  activeTab === index
                    ? "border-gray-300 shadow-[0_0_8px_rgba(156,156,156,0.5)] shadow-[#9c9c9c80]"
                    : "border-gray-200 opacity-50 hover:opacity-70"
                }`}
              >
                <h3 className="text-md font-semibold text-gray-900">
                  {feature.title}
                </h3>
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
            <div className="bg-black h-full rounded-md p-4 font-mono text-sm shadow-lg shadow-foreground/50">
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
