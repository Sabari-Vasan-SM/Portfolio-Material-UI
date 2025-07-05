"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Eye, Mail, MapPin, Github, Phone } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { CursorFollower } from "@/components/cursor-follower"
import { SkillCard } from "@/components/skill-card"
import { EducationTimeline } from "@/components/education-timeline"
import { TypingAnimation } from "@/components/typing-animation"
import { useTheme } from "next-themes"
import { AnimatedHeading } from "@/components/animated-heading"
import { InterestCard } from "@/components/interest-card"
import { WorkExperienceTimeline } from "@/components/work-experience-timeline"
import { AnimatedSubtitle } from "@/components/animated-subtitle"
import { EnhancedNavbar } from "@/components/enhanced-navbar"
import { HorizontalProjects } from "@/components/horizontal-projects"
import { AchievementsCarousel } from "@/components/achievements-carousel"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white dark:text-white"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/sabarivasan-s-m-b10229255/",
  },
  {
    name: "GitHub",
    icon: <Github className="size-5 text-white dark:text-white" />,
    href: "https://github.com/Sabari-Vasan-SM",
  },
  {
    name: "Phone",
    icon: <Phone className="size-5 text-white dark:text-white" />,
    href: "tel:+919677465071",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  // Only show animations after hydration to avoid SSR mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e8eaed] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <CursorFollower />

      {/* Fixed Navigation Bar */}
      <EnhancedNavbar scrollToSection={scrollToSection} />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 left-1/4 size-64 rounded-full bg-purple-200 dark:bg-purple-900 blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-pink-200 dark:bg-pink-900 blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16">
              <AnimatedSection
                animation="slide-right"
                className="flex-1 space-y-4 md:space-y-6 text-center md:text-left"
              >
                <motion.div
                  className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-xs md:text-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                  <span className="dark:text-gray-300 text-gray-700">Available for hire</span>
                </motion.div>
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TypingAnimation text="Hi, I'm SabariVasan" speed={150} />
                </motion.h1>
                <AnimatedSubtitle
                  text="Mechanical Engineer | Web Developer | Tech Aficionado"
                  className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-md mx-auto md:mx-0 leading-relaxed"
                  delay={2.5}
                />
                <motion.div
                  className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <AnimatedButton
                      variant="gradient"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/18JO1VUl-acdwbRULo2tV9Zb2hrpA4mtJ/view?pli=1",
                          "_blank",
                        )
                      }
                      className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 relative overflow-hidden group"
                    >
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <Eye className="size-3 md:size-4" />
                        </motion.div>
                        View Resume
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatedButton>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgb(139, 92, 246)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <AnimatedButton
                      variant="outline"
                      onClick={() => scrollToSection("projects")}
                      className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 relative overflow-hidden group border-2"
                    >
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        View My Projects
                        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                          <ChevronRight className="size-3 md:size-4" />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatedButton>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection animation="zoom" delay={0.5} className="flex-1 relative">
                <div className="relative size-48 sm:size-56 md:size-64 lg:size-80 mx-auto">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-20"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="absolute inset-1 md:inset-2 rounded-full bg-white dark:bg-gray-800" />
                  <motion.div
                    className="relative z-10 p-1 md:p-2 cursor-hover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src="https://avatars.githubusercontent.com/u/144119741?v=4"
                      width={400}
                      height={400}
                      alt="SabariVasan portrait"
                      className="rounded-full w-full h-full object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="slide-up" className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-xs md:text-sm mx-auto">
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">About Me</span>
              </div>
              <AnimatedHeading className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                Career Objective
              </AnimatedHeading>
            </AnimatedSection>

            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              <AnimatedSection animation="slide-right" className="flex-1">
                <FlipCard />
              </AnimatedSection>

              <AnimatedSection animation="slide-up" className="flex-1 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold dark:text-white text-gray-900">Areas of Interest</h3>
                <div className="grid grid-cols-1 gap-4">
                  {interests.map((interest, index) => (
                    <InterestCard key={index} interest={interest} index={index} />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#f8f9fa] dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="slide-up" className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 px-3 py-1 text-sm mx-auto">
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">My Skills</span>
              </div>
              <AnimatedHeading className="text-3xl md:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                Technical Expertise
              </AnimatedHeading>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mt-4">
                A diverse skill set spanning programming languages, web technologies, and engineering tools.
              </p>
            </AnimatedSection>

            <Tabs defaultValue="languages" className="w-full">
              <div className="flex justify-center mb-8">
                <div className="w-full max-w-4xl overflow-x-auto">
                  <TabsList className="bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-800 p-1 rounded-full flex w-max min-w-full md:min-w-0 mx-auto">
                    {skillCategories.map((category) => (
                      <TabsTrigger
                        key={category.value}
                        value={category.value}
                        className="rounded-full data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:text-gray-300 dark:data-[state=active]:text-white whitespace-nowrap px-3 py-2 text-xs sm:text-sm flex-shrink-0"
                      >
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {skillCategories.map((category) => (
                  <TabsContent key={category.value} value={category.value} className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {skills
                        .filter((skill) => skill.category === category.value)
                        .map((skill, index) => (
                          <SkillCard key={index} skill={skill} index={index} />
                        ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="slide-up" className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-sm mx-auto">
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">My Journey</span>
              </div>
              <AnimatedHeading className="text-3xl md:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                Education
              </AnimatedHeading>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mt-4">
                My academic background and qualifications.
              </p>
            </AnimatedSection>

            <EducationTimeline education={education} />
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-20 bg-[#f8f9fa] dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="slide-up" className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-sm mx-auto">
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">Professional Journey</span>
              </div>
              <AnimatedHeading className="text-3xl md:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                Internships and Work Experience
              </AnimatedHeading>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mt-4">
                My professional experience and internships across various industries.
              </p>
            </AnimatedSection>

            <WorkExperienceTimeline experiences={workExperiences} />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="slide-up" className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-sm mx-auto">
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">My Work</span>
              </div>
              <AnimatedHeading className="text-3xl md:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                Featured Projects
              </AnimatedHeading>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mt-4">
                Explore my recent projects showcasing technical skills and creativity. Scroll horizontally to see more.
              </p>
            </AnimatedSection>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <HorizontalProjects projects={projects} activeCategory="all" />
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-[#f8f9fa] dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="slide-up" className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-900 px-3 py-1 text-sm mx-auto">
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">My Achievements</span>
              </div>
              <AnimatedHeading className="text-3xl md:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                Recognition & Accomplishments
              </AnimatedHeading>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mt-4">
                Celebrating milestones and achievements that showcase dedication to excellence and continuous learning.
              </p>
            </AnimatedSection>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <AchievementsCarousel achievements={achievements} />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
        >
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 right-1/4 size-64 rounded-full bg-purple-200 dark:bg-purple-900 blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 size-64 rounded-full bg-pink-200 dark:bg-pink-900 blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="slide-up" className="text-center mb-12">
                <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-sm mx-auto">
                  <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                  <span className="dark:text-gray-300 text-gray-700">Get In Touch</span>
                </div>
                <AnimatedHeading className="text-3xl md:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                  Contact Me
                </AnimatedHeading>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mt-4">
                  Have a project in mind? Let's discuss how I can help bring your ideas to life.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="zoom" delay={0.2}>
                <Card className="border-purple-100 dark:border-purple-900 bg-white dark:bg-gray-800 shadow-lg rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 md:p-8 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
                        <div className="space-y-4 md:space-y-6">
                          <motion.div
                            className="flex items-start gap-3 md:gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className="size-8 md:size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                              <Mail className="size-4 md:size-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white/70 text-xs md:text-sm">Email</p>
                              <a
                                href="mailto:sabarivasan1239@gmail.com"
                                className="font-medium text-sm md:text-base break-all hover:underline"
                              >
                                sabarivasan1239@gmail.com
                              </a>
                            </div>
                          </motion.div>
                          <motion.div
                            className="flex items-start gap-3 md:gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className="size-8 md:size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                              <Phone className="size-4 md:size-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white/70 text-xs md:text-sm">Phone</p>
                              <a href="tel:+919677465071" className="font-medium text-sm md:text-base hover:underline">
                                +91 9677465071
                              </a>
                            </div>
                          </motion.div>
                          <motion.div
                            className="flex items-start gap-3 md:gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className="size-8 md:size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                              <MapPin className="size-4 md:size-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white/70 text-xs md:text-sm">Location</p>
                              <p className="font-medium text-sm md:text-base">Tamil Nadu, India</p>
                            </div>
                          </motion.div>
                        </div>
                        <div className="mt-8 md:mt-12">
                          <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">Connect with me</p>
                          <div className="flex gap-3 md:gap-4">
                            {socialLinks.map((social, index) => (
                              <motion.a
                                key={index}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : "_self"}
                                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="size-8 md:size-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                {social.icon}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white text-gray-900">
                          Send a Message
                        </h3>
                        <form action="https://formspree.io/f/xjkrokoj" method="POST" className="space-y-3 md:space-y-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Name
                            </label>
                            <motion.input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm md:text-base"
                              placeholder="Your name"
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Email
                            </label>
                            <motion.input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm md:text-base"
                              placeholder="your@email.com"
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Message
                            </label>
                            <motion.textarea
                              id="message"
                              name="message"
                              rows={4}
                              required
                              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm md:text-base resize-none"
                              placeholder="How can I help you?"
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            ></motion.textarea>
                          </div>
                          <AnimatedButton
                            variant="gradient"
                            className="w-full py-4 md:py-6 text-sm md:text-base"
                            type="submit"
                          >
                            Send Message
                          </AnimatedButton>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Flip Card Component
function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleInteraction = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Mobile Instructions */}
      {isMobile && (
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Tap the card to see career objective</p>
        </div>
      )}

      <div
        className="relative w-full h-64 sm:h-72 md:h-64 cursor-pointer perspective-1000"
        onClick={handleInteraction}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-full h-full preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Front Side */}
          <Card className="absolute inset-0 backface-hidden border-purple-100 dark:border-purple-900 bg-white dark:bg-gray-800 shadow-lg rounded-3xl overflow-hidden">
            <CardContent className="p-4 sm:p-6 md:p-8 h-full flex items-center justify-center">
              <motion.h3
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-black dark:text-white leading-tight sm:leading-relaxed px-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="block sm:inline">MechanicalPrecision,</span>{" "}
                <span className="block sm:inline">ITEfficiency,</span>{" "}
                <span className="block sm:inline">Future-ReadySolutions</span>
              </motion.h3>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card className="absolute inset-0 backface-hidden rotate-y-180 border-purple-100 dark:border-purple-900 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 shadow-lg rounded-3xl overflow-hidden">
            <CardContent className="p-4 sm:p-6 md:p-8 h-full flex items-center justify-center">
              <motion.p
                className="text-gray-700 dark:text-gray-300 text-center leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipped ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                A motivated and detail-oriented individual with a background in{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Mechanical Engineering</span> and
                current studies in{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Information Technology</span>, aiming
                to apply technical and problem-solving skills in{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  web development and IT solutions
                </span>
                .
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

const workExperiences = [
  {
    title: "CNC Operator",
    company: "Sakthi Auto Component Limited",
    location: "Perundurai",
    duration: "1 Month (Full-Time)",
    type: "Full-Time",
  },
  {
    title: "Workshop Fitter and Welder",
    company: "Sakthi Sugars",
    location: "Appakudal",
    duration: "15 Days (Intern)",
    type: "Internship",
  },
  {
    title: "Web Developer Intern",
    company: "InternPe",
    location: "Remote",
    duration: "1 Month",
    type: "Internship",
  },
  {
    title: "Internet Of Things",
    company: "Nxt Gen Instruments",
    location: "Erode",
    duration: "1 Month",
    type: "Internship",
  },
]

const interests = [
  {
    title: "Web Development",
    description: "Creating responsive and interactive web applications using modern frameworks and technologies.",
  },
  {
    title: "Cloud Computing",
    description: "Leveraging cloud platforms to build scalable and efficient solutions for various applications.",
  },
  {
    title: "Mechanical Engineering Integration with IT",
    description: "Combining mechanical engineering principles with information technology for innovative solutions.",
  },
]

const skillCategories = [
  { value: "languages", label: "Languages" },
  { value: "frontend", label: "Front End" },
  { value: "backend", label: "Back End" },
  { value: "database", label: "Database" },
  { value: "cad", label: "CAD/CAM Tools" },
  { value: "design", label: "Design Tools" },
  { value: "devops", label: "DevOps" },
]

const skills = [
  { name: "Python", level: 60, category: "languages", icon: "🐍" },
  { name: "JavaScript", level: 70, category: "languages", icon: "🟨" },
  { name: "HTML", level: 90, category: "frontend", icon: "🌐" },
  { name: "CSS", level: 85, category: "frontend", icon: "🎨" },
  { name: "JS", level: 80, category: "frontend", icon: "📜" },
  { name: "TypeScript", level: 60, category: "frontend", icon: "🔷" },
  { name: "React JS", level: 85, category: "frontend", icon: "⚛️" },
  { name: "Node JS", level: 50, category: "backend", icon: "🟢" },
  { name: "SQL", level: 50, category: "database", icon: "🗃️" },
  { name: "MongoDB", level: 60, category: "database", icon: "🍃" },
  { name: "Supabase", level: 80, category: "database", icon: "⚡" },
  { name: "Auto CAD", level: 70, category: "cad", icon: "📐" },
  { name: "Pro-E", level: 55, category: "cad", icon: "🔧" },
  { name: "Solid Works", level: 55, category: "cad", icon: "📏" },
  { name: "Miro", level: 80, category: "design", icon: "🎯" },
  { name: "Canva", level: 80, category: "design", icon: "🎭" },
  { name: "Figma", level: 70, category: "design", icon: "🖌️" },
  { name: "Jenkins", level: 65, category: "devops", icon: "🔄" },
  { name: "Docker", level: 50, category: "devops", icon: "🐳" },
]

const education = [
  {
    degree: "B.Tech - IT",
    institution: "Kongu Engineering College",
    year: "2025",
    grade: "6.49 CGPA",
  },
  {
    degree: "Diploma - Mechanical",
    institution: "Sakthi Institute Of Technology",
    year: "2023",
    grade: "85%",
  },
  {
    degree: "HSLC",
    institution: "SVV Hr. Sec. School",
    year: "2021",
    grade: "85%",
  },
  {
    degree: "SSLC",
    institution: "Govt Boys Hr. Sec. School",
    year: "2019",
    grade: "68%",
  },
]

const projects = [
  {
    title: "GCrafter",
    description:
      "A web-based platform for CNC machining and 3D printing with real-time G-code visualization and error detection.",
    fullDescription:
      "GCrafter is a comprehensive web-based platform designed to assist users in the field of CNC machining and 3D printing. The platform provides real-time visual feedback when running G-codes, helping to identify potential issues before actual execution on physical machinery. It features an intuitive interface for code editing, simulation capabilities, and detailed error reporting to ensure optimal manufacturing outcomes.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhfny_y7UQmo5Uea12tH0ltvEcwiaow1ef_TfXbWtCMGJwO42wvGl6pr4IPd26YPBiiGLa12NtmS0ZC0Owm8DHtyRSMrmVBCZCgKPuFxlx1mktEWPv7-2O5vfcrVzHV-0T4Ot0bgLb8l-ER2Vg42CCZ9089vaHG9HXVYcsQf3K2cznaHsdJhY656EFDpJbo",
    link: "https://g-crafter.vercel.app/",
    github: "https://github.com/Sabari-Vasan-SM/GCrafter",
    technologies: ["React", "Node.js"],
    features: [
      "Real-time G-code visualization",
      "Error detection and reporting",
      "2D simulation environment",
      "Code editing with syntax highlighting",
      "Export capabilities for multiple formats",
      "User-friendly interface design",
    ],
    category: "Mech & Web",
  },
  {
    title: "Air-Quality-Monitor-With-NODE-MCU",
    description:
      "An IoT-based air quality monitoring system using ESP32 and real-time dashboards built with React and TailwindCSS.",
    fullDescription:
      "An advanced air quality monitoring system leveraging ESP32 microcontroller and multiple sensors (MQ-6, MQ-135, DHT11) to detect gas concentrations, temperature, and humidity. Real-time data is visualized through a dynamic dashboard built in React with TailwindCSS, while alerts are sent via Twilio SMS when thresholds are crossed. Sensor data is also logged to the cloud using ThingSpeak for historical analysis and tracking.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjpTHAvwiWZJqFFsG1sh3RvTkswRq3a7vE0KO_9UhuallyZzdZahPiu50EEvhmqhHuJcRVG_ma2M3AC8I73BFgtaAFAvrqof6X-YnVxXqE-UstKUSH25rcDT9YDgxA4j9sJ3_U9vhIij5DSxc8hNhzkw4HgrAwSMFOH5t-H9JVcIqmsTMUsuKit1IsPob1x",
    link: "https://airqualitymonitor1.netlify.app/",
    github: "https://github.com/Sabari-Vasan-SM/Air-Quality-Monitor-With-NODE-MCU",
    technologies: ["ESP32", "MQ-6", "MQ-135", "DHT11", "React", "TailwindCSS", "Twilio", "ThingSpeak"],
    features: [
      "Real-time sensor data updates",
      "Gas, temperature, and humidity monitoring",
      "Dynamic React + TailwindCSS dashboard",
      "Twilio SMS alert system",
      "ThingSpeak cloud data logging",
      "Responsive UI for desktop and mobile",
    ],
    category: "IoT & Web",
  },
  {
    title: "Billing and Stock Management System",
    description: "An integrated system for managing inventory, sales, billing, and stock tracking for businesses.",
    fullDescription:
      "A comprehensive business management system that handles inventory management, sales processing, billing, and stock tracking. The system provides real-time inventory updates, automated billing, sales analytics, and multi-location support for growing businesses.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhS8LnsZ0pABQFzh5caT1hZ_y-I9uu2dkR8ee4d3hOZ3DK7eBtbE-6rN_NdNMC7xcvhAFjWhfUwG5N4ydt4FV6QDXWabrSziwVK6vO64lJTAEwBulBdGXOryF_mZOiuz2Q49b0-aDKu-gs8FBOG7gvBJKuH190UdZtOi_EgBJVIWHyvwTavx2O8E_lhNNAM",
    link: "https://velavanstores1.netlify.app/",
    github: "https://github.com/Sabari-Vasan-SM/Billing-and-Stock-Management-11",
    technologies: ["React", "Node.js", "MySQL", "Express", "Chart.js", "PDF Generation"],
    features: [
      "Real-time inventory tracking",
      "Automated billing and invoicing",
      "Sales analytics and reporting",
      "Multi-location support",
      "Barcode scanning integration",
      "Customer and supplier management",
    ],
    category: "Web Development",
  },
  {
    title: "E-Learning Platform",
    description:
      "A comprehensive online learning platform with course management, video streaming, and progress tracking.",
    fullDescription:
      "A full-featured e-learning platform built with modern web technologies. Features include user authentication, course creation and management, video streaming, progress tracking, quizzes, and certificates. The platform supports multiple user roles including students, instructors, and administrators.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhsYfdOfo0jMiCfm8_nap0hQ34TcC-1WX5oNnwHy1RapXuI9o5jZqhusjMJG7h_YtBPYJEA7PuCX0KwODBQKdHy6Wn59-jonbJ9Yg-2I3bXMW2At680inPPO77vZplzTuqI5r76eeVMH5VE-_48s9_djmxr2QGPKMYiPe-pZ5EMmyo3J4AHsOD1ox4DMznz",
    link: "https://github.com/Sabari-Vasan-SM/E-learning-Platform",
    github: "https://github.com/Sabari-Vasan-SM/E-learning-Platform",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Video.js"],
    features: [
      "User authentication and authorization",
      "Course creation and management",
      "Video streaming and playback",
      "Progress tracking and analytics",
      "Quiz and assessment system",
      "Certificate generation",
    ],
    category: "Web Development",
  },
  {
    title: "Sport-Connect",
    description:
      "A social platform connecting sports enthusiasts, organizing events, and building communities around sports.",
    fullDescription:
      "Sport-Connect is a comprehensive social platform designed to bring sports enthusiasts together. Users can create profiles, join sports communities, organize events, find playing partners, and track their sports activities. The platform includes real-time messaging, event management, and location-based features.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjeS-5K7mj-AKhlX3nqXZXUdvbgZOz9mESOPz2sGrD2-gIOQSdegdHHHqpyIdZQvJKyH1pIFStddUKFs2bTdp5vVAXl90T_hpkPMq_OLwR07Y-ML-zHqSTWi9I-8_V6_7dlicXodvSXEfbSvgbZQMYKWxSMXUcpL9QadTCE6dAy_JjCPghkOrweLHdVY8uv",
    link: "https://github.com/Sabari-Vasan-SM/Sport-Connect-SIH-",
    github: "https://github.com/Sabari-Vasan-SM/Sport-Connect-SIH-",
    technologies: ["React", "Firebase", "Google Maps API", "Material-UI", "Socket.io"],
    features: [
      "User profiles and social networking",
      "Event creation and management",
      "Real-time messaging",
      "Location-based event discovery",
      "Sports activity tracking",
      "Community building tools",
    ],
    category: "Web Development",
  },
  {
    title: "Gear Design Calculator with Live Visualization",
    description:
      "An interactive tool for gear design calculations with real-time 3D visualization and engineering analysis.",
    fullDescription:
      "A sophisticated engineering tool that combines gear design calculations with live 3D visualization. Engineers can input parameters, see real-time calculations, and visualize gear meshes in 3D. The tool includes stress analysis, material selection, and export capabilities for CAD software.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEgh4KUKLFaxZpJBLSqQ8JG6LqUsCXfBs0NGizVUpQebQ-cM6d1BfJ9RZBXd13qgIdKZjSTn6fFHMF9Ne3MZ6arnncuchPnfC-ud-AimuaOmF0-iM8fXVLYNS7CGEalpYgHVgWe_Jz9YW5wTnlLSJ9pjf1fTUXhvMWARW39caG7TmQRh3w0li0oUFR1XI6Zo",
    link: "https://github.com/Sabari-Vasan-SM/Gear-design-Calculator-with-live-Visualization",
    github: "https://github.com/Sabari-Vasan-SM/Gear-design-Calculator-with-live-Visualization",
    technologies: ["React", "Three.js", "WebGL", "Mathematical Libraries", "CAD Export"],
    features: [
      "Real-time gear calculations",
      "3D visualization and animation",
      "Stress analysis and simulation",
      "Material property database",
      "CAD file export",
      "Engineering documentation generation",
    ],
    category: "Mech & Web",
  },
  {
    title: "Admission Management System",
    description: "A comprehensive system for managing student admissions, applications, and enrollment processes.",
    fullDescription:
      "A complete admission management system designed for educational institutions. The system handles the entire admission lifecycle from application submission to enrollment. Features include online applications, document management, payment processing, and administrative dashboards.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjtwp3qDUzFmk7FxCk22es1XudU5gXTfo83pE-roIOFeOAkaNpPwGxXcK8bj3CCDuxu_VUJAXV61SPxIeqD2wnHgWNapuVDT1Oktqv8hYZYO6--zgmpOG1i_W2SD7rPVAFh5DEgVeJOzVrL1i3hDPznz-S-C0d9x-015t73uoHN3_jPXAQMhDgCzfClEYc6",
    link: "https://admissionmanagement.netlify.app/",
    github: "https://github.com/Sabari-Vasan-SM/Admisssion-management",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Payment Gateway", "PDF Generation"],
    features: [
      "Online application forms",
      "Document upload and verification",
      "Payment processing integration",
      "Application status tracking",
      "Administrative dashboards",
      "Automated notifications and emails",
    ],
    category: "Web Development",
  },
]

const achievements = [
  {
    title: "Selected for Hackathon",
    description:
      "Successfully selected to participate in a prestigious Smart India Hackathon competition, showcasing innovative problem-solving skills and technical expertise.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjlWLD7CS-1icpArKaIpafXYIyqYhIdNqZHhFnhumN7Bs6GsjVNC8qDPVUDUvH8v0lCOk8GNdMrbT7mWCWHdSXJGjyJ7DvYTPBBY2oh_incFZWbmn60jHKAzh1DuTwN16SCRY8MA--Ei4KI-gG3gyPjgeT7-WVEXLEnKg0AGxbuj9uWmBNcDYXZm-P_5jP-",
    type: "selection" as const,
    date: "2024",
  },
  {
    title: "2nd Prize in Hackathon",
    description:
      "Achieved second place in a competitive hackathon, demonstrating exceptional coding skills and innovative solution development.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEiYF-9n9ZgwFYNUzkvDRKorPpDAQBLCifbvcL1E6-l6eUywOlV7C-4zz29-5hWHYZti3IEGGdmUocuXRZJ8q5KrSsrmGw1l1E-mzy86l6RkiLmIdrRMWiqM-n9j540fOE5rfnU5-m9K-czZQ9aJpjdKOqD0DFaF-u-FQ5vr6s6OiD64JHn9XQFlIwpL2BPo",
    type: "prize" as const,
    date: "2024",
  },
  {
    title: "MongoDB Certificate",
    description:
      "Successfully completed MongoDB certification, mastering database design, querying, and advanced database management techniques.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEi2weDcawnTqAAackNyJj0CboNfvXpKDMQT-VksC5C9gmYDfIp8G8NvI3HX2Uzf2EQhMe3JvglRoVbwV4q4UQ1RlWLNmzuH05CMXaVXZOdZhtWPDmYXxDNGwNabSjrlsecsmALm2bbDgxb0UIk-VVZqgD50PG65rx3yW4HYxowZ44c9JSgkWDQz_HkvA0qp",
    type: "certificate" as const,
    date: "2024",
  },
]
