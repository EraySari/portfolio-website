import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Navigation() {
  return (
    <ul className="flex items-center gap-8">
      {siteConfig.navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-block px-4 py-2 rounded-xl text-base sm:text-lg text-zinc-300 hover:text-zinc-900 hover:bg-zinc-100/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
