"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function AnimatedButton({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const getVariantClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white"
      case "outline":
        return "border border-purple-200 bg-white hover:bg-purple-50 text-gray-800 dark:border-purple-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
      default:
        return ""
    }
  }

  return (
    <div className="relative">
      {isPressed && (
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-300 dark:bg-purple-700 opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      <Button
        className={cn("rounded-full transition-all transform active:scale-95", getVariantClasses(), className)}
        size={size}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
