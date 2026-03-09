import type { Metadata } from "next";

import { portfolioConfig } from "@/data/portfolio-config";
import { absoluteUrl } from "@/lib/utils";

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-default.svg"
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: portfolioConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    alternates: {
      canonical: url
    }
  };
}