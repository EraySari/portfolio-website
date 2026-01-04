import Container from "./Container";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <Container>
        <div className="py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
