import Container from "@/components/layout/Container";
import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import SelectedWork from "@/components/home/SelectedWork";
import TechChips from "@/components/home/TechChips";
import Stars from "@/components/home/Stars";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <Stars />
        <Container className="relative z-10">
          <Hero />
          <ValueProps />
        </Container>
      </section>

      <section className="bg-zinc-950">
        <Container>
          <SelectedWork />
          <TechChips />

          <div className="py-20 sm:py-32">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-6">
                Let&apos;s build something fast and reliable.
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium bg-zinc-100 text-background hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
