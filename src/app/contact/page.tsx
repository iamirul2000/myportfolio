import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
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
      <PageHero eyebrow="Contact" title="Let's connect" description="You can reach me here for opportunities, collaborations, or questions about my current experience." />
      <section className="pb-16">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <Card className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact details</h2>
            <p className="text-sm text-muted-foreground">Email is the best way to reach me. I am happy to connect about engineering roles, product work, or collaboration.</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Email: {persona.email}</p>
              <p>Phone: {persona.phone}</p>
              <p>Location: {persona.location}</p>
              <p>Website: {persona.website}</p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
