import Link from "next/link";

import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";

export function SiteFooter() {
  const persona = getActivePersona();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div className="space-y-4">
          <p className="text-2xl font-semibold tracking-tight">{persona.label}</p>
          <p className="max-w-xl text-sm text-muted-foreground">{persona.shortBio}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {persona.socialLinks.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-foreground">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-4 text-sm text-muted-foreground md:justify-end">
          {portfolioConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
