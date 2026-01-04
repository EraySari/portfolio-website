import { Zap, Search, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const valueProps = [
  {
    icon: Zap,
    title: "High-performance Next.js websites",
    description:
      "Optimized for speed and user experience with modern React patterns and server-side rendering.",
  },
  {
    icon: Search,
    title: "SEO-ready, accessible UI",
    description:
      "Built with semantic HTML, ARIA attributes, and best practices for search engines and screen readers.",
  },
  {
    icon: Code,
    title: "Clean, scalable frontend architecture",
    description:
      "Maintainable codebases with TypeScript, component-driven development, and testing strategies.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 sm:py-32">
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
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
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
