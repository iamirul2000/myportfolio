import type { Project } from "@/data/portfolio-config";
import { getActivePersona } from "@/data/portfolio-config";

export function PersonStructuredData() {
  const persona = getActivePersona();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: persona.label,
    jobTitle: persona.role,
    description: persona.shortBio,
    url: persona.website,
    email: persona.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: persona.location,
    },
    sameAs: persona.socialLinks.map((link) => link.href),
    knowsAbout: persona.skills,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ProjectStructuredData({ project }: { project: Project }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.thumbnail,
    keywords: project.tags.join(", "),
    about: project.overview,
    creator: {
      "@type": "Person",
      name: "Amirul Iman",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amirul Iman Portfolio",
    description:
      "Full stack web software engineer portfolio showcasing projects and experience",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
