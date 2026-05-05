# Badreddine Portfolio

Bilingual (FR/EN) freelance portfolio for Badreddine — AI automations, business
chatbots, full-stack web applications, and business websites for French SMBs.

**Live:** https://badreddine.dev
**Repo:** https://github.com/badr-fullstack-dev/Portfolio

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4
- Zod for input validation
- Resend for contact email delivery (verified on `badreddine.dev`)
- Hosted on Vercel, DNS at OVH

## Local development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

Routes:

- `/` — FR home
- `/en` — EN home
- `/api/contact` — contact form endpoint (POST)
- `/sitemap.xml`, `/robots.txt`
- `/opengraph-image`, `/twitter-image`, `/en/opengraph-image`, `/en/twitter-image`
- `/icon`, `/apple-icon`
- Branded `not-found.tsx` (404) and `error.tsx` (runtime boundary)

Home page sections (in order, both locales):

1. Hero — eyebrow, title, subtitle, CTAs, availability, project-signal list.
2. Proof — five short claims grounded in countable facts (e.g. "5 shipped
   public projects", "Français · Anglais · Arabe").
3. Services — three offerings (AI automations & chatbots, custom web apps,
   business sites & e-commerce).
4. Work — five real case studies in `src/lib/content.ts`, each linking to a
   public GitHub repo and/or a live site.
5. Process — three differentiated steps (audit & scope → prototype → build,
   hardening & deployment).
6. About — bilingual profile + working stack chips.
7. Contact — direct channels + Resend-wired brief form.

## Environment

Copy `.env.example` to `.env.local` and fill in real values.

```text
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=contact@badreddine.dev
RESEND_FROM_EMAIL=Badreddine Portfolio <noreply@badreddine.dev>
```

If `RESEND_API_KEY` is missing, `/api/contact` returns a clear fallback message
and the UI keeps the direct email visible.

The contact endpoint is rate-limited to **5 submissions per hour per IP** with a
bilingual 429 response and `Retry-After` header (see `src/lib/rate-limit.ts`).

## Verification

```powershell
npm run lint
npm run typecheck
npm run build
```

Manual checks before deployment:

- `/` and `/en` render correctly.
- Language switch moves between French and English.
- Contact form shows validation errors for empty, invalid, and short fields.
- Missing Resend config shows the direct-email fallback.
- Demo and GitHub links open in new tabs.
- Mobile layout works at 375px width.
- Desktop layout works at 1440px width.
- No placeholder content, fake metrics, fake testimonials, pricing, analytics,
  or CV link.
- Proof and process copy reflects only countable, public facts (no testimonials
  ship until a real attributable quote with permission is available).

## Production setup (already in place)

### Vercel
- Project imported from GitHub `badr-fullstack-dev/Portfolio`.
- Domain `badreddine.dev` connected at the apex (A → `216.198.79.1`).
- `www.badreddine.dev` connected via CNAME → `*.vercel-dns-017.com`.
- Environment variables set for Production, Preview, and Development.

### Email pipeline (Resend on OVH DNS)
- Resend domain `badreddine.dev` verified (DKIM, SPF, MX, DMARC).
- Sender: `Badreddine Portfolio <noreply@badreddine.dev>`.
- Recipient inbox: OVH mailbox `contact@badreddine.dev` (5 GB MX Plan).
- DMARC: `p=none` reporting to `elaouba@et.esiea.fr` (review for hardening to
  `quarantine` after a few weeks of clean reports).
- The Vercel/A and OVH/MX records coexist on the apex without conflict.

### SEO and discoverability
- `metadata.ts` per locale: title, description, canonical, hreflang, OG,
  Twitter card.
- `Person` and `WebSite` JSON-LD injected at `<body>` open in `layout.tsx`
  (knows about, knowsLanguage, sameAs to GitHub/LinkedIn, address Paris/FR).
- Static `opengraph-image` + `twitter-image` per locale (1200×630 PNG via
  `next/og`).
- Branded favicon (32×32) and apple-touch-icon (180×180) via `next/og`.

### Accessibility
- WCAG AA contrast on all surfaces (slate-950 base + cyan-300/emerald-300/
  rose-300 accents).
- Bilingual content uses `lang="en"` spans on English strings inside the
  FR-rooted document.
- Skip-to-content link, focus-visible rings, aria-invalid on form, aria-live
  status, role="alert" on the error boundary.
- Honeypot field for bot rejection on the contact form.

## Project conventions

- `tasks/todo.md` — current implementation plan with checkable items.
- `tasks/lessons.md` — patterns captured after corrections.
- See `AGENTS.md` for the workflow rules (plan-first, verification before
  done, demand elegance for non-trivial changes).

## License

See `LICENSE`. All rights reserved — repository is public for transparency,
not as open source. For permission requests or freelance inquiries:
**contact@badreddine.dev**.
