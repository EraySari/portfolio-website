import { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-zinc-50 mb-6 border-b border-zinc-800 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
