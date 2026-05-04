# Badreddine Portfolio

Futuristic bilingual freelance portfolio for Badreddine, focused on AI automations, business chatbots, full-stack web applications, and business websites for French SMBs.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zod validation
- Resend contact email delivery
- Vercel deployment target

## Local Development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

Routes:

- `/` French-first portfolio
- `/en` English version
- `/api/contact` contact form endpoint

## Environment

Copy `.env.example` to `.env.local` and fill the production values when ready.

```text
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=
CONTACT_TO_EMAIL=contact@badreddine.dev
RESEND_FROM_EMAIL=Badreddine Portfolio <noreply@badreddine.dev>
```

If `RESEND_API_KEY` is missing, the contact form returns a clear fallback message and the UI keeps the direct email visible.

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
- Missing Resend config shows the direct email fallback.
- Demo and GitHub links open in new tabs.
- Mobile layout works at 375px width.
- Desktop layout works at 1440px width.
- No placeholder content, fake metrics, fake testimonials, pricing, analytics, or CV link.

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `RESEND_FROM_EMAIL`
4. Deploy.
5. When a custom domain is purchased, set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain and redeploy.
