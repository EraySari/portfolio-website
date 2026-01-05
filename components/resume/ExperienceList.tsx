import ExperienceItem from "./ExperienceItem";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
}
