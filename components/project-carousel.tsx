"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "./animated-button"
import Image from "next/image"

interface ProjectCarouselProps {
  projects: {
    title: string
    description: string
    image: string
    link: string
  }[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <p className="text-gray-500 dark:text-gray-400">Swipe or use arrows to navigate projects</p>
        <div className="flex justify-center mt-2 gap-1">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`size-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-purple-500"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-300 dark:hover:bg-purple-800"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl shadow-lg" ref={carouselRef}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            className="relative"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) {
                handleNext()
              } else if (info.offset.x > 100) {
                handlePrev()
              }
            }}
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={projects[currentIndex].image || "/placeholder.svg"}
                alt={projects[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-white/80 mb-4 max-w-2xl">{projects[currentIndex].description}</p>
                  <AnimatedButton
                    variant="outline"
                    className="bg-white/20 text-white border-white/40 hover:bg-white/30"
                  >
                    View Project
                    <ExternalLink className="ml-2 size-4" />
                  </AnimatedButton>
                </div>
                <div className="hidden md:flex items-center text-3xl font-bold">
                  <span>{currentIndex + 1}</span>
                  <span className="mx-2 text-white/50">/</span>
                  <span className="text-white/50">{projects.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          onClick={handlePrev}
          size="icon"
          variant="ghost"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/40 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={handleNext}
          size="icon"
          variant="ghost"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/40 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
