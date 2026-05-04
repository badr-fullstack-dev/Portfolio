"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-950 px-5 py-16 text-slate-100 sm:px-8">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)]"
      />

      <div className="mx-auto max-w-2xl text-center" role="alert">
        <p className="inline-flex flex-wrap items-center justify-center gap-2 rounded-[6px] border border-rose-300/30 bg-rose-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-rose-200">
          <span>Erreur</span>
          <span aria-hidden>·</span>
          <span lang="en">Error</span>
        </p>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          Quelque chose s&apos;est mal passé.
          <span className="mt-3 block text-3xl text-slate-300 sm:text-4xl" lang="en">
            Something went wrong.
          </span>
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
          Désolé pour la gêne. Vous pouvez réessayer ou revenir à l&apos;accueil
          et écrire à Badreddine si le problème persiste.
        </p>
        <p className="mt-3 text-base leading-8 text-slate-400 sm:text-lg" lang="en">
          Sorry for the trouble. Try again or head home and email Badreddine if
          the issue keeps happening.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-cyan-300/60 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.22)] transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            onClick={() => reset()}
            type="button"
          >
            Réessayer
            <span className="opacity-70" aria-hidden>
              ·
            </span>
            <span lang="en">Try again</span>
          </button>
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-white/14 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            href="/"
          >
            Accueil
            <span className="opacity-70" aria-hidden>
              ·
            </span>
            <span lang="en">Home</span>
          </Link>
        </div>

        {error.digest ? (
          <p
            aria-label="Référence d'erreur — Error reference"
            className="mt-8 inline-block rounded-[6px] border border-white/10 bg-slate-950/60 px-3 py-1 font-mono text-xs text-slate-400"
          >
            {error.digest}
          </p>
        ) : null}
      </div>
    </main>
  );
}
