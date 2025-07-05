"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" /> // Placeholder to avoid layout shift
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={theme === "dark" ? "dark" : "light"}
        variants={{
          light: {
            backgroundColor: "rgba(255, 255, 255, 0)",
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 },
          },
          dark: {
            backgroundColor: "rgba(138, 92, 246, 0.2)",
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 },
          },
        }}
      />
    </Button>
  )
}
