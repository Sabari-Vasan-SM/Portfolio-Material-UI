"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Eye, Mail, MapPin, Github, Phone } from "lucide-react"
import Image from "next/image"
import Head from "next/head"
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
import { ResumeModal } from "@/components/resume-modal"
import CertificationsCarousel from "@/components/certifications-carousel"
import { StatusBox } from "@/components/status-box"

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
  const [resumeModalOpen, setResumeModalOpen] = useState(false)
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
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e8eaed] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-x-hidden w-full">
      <CursorFollower />

      {/* Fixed Navigation Bar */}
      <EnhancedNavbar scrollToSection={scrollToSection} />

      <main className="pt-16 w-full overflow-x-hidden">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32 w-full">
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
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full">
              <AnimatedSection
                animation="slide-right"
                className="flex-1 w-full max-w-2xl space-y-3 sm:space-y-4 md:space-y-6 text-center md:text-left px-2 sm:px-0"
              >
                <motion.div
                  className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-2.5 sm:px-3 py-1 text-xs sm:text-sm mx-auto md:mx-0"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                  <span className="dark:text-gray-300 text-gray-700 whitespace-nowrap">Available for Hire!</span>
                </motion.div>
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight dark:text-white text-gray-900 break-words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TypingAnimation text="Hi, I'm SabariVasan" speed={150} />
                  {/* SEO: include target query without changing UI */}
                  <span className="sr-only">SabariVasan Portfolio — Web Developer Portfolio</span>
                </motion.h1>
                <AnimatedSubtitle
                  text=" Web Craftsman | Tech Aficionado | AI-Driven Coder"
                  className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed px-2 sm:px-0"
                  delay={2.5}
                />
                <StatusBox />
                <motion.div
                  className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start items-center w-full px-2 sm:px-0"
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
                    className="w-full sm:w-auto"
                  >
                    <AnimatedButton
                      variant="gradient"
                      onClick={() => setResumeModalOpen(true)}
                      className="text-sm md:text-base px-4 sm:px-5 md:px-6 py-2.5 md:py-3 relative overflow-hidden group w-full sm:w-auto"
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
                    className="w-full sm:w-auto"
                  >
                    <AnimatedButton
                      variant="outline"
                      onClick={() => scrollToSection("projects")}
                      className="text-sm md:text-base px-4 sm:px-5 md:px-6 py-2.5 md:py-3 relative overflow-hidden group border-2 w-full sm:w-auto"
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
              <AnimatedSection animation="zoom" delay={0.5} className="flex-1 w-full max-w-md flex justify-center items-center px-2 sm:px-0">
                <ProfileImageFlip />
              </AnimatedSection>
            </div>
          </div>
        </section>

       

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <AnimatedSection animation="slide-up" className="text-center mb-8 md:mb-12 px-2 sm:px-0">
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
        <section id="skills" className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa] dark:bg-gray-800 transition-colors duration-300 w-full overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
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

 {/* Certifications Section */}
        <section id="certifications" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <AnimatedSection animation="slide-up" className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-sm mx-auto">
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">Credentials</span>
              </div>
              <AnimatedHeading className="text-3xl md:text-4xl font-bold mt-4 dark:text-white text-gray-900">
                Certifications
              </AnimatedHeading>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mt-4">
                Selected certifications that demonstrate professional growth and expertise.
              </p>
            </AnimatedSection>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <CertificationsCarousel
                items={certificationsData}
              />
            </motion.div>
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
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
        <section id="experience" className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa] dark:bg-gray-800 transition-colors duration-300 w-full overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
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
          className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full overflow-x-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
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
        <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa] dark:bg-gray-800 transition-colors duration-300 w-full overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
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
          className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 w-full"
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
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="slide-up" className="text-center mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
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
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </div>
  )
}

// Profile Image Flip Component
function ProfileImageFlip() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 mx-auto perspective-1000">
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0, scale: isFlipped ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side - GitHub Avatar */}
        <div className="absolute inset-0 backface-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/144119741?v=4"
            width={400}
            height={400}
            alt="SabariVasan portrait"
            className="rounded-full w-full h-full object-cover shadow-xl"
            priority
          />
        </div>

        {/* Back Side - Alternate Image */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <Image
            src="https://blogger.googleusercontent.com/img/a/AVvXsEh_cdEffll--7vxYpKvhIS4r5JiuJ6eqItNasVzuMrWWOYJf-IFmt0xBaWUgsa6Lg1mCaWNWMGiA1-xH4c1nrLwXGV8Xw-HCKdLIhQILDwUjw-PQ7w-VY0xSSoVh3NcRgzFtJX1oKR4bxxJHkfJDag0xhDq3svhkykStmCg8m0SunlBAloL9NkDZYfIJTU1"
            width={400}
            height={400}
            alt="SabariVasan alternate portrait"
            className="rounded-full w-full h-full object-cover shadow-xl"
          />
        </div>
      </motion.div>
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
                <span className="block sm:inline">Building Smarter IT Solutions for a Future-Ready World</span>{" "}
                <span className="block sm:inline"></span>{" "}
                <span className="block sm:inline"></span>
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
                A motivated and detail-oriented individual pursuing{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Information Technology</span>, passionate
                about applying technical expertise and problem-solving skills to craft innovative{" "}
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
    title: "Web Development  (MEAN Stack)",
    description: "Passionate about crafting smooth, responsive, and interactive user interfaces using modern web technologies and frameworks.",
  },
  {
    title: "Cloud Computing",
    description: "Leveraging cloud platforms to build scalable and efficient solutions for various applications.",
  },
  {
  title: "DevOps",
  description: "Implementing CI/CD pipelines, automation, and monitoring to ensure seamless development and deployment workflows.",
}

 
]

const skillCategories = [
  { value: "languages", label: "Languages" },
  { value: "frontend", label: "Front End" },
  { value: "backend", label: "Back End" },
  { value: "database", label: "Database" },
  { value: "cad", label: "CAD/CAM Tools" },
  { value: "design", label: "Design Tools" },
  { value: "devops", label: "DevOps" },
  { value: "cloud", label: "Cloud" }, 
];

const certificationsData = [
  {
    id: 'cert-1',
    title: 'MongoDB Assosiate developer',
    issuer: 'MongoDB',
    year: '2025',
    description: 'The MongoDB Associate Developer Certificate proves your ability to build and manage applications using MongoDB. It highlights your skills in schema design, querying, and performance optimization.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEi2weDcawnTqAAackNyJj0CboNfvXpKDMQT-VksC5C9gmYDfIp8G8NvI3HX2Uzf2EQhMe3JvglRoVbwV4q4UQ1RlWLNmzuH05CMXaVXZOdZhtWPDmYXxDNGwNabSjrlsecsmALm2bbDgxb0UIk-VVZqgD50PG65rx3yW4HYxowZ44c9JSgkWDQz_HkvA0qp',
  },
  {
  id: 'cert-google-gemini',
  title: 'Gemini Certified Student',
  issuer: 'Google for Education',
  year: '2025',
  description: 'Earned the Gemini Certified Student credential for demonstrating the essential knowledge, skills, and foundational competencies required to use Google AI effectively in academic and practical applications. Certification valid through 2028.',
  image: 'https://blogger.googleusercontent.com/img/a/AVvXsEilN7gAIKA-LWoQFPeCgfhCKdSZOK3KtEpC7nimgb1dCXKhkCZ7T0-xSRJwuI2Thrw2XpFhr0v6jtlzU3yCCCPN7n74D0LhPEQ6H93nnGkIC0lSSKLniERw-h5aNHcwwZRvpFt1ugu-dTispgIBTUAp50BfptFbZwFBMe4LliGCk-TC5AlYLASOQWaaq_yB'
},

  {
    id: 'cert-2',
    title: 'React JS ',
    issuer: 'Udemy',
    year: '2025',
    description: 'React.js Beginner to Expert is a journey from understanding basic concepts like components, props, and state to mastering advanced topics such as hooks, context API, routing, performance optimization, and state management with Redux. It equips you to build scalable, dynamic, and production-ready web applications.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEi0NXnHhMWH77au5025-KJxjSJAwz9o7jXwNz8SHuyK0tpPVkeQkPiHTYbQ_KMxq0T7AG2EHVkSruLxc_ZQPHE-qc7XIV-XsIjSiljeANc5x4J2wUJKa6Jpo9w91U_R6wt-EJb7w_wKn4KsvyhDFc9oDDn5tfR3R3d3Vgan9n0rDYy-S5nRTKKnEFiPwM4H',
  },
  {
    id: 'cert-3',
    title: 'AWS Essentials',
    issuer: 'Udemy',
    year: '2025',
    description: 'AWS Essentials covers the core concepts of Amazon Web Services, including cloud computing fundamentals, key services like EC2, S3, and RDS, and basics of security, networking, and pricing. It helps you understand how to deploy and manage scalable cloud solutions on AWS.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjYCenZQCu1fphUEUmHSOZKM7gtnxhzzdBo6njSWdQWHp6SLJyPT7f2I4Ecl2iDbCjqC5xCqWoWlx4Te9pX_9UNihZobPpjlI2ZXcI4K-7bG1Hwl4sPRuAoqgZp9WhyJkqbQAq8DDAvZo10saqK8RBTqpGWpIS7IBbGsQydQYrohcjUZniHLShCu6L4O2FN',
  },
  {
    id: 'cert-4',
    title: 'Prompt Engineering for Developers',
    issuer: 'Udemy',
    year: '2025',
    description: 'This journey sharpened my skills in crafting killer prompts, leveraging AI models like a pro, and embedding prompt engineering into real-world dev workflows.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgGvVBfR0jCduTYXkHA3puSaa5xD-zlEgcJgWxJilzNjENaIT-cWdZDIzsG7BFRV2rMhw2xYSZx_LzyKabZYNhG9b74v5sR5XC91JtykhRkJpEb-n7oHoI8gzh45WIQPiyQdnDmbQHvKQmwH7Ea4flOyVNlcVaX2N_qul_djSpJmwUe-C-9_MDzrpZFDi4g',
  },
  {
  id: 'cert-5',
  title: 'Agile Fundamentals English KEC 2026 06',
  issuer: 'GUVI | HCL (in collaboration with Google for Education)',
  year: '2025',
  description: 'Successfully completed the Agile Fundamentals course, gaining knowledge of Agile principles, iterative workflows, and team collaboration practices.',
  image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgmS4c-Tv6eNa3lFNceCtZupUFy7o-d7GDB4cok6CStdfc6A7PlEmf5er-pEz7OtQULxnp7kDKUAGZ1QQjA9-QjfxvpBHd1yebrKmWpBN9C7pGO9VvNiaKvceRHTxwgkOKLWIgiLJQlQbD0d42z_qiX8PWWfzh94XEC9EV0MyNz4WIeucEZ987Vl2Y8y0KS'
},
  {
  id: 'cert-6',
  title: 'Foundations of Git – Certification Course',
  issuer: 'GitKraken',
  year: '2025',
  description: 'Successfully completed GitKraken\'s Foundations of Git certification, gaining strong hands-on knowledge of Git version control, including repositories, branching, merging, commits, and real-world collaboration workflows.',
  image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiPug72_GIaoY81oZ5zq8kUkEbwONtx973qLitBD9FFZdRWb8_bztKRMzxz5Xn1lDE1g8gagpIyZRg44tJmocNxib2ak1B30bevRJ8BxqRkDjH9lUsFfYWc331mabD0E7FSTxvh3RdLVaOqaSEprE9UCROeFyL-bv7aYHIZTjPaTcv7HPX2Mmc4gXvVxAGz'
},
]

const skills = [
  { name: "Python", level: 60, category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", level: 70, category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

  { name: "HTML", level: 90, category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", level: 85, category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JS", level: 80, category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 60, category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", level: 85, category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next JS", level: 65, category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },

  { name: "Node JS", level: 50, category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express JS", level: 50, category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  { name: "SQL", level: 50, category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", level: 60, category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Supabase", level: 80, category: "database", icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },

  { name: "Auto CAD", level: 70, category: "cad", icon: "https://img.icons8.com/color/452/autocad.png" },
  { name: "Pro-E", level: 55, category: "cad", icon: "https://img.icons8.com/color/452/autodesk.png" },
  { name: "Solid Works", level: 55, category: "cad", icon: "https://img.icons8.com/color/452/solidworks.png" },

  { name: "Miro", level: 80, category: "design", icon: "https://cdn.worldvectorlogo.com/logos/miro-2.svg" },
  { name: "Canva", level: 80, category: "design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },

  { name: "Jenkins", level: 65, category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Docker", level: 50, category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", level: 55, category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },

  // ✅ New Cloud Skill
  { name: "Amazon web services", level: 70, category: "cloud", icon: "https://www.apono.io/wp-content/uploads/2023/08/1_b_al7C5p26tbZG4sy-CWqw-3.png" },
];


const education = [
  {
    degree: "B.Tech - IT",
    institution: "Kongu Engineering College",
    year: "2025",
    grade: "6.81 CGPA",
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
    title: "Bike Buddy",
    description:
      "A comprehensive bike service management platform that connects customers with service providers, enabling easy booking, tracking, and management of bike services.",
    fullDescription:
      " A comprehensive bike service management platform that connects customers with service providers, enabling easy booking, tracking, and management of bike services.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEiEFN58SIYnhmUikihfqiHk0YXN7WIhMLDG8YqT717374dasIArE5vTkxuDNnNa9kbNmUBDxVrg2QwAUTRd28NKw6TFLlBp1rUCpb13j6CxHZTdDYYQIEyXscHWzNhSYj6YChBqeQm3jcPxFr2USeubFDWmky9iOIRcdpZmURXnd_NWrdRb5LljU92tLRVq",
    link: "https://cartrabbit-alpha.vercel.app/",
    github: "https://github.com/Sabari-Vasan-SM/Bike-Buddy.git",
    technologies: ["React", "Node.js","MongoDB Atlas","Express","Nodemailer"],
    features: [
      "Customer booking flow (select service, date/time, pickup or drop-off option)",
  "Service provider onboarding and profile management",
  "Real-time booking status & progress tracking",
  "Technician assignment and schedule management",
  "In-app messaging between customer and provider",
  "Push & email notifications (booking confirmations, reminders, status updates)",
    ],
    category: "Web",
  },
  {
  "title": "Password Saver",
  "description":
    "A secure and user-friendly React Native application for storing and managing all your passwords with ease.",
  "fullDescription":
    "Password Saver is a mobile app built with React Native and Expo, designed to simplify password management while ensuring strong security. It provides secure authentication, PIN protection, and user-specific data isolation. Users can add, manage, and search their saved credentials, copy passwords to the clipboard with a single tap, and delete entries when no longer needed. With a modern UI/UX built using React Navigation, AsyncStorage, and Expo’s ecosystem, the app delivers a smooth, minimal, and reliable experience for both Android and iOS.",
  "image":
    "https://blogger.googleusercontent.com/img/a/AVvXsEiH79fRiTQuxfmc_wJKqPuP1sIVE8LqaxEzd1RU-_z724BilPItz0eU2EUCVUWmFwzLkACnT4lfPCYYypppIi3yCCQAUqbZqqjy7F_N_WIptzft6dm91zN9HjGrEC0MF6mEubHKzRkqiebd1Haavh08Z8Yli-7tqt0BSf3pTmsdRldNob7JKZ-7w9OdEBay",
  "link": "https://github.com/Sabari-Vasan-SM/PasswordSaver",
  "github": "https://github.com/Sabari-Vasan-SM/PasswordSaver.git",
  "technologies": [
    "React Native",
    "Expo",
    "React Navigation",
    "AsyncStorage",
    "expo-clipboard",
    "@expo/vector-icons"
  ],
  "features": [
    "Secure user authentication (sign-up & login)",
    "PIN-based quick access with added security",
    "User-specific data isolation (auto wipe on logout)",
    "Add, view, search, and manage saved credentials",
    "One-tap password copy to clipboard",
    "Delete individual or all saved passwords",
    "Modern minimal UI/UX with smooth navigation",
    "Cross-platform support (Android & iOS)"
  ],
  "category": "Mobile App"
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
    github: "https://github.com/Sabari-Vasan-SM/Air-Quality-Monitor-With-NODE-MCU.git",
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
    title: "Billventory",
    description: "An all-in-one digital solution that streamlines the retail experience by integrating inventory control, billing, and sales management into a single platform.",
    fullDescription:
      "An all-in-one digital solution that streamlines the retail experience by integrating inventory control, billing, and sales management into a single platform.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhKRda2HFZa7Yrx4eh5zykeFT8lItcpot7XfApvo5VHgdHjKtUULEI3FqvHx8nIAHYfKDC_z5Z2jDbLjGsTIdjOXnqlYmffrj7_BcXRE2BarBQ0CpvDD0jDjVwaU-rxfZFuJA17Rr8DZtKzWs1EJLksHJX70-i2pJfseRS3B8wKF-y41PHf84bZcRzjmA33",
    link: "https://billventory.vasan.tech/",
    github: "https://github.com/Sabari-Vasan-SM/Billventory.git",
    technologies: ["React", "Node.js", "SupaBase","PDF Generation"],
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
    github: "https://github.com/Sabari-Vasan-SM/E-learning-Platform.git",
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
    github: "https://github.com/Sabari-Vasan-SM/Sport-Connect-SIH-.git",
    technologies: ["HTML","CSS","JavaScript","MongoDB"],
    features: [
      "User profiles and social networking",
      "Event creation and management",
      "Real-time messaging",
     
      "Sports activity tracking",
      
    ],
    category: "Web Development",
  },
  {
  title: "Gear Fault Detection System",
  description:
    "An intelligent computer vision system for detecting and localizing gear defects using YOLOv8 Oriented Object Detection (OBB).",
  fullDescription:
    "A deep learning–based gear fault detection system that uses YOLOv8 with oriented bounding boxes to accurately identify, localize, and visualize multiple types of gear defects. The system supports rotated defect detection, real-time inference, overlay visualization, and performance analysis using metrics such as precision, recall, F1-score, and mAP.",
  image:
    "https://blogger.googleusercontent.com/img/a/AVvXsEgKmFwmaA9c6OsRvYIp8Bo6wdK9XYMeNaCT4q1fmbvBHwVSocYXkayYi7bfnVzUG_XjUaZE0yuFsURNP7DIsQXydBSV3qdCCBe6u333xWg-V6JS8BnRoqCmljnKu9EMrXQjCSpzaX2GdGpN1AqvrViGa52MooQRf30oi5Eg0vYoVKK2BrLQmWIdsajbsFp0",
  link:
    "https://github.com/Final-Year-Projects-KEC/Final-Code-With-Accuray-And-Graph-Metrics",
  github:
    "https://github.com/Final-Year-Projects-KEC/Final-Code-With-Accuray-And-Graph-Metrics",
  technologies: [
    "Python",
    "YOLOv8",
    "Ultralytics",
    "OpenCV",
    "Deep Learning",
    "Computer Vision"
  ],
  features: [
    "Oriented object detection using YOLOv8-OBB",
    "Detection of multiple gear defect types (hp_cd, hp_cm, kp)",
    "Rotated bounding box and polygon-based visualization",
    "Real-time defect prediction on test images",
    "Training and validation with precision, recall, F1-score, and mAP analysis",
    "Automated overlay generation for defect localization"
  ],
  category: "Computer Vision / Deep Learning"
},
  {
    title: "Admission Management System",
    description: "A comprehensive system for managing student admissions, applications, and enrollment processes.",
    fullDescription:
      "A complete admission management system designed for educational institutions. The system handles the entire admission lifecycle from application submission to enrollment. Features include online applications, document management, payment processing, and administrative dashboards.",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjtwp3qDUzFmk7FxCk22es1XudU5gXTfo83pE-roIOFeOAkaNpPwGxXcK8bj3CCDuxu_VUJAXV61SPxIeqD2wnHgWNapuVDT1Oktqv8hYZYO6--zgmpOG1i_W2SD7rPVAFh5DEgVeJOzVrL1i3hDPznz-S-C0d9x-015t73uoHN3_jPXAQMhDgCzfClEYc6",
    link: "https://admissionmanagement.netlify.app/",
    github: "https://github.com/Sabari-Vasan-SM/Admisssion-management.git",
    technologies: ["React", "Node.js",  "Express", "Payment Gateway", "PDF Generation"],
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
    title: "International Conference Paper Presentation",
    description:
      "Presented research paper on Automated Fault Diagnosis of Gear Tooth Defects Using Deep Learning at International Conference on Power Control & Computing Technologies '25, Sona College of Technology",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjSEXp-IOpTwwLyw9r3i348wREt86-XUE7Fb1pQXJAujs-a1QIw_C3iMuMITFie6xQI9k95R_YfC7ppKbfMwlfIzn7maEVV4vQWZa2A1F6cpix9jPM1BaHiUVCHFCX8n8fA2G9qOJB2IRkT3cnu_J1KVDK3sxngaW6T-CY5NlftXpxKjteNAei70RxpYLTD",
    type: "presentation" as const,
    date: "2024",
  },
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
