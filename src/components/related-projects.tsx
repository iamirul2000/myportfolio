import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/portfolio-config";
import { getAllProjects } from "@/data/portfolio-config";

interface RelatedProjectsProps {
  currentProject: Project;
  maxProjects?: number;
}

export function RelatedProjects({
  currentProject,
  maxProjects = 3,
}: RelatedProjectsProps) {
  const allProjects = getAllProjects();

  // Find related projects based on shared tech stack or category
  const relatedProjects = allProjects
    .filter((project) => project.slug !== currentProject.slug)
    .map((project) => {
      let score = 0;

      // Score based on shared technologies
      const sharedTech = project.techStack.filter((tech) =>
        currentProject.techStack.includes(tech)
      );
      score += sharedTech.length * 2;

      // Score based on shared category
      const currentCategories = Array.isArray(currentProject.category)
        ? currentProject.category
        : [currentProject.category];
      const projectCategories = Array.isArray(project.category)
        ? project.category
        : [project.category];

      const sharedCategories = projectCategories.filter((cat) =>
        currentCategories.includes(cat)
      );
      score += sharedCategories.length * 3;

      // Boost featured projects slightly
      if (project.featured) score += 1;

      return { project, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxProjects)
    .map(({ project }) => project);

  if (relatedProjects.length === 0) return null;

  return (
    <section className="border-t border-border py-16">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Related Projects</h2>
          <p className="mt-2 text-muted-foreground">
            Other projects with similar technologies or focus areas
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
