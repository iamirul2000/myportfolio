import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";

export function SiteHeader() {
  const persona = getActivePersona();

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-background/80 backdrop-blur-xl dark:border-white/5">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl shadow-glow ring-1 ring-white/10">
            <Image src="/logo-mark.svg" alt="Amirul Iman logo" width={44} height={44} className="h-11 w-11" priority />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">{portfolioConfig.siteName}</p>
            <p className="text-xs text-muted-foreground">{persona.role}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {portfolioConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {portfolioConfig.theme.enableThemeToggle ? <ModeToggle /> : null}
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
