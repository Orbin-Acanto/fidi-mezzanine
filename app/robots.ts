import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/thank-you"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/thank-you"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/thank-you"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
    ],
    sitemap: "https://www.fidimezzanine.com/sitemap.xml",
    host: "https://www.fidimezzanine.com",
  };
}
