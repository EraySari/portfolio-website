import Link from "next/link";
import { Download, FileText } from "lucide-react";

export default function Downloads() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/resume/eray-sari-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Download CV
      </Link>

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
