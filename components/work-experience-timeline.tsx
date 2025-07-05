"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

interface WorkExperienceTimelineProps {
  experiences: {
    title: string
    company: string
    location: string
    duration: string
    type: string
  }[]
}

export function WorkExperienceTimeline({ experiences }: WorkExperienceTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Desktop Timeline - Hidden on mobile */}
      <div className="hidden md:block">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 group cursor-hover overflow-hidden relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0"
                  whileHover={{
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 1],
                    y: [-10, -20, -10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.2,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div
                      className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center shrink-0"
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        backgroundColor: "rgba(139, 92, 246, 0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Briefcase className="size-5 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold dark:text-white text-gray-900 mb-1"
                        whileHover={{
                          color: "#8b5cf6",
                          x: index % 2 === 0 ? -5 : 5,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {experience.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-600 dark:text-gray-300 font-medium"
                        whileHover={{
                          color: "#6b7280",
                          x: index % 2 === 0 ? -3 : 3,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {experience.company}
                      </motion.p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <motion.div
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                      whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <MapPin className="size-4" />
                      <span>{experience.location}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                      whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Calendar className="size-4" />
                      <span>{experience.duration}</span>
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                      {experience.type}
                    </span>
                  </motion.div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-6 h-6 rounded-full border-2 border-purple-300 opacity-0"
                    whileHover={{
                      opacity: 1,
                      scale: [1, 1.2, 1],
                      rotate: 360,
                    }}
                    transition={{
                      opacity: { duration: 0.2 },
                      scale: { duration: 1, repeat: Number.POSITIVE_INFINITY },
                      rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-purple-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      whileHover={{
                        scale: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="relative flex items-center justify-center w-12 h-12 z-10">
              <motion.div
                className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-500 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 180 }}
              />
              <motion.div
                className="absolute w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.3 }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-white rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.15 + 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
              />
            </div>

            <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8 text-right"}`}>
              <motion.div
                className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 px-4 py-2 text-sm shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
                }}
              >
                <motion.span
                  className="mr-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 size-3"
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                ></motion.span>
                <span className="dark:text-gray-300 text-gray-700 font-medium">Experience #{index + 1}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Timeline - Visible only on mobile */}
      <div className="block md:hidden space-y-6">
        {experiences.map((experience, index) => (
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
              className="absolute left-0 top-6 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-3 border-purple-500 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
            </motion.div>

            {/* Mobile content card */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-purple-100 dark:border-purple-900 ml-4"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* Header with icon and type badge */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center shrink-0">
                    <Briefcase className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <motion.div
                    className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="dark:text-purple-300 text-purple-700 font-medium">{experience.type}</span>
                  </motion.div>
                </div>
              </div>

              {/* Job title and company */}
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-1">{experience.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">{experience.company}</p>

              {/* Location and duration */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="size-3" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="size-3" />
                  <span>{experience.duration}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
