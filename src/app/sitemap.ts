import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      changeFrequency: "monthly",
      lastModified: now,
      priority: 1,
      url: absoluteUrl("/"),
    },
    {
      changeFrequency: "monthly",
      lastModified: now,
      priority: 0.9,
      url: absoluteUrl("/en"),
    },
  ];
}
