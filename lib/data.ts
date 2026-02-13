import {
  HERO_IMAGES,
  PRODUCT_IMAGES,
  COLLECTION_IMAGES,
  QUIET_STATEMENT_IMAGES
} from "../src/data/flowerImages";

export type CollectionCard = {
  id: string;
  title: string;
  label: string;
  description: string;
  images: string[];
};

export type Product = {
  name: string;
  slug: string;
  price: string;
  category: string;
  label: string;
  image: string;
  gallery: string[];
  description: string;
  flowers: string[];
  microcopy: string;
  blurDataURL: string;
};

const blurPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAObbZ/gAAAAASUVORK5CYII=";

export const collections: CollectionCard[] = [
  {
    id: "artisanal",
    title: "Artisanal Bouquets",
    label: "Modern Elegance",
    description:
      "Sculpted silhouettes with roses, carnations, lilies and chrysanthemums. Designed for interiors that love restraint.",
    images: COLLECTION_IMAGES.slice(0, 3)
  },
  {
    id: "cultural",
    title: "Indian Flower Collection",
    label: "Cultural Elegance",
    description:
      "Jasmine, champaka, marigold, lotus and kanakambara. Bouquets, garlands and loose bundles curated with reverence.",
    images: COLLECTION_IMAGES.slice(3, 6)
  }
];

const makeGallery = (startIndex: number) => {
  const len = PRODUCT_IMAGES.length;
  return [
    PRODUCT_IMAGES[startIndex % len],
    PRODUCT_IMAGES[(startIndex + 1) % len],
    PRODUCT_IMAGES[(startIndex + 2) % len]
  ];
};

const fallbackProducts: Product[] = PRODUCT_IMAGES.map((img, index) => {
  const gallery = makeGallery(index);
  return {
    name: `Floral Arrangement ${index + 1}`,
    slug: `floral-arrangement-${index + 1}`,
    price: `₹${(2800 + index * 250).toLocaleString("en-IN")}`,
    category: "Artisanal Bouquets",
    label: "Modern Elegance",
    image: img,
    gallery,
    description:
      "An editorial floral arrangement with balanced stems, soft palettes, and airy spacing.",
    flowers: ["Seasonal blooms", "Greens", "Accents"],
    microcopy: "Composed at dawn for same-day freshness.",
    blurDataURL: blurPlaceholder
  };
});

const seededProducts: Product[] = fallbackProducts;

export const products: Product[] = seededProducts;

export const featuredBouquets = products.slice(0, 4);

export const quietStatementImages = QUIET_STATEMENT_IMAGES;

export const shopFilters = [
  "Artisanal Bouquets",
  "Indian Flowers",
  "Garlands",
  "Loose Flowers",
  "Flower Boxes",
  "Occasions"
];

