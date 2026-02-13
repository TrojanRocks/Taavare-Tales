import Link from "next/link";
import { cn } from "../../lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles: Record<Variant, string> = {
  primary:
    "bg-pink text-white border border-pink hover:bg-pink hover:border-pink",
  secondary:
    "bg-white text-pink border border-pink hover:bg-pink hover:text-white",
  ghost:
    "bg-offwhite text-charcoal border border-transparent hover:border-stroke"
};

export function Button({
  children,
  variant = "secondary",
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-6 py-3 text-[12px] tracking-[0.16em] uppercase transition-colors duration-300 ease font-medium btn-bloom",
    "rounded-none",
    "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-pink",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

