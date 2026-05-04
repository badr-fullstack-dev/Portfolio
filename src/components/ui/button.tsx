import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-cyan-300/60 bg-cyan-300 text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.22)] hover:bg-cyan-200",
  secondary:
    "border-white/14 bg-white/[0.06] text-white hover:border-white/28 hover:bg-white/[0.1]",
  ghost:
    "border-transparent bg-transparent text-slate-200 hover:bg-white/[0.07]",
};

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    variants[variant],
    className,
  );

  if (isExternal) {
    return (
      <a
        className={classes}
        href={href}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
