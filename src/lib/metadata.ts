import type { Metadata } from "next";

import { contactInfo, seo } from "@/lib/content";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";
import type { Locale } from "@/lib/types";

export function pageMetadata(locale: Locale): Metadata {
  const data = seo[locale];
  const path = locale === "fr" ? "/" : "/en";

  return {
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        en: absoluteUrl("/en"),
        fr: absoluteUrl("/"),
      },
    },
    authors: [{ name: contactInfo.name, url: contactInfo.github }],
    description: data.description,
    metadataBase: new URL(getSiteUrl()),
    openGraph: {
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      description: data.ogDescription,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: "Badreddine Portfolio",
      title: data.ogTitle,
      type: "website",
      url: absoluteUrl(path),
    },
    title: data.title,
    twitter: {
      card: "summary_large_image",
      description: data.ogDescription,
      title: data.ogTitle,
    },
  };
}

const recruitersSeo = {
  fr: {
    title:
      "Badreddine — Alternance full-stack | Profil ESIEA pour recruteurs",
    description:
      "Étudiant ingénieur ESIEA en recherche d'alternance full-stack (rentrée septembre 2026, apprentissage, Paris + Île-de-France). Profil, stack, projets en production, CV téléchargeable.",
  },
  en: {
    title:
      "Badreddine — Full-stack apprenticeship | ESIEA profile for recruiters",
    description:
      "ESIEA engineering student seeking a full-stack apprenticeship (September 2026 start, apprentissage contract, Paris + Île-de-France). Profile, stack, shipped projects, downloadable CV.",
  },
} as const;

export function recruitersMetadata(locale: Locale): Metadata {
  const data = recruitersSeo[locale];
  const path = locale === "fr" ? "/recruteurs" : "/en/recruiters";

  return {
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        en: absoluteUrl("/en/recruiters"),
        fr: absoluteUrl("/recruteurs"),
      },
    },
    authors: [{ name: contactInfo.name, url: contactInfo.github }],
    description: data.description,
    metadataBase: new URL(getSiteUrl()),
    openGraph: {
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      description: data.description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: "Badreddine Portfolio",
      title: data.title,
      type: "website",
      url: absoluteUrl(path),
    },
    title: data.title,
    twitter: {
      card: "summary_large_image",
      description: data.description,
      title: data.title,
    },
  };
}
