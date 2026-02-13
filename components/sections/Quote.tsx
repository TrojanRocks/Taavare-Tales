import { PetalAccent } from "../ui/Petals";
import { Reveal } from "../animation/Reveal";

export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <PetalAccent
        className="right-10 top-6 h-40 w-40 rotate-3 opacity-70 hidden sm:block"
        tone="blush"
      />
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center md:px-8 md:py-22">
        <Reveal delay={0.05}>
          <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
            Poetic note
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 font-serif text-3xl leading-[1.3] text-charcoal sm:text-4xl heading-divider">
            “Bouquets that speak in colours.”
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 text-sm text-gray-600">
            A whisper of fragrance, a quiet gesture of joy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

