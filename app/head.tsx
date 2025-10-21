import React from "react"

// Head for App Router: injects canonical, OG/Twitter, and JSON-LD
export default function Head() {
  const siteUrl = "https://portfolio.vasan.tech"
  const title = "SabariVasan | Portfolio — Web Developer & IT Enthusiast"
  const description =
    "Portfolio of SabariVasan: Web Developer and IT enthusiast. Explore projects, skills, certifications, and contact details. Available for hire."
  const ogImage = `${siteUrl}/placeholder-user.jpg`
  const logoPng = `${siteUrl}/placeholder-logo.png`
  const logoSvg = `${siteUrl}/placeholder-logo.svg`

  const keywords = [
    "SabariVasan",
    "Portfolio",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Projects",
    "Certifications",
    "Hire",
    "India",
  ].join(", ")

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'SabariVasan',
    jobTitle: 'Web Developer',
    url: siteUrl,
    image: ogImage,
    sameAs: [
      'https://www.linkedin.com/in/sabarivasan-s-m-b10229255/',
      'https://github.com/Sabari-Vasan-SM',
      'mailto:sabarivasan1239@gmail.com',
      'tel:+919677465071',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Tamil Nadu',
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SabariVasan Portfolio',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={siteUrl} />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/placeholder-logo.png" />
      <link rel="icon" type="image/svg+xml" href="/placeholder-logo.svg" />
      <link rel="apple-touch-icon" href="/placeholder-logo.png" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}
