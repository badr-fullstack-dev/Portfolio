import type { Metadata } from "next";
import "./globals.css";

import { contactInfo, seo } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  description: seo.fr.description,
  metadataBase: new URL(getSiteUrl()),
  title: seo.fr.title,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
    addressLocality: "Paris",
  },
  email: `mailto:${contactInfo.email}`,
  jobTitle: "Freelance AI and full-stack developer",
  knowsAbout: [
    "AI automation",
    "Prompt engineering",
    "Chatbots",
    "Full-stack web development",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
  ],
  knowsLanguage: ["fr", "en", "ar"],
  name: contactInfo.name,
  sameAs: [contactInfo.github, contactInfo.linkedin],
  telephone: contactInfo.phone,
  url: getSiteUrl(),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  inLanguage: ["fr-FR", "en-US"],
  name: "Badreddine Portfolio",
  publisher: { "@type": "Person", name: contactInfo.name },
  url: getSiteUrl(),
};

const jsonLd = JSON.stringify([personSchema, websiteSchema]).replace(
  /</g,
  "\\u003c",
);

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
      <body className="min-h-full bg-slate-950">
        <script
          type="application/ld+json"
          // Build-time JSON over static constants; `<` escaped above to
          // prevent any `</script>` sequence in string fields breaking out.
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        {children}
      </body>
    </html>
  );
}
