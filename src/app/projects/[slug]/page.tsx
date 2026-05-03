import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { RelatedProjects } from "@/components/related-projects";
import { ProjectStructuredData } from "@/components/structured-data";
import { SocialShare } from "@/components/social-share";
import { getProjectBySlug } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project not found", description: "Missing project entry." });
  }

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.thumbnail
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const categories = Array.isArray(project.category) ? project.category : [project.category];

  return (
    <>
      <ProjectStructuredData project={project} />
      <PageHero eyebrow={categories.join(" / ")} title={project.title} description={project.description} />
      <div className="container mb-8">
        <SocialShare
          title={project.title}
          description={project.description}
          className="flex justify-end"
        />
      </div>
      <section className="pb-16">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            {project.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-background/70">
                <Image src={image} alt={project.title} width={1400} height={900} className="h-auto w-full object-cover" />
              </div>
            ))}
            <Card className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{project.overview}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Challenge</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Solution</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Impact</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
          <div className="space-y-6 lg:sticky lg:top-28">
            <Card>
              <h3 className="text-xl font-semibold">Results</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                {project.results.map((result) => (
                  <p key={result}>{result}</p>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Tech stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Links</h3>
              <div className="mt-4 flex flex-col gap-3">
                {project.links.map((link) => (
                  <Link key={link.label} href={link.href} className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80">
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
      <RelatedProjects currentProject={project} />
    </>
  );
}
