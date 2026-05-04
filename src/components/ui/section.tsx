import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10", className)}
      id={id}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <Badge>{eyebrow}</Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
