import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
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

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} description={article.excerpt} />
      <section className="pb-16">
        <div className="container max-w-3xl">
          <Card className="space-y-5 p-8 sm:p-10">
            {article.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </Card>
        </div>
      </section>
    </>
  );
}