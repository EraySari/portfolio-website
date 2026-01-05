import Link from "next/link";
import { FileText } from "lucide-react";

interface Reference {
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

interface ReferencesProps {
  references: Reference[];
}

export default function References({ references }: ReferencesProps) {
  return (
    <div className="space-y-6">
      {references.map((ref, index) => (
        <div
          key={index}
          className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50"
        >
          <p className="text-zinc-300 mb-4 leading-relaxed italic">
            &ldquo;{ref.testimonial}&rdquo;
          </p>
          <div className="text-sm">
            <p className="text-zinc-50 font-semibold">{ref.name}</p>
            <p className="text-zinc-400">
              {ref.role} at {ref.company}
            </p>
          </div>
        </div>
      ))}

      <Link
        href="/resume/reference-letter.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-colors"
      >
        <FileText className="w-4 h-4" />
        View Reference Letter
      </Link>
    </div>
  );
}
