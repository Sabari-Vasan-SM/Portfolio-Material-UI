"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Mail,
  User,
  Code,
  GraduationCap,
  Briefcase,
  FolderOpen,
  MessageCircle,
  Home,
  Sparkles,
  ChevronDown,
  Trophy,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "./animated-button"
import { ThemeToggle } from "./theme-toggle"

interface EnhancedNavbarProps {
  scrollToSection: (sectionId: string) => void
}

export function EnhancedNavbar({ scrollToSection }: EnhancedNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Get all sections (include certifications)
      const sections = ["home", "about", "skills", "certifications", "education", "experience", "projects", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      // Special case for home section (top of page)
      if (window.scrollY < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { id: "home", label: "Home", shortLabel: "Home", icon: Home },
    { id: "about", label: "About", shortLabel: "About", icon: User },
    { id: "skills", label: "Skills", shortLabel: "Skills", icon: Code },
    { id: "certifications", label: "Certifications", shortLabel: "Certs", icon: Trophy },
    { id: "education", label: "Education", shortLabel: "Edu", icon: GraduationCap },
    { id: "experience", label: "Experience", shortLabel: "Exp", icon: Briefcase },
    { id: "projects", label: "Projects", shortLabel: "Projects", icon: FolderOpen },
    { id: "achievements", label: "Achievements", shortLabel: "Awards", icon: Trophy },
    { id: "contact", label: "Contact", shortLabel: "Contact", icon: MessageCircle },
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false) // Close mobile menu first

    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 64 // Height of the fixed navbar
        const elementPosition = element.offsetTop - navbarHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hiring Inquiry - Portfolio Contact")
    const body = encodeURIComponent(`Hello SabariVasan,

I am interested in discussing a potential opportunity with you. I came across your portfolio and would like to connect.

Best regards,`)

    // Try to open Gmail web interface first, fallback to mailto
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sabarivasan1239@gmail.com&su=${subject}&body=${body}`
    const mailtoUrl = `mailto:sabarivasan1239@gmail.com?subject=${subject}&body=${body}`

    // Try Gmail web first
    const newWindow = window.open(gmailUrl, "_blank")

    // If popup was blocked or failed, fallback to mailto
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = mailtoUrl
    }
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-3 md:top-4 pointer-events-none"
      style={{ zIndex: 1000 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container px-2 sm:px-3 md:px-5 xl:px-6">
        <motion.div
          className={`pointer-events-auto liquid-glass relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] px-2.5 py-2 md:px-4 md:py-3 transition-all duration-300 ${scrolled ? "shadow-[0_22px_60px_rgba(15,23,42,0.14)]" : "shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
            }`}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 22 }}
        >
          <div className="absolute inset-x-10 top-0 h-px bg-white/90 dark:bg-white/20" />
          <div className="absolute -left-6 top-1/2 size-14 -translate-y-1/2 rounded-full bg-purple-300/35 blur-2xl dark:bg-purple-500/20" />
          <div className="absolute right-20 top-1 size-16 rounded-full bg-pink-300/20 blur-2xl dark:bg-pink-500/15" />

          <div className="relative flex items-center justify-between gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="cursor-hover shrink-0">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 rounded-[1.5rem] px-1.5 sm:px-2 py-1.5" onClick={() => handleNavClick("home")}>
                <motion.div
                  className="relative size-10 sm:size-11 rounded-[1.1rem] sm:rounded-[1.2rem] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-[0_10px_28px_rgba(192,38,211,0.35)]"
                  whileHover={{
                    rotate: [0, -6, 6, 0],
                    boxShadow: "0 14px 30px rgba(192, 38, 211, 0.4)",
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  >
                    S
                  </motion.span>
                  <motion.div
                    className="absolute -top-1 -right-1 size-3.5 rounded-full bg-amber-300 flex items-center justify-center shadow-sm"
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Sparkles className="size-2 text-amber-700" />
                  </motion.div>
                </motion.div>
                <div className="hidden md:block leading-none">
                  <motion.span
                    className="block font-bold text-base xl:text-lg bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.03 }}
                  >
                    SabariVasan
                  </motion.span>
                  <motion.p
                    className="mt-1 text-xs text-slate-500 dark:text-slate-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    Portfolio
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            <nav className="hidden xl:flex min-w-0 flex-1 px-2 2xl:px-4">
              <div className="mx-auto flex w-full justify-center overflow-hidden">
                <motion.div
                  className="liquid-glass-soft scrollbar-hide flex max-w-full items-center overflow-x-auto rounded-full px-1.5 2xl:px-2 py-1.5"
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 280 }}
                >
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.id

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`relative shrink-0 flex items-center gap-1.5 2xl:gap-2 rounded-full px-2.5 2xl:px-4 py-2 text-[13px] 2xl:text-sm font-medium whitespace-nowrap transition-all cursor-hover ${isActive
                            ? "text-white"
                            : "text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
                          }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 * index }}
                      >
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 shadow-[0_10px_24px_rgba(192,38,211,0.35)]"
                            layoutId="activeTab"
                            transition={{ type: "spring", stiffness: 300, damping: 28 }}
                          />
                        )}
                        <motion.div className="relative z-10 flex items-center gap-2" whileHover={{ x: 1.5 }}>
                          <Icon className="size-4" />
                          <span className="2xl:hidden">{item.shortLabel}</span>
                          <span className="hidden 2xl:inline">{item.label}</span>
                        </motion.div>
                      </motion.button>
                    )
                  })}
                </motion.div>
              </div>
            </nav>

            <div className="flex shrink-0 items-center gap-2 md:gap-3">
              <motion.div
                className="hidden 2xl:flex liquid-glass-soft rounded-full p-1"
                initial={{ scale: 0, rotate: -140 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.55, type: "spring", stiffness: 300 }}
              >
                <ThemeToggle />
              </motion.div>

              <motion.div
                initial={{ scale: 0, x: 36 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.65, type: "spring", stiffness: 300 }}
              >
                <AnimatedButton
                  variant="gradient"
                  onClick={handleHireMe}
                  className="relative overflow-hidden border border-white/40 px-3 sm:px-4 md:px-5 shadow-[0_10px_24px_rgba(192,38,211,0.28)]"
                >
                  <motion.div className="flex items-center gap-2" whileHover={{ x: 2 }}>
                    <Mail className="size-4" />
                    <span className="hidden 2xl:inline">Hire Me</span>
                    <span className="hidden sm:inline 2xl:hidden">Hire</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatedButton>
              </motion.div>

              <motion.div
                className="xl:hidden"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.75, type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="liquid-glass-soft relative size-11 rounded-full cursor-hover text-slate-700 hover:text-fuchsia-600 dark:text-slate-200 dark:hover:text-fuchsia-300"
                >
                  <motion.div animate={{ rotate: mobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="xl:hidden pointer-events-auto container mt-3 px-2 sm:px-3 md:px-5 xl:px-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ zIndex: 999 }}
          >
            <div className="liquid-glass overflow-hidden rounded-[2rem] px-4 py-5 shadow-[0_20px_44px_rgba(15,23,42,0.14)]">
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-left font-medium transition-all ${isActive
                          ? "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 text-white shadow-[0_12px_28px_rgba(192,38,211,0.3)]"
                          : "text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
                        }`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Icon className="size-5" />
                      </motion.div>
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ChevronDown className="size-4 rotate-180" />
                        </motion.div>
                      )}
                    </motion.button>
                  )
                })}
              </nav>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/30 pt-4 dark:border-white/10 sm:hidden">
                <div className="liquid-glass-soft rounded-full p-1">
                  <ThemeToggle />
                </div>
                <AnimatedButton
                  variant="gradient"
                  onClick={handleHireMe}
                  className="relative overflow-hidden border border-white/30 px-5 shadow-[0_10px_24px_rgba(192,38,211,0.24)]"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="size-4" />
                    Hire Me
                  </span>
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
