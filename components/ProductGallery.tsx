"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import type { Product } from "../lib/data";
import { cn } from "../lib/utils";

type ProductGalleryProps = {
  product: Product;
};

export function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    duration: 18,
    dragFree: false
  });

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(
    (api: EmblaCarouselType | undefined) => {
      if (!api) return;
      setSelectedIndex(api.selectedScrollSnap());
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

  return (
    <div className="grid gap-6 md:grid-cols-[92px_1fr] md:items-start">
      <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
        {product.gallery.map((src, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={src}
              onClick={() => scrollTo(index)}
              className={cn(
                "relative h-20 w-20 shrink-0 border transition duration-300 ease hover:opacity-85",
                isActive ? "opacity-100 border-pink" : "opacity-50 border-transparent"
              )}
              aria-label={`View image ${index + 1} of ${product.name}`}
              aria-pressed={isActive}
            >
            <Image
              src={src}
              alt={`${product.name} thumbnail ${index + 1}`}
              fill
              sizes="80px"
              className="object-cover"
              placeholder="blur"
              blurDataURL={product.blurDataURL}
            />
            </button>
          );
        })}
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {product.gallery.map((src, index) => (
            <div
              className="embla__slide relative h-full w-full flex-[0_0_100%]"
              key={src}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-white">
                <Image
                  src={src}
                  alt={`${product.name} image ${index + 1}`}
                  fill
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL={product.blurDataURL}
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    55vw
                  "
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

