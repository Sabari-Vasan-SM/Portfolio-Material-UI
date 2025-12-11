"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Trophy, BadgeIcon as Certificate } from "lucide-react"
import Image from "next/image"

interface Achievement {
  title: string
  description: string
  image: string
  type: "certificate" | "prize" | "selection" | "presentation"
  date: string
}

interface AchievementCardProps {
  achievement: Achievement
}

const typeConfig = {
  certificate: {
    icon: Certificate,
    label: "Certificate",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  prize: {
    icon: Trophy,
    label: "Award",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    textColor: "text-yellow-600 dark:text-yellow-400",
  },
  selection: {
    icon: Award,
    label: "Selection",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
  },
  presentation: {
    icon: Award,
    label: "Presentation",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const config = typeConfig[achievement.type]
  const Icon = config.icon

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px] lg:min-h-[600px]">
      {/* Image Section - Takes 3/5 width on large screens */}
      <div className="lg:col-span-3 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <motion.div
          className="relative w-full h-full min-h-[300px] lg:min-h-[600px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={achievement.image || "/placeholder.svg"}
            alt={achievement.title}
            fill
            className="object-contain p-4 lg:p-8"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            priority
          />

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
            <motion.div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${config.color} text-white text-sm font-medium shadow-lg`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <Icon className="size-4" />
              <span>{config.label}</span>
            </motion.div>
          </div>

          {/* Floating Decorative Shapes */}
          <motion.div
            className="absolute top-1/4 right-8 size-16 rounded-full bg-purple-200 dark:bg-purple-800 opacity-20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-8 size-12 rounded-full bg-pink-200 dark:bg-pink-800 opacity-20 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>

      {/* Content Section - Takes 2/5 width on large screens */}
      <div className="lg:col-span-2 p-6 lg:p-12 flex flex-col justify-center bg-white dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          {/* Achievement Stats */}
          <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className={`p-2 rounded-lg ${config.bgColor}`}>
              <Calendar className={`size-5 ${config.textColor}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
              <p className={`font-semibold ${config.textColor}`}>{achievement.date}</p>
            </div>
            <div className="ml-auto">
              <div className={`px-3 py-1 rounded-full ${config.bgColor} ${config.textColor} text-xs font-medium`}>
                {config.label}
              </div>
            </div>
          </div>

          {/* Title */}
          <motion.h3
            className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {achievement.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {achievement.description}
          </motion.p>

          {/* Achievement Badge */}
          <motion.div
            className="flex items-center gap-3 pt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className={`p-3 rounded-xl bg-gradient-to-r ${config.color} shadow-lg`}>
              <Icon className="size-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Achievement Type</p>
              <p className="font-semibold text-gray-900 dark:text-white">{config.label}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
