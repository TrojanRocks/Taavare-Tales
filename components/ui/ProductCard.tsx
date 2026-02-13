import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../lib/data";
import { cn } from "../../lib/utils";

type ProductCardProps = {
  product: Product;
  showCategory?: boolean;
  hoverLabel?: string;
  className?: string;
  revealDelay?: number;
};

export function ProductCard({
  product,
  showCategory = false,
  hoverLabel = "View details",
  className,
  revealDelay
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group block transition-transform duration-500 ease hover:-translate-y-1",
        className
      )}
    >
      <div className="relative overflow-hidden border border-stroke/70 bg-white transition-shadow duration-500 ease group-hover:shadow-soft hover-lift">
        <Image
          src={product.image}
          alt={product.name}
          width={900}
          height={1200}
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 32vw, 100vw"
          placeholder="blur"
          blurDataURL={product.blurDataURL}
          loading="lazy"
          quality={80}
          className="h-[320px] w-full object-cover transition duration-1000 ease hover-zoom-slow"
        />
        {hoverLabel && (
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-black/25 opacity-0 transition duration-500 ease group-hover:opacity-100">
            <span className="mb-5 rounded-none bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-charcoal shadow-subtle backdrop-blur">
              {hoverLabel}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
            {product.label}
          </p>
          <h3 className="mt-1 font-serif text-xl text-charcoal">
            {product.name}
          </h3>
          {showCategory && (
            <p className="mt-1 text-sm text-gray-600">{product.category}</p>
          )}
        </div>
        <p className="text-sm text-charcoal">{product.price}</p>
      </div>
    </Link>
  );
}

