import { cn } from "@/lib/utils";
import { LineShadowText } from "../magicui/line-shadow-text";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  heading?: string;
}) => {
  return (
    <div id="features" className="pt-20 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          <span
            style={{
              textShadow:
                "0 2px 4px #4b5563, 0 0 8px #6b728080, 2px 4px 12px #9ca3af40",
            }}
          >
            {">"}_{" "}
          </span>{" "}
          Features
          {/* <LineShadowText className="italic">Features</LineShadowText> */}
        </h2>
        {/* <p className="text-gray-600">
          Get started instantly with just one command - copy, paste, and
          you&apos;re ready to go!
        </p> */}
      </div>

      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[9rem] md:grid-cols-3",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  // header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {/* {header} */}
      <div className="transition duration-200 group-hover/bento:translate-x-2 flex flex-col justify-center h-full">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
