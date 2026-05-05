import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { ContactActionsEnhanced } from "@/components/contact-actions-enhanced";
import { AvailabilityCard } from "@/components/availability-card";
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
        description="Open to backend-leaning full stack roles, Laravel/PHP work, production support, and engineering conversations. Email is the best way to reach me for opportunities or project discussions."
      />
      <section className="pb-16">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-6">
              <ContactActionsEnhanced 
                email={persona.email} 
                resumeFile={persona.resumeFile}
              />
              
              <Card className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact details</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-foreground min-w-[80px]">Email:</span>
                    <a href={`mailto:${persona.email}`} className="text-primary hover:underline">
                      {persona.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-foreground min-w-[80px]">Phone:</span>
                    <a href={`tel:${persona.phone}`} className="text-muted-foreground hover:text-foreground">
                      {persona.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-foreground min-w-[80px]">Location:</span>
                    <span className="text-muted-foreground">{persona.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-foreground min-w-[80px]">GitHub:</span>
                    <a href="https://github.com/iamirul2000" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      github.com/iamirul2000
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <AvailabilityCard />

              <Card className="space-y-4">
                <h2 className="text-2xl font-semibold">Response time</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">24-48 hours</p>
                      <p className="text-sm text-muted-foreground">
                        I respond to all genuine inquiries within 1-2 business days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Open to opportunities</p>
                      <p className="text-sm text-muted-foreground">
                        Available for backend-leaning full stack roles and engineering work
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
