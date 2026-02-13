import Image from "next/image";
import { Reveal } from "../animation/Reveal";

const heroFlower =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80&sat=-10";
const mock1 =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80&sat=-12";
const mock2 =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80&sat=-12";
const mock3 =
  "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=900&q=80";

export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
        <Reveal className="text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
            Visual Presentation
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-[1.25] text-charcoal sm:text-4xl heading-divider inline-block">
            Editorial mobile experience
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            A floating showcase of our mobile presence and floral detail.
          </p>
        </Reveal>

        <div className="relative mt-12 flex flex-col items-center gap-10 md:mt-16">
          <Reveal className="relative flex w-full max-w-5xl items-center justify-center gap-2">
            <div className="relative h-[340px] w-[220px] rotate-[-4deg] shadow-subtle sm:h-[420px] sm:w-[260px] md:rotate-[-2deg] hover-lift">
              <DeviceFrame image={mock1} alt="Bouquet mockup one" />
            </div>
            <div className="relative -ml-6 h-[380px] w-[240px] rotate-[3deg] shadow-subtle sm:h-[460px] sm:w-[280px] md:ml-4 md:rotate-[2deg] hover-lift">
              <DeviceFrame image={mock2} alt="Bouquet mockup two" />
            </div>
            <div className="relative -ml-6 hidden h-[340px] w-[220px] rotate-[-2deg] shadow-subtle md:block hover-lift">
              <DeviceFrame image={mock3} alt="Bouquet mockup three" />
            </div>
          </Reveal>

          <Reveal className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]" delay={0.1}>
            <div className="absolute inset-0 scale-[1.08] rounded-full bg-pink/8 blur-3xl" />
            <Image
              src={heroFlower}
              alt="Editorial flower"
              fill
              sizes="
                (max-width: 640px) 80vw,
                (max-width: 1024px) 60vw,
                28vw
              "
              className="object-contain hover-zoom-slow"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DeviceFrame({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-stroke/80 bg-white shadow-[0_18px_36px_rgba(0,0,0,0.08)] hover-lift">
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/0" />
      <Image
        src={image}
        alt={alt}
        fill
        sizes="
          (max-width: 640px) 70vw,
          (max-width: 1024px) 45vw,
          20vw
        "
        className="object-cover hover-zoom-slow"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
        loading="lazy"
        quality={80}
      />
    </div>
  );
}

