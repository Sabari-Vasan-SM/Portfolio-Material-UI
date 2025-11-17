import type React from "react"
import { Poppins } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import RootClientLayout from "./RootClientLayout"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.vasan.tech"),
  title: {
    default: "SabariVasan Portfolio | Web Developer & IT Enthusiast",
    template: "%s | SabariVasan Portfolio",
  },
  description:
    "SabariVasan Portfolio - Professional Web Developer specializing in MEAN Stack, React, Next.js, and Cloud Computing. Explore innovative projects, technical skills, certifications, and professional experience.",
  keywords: [
    "sabarivasan portfolio",
    "Sabarivasan SM portfolio",
    "portfolio Sabarivasan SM",
    "portfolio sabarivasan",
    "SabariVasan",
    "Sabarivasan SM",
    "Web Developer Portfolio",
    "MEAN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "IT Professional",
    "Tamil Nadu Developer",
    "India Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Node.js Developer",
    "Cloud Computing",
    "DevOps Portfolio",
    "Kongu Engineering College",
  ],
  authors: [{ name: "Sabarivasan SM" }],
  creator: "Sabarivasan SM",
  publisher: "Sabarivasan SM",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.vasan.tech",
    siteName: "SabariVasan Portfolio",
    title: "SabariVasan Portfolio | Web Developer & IT Enthusiast",
    description:
      "SabariVasan Portfolio - Professional Web Developer specializing in MEAN Stack, React, Next.js, and Cloud Computing. Explore innovative projects, technical skills, certifications, and professional experience.",
    images: [
      {
        url: "https://portfolio.vasan.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SabariVasan Portfolio - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SabariVasan Portfolio | Web Developer & IT Enthusiast",
    description:
      "Professional Web Developer specializing in MEAN Stack, React, Next.js, and Cloud Computing.",
    images: ["https://portfolio.vasan.tech/og-image.jpg"],
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
  alternates: {
    canonical: "https://portfolio.vasan.tech",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://portfolio.vasan.tech" />
        <meta name="author" content="Sabarivasan SM" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sabarivasan SM",
              alternateName: "SabariVasan",
              url: "https://portfolio.vasan.tech",
              image: "https://avatars.githubusercontent.com/u/144119741?v=4",
              sameAs: [
                "https://github.com/Sabari-Vasan-SM",
                "https://www.linkedin.com/in/sabarivasan-s-m-b10229255/",
              ],
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Kongu Engineering College",
              },
              knowsAbout: [
                "Web Development",
                "MEAN Stack",
                "React",
                "Next.js",
                "MongoDB",
                "Node.js",
                "TypeScript",
                "Cloud Computing",
                "DevOps",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SabariVasan Portfolio",
              url: "https://portfolio.vasan.tech",
              description: "Professional Web Developer Portfolio showcasing projects, skills, and experience",
              author: {
                "@type": "Person",
                name: "Sabarivasan SM",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://portfolio.vasan.tech/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  )
}
