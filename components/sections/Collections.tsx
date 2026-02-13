import Image from "next/image";
import Link from "next/link";
import { collections } from "../../lib/data";
import { Button } from "../ui/Button";
import { Reveal } from "../animation/Reveal";

export default function Collections() {
  return (
    <section className="bg-offwhite" id="collections">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-22">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
              Collections
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-[1.2] text-charcoal sm:text-4xl heading-divider">
              Editorial curation
            </h2>
          </div>
          <Button
            href="/shop"
            variant="ghost"
            className="hidden px-6 py-3 text-[12px] tracking-[0.16em] md:inline-flex"
          >
            Shop all
          </Button>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {collections.map((collection, idx) => (
            <Reveal key={collection.id} delay={Math.min(idx * 0.1, 0.4)}>
              <Link
                href="/shop"
                className="group relative block overflow-hidden border border-stroke bg-white transition duration-500 ease hover:shadow-soft hover-lift"
              >
                <Image
                  src={collection.images[0]}
                  alt={collection.title}
                  width={1200}
                  height={900}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    45vw
                  "
                  quality={80}
                  className="h-[340px] w-full object-cover transition duration-1000 ease hover-zoom-slow"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/25 p-8 backdrop-blur-[1px]">
                  <p className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-gray-100">
                    <span className="h-[1px] w-6 bg-yellow" aria-hidden="true" />
                    {collection.label}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-white">
                    {collection.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm text-gray-100">
                    {collection.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

