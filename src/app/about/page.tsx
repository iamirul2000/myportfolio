import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { GitHubStats } from "@/components/github-stats";
import { SkillRadarChart } from "@/components/skill-radar-chart";
import { ScrollAnimation } from "@/components/scroll-animations";
import { AboutProfileCard } from "@/components/about-profile-card";
import { QuickFacts } from "@/components/quick-facts";
import { SkillsCategorized } from "@/components/skills-categorized";
import { CurrentFocus } from "@/components/current-focus";
import { WorkPhilosophy } from "@/components/work-philosophy";
import { ServicesEnhanced } from "@/components/services-enhanced";
import { FocusAreasCompact } from "@/components/focus-areas-compact";
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
        title="About Me" 
        description="Full Stack Web Software Engineer building reliable, production-ready applications. I specialize in backend-heavy systems, REST APIs, and database-driven solutions using Laravel, PHP, MySQL, Angular, and Flutter. I focus on improving existing products, solving real-world problems, and delivering maintainable code that works."
        aside={<FocusAreasCompact />}
      />
      
      <section className="pb-16">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
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

              <ScrollAnimation animation="fade-up" delay={150}>
                <GitHubStats />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <WorkPhilosophy />
              </ScrollAnimation>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <ScrollAnimation animation="slide-right" delay={100}>
                <SkillsCategorized />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <CurrentFocus />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={250}>
                <Card className="card-spacing" id="focus-areas">
                  <h2 className="text-2xl font-semibold mb-6">Focus Areas</h2>
                  <ServicesEnhanced services={persona.services} />
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animation="fade-up">
        <SkillRadarChart />
      </ScrollAnimation>
    </>
  );
}
