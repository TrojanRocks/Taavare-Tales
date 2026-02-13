import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stroke/70 bg-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Taavare Tales
          </p>
          <p className="mt-1 font-serif text-lg text-charcoal">
            Stories told in petals
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Crafted in Bengaluru · Rooted in tradition
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
          <Link
            href="https://instagram.com"
            className="transition-colors duration-200 hover:text-charcoal"
          >
            Instagram
          </Link>
          <span className="h-3 w-[1px] bg-stroke" aria-hidden="true" />
          <Link
            href="https://wa.me/910000000000"
            className="transition-colors duration-200 hover:text-charcoal"
          >
            WhatsApp
          </Link>
          <span className="h-3 w-[1px] bg-stroke" aria-hidden="true" />
          <Link
            href="mailto:hello@taavaretales.com"
            className="transition-colors duration-200 hover:text-charcoal"
          >
            hello@taavaretales.com
          </Link>
        </div>
      </div>
      <div className="border-t border-stroke/70 px-6 py-4 text-center text-xs text-gray-500 md:px-8">
        © {new Date().getFullYear()} Taavare Tales. Stories told in petals.
      </div>
    </footer>
  );
}


