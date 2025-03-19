"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Hero() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src={"file.svg"}
        showGradient={false}
      />
    </div>
  );
}
