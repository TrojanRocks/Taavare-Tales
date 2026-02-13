"use client";

import { useMemo, useState } from "react";
import type { Product } from "../../lib/data";
import { ProductCard } from "../ui/ProductCard";
import { Button } from "../ui/Button";
import { PRODUCT_IMAGES } from "../../src/data/flowerImages";
import { Reveal } from "../animation/Reveal";

type ShopGridProps = {
  products: Product[];
};

const PAGE_SIZE = 6;

export default function ShopGrid({ products }: ShopGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const fallbackBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII=";

  const fallbackProducts: Product[] = PRODUCT_IMAGES.map((img, index) => ({
    name: `Floral Arrangement ${index + 1}`,
    slug: `fallback-floral-${index + 1}`,
    price: `₹${(2800 + index * 250).toLocaleString("en-IN")}`,
    category: "Artisanal Bouquets",
    label: "Modern Elegance",
    image: img,
    gallery: PRODUCT_IMAGES,
    description:
      "A modern bouquet with balanced stems, soft palettes, and airy spacing.",
    flowers: ["Seasonal blooms"],
    microcopy: "Composed at dawn for freshness.",
    blurDataURL: fallbackBlur
  }));

  const sourceProducts =
    Array.isArray(products) && products.length > 0 ? products : fallbackProducts;

  const visibleProducts = useMemo(
    () => sourceProducts.slice(0, visibleCount),
    [sourceProducts, visibleCount]
  );

  const canLoadMore = visibleCount < sourceProducts.length;

  return (
    <div className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product, idx) => (
          <Reveal key={product.slug} delay={Math.min(idx * 0.1, 0.4)}>
            <ProductCard
              product={product}
              showCategory
              hoverLabel="View details"
            />
          </Reveal>
        ))}
      </div>

      {canLoadMore && (
        <div className="flex justify-center">
          <Button
            onClick={() =>
              setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, products.length))
            }
            className="px-7 py-3 text-[12px]"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}

