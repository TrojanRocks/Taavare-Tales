import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        offwhite: "#F9F9F9",
        charcoal: "#1A1A1A",
        pink: "#E52387",
        yellow: "#F5A300",
        blush: "#FDECF4",
        linen: "#F4F1EC",
        ink: "#111111",
        haze: "#f3f3f3",
        stroke: "#e6e6e6"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.04)",
        subtle: "0 6px 20px rgba(0,0,0,0.06)"
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.33, 1, 0.68, 1)"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      }
    }
  },
  plugins: []
};

export default config;

