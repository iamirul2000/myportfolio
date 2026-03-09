import { ArticleCard } from "@/components/article-card";
import { PageHero } from "@/components/page-hero";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Optional blog index for the PortfolioNova template.",
  path: "/blog"
});

export default function BlogPage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero eyebrow="Blog" title="Optional article layer for authority and SEO" description="Use this section for process notes, design thinking, engineering insights, or product strategy content." />
      <section className="pb-16">
        <div className="container grid gap-6 lg:grid-cols-2">
          {persona.articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
