import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://jdavidek.cz/sitemap.xml",
    host: "https://jdavidek.cz",
  };
}