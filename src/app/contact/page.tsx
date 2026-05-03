import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyEmailButton } from "@/components/copy-email-button";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact information for Amirul Iman.",
  path: "/contact"
});

export default function ContactPage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="If you&apos;re hiring for a full stack or backend-leaning software engineering role, I&apos;d be glad to connect. Email is the best way to reach me for opportunities, product discussions, or a closer look at my experience."
      />
      <section className="pb-16">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Best ways to reach me</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                I do not have a contact form backend set up right now, so email and social links are the best way to reach me directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={`mailto:${persona.email}`}>Email me</Link>
              </Button>
              <CopyEmailButton email={persona.email} size="lg" variant="secondary" />
              <Button asChild variant="secondary" size="lg">
                <Link href="https://www.linkedin.com/in/mirul-/" target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="https://github.com/iamirul2000" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-border/70 bg-background/60 p-5 text-sm text-muted-foreground">
              Email is the fastest option. If you are reaching out about a role, a team, or a product opportunity, a short intro and relevant details are enough.
            </div>
          </Card>
          <div className="space-y-6">
            <Card className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact details</h2>
              <p className="text-sm text-muted-foreground">Email is the best way to reach me. I&apos;m happy to connect about software engineering roles, product teams, and backend or full stack opportunities.</p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Email: {persona.email}</p>
                <p>Phone: {persona.phone}</p>
                <p>Location: {persona.location}</p>
                <p>Website: {persona.website}</p>
              </div>
            </Card>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
}
