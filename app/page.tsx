import BrandStory from "../components/sections/BrandStory";
import Collections from "../components/sections/Collections";
import FeaturedBouquets from "../components/sections/FeaturedBouquets";
import Hero from "../components/sections/Hero";
import Quote from "../components/sections/Quote";
import Showcase from "../components/sections/Showcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Collections />
      <Showcase />
      <FeaturedBouquets />
      <Quote />
    </>
  );
}

