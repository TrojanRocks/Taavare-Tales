import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import SiteShell from "../components/SiteShell";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Taavare Tales | Stories told in petals",
  description:
    "A luxury floral studio weaving South Indian tradition with modern elegance. Discover bouquets that speak softly.",
  metadataBase: new URL("https://taavare-tales.example.com"),
  openGraph: {
    title: "Taavare Tales | Stories told in petals",
    description:
      "A luxury floral studio weaving South Indian tradition with modern elegance.",
    url: "https://taavare-tales.example.com",
    siteName: "Taavare Tales",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} bg-white text-charcoal antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

