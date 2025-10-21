import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.vasan.tech"),
  title: {
    default: "SabariVasan | Portfolio — Web Developer & IT Enthusiast",
    template: "%s | SabariVasan Portfolio",
  },
  description:
    "Portfolio of SabariVasan: Web Developer and IT enthusiast. Explore projects, skills, certifications, and contact details.",
  keywords: [
    "SabariVasan",
    "Portfolio",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Projects",
    "Certifications",
    "Hire",
    "India",
  ],
  openGraph: {
    type: "website",
    url: "https://portfolio.vasan.tech",
    siteName: "SabariVasan Portfolio",
    title: "SabariVasan | Portfolio — Web Developer & IT Enthusiast",
    description:
      "Portfolio of SabariVasan: Web Developer and IT enthusiast. Explore projects, skills, certifications, and contact details.",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "SabariVasan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SabariVasan | Portfolio — Web Developer & IT Enthusiast",
    description:
      "Portfolio of SabariVasan: Web Developer and IT enthusiast. Explore projects, skills, certifications, and contact details.",
    images: ["/placeholder-user.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}
