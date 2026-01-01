"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import React from "react"

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
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full border border-purple-200 dark:border-purple-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900 rounded-lg transition-colors"
                >
                  <X className="size-6 text-purple-600 dark:text-purple-400" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pr-6">
                  Harvee Designs,
            Coimbatore
                </h2>

                {/* Image */}
                <div className="relative w-40 h-40 rounded-xl overflow-hidden mx-auto">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYiGoZetdRXpDEc1cRby4jTh5i6OqW1VNEA&s"
                    alt="Software Developer Intern"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  Currently working as a Software Developer Intern in Harvee Designs
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
