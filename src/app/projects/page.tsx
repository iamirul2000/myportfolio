import { PageHero } from "@/components/page-hero";
import { ProjectFilter } from "@/components/project-filter";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Project and work highlights for Amirul Iman.",
  path: "/projects"
});

export default function ProjectsPage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects and product contributions"
        description="A closer look at the engineering work, product support, web and mobile experience, and project contributions across my career so far."
      />
      <section className="pb-16">
        <div className="container">
          <ProjectFilter projects={persona.projects} />
        </div>
      </section>
    </>
  );
}
