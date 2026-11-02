import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://abelgideon.me/sitemap.xml",
    host: "https://abelgideon.me",
  };
}
