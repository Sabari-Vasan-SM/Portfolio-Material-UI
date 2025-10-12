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

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "certifications", label: "Certifications", icon: Trophy },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "contact", label: "Contact", icon: MessageCircle },
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
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-lg border-b border-purple-100 dark:border-purple-800"
          : "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50"
      }`}
      style={{ zIndex: 1000 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-hover">
          <Link href="/" className="flex items-center gap-3" onClick={() => handleNavClick("home")}>
            <motion.div
              className="relative size-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg"
              whileHover={{
                rotate: [0, -10, 10, 0],
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              >
                S
              </motion.span>
              <motion.div
                className="absolute -top-1 -right-1 size-3 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="size-2 text-yellow-600" />
              </motion.div>
            </motion.div>
            <div className="hidden sm:block">
              <motion.span
                className="font-bold text-lg dark:text-white bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                SabariVasan
              </motion.span>
              <motion.p
                className="text-xs text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Portfolio
              </motion.p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <motion.div
            className="flex items-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-full px-2 py-2 border border-purple-100 dark:border-purple-800 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-hover ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <motion.div className="relative z-10 flex items-center gap-2" whileHover={{ x: 2 }}>
                    <Icon className="size-4" />
                    <span className="hidden xl:block">{item.label}</span>
                  </motion.div>
                </motion.button>
              )
            })}
          </motion.div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
          >
            <ThemeToggle />
          </motion.div>

          {/* Contact Button - Desktop */}
          <motion.div
            className="" // Remove "hidden md:block" to show on mobile
            initial={{ scale: 0, x: 50 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
          >
            <AnimatedButton variant="gradient" onClick={handleHireMe} className="relative overflow-hidden">
              <motion.div className="flex items-center gap-2" whileHover={{ x: 2 }}>
                <Mail className="size-4" />
                <span className="hidden sm:inline">Hire Me</span>
                <span className="sm:hidden">Hire</span>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </AnimatedButton>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative rounded-full size-10 cursor-hover"
            >
              <motion.div animate={{ rotate: mobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-b border-purple-100 dark:border-purple-800 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ zIndex: 999 }}
          >
            <div className="container px-4 py-6">
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                          : "text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
