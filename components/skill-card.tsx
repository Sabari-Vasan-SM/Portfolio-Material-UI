"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  skill: {
    name: string
    level: number
    icon: string
  }
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Card className="overflow-hidden border-purple-100 dark:border-purple-900 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow rounded-xl">
        <CardContent className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} icon`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to a generic icon if image fails to load
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8 12h8'/%3E%3Cpath d='M12 8v8'/%3E%3C/svg%3E"
                  }}
                />
              </div>
              <h3 className="font-medium text-sm md:text-base dark:text-white text-gray-900">{skill.name}</h3>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-2.5">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 md:h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 text-right text-xs text-gray-500 dark:text-gray-400">{skill.level}%</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
