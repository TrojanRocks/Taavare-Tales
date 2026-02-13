import Image from "next/image";
import { Button } from "../ui/Button";
import { PetalAccent } from "../ui/Petals";
import { Reveal } from "../animation/Reveal";

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-white" id="story">
      <PetalAccent
        className="-left-10 top-10 h-44 w-44 -rotate-8 opacity-55 hidden sm:block petal-float"
        tone="blush"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-12 md:px-8 md:py-22">
        <Reveal className="relative overflow-hidden border border-stroke bg-offwhite md:col-span-6 hover-lift">
          <Image
            src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Florist arranging stems"
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 48vw, 100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
            className="h-full w-full object-cover hover-zoom-slow"
          />
        </Reveal>
        <div className="md:col-span-6">
          <Reveal delay={0.05}>
            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
              Rooted in tradition
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-3 font-serif text-3xl leading-[1.25] text-charcoal sm:text-4xl heading-divider">
              Petals curated with intention. <br />
              Rooted in tradition. <br />
              Designed with elegance.
            </h2>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-5 max-w-xl text-gray-700">
              Taavare Tales is a premium floral studio weaving South Indian
              heritage with modern minimalism. Each bouquet is hand-built at
              sunrise, with soft silhouettes, restrained palettes and thoughtful
              spacing that let the flowers breathe.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8">
              <Button
                href="/about"
                variant="ghost"
                className="px-6 py-3 text-[12px] tracking-[0.16em]"
              >
                Read our story
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

