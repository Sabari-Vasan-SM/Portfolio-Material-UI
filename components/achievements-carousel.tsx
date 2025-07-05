"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AchievementCard } from "./achievement-card"

interface Achievement {
  title: string
  description: string
  image: string
  type: "certificate" | "prize" | "selection"
  date: string
}

interface AchievementsCarouselProps {
  achievements: Achievement[]
}

export function AchievementsCarousel({ achievements }: AchievementsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length)
    setProgress(0)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    setProgress(0)
  }

  // Auto-cycle through achievements
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 100 / 35 // 3.5 seconds total
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying, currentIndex])

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border border-purple-100 dark:border-purple-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <AchievementCard achievement={achievements[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="ml-4 size-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg border border-purple-100 dark:border-purple-800"
          >
            <ChevronLeft className="size-6 text-purple-600 dark:text-purple-400" />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="mr-4 size-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg border border-purple-100 dark:border-purple-800"
          >
            <ChevronRight className="size-6 text-purple-600 dark:text-purple-400" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        {/* Play/Pause Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className="size-12 rounded-full border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 bg-transparent"
        >
          {isPlaying ? (
            <Pause className="size-5 text-purple-600 dark:text-purple-400" />
          ) : (
            <Play className="size-5 text-purple-600 dark:text-purple-400" />
          )}
        </Button>

        {/* Dot Indicators */}
        <div className="flex gap-3">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`size-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-300 dark:hover:bg-purple-700"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Achievement Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {currentIndex + 1} of {achievements.length} achievements
        </p>
      </div>
    </div>
  )
}
