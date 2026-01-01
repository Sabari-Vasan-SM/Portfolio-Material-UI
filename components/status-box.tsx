"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { StatusModal } from "./status-modal"

export function StatusBox() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 inline-flex items-center rounded-lg border-2 border-purple-500 bg-transparent px-4 py-2 text-sm md:text-base font-medium text-gray-900 dark:text-white hover:bg-purple-500/10 transition-colors duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
        whileHover={{ scale: 1.05, borderColor: "rgb(168, 85, 247)" }}
        whileTap={{ scale: 0.95 }}
      >
        Software Developer Intern
      </motion.button>
      <StatusModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
