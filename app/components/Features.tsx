import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  // Terminal,
  Globe,
  Bot,
  Lock,
  Target,
  AlertTriangle,
  Wrench,
  ArrowRightToLine,
  // Command,
  // GitFork,
} from "lucide-react";

export default function Features() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "Cross-Platform Compatibility",
      description: "Works seamlessly across Windows, Linux, and macOS.",
      header: <Skeleton />,
      icon: <Globe className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Hybrid AI-Model Support",
      description:
        "Supports both local (Ollama) and cloud-based (Groq, OpenAI, Google, etc.) LLMs for flexibility.",
      header: <Skeleton />,
      icon: <Bot className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Privacy-First Approach",
      description:
        "Defaults to local models and runs completely offline, so that no data leaves your device unless you enable cloud APIs.",
      header: <Skeleton />,
      icon: <Lock className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Context-Aware Execution",
      description:
        "Remembers command history, tracks files, and adapts suggestions accordingly.",
      header: <Skeleton />,
      icon: <Target className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Secure Command Execution",
      description: "Blocks dangerous commands and asks for confirmation.",
      header: <Skeleton />,
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Smart Autocompletion",
      description:
        "Provides tab completions for files and folder present in working directory.",
      header: <Skeleton />,
      icon: <ArrowRightToLine className="h-6 w-6 text-cyan-500" />,
    },
    {
      title: "Intelligent Debugging & Auto-Correction",
      description:
        "Identifies error, autonomously debugs issues and suggests corrected command.",
      header: <Skeleton />,
      icon: <Wrench className="h-6 w-6 text-orange-500" />,
    },
  ];
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
