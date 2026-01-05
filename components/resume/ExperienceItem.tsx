interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export default function ExperienceItem({
  company,
  role,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold text-zinc-50">{role}</h3>
          <p className="text-zinc-300">{company}</p>
        </div>
        <p className="text-zinc-400 text-sm mt-1 sm:mt-0">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-4">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
