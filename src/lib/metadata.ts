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
