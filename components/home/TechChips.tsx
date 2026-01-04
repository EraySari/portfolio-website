import { cn } from "@/lib/utils";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Testing Library",
  "Jest",
  "Node.js",
];

export default function TechChips() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Technologies I work with to build modern web applications.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <div
            key={tech}
            className={cn(
              "px-4 py-2 rounded-lg",
              "bg-zinc-100 dark:bg-zinc-800",
              "border border-zinc-200 dark:border-zinc-700",
              "text-foreground font-medium",
              "hover:bg-zinc-200 dark:hover:bg-zinc-700",
              "transition-colors duration-200"
            )}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

