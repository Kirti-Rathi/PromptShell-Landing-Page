"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm text-foreground text-center">
        <Link href="https://github.com/Kirti-Rathi/PromptShell" target="_blank">
          PromptShell
        </Link>
        <span className="text-black text-sm border border-gray-200 rounded-xl px-2">
          v0.1.1
        </span>
        <span>
          {" | "} Designed and developed by{" "}
          <Link
            href="https://www.linkedin.com/in/kirti-rathi/"
            target="_blank"
            className="italic"
          >
            Kirti Rathi
          </Link>
        </span>
      </div>
    </footer>
  );
}
