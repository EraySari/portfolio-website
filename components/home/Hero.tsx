import HeroContent from "./HeroContent";
import AnimatedWrapper from "./AnimatedWrapper";
import GlobeClient from "./GlobeClient";

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 flex items-center justify-center min-h-[60vh]">
      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center pointer-events-none">
        <AnimatedWrapper className="pointer-events-auto" delay={0.1}>
          <HeroContent />
        </AnimatedWrapper>
      </div>

      <div className="globe-container">
        <GlobeClient />
      </div>
    </section>
  );
}
