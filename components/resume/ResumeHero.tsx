import Link from "next/link";
import { Download } from "lucide-react";

interface ResumeHeroProps {
  title: string;
  location: string;
  email: string;
  summary: string;
}

export default function ResumeHero({
  title,
  location,
  email,
  summary,
}: ResumeHeroProps) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-5xl font-bold text-zinc-50 mb-2">
          {title}
        </h2>

        <div className="flex flex-wrap gap-4 text-zinc-400 text-sm">
          <span>{location}</span>
          <span>•</span>
          <a
            href={`mailto:${email}`}
            className="hover:text-zinc-300 transition-colors"
          >
            {email}
          </a>
        </div>
      </div>

      <p className="text-zinc-300 leading-relaxed mb-6">{summary}</p>

      <Link
        href="/resume/eray-sari-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        View CV
      </Link>
    </div>
  );
}
