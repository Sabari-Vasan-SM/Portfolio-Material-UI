import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const site = "https://portfolio.vasan.tech"
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  }
}
