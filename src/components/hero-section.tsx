import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

export function HeroSection() {
  const persona = getActivePersona();
  const accent = portfolioConfig.theme.accents[persona.accentStyle];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className={`absolute inset-x-0 top-0 h-80 bg-gradient-to-r ${accent} blur-3xl`} aria-hidden="true" />
      <div className="absolute left-[8%] top-24 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[10%] top-32 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden="true" />
      <div className="container relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <Badge>{persona.availability}</Badge>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight leading-[1.14] text-balance sm:text-6xl lg:text-7xl">
              {persona.label}
              <span className="mt-3 block pb-2 leading-[1.14] bg-gradient-to-r from-primary via-sky-500 to-accent bg-clip-text text-transparent">{persona.role}</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">{persona.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {persona.heroCtas.map((item, index) => (
              <Button key={item.href} asChild variant={index === 0 ? "default" : "secondary"} size="lg">
                <Link href={item.href}>
                  {item.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {persona.location}
            </div>
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

        <Card className="surface-strong mesh-panel relative overflow-hidden p-0">
          <div className="absolute inset-0 bg-grid bg-[size:38px_38px] opacity-30" />
          <div className="relative space-y-8 p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Profile Summary</p>
                <h2 className="mt-2 text-2xl font-semibold">Production-minded full stack engineer with backend depth</h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-sky-500 to-accent text-white shadow-glow">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <p className="text-base leading-7 text-muted-foreground">{persona.shortBio}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {persona.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
