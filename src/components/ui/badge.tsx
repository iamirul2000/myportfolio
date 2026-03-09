import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-gradient-to-r from-primary/12 via-sky-400/10 to-accent/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
        className
      )}
    >
      {children}
    </div>
  );
}