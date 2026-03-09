import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

export function SiteFooter() {
  const persona = getActivePersona();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div className="space-y-4">
          <p className="text-2xl font-semibold tracking-tight">{persona.label}</p>
          <p className="max-w-xl text-sm text-muted-foreground">{persona.shortBio}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {persona.socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-border/70 p-2 transition hover:border-primary/40 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
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
