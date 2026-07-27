import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      // Data sem hora: é o formato que o Google recomenda e o que todo CMS emite.
      lastModified: new Date().toISOString().slice(0, 10),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
