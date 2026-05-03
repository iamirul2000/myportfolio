import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { GitHubStats } from "@/components/github-stats";
import { SkillBars } from "@/components/skill-bars";
import { ScrollAnimation } from "@/components/scroll-animations";
import { AboutProfileCard } from "@/components/about-profile-card";
import { QuickFacts } from "@/components/quick-facts";
import { SkillsCategorized } from "@/components/skills-categorized";
import { CurrentFocus } from "@/components/current-focus";
import { WorkPhilosophy } from "@/components/work-philosophy";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Background and profile for Amirul Iman.",
  path: "/about"
});

export default function AboutPage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero 
        eyebrow="About" 
        title={`About ${persona.label}`} 
        description={persona.shortBio} 
      />
      
      <section className="pb-16">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            {/* Left Sidebar */}
            <div className="space-y-6">
              <ScrollAnimation animation="fade-up">
                <AboutProfileCard
                  name={persona.label}
                  role={persona.role}
                  location={persona.location}
                  email={persona.email}
                  resumeFile={persona.resumeFile}
                />
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <QuickFacts />
              </ScrollAnimation>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <ScrollAnimation animation="fade-up">
                <Card className="space-y-5">
                  <h2 className="text-2xl font-semibold">Engineering Summary</h2>
                  {persona.longBio.map((paragraph, index) => (
                    <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </Card>
              </ScrollAnimation>

              <div className="grid gap-6 lg:grid-cols-2">
                <ScrollAnimation animation="slide-right" delay={100}>
                  <SkillsCategorized />
                </ScrollAnimation>
                
                <ScrollAnimation animation="slide-left" delay={100}>
                  <WorkPhilosophy />
                </ScrollAnimation>
              </div>

              <ScrollAnimation animation="fade-up" delay={200}>
                <CurrentFocus />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <GitHubStats />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animation="fade-up">
        <SkillBars />
      </ScrollAnimation>
    </>
  );
}
