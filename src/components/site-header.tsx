"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

type HeaderContent = {
  locale: Locale;
  altRoute: string;
  altLocaleLabel: string;
  nav: {
    services: string;
    work: string;
    process: string;
    about: string;
    faq: string;
    contact: string;
  };
};

type SiteHeaderProps = {
  content: HeaderContent;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const items = [
    { label: content.nav.services, href: "#services" },
    { label: content.nav.work, href: "#work" },
    { label: content.nav.process, href: "#process" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.faq, href: "#faq" },
    { label: content.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link
          aria-label="Badreddine home"
          className="group inline-flex items-center gap-3 text-white"
          href={content.locale === "fr" ? "/" : "/en"}
        >
          <span className="grid size-9 place-items-center rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
            B
          </span>
          <span className="text-sm font-semibold tracking-wide">
            Badreddine
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  className="rounded-[7px] px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.07] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            className="rounded-[7px] border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-300/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href={content.altRoute}
            hrefLang={content.locale === "fr" ? "en" : "fr"}
          >
            {content.altLocaleLabel}
          </Link>
          <a
            className="rounded-[7px] border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/16 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href="#contact"
          >
            {content.nav.contact}
          </a>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-[8px] border border-white/12 text-slate-100 md:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-white/10 md:hidden",
          open ? "block" : "hidden",
        )}
        id="mobile-menu"
      >
        <nav aria-label="Mobile navigation" className="px-5 py-4">
          <ul className="mx-auto grid max-w-6xl gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-[8px] px-3 py-3 text-base text-slate-200 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link
                className="inline-flex rounded-[8px] border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200"
                href={content.altRoute}
                hrefLang={content.locale === "fr" ? "en" : "fr"}
                onClick={() => setOpen(false)}
              >
                {content.altLocaleLabel}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
