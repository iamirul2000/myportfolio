import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { ReadingProgress } from "@/components/reading-progress";
import { SocialShare } from "@/components/social-share";
import { getArticleBySlug } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return buildMetadata({ title: "Article not found", description: "Missing article entry." });
  }

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const fullContent = article.content.join(" ");

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} description={article.excerpt} />
      <ReadingProgress content={fullContent} />
      <section className="pb-16">
        <div className="container max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {article.readTime} • {article.publishedAt}
            </div>
            <SocialShare title={article.title} description={article.excerpt} />
          </div>
          <Card className="space-y-5 p-8 sm:p-10">
            <article>
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="mb-5 text-base leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </article>
          </Card>
        </div>
      </section>
    </>
  );
}