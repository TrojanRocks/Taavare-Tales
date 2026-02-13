import { products, shopFilters } from "../../lib/data";
import ShopGrid from "../../components/sections/ShopGrid";
import { Reveal } from "../../components/animation/Reveal";

export const metadata = {
  title: "Shop | Taavare Tales",
  description:
    "Editorial curation of bouquets, garlands, loose flowers and boxes."
};

export default function ShopPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-stroke/70 bg-linen">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-18">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
              Shop
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.2] text-charcoal sm:text-5xl heading-divider">
              Collections for every quiet celebration
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
              Very limited batches, composed at dawn. Choose from modern
              artisanal bouquets, South Indian classics, garlands, and loose
              flower bundles.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12 md:px-8 md:py-16">
          <aside className="md:col-span-3">
            <div className="sticky top-28 flex flex-col gap-6 rounded-none border border-stroke/60 bg-blush px-5 py-6">
              <p className="text-[12px] uppercase tracking-[0.2em] text-gray-600">
                Filters
              </p>
              <div className="flex flex-wrap gap-2 md:flex-col">
                {shopFilters.map((filter) => (
                  <button
                    key={filter}
                    className="group flex items-center justify-between rounded-none border border-stroke/70 bg-white px-4 py-3 text-left text-sm text-charcoal transition-colors duration-300 ease hover:border-pink/70"
                    type="button"
                  >
                    <span>{filter}</span>
                    <span className="h-2 w-2 rounded-full bg-yellow opacity-80 transition duration-300 ease group-hover:opacity-100" />
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600">
                Hover to preview — View details to explore each bouquet.
              </p>
            </div>
          </aside>

          <div className="md:col-span-9">
            <ShopGrid products={products} />
          </div>
        </div>
      </section>
    </div>
  );
}

