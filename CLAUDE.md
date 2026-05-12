@AGENTS.md

## Project Overview

This is **badreddine.dev** — a bilingual (FR/EN) freelance portfolio for Badreddine, a Paris-based full-stack/AI developer. Positioned for SMB freelance work, with a secondary signal that he's also seeking a full-stack apprenticeship (alternance) for September 2026 (ESIEA student).

- **Live site**: https://www.badreddine.dev (canonical), https://www.badreddine.dev/en
- **Deploy target**: Vercel (production on `main`)
- **Repo**: github.com/badr-fullstack-dev/Portfolio
- **Owner email**: badreddineelaouba@gmail.com

## Tech Stack

- **Next.js 16.2.4** with App Router. **READ `AGENTS.md` FIRST** — APIs and conventions in this version diverge from training data. Use `node_modules/next/dist/docs/` as the source of truth before writing Next-specific code.
- **React 19.2** server + client components
- **TypeScript** strict, path alias `@/*` → `src/*`
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.*` — uses CSS-first config in `src/app/globals.css`)
- **lucide-react** icons
- **zod** for schema validation
- **Resend** for transactional email (contact form)
- **Node.js runtime** for the API route (not edge)

## Repo Layout

```
src/
├── app/
│   ├── layout.tsx          # Root HTML, JSON-LD Person+WebSite schema, dark slate-950 bg
│   ├── page.tsx            # FR home, renders <PortfolioPage locale="fr" />
│   ├── en/page.tsx         # EN home, renders <PortfolioPage locale="en" />
│   ├── api/contact/route.ts # POST handler: zod validation → Resend → JSON response
│   ├── globals.css         # Tailwind v4 directives + tokens
│   ├── icon.tsx, apple-icon.tsx, opengraph-image.tsx, twitter-image.tsx
│   ├── robots.ts, sitemap.ts
│   ├── error.tsx, not-found.tsx
├── components/
│   ├── portfolio-page.tsx  # The whole single-page layout (hero, services, work, process, about, faq, contact)
│   ├── site-header.tsx     # Sticky header w/ locale switch + mobile menu (use client)
│   ├── contact-form.tsx    # Client form, posts to /api/contact
│   └── ui/                 # badge, button, section primitives
├── lib/
│   ├── content.ts          # ⭐ All FR+EN site copy as Record<Locale, SiteContent>. Single source of truth for text.
│   ├── types.ts            # Locale, SiteContent, CaseStudy, ServiceItem, etc.
│   ├── metadata.ts         # Per-locale Next Metadata (alternates, OG, twitter)
│   ├── contact-schema.ts   # Zod schema for contact payload + ContactApiResponse union
│   ├── rate-limit.ts       # In-memory IP rate limiter for the contact API
│   ├── site-url.ts         # getSiteUrl() / absoluteUrl() — honors VERCEL_URL / SITE_URL
│   └── utils.ts            # cn() helper
└── public/                 # static assets
```

## Content Architecture

**`src/lib/content.ts` is the single source of truth for all user-facing copy.** It exports a `siteContent: Record<Locale, SiteContent>` plus shared `contactInfo`, `seo`, and `techStack` constants. Any text change — section headings, case study bullets, FAQ, CTAs, alternance banner, hero pill — goes here, in both `fr` and `en` keys. The components are dumb renderers.

Type contracts live in `src/lib/types.ts`. When adding a new field (e.g., a new section), extend the `SiteContent` type and fill both locales. TypeScript will catch missing keys.

## Routing & i18n

Manual two-route i18n, no `next-intl` or middleware. `/` is FR, `/en` is EN. Each route renders the same `<PortfolioPage locale={...} />` which reads `siteContent[locale]`. Header has a locale switch link via `content.altRoute` / `content.altLocaleLabel`. Canonical URLs and `hreflang` are wired in `lib/metadata.ts`.

## Contact API

`POST /api/contact` is the only API route. Flow:

1. Rate limit by client IP (`lib/rate-limit.ts`) — returns 429 with `Retry-After`.
2. Parse JSON body; 400 on malformed.
3. Honeypot: if the `website` field is non-empty, return a fake success (silently drop bot submissions).
4. `contactSchema.safeParse` (zod) — 400 with `fieldErrors` on validation failure.
5. Read `RESEND_API_KEY` + `CONTACT_TO_EMAIL` from env. 503 if missing.
6. Send via Resend with `replyTo: data.email`. Subject template: `[Portfolio] {projectType} - {company (name) | name}`.
7. Return typed `ContactApiResponse` JSON.

Required env vars:
- `RESEND_API_KEY` (required for send)
- `CONTACT_TO_EMAIL` (required, destination address)
- `RESEND_FROM_EMAIL` (optional, defaults to `Badreddine Portfolio <noreply@badreddine.dev>`)
- `SITE_URL` (optional, used for canonical URL generation; falls back to `VERCEL_URL` then localhost)

## Design System

- **Palette**: dark `bg-slate-950` base, `text-slate-100/200/300` body, **cyan-300** primary accent, **emerald-300** secondary accent (used for alternance signals). White/cyan focus rings.
- **Radii**: custom `rounded-[7px]` / `rounded-[8px]` for chips/buttons, `rounded-2xl` for pills, `rounded-3xl` for large cards.
- **Borders**: low-opacity white (`border-white/10`, `border-white/12`) on dark surfaces.
- **Typography**: sans, tight tracking (`tracking-[0.16em]` uppercase for nav/eyebrow text), large display sizes in hero.
- **Layout**: `max-w-6xl mx-auto px-5 sm:px-8 lg:px-10` container pattern repeated across sections.

## Accessibility — non-negotiable

WCAG 2.1 AA is the target. The repo has a **mandatory pre-write hook** that requires delegation to `accessibility-agents:accessibility-lead` **before editing any UI file**. This is enforced; do not bypass it.

Conventions already established in this codebase:
- `aria-label` on the primary `<nav>` (`"Primary navigation"`, `"Mobile navigation"`)
- Mobile menu button uses `aria-controls`, `aria-expanded`, and a dynamic `aria-label`
- Focus rings are `focus-visible:ring-2 focus-visible:ring-cyan-300` (or emerald-200 on emerald surfaces)
- Decorative icons are `aria-hidden`; emoji used as eyebrow markers use explicit `aria-hidden="true"`
- Section landmark structure: one `<main>`, semantic `<header>`, `<section>` with `aria-labelledby`. Avoid extra `<aside>`/`role="region"` that would noise up the landmark list
- Use `<span className="sr-only">` to insert punctuation/context for screen readers between visually-separated pill labels and following text
- Locale switch link uses `hrefLang`

When the design says "small pill/badge" or similar visual chunk, prefer `<span>` over `<p>`. Long FR translations often wrap — favor `rounded-2xl` over `rounded-full` and `items-start` when an icon must align with the first line of wrapped text.

## Conventions

- **Server components by default.** Only `site-header.tsx` and `contact-form.tsx` are `"use client"` (they need `useState`).
- **No CSS modules / no inline styles.** Tailwind utility classes only.
- **Imports order**: external → `@/` aliases → relative. Blank line between groups. (Enforced by `eslint-config-next`.)
- **Object/prop ordering**: alphabetical within objects where possible (Next ESLint preset enforces this on JSX a11y attributes).
- **No emojis in code** unless they're literal display content (e.g., the 🎓 in the hero pill is intentional UI).
- **Bilingual parity**: any content/UI change in FR must have an EN equivalent in the same commit. Don't ship a half-translated section.

## Common Commands

```bash
npm run dev        # next dev — local at http://localhost:3000
npm run build      # next build — production build
npm run start      # next start — serve the built app
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

There is **no test suite**. "Verification" means: typecheck passes, lint passes, dev server renders the change in a browser, both FR and EN routes still load.

## Git & Deploy

- `main` is the deploy branch. Vercel deploys on push.
- Direct pushes to `main` require fresh authorization on every push (a permission rule blocks them by default). If `git push origin main` fails with a permission error, ask the user to run `! git push origin main` themselves.
- One logical change per commit. Conventional-ish style (`feat(area):`, `content(area):`, `fix(area):`).
- **Never** force-push, amend pushed commits, or touch OVH DNS records.

## What NOT to do

- Don't add a CMS, a state library, or `next-intl`. The content-in-TS pattern is intentional for this size.
- Don't introduce a backend framework, a database, or auth. The site is static + one stateless contact route.
- Don't refactor `content.ts` into per-section files unless asked. The file is long but trivially navigable.
- Don't change brand colors, font sizes, or radii without an explicit ask.
- Don't add comments to explain WHAT well-named code already says (see Core Principles below).
- Don't edit UI files without first delegating to `accessibility-agents:accessibility-lead`.

## Workflow Orchestration

### 1. Plan Node Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep the main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for the relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run typecheck/lint, check logs, demonstrate correctness in a browser for UI work

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add a review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Touch minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.
