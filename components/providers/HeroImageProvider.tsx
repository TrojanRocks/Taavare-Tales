"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";

type HeroImageContextValue = {
  heroImage: string;
  setHeroImage: (src: string) => void;
};

const HeroImageContext = createContext<HeroImageContextValue | undefined>(
  undefined
);

const DEFAULT_HERO =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80&sat=-10";

export function HeroImageProvider({ children }: { children: ReactNode }) {
  const [heroImage, setHeroImageState] = useState<string>(DEFAULT_HERO);

  const setHeroImage = useCallback((src: string) => {
    setHeroImageState(src || DEFAULT_HERO);
  }, []);

  const value = useMemo(
    () => ({ heroImage, setHeroImage }),
    [heroImage, setHeroImage]
  );

  return (
    <HeroImageContext.Provider value={value}>
      {children}
    </HeroImageContext.Provider>
  );
}

export function useHeroImage() {
  const ctx = useContext(HeroImageContext);
  if (!ctx) {
    throw new Error("useHeroImage must be used within HeroImageProvider");
  }
  return ctx;
}


