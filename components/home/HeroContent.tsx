import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <>
      <h1 className="mx-auto max-w-4xl text-balance text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-zinc-50">
        <span className="block">Frontend Engineer</span>
        <span className="block">building modern web experiences.</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
        <Link
          href="/resume"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:scale-105 transition-all duration-200 ease-out shadow-sm hover:shadow-md"
        >
          Resume
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-200 ease-out shadow-sm hover:shadow-md"
        >
          Get in touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
}
