import type { Metadata } from "next";
import "./globals.css";

import { seo } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  description: seo.fr.description,
  metadataBase: new URL(getSiteUrl()),
  title: seo.fr.title,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-slate-950">{children}</body>
    </html>
  );
}
