import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-start justify-center gap-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">That page is missing from the demo content.</h1>
      <p className="max-w-xl text-muted-foreground">Create or update entries in `src/data/portfolio-config.ts` to add more projects, articles, and case studies.</p>
      <Button asChild>
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
