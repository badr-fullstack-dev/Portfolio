import type { Metadata } from "next";

import { RecruitersPage } from "@/components/recruiters-page";
import { recruitersMetadata } from "@/lib/metadata";

export const metadata: Metadata = recruitersMetadata("en");

export default function Page() {
  return <RecruitersPage locale="en" />;
}
