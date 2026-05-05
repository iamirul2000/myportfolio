import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

export function PageHero({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div className="space-y-5">
          <Badge>{eyebrow}</Badge>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="max-w-2xl text-lg text-muted-foreground text-justify">{description}</p>
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
    </section>
  );
}
