interface SkillsProps {
  technical: string[];
  tools: string[];
  languages: string[];
}

export default function Skills({ technical, tools, languages }: SkillsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-50 mb-3">Technical</h3>
        <div className="flex flex-wrap gap-2">
          {technical.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-50 mb-3">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-50 mb-3">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((language) => (
            <span
              key={language}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
