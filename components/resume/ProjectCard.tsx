import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const content = (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
        {link && (
          <ExternalLink className="w-4 h-4 text-zinc-400 flex-shrink-0 ml-2" />
        )}
      </div>
      <p className="text-zinc-400 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-md text-xs font-medium bg-zinc-800 text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
}
