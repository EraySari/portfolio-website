import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and TypeScript.",
    href: "/work",
  },
  {
    title: "Project Two",
    description: "High-performance e-commerce platform with optimized UX.",
    href: "/work",
  },
];

export default function SelectedWork() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Selected Work
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A selection of recent projects showcasing modern frontend development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className={cn(
              "group block p-8 rounded-xl",
              "border border-zinc-200 dark:border-zinc-800",
              "bg-zinc-50/50 dark:bg-zinc-900/50",
              "hover:border-zinc-300 dark:hover:border-zinc-700",
              "hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
            )}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                {project.title}
              </h3>
              <ArrowRight
                className={cn(
                  "w-5 h-5 text-zinc-400 dark:text-zinc-600",
                  "group-hover:text-foreground group-hover:translate-x-1",
                  "transition-all duration-200"
                )}
              />
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

