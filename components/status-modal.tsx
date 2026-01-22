"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import React from "react"

import { Intern3DCard } from "./intern-3d-card"

interface StatusModalProps {
  isOpen: boolean
  onClose: () => void
}

export function StatusModal({ isOpen, onClose }: StatusModalProps) {
  // Apply blur to navbar when modal is open
  React.useEffect(() => {
    const navbar = document.querySelector("nav")
    if (navbar) {
      if (isOpen) {
        navbar.classList.add("blur-sm")
      } else {
        navbar.classList.remove("blur-sm")
      }
    }
    return () => {
      if (navbar) {
        navbar.classList.remove("blur-sm")
      }
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="min-h-screen flex items-center justify-center px-4 py-8">
              <Intern3DCard onClose={onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
