import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  GitBranch,
  Mail,
  Network,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { contactInfo, recruitersContent } from "@/lib/content";
import type { Locale } from "@/lib/types";

const cvSizeLabel = {
  fr: "PDF, 33 Ko",
  en: "PDF, 33 KB",
} as const;

const localeSwitchAriaLabel = {
  fr: "Switch to English version",
  en: "Passer à la version française",
} as const;

const homeLinkLabel = {
  fr: "Accueil",
  en: "Home",
} as const;

const newTabSuffix = {
  fr: "(ouvre dans un nouvel onglet)",
  en: "(opens in a new tab)",
} as const;

type RecruitersPageProps = {
  locale: Locale;
};

export function RecruitersPage({ locale }: RecruitersPageProps) {
  const page = recruitersContent[locale];
  const year = new Date().getFullYear();
  const homeHref = locale === "fr" ? "/" : "/en";
  const cvVisible = `(${cvSizeLabel[locale]})`;
  const phoneTel = page.contact.phone.replace(/\s+/g, "");

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100"
      lang={locale}
    >
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[8px] focus:bg-cyan-300 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950"
        href="#main"
      >
        {locale === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            aria-label="Badreddine home"
            className="group inline-flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-[8px]"
            href={homeHref}
          >
            <span className="grid size-9 place-items-center rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
              B
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Badreddine
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              className="inline-flex items-center gap-1.5 rounded-[7px] border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-300/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              href={homeHref}
            >
              <ArrowLeft aria-hidden size={14} />
              {homeLinkLabel[locale]}
            </Link>
            <Link
              aria-label={localeSwitchAriaLabel[locale]}
              className="rounded-[7px] border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-300/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              href={page.altRoute}
              hrefLang={page.altLocale}
              lang={page.altLocale}
            >
              {page.altLocaleLabel}
            </Link>
          </div>
        </div>
      </header>

      <main className="scroll-mt-24" id="main">
        <section
          aria-labelledby="hero-title"
          className="relative border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]" />
          <div className="mx-auto max-w-4xl">
            <Badge>{page.hero.eyebrow}</Badge>
            <h1
              className="mt-6 text-balance text-3xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              id="hero-title"
            >
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {page.hero.subtitle}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {page.hero.keyFacts.map((fact) => (
                <div
                  className="flex flex-wrap gap-x-2 gap-y-1 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2"
                  key={fact.label}
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-slate-100">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-cyan-300/60 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.22)] transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                download
                href={page.hero.primaryCta.href}
              >
                <Download aria-hidden size={16} />
                {page.hero.primaryCta.label} {cvVisible}
              </a>
              <ButtonLink href={page.hero.secondaryCta.href} variant="secondary">
                {page.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="profile-title"
          className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-4xl">
            <Badge>{page.profile.eyebrow}</Badge>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl"
              id="profile-title"
            >
              {page.profile.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              {page.profile.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="positioning-title"
          className="scroll-mt-28 bg-slate-900/35 px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-4xl">
            <Badge>{page.positioning.eyebrow}</Badge>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl"
              id="positioning-title"
            >
              {page.positioning.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              {page.positioning.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="proof-title"
          className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <Badge>{page.proof.eyebrow}</Badge>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl"
                id="proof-title"
              >
                {page.proof.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                {page.proof.intro}
              </p>
            </div>
            <ul className="grid gap-4 md:grid-cols-3" role="list">
              {page.proof.items.map((item) => (
                <li key={item.title}>
                  <article className="h-full rounded-[8px] border border-white/12 bg-white/[0.045] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.07]">
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                className="inline-flex items-center gap-2 rounded-[7px] border border-white/12 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                href={page.proof.seeMore.href}
              >
                {page.proof.seeMore.label}
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="stack-title"
          className="scroll-mt-28 bg-slate-900/35 px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <Badge>{page.stack.eyebrow}</Badge>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl"
                id="stack-title"
              >
                {page.stack.title}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {page.stack.groups.map((group) => (
                <div
                  className="rounded-[8px] border border-white/12 bg-slate-950/65 p-4"
                  key={group.label}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {group.label}
                  </h3>
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    role="list"
                  >
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="inline-flex rounded-[6px] border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="languages-title"
          className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-4xl">
            <Badge>{page.languages.eyebrow}</Badge>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl"
              id="languages-title"
            >
              {page.languages.title}
            </h2>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {page.languages.items.map((lang) => (
                <div
                  className="rounded-[8px] border border-white/12 bg-white/[0.045] p-4"
                  key={lang.label}
                >
                  <dt className="text-base font-semibold text-white">
                    {lang.label}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-400">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="scroll-mt-28 bg-slate-900/35 px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-4xl">
            <Badge>{page.contact.eyebrow}</Badge>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl"
              id="contact-title"
            >
              {page.contact.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              {page.contact.intro}
            </p>

            <div className="mt-6">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-cyan-300/60 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.22)] transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                download
                href={page.contact.cvHref}
              >
                <Download aria-hidden size={16} />
                {page.contact.cvLabel} {cvVisible}
              </a>
            </div>

            <ul className="mt-8 grid gap-3" role="list">
              <li>
                <a
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  href={`mailto:${page.contact.schoolEmail}`}
                >
                  <Mail aria-hidden size={17} />
                  <span className="min-w-0 break-words">
                    <span className="text-slate-400">
                      {page.contact.schoolEmailLabel}:
                    </span>{" "}
                    {page.contact.schoolEmail}
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  href={`mailto:${page.contact.personalEmail}`}
                >
                  <Mail aria-hidden size={17} />
                  <span className="min-w-0 break-words">
                    <span className="text-slate-400">
                      {page.contact.personalEmailLabel}:
                    </span>{" "}
                    {page.contact.personalEmail}
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  href={`tel:${phoneTel}`}
                >
                  <Phone aria-hidden size={17} />
                  <span className="min-w-0 break-words">
                    <span className="text-slate-400">
                      {page.contact.phoneLabel}:
                    </span>{" "}
                    {page.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  aria-label={`${page.contact.linkedinLabel} ${newTabSuffix[locale]}`}
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  href={page.contact.linkedinHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Network aria-hidden size={17} />
                  <span className="min-w-0 break-words">
                    {page.contact.linkedinLabel}
                  </span>
                  <ArrowUpRight aria-hidden className="ml-auto" size={15} />
                </a>
              </li>
              <li>
                <a
                  aria-label={`${page.contact.githubLabel} ${newTabSuffix[locale]}`}
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  href={page.contact.githubHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitBranch aria-hidden size={17} />
                  <span className="min-w-0 break-words">
                    {page.contact.githubLabel}
                  </span>
                  <ArrowUpRight aria-hidden className="ml-auto" size={15} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {locale === "fr"
              ? "Automations IA, web apps et sites business depuis Paris."
              : "AI automations, web apps and business sites from Paris."}
          </p>
          <p>
            © {year} {contactInfo.name}.{" "}
            {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
