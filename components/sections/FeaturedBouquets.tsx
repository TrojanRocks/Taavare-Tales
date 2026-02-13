import { featuredBouquets, quietStatementImages } from "../../lib/data";
import { ProductCard } from "../ui/ProductCard";
import { Reveal } from "../animation/Reveal";

export default function FeaturedBouquets() {
  return (
    <section className="bg-white" id="featured">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-22">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
              Featured Bouquets
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-[1.2] text-charcoal sm:text-4xl heading-divider">
              Quiet statements
            </h2>
          </div>
          <p className="max-w-xl text-sm text-gray-700">
            Curated stems in sculpted forms. Soft palettes, airy spacing, and a
            gentle sheen that feels at home in sunlit spaces.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {quietStatementImages.map((image, idx) => {
            const pseudoProduct = {
              name: `Quiet Statement ${idx + 1}`,
              slug: `quiet-statement-${idx + 1}`,
              price: "₹3,200",
              category: "Editorial",
              label: "Quiet Statements",
              image,
              gallery: [image],
              description: "",
              flowers: [],
              microcopy: "",
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII="
            };
            return (
              <Reveal key={pseudoProduct.slug} delay={Math.min(idx * 0.1, 0.4)}>
                <ProductCard
                  product={pseudoProduct}
                  hoverLabel="View details"
                  showCategory
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

