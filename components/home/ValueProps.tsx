import { PanelLeft, Gauge, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const valueProps = [
  {
    icon: PanelLeft,
    title: "CMS Panels & Real-World Features",
    description:
      "Built complex CMS interfaces including support dashboards, event logs, and chat-based systems with real production use cases.",
  },
  {
    icon: Gauge,
    title: "Performance-Focused UI",
    description:
      "Improved UX and performance using infinite scrolling, IntersectionObserver, and optimized data loading strategies.",
  },
  {
    icon: Code,
    title: "Scalable Frontend Architecture",
    description:
      "Built scalable React applications including full e-commerce flows, role-based access control, and reusable UI components.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 sm:py-32 mt-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-30">
        {valueProps.map((prop, index) => {
          const Icon = prop.icon;
          return (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl",
                "border border-zinc-200 dark:border-zinc-800",
                "bg-zinc-50/50 dark:bg-zinc-900/50",
                "hover:border-zinc-300 dark:hover:border-zinc-700",
                "transition-colors duration-200",
                "group"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg",
                  "bg-foreground/10 dark:bg-foreground/20",
                  "flex items-center justify-center mb-4",
                  "group-hover:bg-foreground/20 dark:group-hover:bg-foreground/30",
                  "transition-colors duration-200"
                )}
              >
                <Icon className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-300 mb-2">
                {prop.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
