import Link from "next/link";

import type { Article } from "@/data/portfolio-config";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="block rounded-3xl border border-border/70 bg-background/70 p-6 transition hover:-translate-y-1 hover:shadow-soft">
      <p className="text-sm uppercase tracking-[0.18em] text-primary">{article.category}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{article.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>{article.readTime}</span>
        <span>{article.publishedAt}</span>
      </div>
    </Link>
  );
}
