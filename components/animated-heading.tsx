"use client"

import type React from "react"

import { motion } from "framer-motion"

import { useTheme } from "next-themes"

interface AnimatedHeadingProps {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function AnimatedHeading({ children, className = "", level = 2 }: AnimatedHeadingProps) {
  const { theme } = useTheme()

  const Component = motion[`h${level}` as keyof typeof motion] as any

  return (
    <Component
      className={`cursor-hover transition-all duration-300 ${className}`}
      whileHover={{
        scale: 1.05,
        color: theme === "dark" ? "#a855f7" : "#7c3aed",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      data-cursor-hover
    >
      {children}
    </Component>
  )
}
