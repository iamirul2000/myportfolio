"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/data/portfolio-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button type="button" variant="secondary" size="sm" className="h-10 w-10 rounded-full p-0" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      {open ? (
        <div className="absolute inset-x-4 top-24 z-50 rounded-3xl border border-border/70 bg-background/95 p-4 shadow-soft backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {portfolioConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}