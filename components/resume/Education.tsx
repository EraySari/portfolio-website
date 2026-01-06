import { FileText } from "lucide-react";
import Link from "next/link";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

interface EducationProps {
  items: EducationItem[];
}

export default function Education({ items }: EducationProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-zinc-50">
                {item.degree}
              </h3>
              <p className="text-zinc-300">{item.institution}</p>
            </div>
            <p className="text-zinc-400 text-sm mt-1 sm:mt-0">{item.period}</p>
          </div>
          {item.details && (
            <p className="text-zinc-400 text-sm mt-2">{item.details}</p>
          )}
        </div>
      ))}
    </div>
  );
}
