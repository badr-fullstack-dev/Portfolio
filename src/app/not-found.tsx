import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-950 px-5 py-16 text-slate-100 sm:px-8">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]"
      />

      <div className="mx-auto max-w-2xl text-center">
        <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-[6px] border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
          <span>404 · Page introuvable</span>
          <span aria-hidden>·</span>
          <span lang="en">Not found</span>
        </p>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          Cette page n&apos;existe pas.
          <span className="mt-3 block text-3xl text-slate-300 sm:text-4xl" lang="en">
            This page doesn&apos;t exist.
          </span>
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
          Le lien est peut-être obsolète ou mal écrit. Revenez à l&apos;accueil
          ou contactez Badreddine si vous cherchiez quelque chose de précis.
        </p>
        <p className="mt-3 text-base leading-8 text-slate-400 sm:text-lg" lang="en">
          The link may be outdated or mistyped. Head back home or contact
          Badreddine if you were looking for something specific.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
          <ButtonLink href="/en" variant="secondary">
            <span lang="en">Back to the English version</span>
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
