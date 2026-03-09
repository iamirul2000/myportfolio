import type { MetadataRoute } from "next";

import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const persona = getActivePersona();
  const staticRoutes = portfolioConfig.navigation.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: new Date()
  }));

  const projectRoutes = persona.projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: new Date()
  }));

  const articleRoutes = persona.articles.map((article) => ({
    url: absoluteUrl(`/blog/${article.slug}`),
    lastModified: new Date(article.publishedAt)
  }));

  const caseStudyRoutes = persona.caseStudies.map((study) => ({
    url: absoluteUrl(`/case-studies/${study.slug}`),
    lastModified: new Date()
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes, ...caseStudyRoutes];
}