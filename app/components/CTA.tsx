import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";
import EncryptButton from "../../components/ui/EncryptButton";

export default function CTA() {
  return (
    <CardSpotlight
      radius={9999}
      className="text-background py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <Link href="https://github.com/Kirti-Rathi/PromptShell" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="inline-block relative z-10 transition-transform duration-300 hover:scale-110"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </Link>
        <p className="text-3xl relative z-10 tracking-tight">
          Proudly Open-Sourced
        </p>
        <p className="mt-1 relative z-10 max-w-2xl mx-auto text-md text-gray-300">
          Get started with our documentation.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          {/* <a
            href="https://github.com/Kirti-Rathi/PromptShell"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background text-foreground relative z-10 hover:bg-background/90 px-4 py-1 rounded-lg flex items-center gap-1.5 transition-colors justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Star on GitHub
          </a> */}
          <Link
            target="_blank"
            href="https://github.com/Kirti-Rathi/PromptShell"
          >
            <EncryptButton text="Star on GitHub" />
          </Link>
          {/* <EncryptButton text="star on github" /> */}
        </div>
      </div>
    </CardSpotlight>
  );
}
