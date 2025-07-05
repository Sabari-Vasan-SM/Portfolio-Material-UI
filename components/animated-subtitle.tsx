"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface AnimatedSubtitleProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedSubtitle({ text, className = "", delay = 0 }: AnimatedSubtitleProps) {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  }

  const charVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.p
      className={`${className} whitespace-nowrap overflow-x-auto scrollbar-hide cursor-pointer select-none`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.02,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        minWidth: "fit-content",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          className="inline-block flex-shrink-0 font-semibold italic"
          whileHover={{
            scale: 1.15,
            color: theme === "dark" ? "#a855f7" : "#7c3aed",
            textShadow: theme === "dark"
              ? "0 0 6px rgba(168, 85, 247, 0.6)"
              : "0 0 6px rgba(124, 58, 237, 0.6)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          style={{
            marginRight: char === " " ? "0.25rem" : "0",
            color: char === "|" ? (theme === "dark" ? "#a855f7" : "#7c3aed") : "inherit",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  )
}
