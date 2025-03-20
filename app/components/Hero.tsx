"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Hero() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll src={"file.svg"} showGradient={false} />
    </div>
  );
}
