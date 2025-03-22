import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
  as?: React.ElementType;
}

export function LineShadowText({
  children,
  shadowColor = "#000",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motion.create(Component);
  const content = typeof children === "string" ? children : null;

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        "relative z-0 inline-flex text-shadow-glow",
        "after:absolute after:left-[0.05em] after:top-[0.05em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-[line-shadow_15s_linear_infinite] after:bg-[0_0]",
        "[&:after]:motion-safe:animate-[line-shadow_15s_linear_infinite]",
        "[&]:text-shadow-[0_0_10px_var(--shadow-color)]",
        "@keyframes line-shadow { from { background-position: 0 0 } to { background-position: 100% -100% } }",
        className
      )}
      data-text={content}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}
