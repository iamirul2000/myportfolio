import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { portfolioConfig } from "@/data/portfolio-config";

import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: portfolioConfig.seo.title,
    template: `%s | ${portfolioConfig.siteName}`
  },
  description: portfolioConfig.seo.description,
  keywords: [...portfolioConfig.seo.keywords],
  icons: {
    icon: "/icon-v2.svg",
    shortcut: "/icon-v2.svg",
    apple: "/apple-icon-v2.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} min-h-screen font-sans`}>
        <ThemeProvider attribute="class" defaultTheme={portfolioConfig.theme.defaultMode} enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}