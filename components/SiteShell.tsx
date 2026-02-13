"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { HeroImageProvider, useHeroImage } from "./providers/HeroImageProvider";
import { usePathname } from "next/navigation";

function ShellFrame({ children }: { children: ReactNode }) {
  const { heroImage } = useHeroImage();
  const pathname = usePathname();
  const fallbackImage = "/images/hero-flower.jpg";

  const routeImage = useMemo(() => {
    if (pathname?.startsWith("/shop")) {
      return "/images/hero-flower.jpg";
    }
    if (pathname?.startsWith("/about")) {
      return "/images/hero-flower.jpg";
    }
    return "/images/hero-flower.jpg";
  }, [pathname]);

  const targetImage = heroImage || routeImage || fallbackImage;
  const [backgroundImage, setBackgroundImage] = useState<string>(targetImage);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    setIsFading(true);
    const timeout = window.setTimeout(() => {
      setBackgroundImage(targetImage);
      setIsFading(false);
    }, 550);
    return () => window.clearTimeout(timeout);
  }, [targetImage]);

  return (
    <>
      <div
        id="global-blur-background"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: isFading ? 0 : 1
        }}
      />
      <div id="grain-overlay" aria-hidden="true" />
      <div id="site-root" className="min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <HeroImageProvider>
      <ShellFrame>{children}</ShellFrame>
    </HeroImageProvider>
  );
}

