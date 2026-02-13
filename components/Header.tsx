import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#collections", label: "Collections" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stroke/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src="/taavare-logo.svg"
              alt="Taavare Tales logo"
              fill
              sizes="48px"
              priority
              className="object-contain"
            />
          </div>
          <div className="leading-snug">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
              Taavare Tales
            </span>
            <span className="block font-serif text-lg text-charcoal">
              Stories told in petals
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] tracking-[0.14em] text-gray-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button
            variant="ghost"
            className="px-5 py-2 text-[12px] tracking-[0.16em]"
            href="/shop"
          >
            Explore
          </Button>
        </div>
      </div>
      <div className="md:hidden">
        <nav className="flex gap-5 overflow-x-auto border-t border-stroke/70 px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors duration-200 hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="whitespace-nowrap text-pink transition-colors duration-200"
          >
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}


