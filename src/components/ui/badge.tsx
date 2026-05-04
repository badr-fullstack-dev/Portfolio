import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[6px] border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
