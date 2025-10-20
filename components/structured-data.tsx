"use client"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://portfolio.vasan.tech/#person",
        name: "SabariVasan S M",
        alternateName: "Sabari Vasan",
        url: "https://portfolio.vasan.tech",
        image: "https://avatars.githubusercontent.com/u/144119741?v=4",
        sameAs: [
          "https://github.com/Sabari-Vasan-SM",
          "https://www.linkedin.com/in/sabarivasan-s-m-b10229255/",
        ],
        jobTitle: "Full Stack Web Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Kongu Engineering College",
        },
        knowsAbout: [
          "Web Development",
          "MEAN Stack",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "JavaScript",
          "TypeScript",
          "Cloud Computing",
          "DevOps",
          "Mechanical Engineering",
        ],
        email: "sabarivasan1239@gmail.com",
        telephone: "+919677465071",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://portfolio.vasan.tech/#website",
        url: "https://portfolio.vasan.tech",
        name: "SabariVasan Portfolio",
        description:
          "Portfolio website showcasing web development projects, skills, and professional experience of SabariVasan S M",
        publisher: {
          "@id": "https://portfolio.vasan.tech/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://portfolio.vasan.tech/#webpage",
        url: "https://portfolio.vasan.tech",
        name: "SabariVasan - Full Stack Developer & Mechanical Engineer",
        isPartOf: {
          "@id": "https://portfolio.vasan.tech/#website",
        },
        about: {
          "@id": "https://portfolio.vasan.tech/#person",
        },
        description:
          "Mechanical Engineer turned Full Stack Developer specializing in MEAN Stack, React, Next.js. View projects, certifications, and professional experience.",
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://portfolio.vasan.tech/#profilepage",
        url: "https://portfolio.vasan.tech",
        name: "SabariVasan Portfolio",
        isPartOf: {
          "@id": "https://portfolio.vasan.tech/#website",
        },
        mainEntity: {
          "@id": "https://portfolio.vasan.tech/#person",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://portfolio.vasan.tech/#projects",
        name: "Featured Projects",
        description: "Web development and engineering projects by SabariVasan",
        itemListElement: [
          {
            "@type": "CreativeWork",
            position: 1,
            name: "Bike Buddy",
            description:
              "A comprehensive bike service management platform that connects customers with service providers",
            url: "https://cartrabbit-alpha.vercel.app/",
            author: {
              "@id": "https://portfolio.vasan.tech/#person",
            },
            programmingLanguage: ["React", "Node.js", "MongoDB", "Express"],
          },
          {
            "@type": "SoftwareApplication",
            position: 2,
            name: "Password Saver",
            description: "Secure password management mobile application built with React Native",
            url: "https://github.com/Sabari-Vasan-SM/PasswordSaver",
            applicationCategory: "SecurityApplication",
            operatingSystem: ["Android", "iOS"],
            author: {
              "@id": "https://portfolio.vasan.tech/#person",
            },
          },
          {
            "@type": "CreativeWork",
            position: 3,
            name: "Billventory",
            description: "Digital solution integrating inventory control, billing, and sales management",
            url: "https://billventory.vasan.tech/",
            author: {
              "@id": "https://portfolio.vasan.tech/#person",
            },
            programmingLanguage: ["React", "Node.js", "Supabase"],
          },
          {
            "@type": "CreativeWork",
            position: 4,
            name: "Air Quality Monitor",
            description: "IoT-based air quality monitoring system using ESP32 and real-time dashboards",
            url: "https://airqualitymonitor1.netlify.app/",
            author: {
              "@id": "https://portfolio.vasan.tech/#person",
            },
            programmingLanguage: ["React", "IoT", "ESP32"],
          },
        ],
      },
      {
        "@type": "EducationalOccupationalCredential",
        "@id": "https://portfolio.vasan.tech/#education",
        credentialCategory: "degree",
        educationalLevel: "Bachelor",
        name: "B.Tech in Information Technology",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Kongu Engineering College",
        },
        about: {
          "@id": "https://portfolio.vasan.tech/#person",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://portfolio.vasan.tech/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://portfolio.vasan.tech",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://portfolio.vasan.tech#about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Projects",
            item: "https://portfolio.vasan.tech#projects",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: "https://portfolio.vasan.tech#contact",
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
