import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-lg sm:text-2xl font-semibold text-zinc-300 hover:opacity-80 transition-opacity"
    >
      {siteConfig.name}
    </Link>
  );
}
