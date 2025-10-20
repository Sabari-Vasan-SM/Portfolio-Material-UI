import type { Metadata } from 'next'

const siteUrl = 'https://portfolio.vasan.tech'
const siteName = 'SabariVasan - Full Stack Developer & Mechanical Engineer'
const siteDescription = 'Portfolio of SabariVasan S M - Mechanical Engineer turned Full Stack Web Developer specializing in MEAN Stack, React, Next.js, Node.js, MongoDB. Explore innovative web development projects, certifications, and professional experience.'
const authorName = 'SabariVasan S M'
const keywords = [
  'SabariVasan',
  'Sabari Vasan SM',
  'Full Stack Developer',
  'MEAN Stack Developer',
  'React Developer',
  'Next.js Developer',
  'Web Developer Tamil Nadu',
  'Mechanical Engineer',
  'Node.js Developer',
  'MongoDB Developer',
  'JavaScript Developer',
  'TypeScript Developer',
  'Portfolio',
  'Web Development Projects',
  'Cloud Computing',
  'DevOps',
  'IoT Projects',
  'Kongu Engineering College',
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${authorName}`,
  },
  description: siteDescription,
  keywords: keywords,
  authors: [
    {
      name: authorName,
      url: siteUrl,
    },
  ],
  creator: authorName,
  publisher: authorName,
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'SabariVasan Portfolio - Full Stack Developer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@SabariVasan',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Tamil Nadu, India',
  },
}
