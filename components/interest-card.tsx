"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface InterestCardProps {
  interest: {
    title: string
    description: string
  }
  index: number
}

export function InterestCard({ interest, index }: InterestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Card className="border-purple-100 dark:border-purple-900 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all rounded-xl h-full group cursor-hover overflow-hidden">
        <motion.div
          whileHover={{
            scale: 1.02,
            y: -5,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          className="h-full"
        >
          <CardContent className="p-4 md:p-6 relative overflow-hidden h-full">
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
            <motion.div
              className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0"
              whileHover={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
                y: [10, 20, 10],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
            />

            <div className="relative z-10">
              <motion.h3
                className="font-medium text-base md:text-lg dark:text-white text-gray-900 mb-2"
                whileHover={{
                  color: "#8b5cf6",
                  x: 5,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {interest.title}
              </motion.h3>

              <motion.p
                className="text-xs md:text-sm text-gray-500 dark:text-gray-400"
                whileHover={{
                  color: "#6b7280",
                  x: 3,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {interest.description}
              </motion.p>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-5 md:w-6 h-5 md:h-6 rounded-full border-2 border-purple-300 opacity-0"
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
                  className="w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  )
}
