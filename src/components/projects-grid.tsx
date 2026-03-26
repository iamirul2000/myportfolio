import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";

export function ProjectsGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const persona = getActivePersona();
  const projects = featuredOnly
    ? persona.projects.filter((project) => project.featured).slice(0, portfolioConfig.homepage.featuredProjectsCount)
    : persona.projects;

  return (
    <section className="py-16">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow={featuredOnly ? "Featured Work" : "Projects"}
          title="Work highlights and product contributions"
          description="A selection of product work across business software, mobile applications, payment-related systems, and personal builds."
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
