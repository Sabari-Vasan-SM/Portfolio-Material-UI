"use client"

import { motion } from "framer-motion"

interface EducationTimelineProps {
  education: {
    degree: string
    institution: string
    year: string
    grade: string
  }[]
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Desktop Timeline - Hidden on mobile */}
      <div className="hidden md:block">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

        {education.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-purple-100 dark:border-purple-900"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <h3 className="text-xl font-bold dark:text-white text-gray-900">{item.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                <div className="flex items-center justify-end mt-2 gap-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.grade}</span>
                </div>
              </motion.div>
            </div>

            <div className="relative flex items-center justify-center w-8 h-8 z-10">
              <motion.div
                className="absolute w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-500"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-purple-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8 text-right"}`}>
              <motion.div
                className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-1 text-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                <span className="mr-1 rounded-full bg-purple-500 size-2"></span>
                <span className="dark:text-gray-300 text-gray-700">{item.year}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Timeline - Visible only on mobile */}
      <div className="block md:hidden space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Mobile vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

            {/* Mobile timeline dot */}
            <motion.div
              className="absolute left-0 top-4 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-3 border-purple-500 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-1 bg-purple-500 rounded-full" />
            </motion.div>

            {/* Mobile content card */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-purple-100 dark:border-purple-900 ml-4"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="flex items-center justify-between mb-2">
                <motion.div
                  className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="mr-1 rounded-full bg-purple-500 size-1.5"></span>
                  <span className="dark:text-purple-300 text-purple-700 font-medium">{item.year}</span>
                </motion.div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.grade}</span>
              </div>

              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-1">{item.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.institution}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
