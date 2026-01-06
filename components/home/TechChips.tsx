import { cn } from "@/lib/utils";
import { resumeEN } from "@/content/resume/en";

const getTechIconPath = (tech: string): string | null => {
  const iconMap: Record<string, string | null> = {
    HTML: "/icons/html.svg",
    CSS: "/icons/css.svg",
    React: "/icons/react.svg",
    Redux: "/icons/redux.svg",
    "Next.js": "/icons/nextjs.svg",
    "Node.js": "/icons/nodejs.svg",
    TypeScript: "/icons/typescript.svg",
    JavaScript: "/icons/javascript.svg",
    "Tailwind CSS": "/icons/tailwindcss.svg",
    Git: "/icons/git.svg",
  };
  return iconMap[tech] || null;
};

export default function TechChips() {
  const { usingNow, learning } = resumeEN.technologies;

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

      <div className="mb-12">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Using Now
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {usingNow.map((tech) => {
            const iconPath = getTechIconPath(tech);
            return (
              <div
                key={tech}
                className={cn(
                  "p-4 rounded-lg",
                  "hover:bg-zinc-200 dark:hover:bg-zinc-700",
                  "transition-colors duration-200",
                  "flex flex-col justify-center items-center gap-3"
                )}
              >
                {iconPath && (
                  <img
                    src={iconPath}
                    alt={`${tech} icon`}
                    className="w-16 h-16 shrink-0 hover:scale-110 transition-transform duration-200"
                  />
                )}
                <span className="text-sm font-medium text-foreground text-center">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-4">Learning</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {learning.map((tech) => {
            const iconPath = getTechIconPath(tech);
            return (
              <div
                key={tech}
                className={cn(
                  "p-4 rounded-lg",

                  "hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50",
                  "transition-colors duration-200",
                  "flex flex-col justify-center items-center gap-3",
                  "opacity-75"
                )}
              >
                {iconPath && (
                  <img
                    src={iconPath}
                    alt={`${tech} icon`}
                    className="w-16 h-16 shrink-0"
                  />
                )}
                <span className="text-sm font-medium text-foreground text-center">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
