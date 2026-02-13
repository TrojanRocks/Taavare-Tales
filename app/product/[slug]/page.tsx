import { notFound } from "next/navigation";
import { Button } from "../../../components/ui/Button";
import { products } from "../../../lib/data";
import { Reveal } from "../../../components/animation/Reveal";
import { ProductGallery } from "../../../components/ProductGallery";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-white">
      <section className="border-b border-stroke/70 bg-offwhite">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
              {product.label}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.2] text-charcoal sm:text-5xl heading-divider">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-gray-700">{product.description}</p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-12 md:px-8 md:py-16">
          <div className="md:col-span-7">
            <Reveal>
              <ProductGallery product={product} />
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal className="space-y-6 border border-stroke/70 bg-blush px-6 py-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500">
                    {product.category}
                  </p>
                  <h2 className="mt-1 font-serif text-3xl text-charcoal">
                    {product.name}
                  </h2>
                </div>
                <span className="font-serif text-xl text-charcoal">
                  {product.price}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <p>{product.description}</p>
                <p className="text-gray-600">{product.microcopy}</p>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-gray-500">
                  Flower details
                </p>
                <ul className="mt-3 space-y-2 text-sm text-charcoal">
                  {product.flowers.map((flower) => (
                    <li key={flower} className="flex items-center gap-2">
                      <span className="h-[6px] w-[6px] rounded-full bg-yellow" />
                      {flower}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="primary" className="px-6 py-3 text-[12px]">
                  Add to cart
                </Button>
                <p className="text-sm text-gray-600">
                  Freshly handcrafted on the day of delivery.
                </p>
              </div>

              <div className="border-t border-stroke/70 pt-4 text-sm text-gray-600">
                <p>Petals sourced every morning · Delivered across Bengaluru</p>
                <p className="mt-1">
                  Need custom colours? Write to us at hello@taavaretales.com
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

