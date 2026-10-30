import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://abelgideon.vercel.app/sitemap.xml",
    host: "https://abelgideon.vercel.app",
  };
}
