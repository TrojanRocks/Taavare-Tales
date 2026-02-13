import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { PetalAccent } from "../../components/ui/Petals";

export const metadata = {
  title: "About | Taavare Tales",
  description:
    "A poetic South Indian floral studio speaking softly through petals."
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-stroke/70 bg-linen">
        <PetalAccent
          className="right-10 top-6 h-44 w-44 rotate-6 opacity-70"
          tone="blush"
        />
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-18">
          <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
            About
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.2] text-charcoal sm:text-5xl">
            Taavare Tales was born from a love for flowers — their silence,
            their fragrance, their ability to speak without words.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-700">
            We craft each piece at sunrise in Bengaluru, pairing modern
            silhouettes with South Indian sensibilities. Our bouquets are
            designed to sit quietly in your spaces — in a foyer washed with soft
            light, beside a brass uruli, or on a linen-draped table.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <div className="space-y-6 text-gray-700">
            <p>
              We choose flowers with restraint. Jasmine, champaka, kanakambara,
              lotus, roses, lisianthus — stems that feel both familiar and
              quietly luxurious. Every bundle is tied with unbleached cotton and
              accompanied by handwritten notes.
            </p>
            <p>
              Our studio is small by design. We keep daily quantities limited so
              each arrangement receives time, air, and attention. We believe
              luxury is felt in the pause between petals.
            </p>
            <div className="pt-2">
              <Button
                variant="ghost"
                href="/shop"
                className="px-6 py-3 text-[12px] tracking-[0.16em]"
              >
                View collections
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden border border-stroke/70 bg-offwhite">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80&sat=-10"
                alt="Bouquet close-up"
                width={1200}
                height={900}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden border border-stroke/70 bg-offwhite">
              <Image
                src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Florist studio"
                width={1200}
                height={900}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

