"use client";

import { LinkPreview } from "@/components/ui/link-preview";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm text-foreground text-center">
        <span className="relative z-50">
          <LinkPreview
            url="https://github.com/Kirti-Rathi/PromptShell"
            className="relative z-50 hover:font-medium transition-all duration-200 ease-in-out"
          >
            PromptShell
            <span className="text-black text-sm ml-1 border border-gray-300 rounded-xl px-2">
              v0.1.1
            </span>
          </LinkPreview>
        </span>

        <span className="relative z-50">
          <LinkPreview
            url="https://www.linkedin.com/in/kirti-rathi/"
            imageSrc="/linkedin.jpg"
            isStatic
            className="relative z-50"
          >
            {" | "} Designed and Developed by{" "}
            <span className="italic">Kirti Rathi</span>
          </LinkPreview>
        </span>
      </div>
    </footer>
  );
}
