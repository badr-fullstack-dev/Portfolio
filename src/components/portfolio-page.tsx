import {
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  GitBranch,
  Globe2,
  GraduationCap,
  Mail,
  Network,
  Phone,
  Rocket,
  ShieldCheck,
  Store,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import type { ComponentType } from "react";

import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { contactInfo, content } from "@/lib/content";
import type { IconName, Locale } from "@/lib/types";

const iconMap: Record<IconName, ComponentType<{ size?: number }>> = {
  bot: Bot,
  code: Code2,
  store: Store,
  shield: ShieldCheck,
  rocket: Rocket,
  workflow: Workflow,
  terminal: TerminalSquare,
  globe: Globe2,
};

type PortfolioPageProps = {
  locale: Locale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const page = content[locale];
  const year = new Date().getFullYear();
  const techGroups = [
    ["frontend", "Frontend"],
    ["backend", "Backend"],
    ["ai", "AI / Automation"],
    ["tools", "Tools"],
  ] as const;

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100"
      lang={locale}
    >
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[8px] focus:bg-cyan-300 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950"
        href="#main"
      >
        Skip to content
      </a>
      <div className="relative border-b border-emerald-300/30 bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-emerald-500/15">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-start gap-3 sm:items-center">
            <span className="grid size-8 shrink-0 place-items-center rounded-[8px] border border-emerald-300/40 bg-emerald-300/10 text-emerald-100">
              <GraduationCap aria-hidden size={16} />
            </span>
            <p className="text-sm leading-6 text-emerald-50">
              <span className="mr-2 inline-flex rounded-[6px] border border-emerald-300/40 bg-emerald-300/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-100">
                {page.alternance.label}
              </span>
              <span className="sr-only">: </span>
              <span className="font-medium text-white">
                {page.alternance.message}
              </span>
            </p>
          </div>
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-[7px] border border-emerald-300/50 bg-emerald-300/15 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-300/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
            href="#contact"
          >
            {page.alternance.cta}
            <ArrowUpRight aria-hidden size={15} />
          </a>
        </div>
      </div>
      <SiteHeader content={page} />
      <main id="main">
        <section className="relative border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <Badge>{page.hero.eyebrow}</Badge>
              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] text-white sm:text-6xl lg:text-7xl">
                {page.hero.title}
              </h1>
              <span className="mt-5 inline-flex max-w-2xl items-start gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/5 px-3 py-1.5 text-sm leading-relaxed text-cyan-50">
                <span aria-hidden="true" className="text-base leading-relaxed">
                  🎓
                </span>
                <span>{page.studentBadge.text}</span>
              </span>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                {page.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#contact">{page.hero.primaryCta}</ButtonLink>
                <ButtonLink href="#work" variant="secondary">
                  {page.hero.secondaryCta}
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm font-medium text-emerald-200">
                {page.hero.availability}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {page.proof.map((item) => (
                  <span
                    className="rounded-[7px] border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[8px] border border-white/12 bg-slate-900/82 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <Image
                    alt={page.hero.avatarAlt}
                    className="rounded-[8px] border border-cyan-300/30"
                    height={86}
                    priority
                    src="https://avatars.githubusercontent.com/u/219103306?v=4"
                    width={86}
                  />
                  <div>
                    <p className="text-sm text-slate-400">Portfolio of</p>
                    <p className="text-2xl font-semibold text-white">
                      {contactInfo.name}
                    </p>
                    <p className="mt-1 text-sm text-cyan-200">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                <div className="py-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                      {page.hero.signalTitle}
                    </p>
                    <span className="rounded-[6px] border border-emerald-300/30 px-2 py-1 text-xs font-semibold text-emerald-200">
                      v1
                    </span>
                  </div>
                  <ol className="grid gap-3">
                    {page.hero.signalItems.map((item, index) => (
                      <li className="flex gap-3 text-sm leading-6" key={item}>
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-[6px] bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                  {["React", "Node", "AI"].map((item) => (
                    <div
                      className="rounded-[7px] border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-sm font-semibold text-slate-200"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          eyebrow={page.services.eyebrow}
          id="services"
          intro={page.services.intro}
          title={page.services.title}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {page.services.items.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <article
                  className="rounded-[8px] border border-white/12 bg-white/[0.045] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
                  key={service.title}
                >
                  <div className="grid size-11 place-items-center rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {service.bullets.map((bullet) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                        key={bullet}
                      >
                        <Check
                          aria-hidden
                          className="mt-1 shrink-0 text-emerald-300"
                          size={15}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          className="bg-slate-900/35"
          eyebrow={page.work.eyebrow}
          id="work"
          intro={page.work.intro}
          title={page.work.title}
        >
          <div className="grid gap-4">
            {page.work.items.map((project, index) => (
              <article
                className="grid gap-6 rounded-[8px] border border-white/12 bg-slate-950/70 p-5 md:grid-cols-[0.28fr_1fr] md:p-6"
                key={project.title}
              >
                <div>
                  <p className="text-sm font-semibold text-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.14em] text-slate-500">
                    {project.category}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        className="rounded-[6px] border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">
                    {project.summary}
                  </p>
                  <ul className="mt-5 grid gap-2">
                    {project.bullets.map((bullet) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                        key={bullet}
                      >
                        <Check
                          aria-hidden
                          className="mt-1 shrink-0 text-amber-200"
                          size={15}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {project.links.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          className="inline-flex items-center gap-2 rounded-[7px] border border-white/12 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                          href={link.href}
                          key={`${project.title}-${link.href}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden size={15} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow={page.process.eyebrow}
          id="process"
          intro={page.process.intro}
          title={page.process.title}
        >
          <ol className="grid gap-3 md:grid-cols-2">
            {page.process.steps.map((step, index) => (
              <li
                className="flex gap-4 rounded-[8px] border border-white/12 bg-white/[0.045] p-4"
                key={step}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-emerald-300/10 text-sm font-bold text-emerald-200">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm leading-7 text-slate-300">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          className="bg-slate-900/35"
          eyebrow={page.about.eyebrow}
          id="about"
          title={page.about.title}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {page.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {techGroups.map(([group, label]) => (
                <div
                  className="rounded-[8px] border border-white/12 bg-slate-950/65 p-4"
                  key={group}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {label}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {page.about.tech
                      .filter((tech) => tech.group === group)
                      .map((tech) => (
                        <span
                          className="rounded-[6px] bg-white/[0.06] px-2.5 py-1.5 text-xs font-medium text-slate-200"
                          key={tech.label}
                        >
                          {tech.label}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          eyebrow={page.faq.eyebrow}
          id="faq"
          intro={page.faq.intro}
          title={page.faq.title}
        >
          <ul className="grid gap-3" role="list">
            {page.faq.items.map((item) => (
              <li key={item.question}>
                <details className="group rounded-[8px] border border-white/12 bg-white/[0.045] open:border-cyan-300/30 open:bg-white/[0.07]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[8px] p-5 text-left text-base font-semibold text-white transition hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden
                      className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180 motion-reduce:transition-none"
                    />
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-300">
                    {item.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          eyebrow={page.contact.eyebrow}
          id="contact"
          intro={page.contact.intro}
          title={page.contact.title}
        >
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="rounded-[8px] border border-white/12 bg-white/[0.045] p-5">
              <h3 className="text-xl font-semibold text-white">
                {page.contact.directTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {page.contact.directIntro}
              </p>
              <div className="mt-6 grid gap-3">
                <ContactLink
                  href={`mailto:${contactInfo.email}`}
                  icon={Mail}
                  label={contactInfo.email}
                />
                <ContactLink
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  icon={Phone}
                  label={contactInfo.phone}
                />
                <ContactLink
                  href={contactInfo.linkedin}
                  icon={Network}
                  label="LinkedIn"
                />
                <ContactLink
                  href={contactInfo.github}
                  icon={GitBranch}
                  label="GitHub"
                />
              </div>
              <p className="mt-6 rounded-[8px] border border-amber-200/20 bg-amber-200/10 p-4 text-sm leading-7 text-amber-100">
                {page.contact.fallback}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {page.contact.formTitle}
              </h3>
              <ContactForm
                contact={contactInfo}
                labels={page.form}
                locale={locale}
              />
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{page.footer.tagline}</p>
          <p>
            © {year} {contactInfo.name}. {page.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

type ContactLinkProps = {
  href: string;
  icon: ComponentType<{ size?: number }>;
  label: string;
};

function ContactLink({ href, icon: Icon, label }: ContactLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <Icon size={17} />
      <span className="min-w-0 break-words">{label}</span>
    </a>
  );
}
