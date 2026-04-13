import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jdavidek.cz";
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/ochrana-osobnich-udaju`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}