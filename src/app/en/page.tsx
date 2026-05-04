import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en");

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
