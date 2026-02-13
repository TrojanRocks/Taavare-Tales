"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../ui/Button";
import { PetalAccent } from "../ui/Petals";
import { useHeroImage } from "../providers/HeroImageProvider";
import { Reveal } from "../animation/Reveal";

export default function Hero() {
  const { setHeroImage } = useHeroImage();
  const heroImageSrc =
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80&sat=-10";

  useEffect(() => {
    setHeroImage(heroImageSrc);
  }, [heroImageSrc, setHeroImage]);

  return (
    <section className="relative overflow-hidden bg-linen">
      <PetalAccent className="right-4 top-8 h-44 w-44 rotate-6 opacity-80 hidden sm:block petal-float" />
      <PetalAccent
        className="-left-12 bottom-10 h-52 w-52 -rotate-12 opacity-60 hidden sm:block petal-float"
        density="cluster"
        tone="blush"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7 order-1">
          <div className="relative overflow-hidden border border-stroke bg-white shadow-soft hover-lift">
            <div className="relative h-full w-full">
              <Reveal>
                <Image
                  src={heroImageSrc}
                  alt="Soft pink bouquet"
                  width={1600}
                  height={1200}
                  priority
                  quality={82}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    55vw
                  "
                  className="h-full max-h-[520px] w-full object-cover hover-zoom-slow"
                />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal as="div" delay={0.05}>
            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
              Luxury Floral Studio
            </p>
          </Reveal>
          <Reveal as="div" delay={0.12}>
            <h1 className="mt-4 font-serif text-4xl leading-[1.2] text-charcoal sm:text-5xl heading-divider">
              Stories told in petals
            </h1>
          </Reveal>
          <Reveal as="div" delay={0.22}>
            <p className="mt-5 max-w-xl text-lg text-gray-700">
              Handcrafted moments in bloom. Soft silhouettes, South Indian grace,
              and an editorial calm designed for intimate celebrations.
            </p>
          </Reveal>
          <Reveal as="div" delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/shop"
                className="px-7 py-3 text-[12px] tracking-[0.18em]"
              >
                Explore Collections
              </Button>
              <Link
                href="/about"
                className="text-sm underline-offset-8 transition-colors duration-200 hover:text-pink"
              >
                Our story
              </Link>
            </div>
          </Reveal>
          <Reveal as="div" delay={0.42}>
            <div className="mt-10 flex items-center gap-3 text-sm text-gray-600">
              <span className="h-[1px] w-12 bg-yellow" aria-hidden="true" />
              Freshly sourced at dawn · Made to order
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

