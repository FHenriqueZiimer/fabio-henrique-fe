import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      // O Google indexa PDFs — é o resultado que ranqueia para "currículo Fábio Henrique".
      url: `${siteConfig.url}${siteConfig.resumeUrl}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      // Resumo em markdown para crawlers de LLM (padrão llms.txt).
      url: `${siteConfig.url}/llms.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
