import { PageHero } from "@/components/page-hero";
import { ProjectTypeFilter } from "@/components/project-type-filter";
import { ProjectStats } from "@/components/project-stats";
import { getCompanyProjects, getPersonalProjects } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Project and work highlights for Amirul Iman.",
  path: "/projects"
});

export default function ProjectsPage() {
  const companyProjects = getCompanyProjects();
  const personalProjects = getPersonalProjects();

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects and product contributions"
        description="A selection of product work across business software, mobile applications, payment-related systems, and personal builds. These projects reflect the work I do most often: maintaining live systems, improving existing codebases, building practical features, and solving real product problems."
      />
      <ProjectStats />
      <section className="pb-16">
        <div className="container">
          <ProjectTypeFilter
            companyProjects={companyProjects}
            personalProjects={personalProjects}
          />
        </div>
      </section>
    </>
  );
}
