"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { AnimatedButton } from "./animated-button"

interface Project {
  title: string
  description: string
  fullDescription: string
  image: string
  link: string
  github?: string
  technologies: string[]
  features: string[]
  category: string
}

interface HorizontalProjectsProps {
  projects: Project[]
  activeCategory: string
}

export function HorizontalProjects({ projects, activeCategory }: HorizontalProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      return () => container.removeEventListener("scroll", checkScrollButtons)
    }
  }, [filteredProjects])

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400
      const newScrollLeft = containerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <motion.button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full transition-all ${
              canScrollLeft
                ? "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl cursor-hover"
                : "bg-gray-100 dark:bg-gray-700 cursor-not-allowed opacity-50"
            }`}
            whileHover={canScrollLeft ? { scale: 1.1, y: -2 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="size-5 text-purple-600 dark:text-purple-400" />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full transition-all ${
              canScrollRight
                ? "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl cursor-hover"
                : "bg-gray-100 dark:bg-gray-700 cursor-not-allowed opacity-50"
            }`}
            whileHover={canScrollRight ? { scale: 1.1, y: -2 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
          >
            <ChevronRight className="size-5 text-purple-600 dark:text-purple-400" />
          </motion.button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Projects Container */}
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-72 sm:w-80 md:w-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <Card className="h-full overflow-hidden border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 group cursor-hover">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                {/* Project Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=400"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Action Buttons - Updated to show both View and GitHub (project-specific) */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                      scale: hoveredProject === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.button
                        className="px-3 md:px-4 py-2 md:py-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors flex items-center gap-2 font-medium text-xs md:text-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="size-3 md:size-4" />
                        <span>View</span>
                      </motion.button>
                      {project.github && (
                        <motion.button
                          className="px-3 md:px-4 py-2 md:py-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors flex items-center gap-2 font-medium text-xs md:text-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.github as string, "_blank")}
                        >
                          <Github className="size-3 md:size-4" />
                          <span>GitHub</span>
                        </motion.button>
                      )}
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4">
                    <motion.span
                      className="inline-flex items-center rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-2 md:px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div>
                    <motion.h3
                      className="text-lg md:text-xl font-bold dark:text-white text-gray-900 mb-2 line-clamp-1"
                      whileHover={{ color: "#8b5cf6" }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons - Updated bottom section with project-specific links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-2"
                  >
                    <AnimatedButton
                      variant="outline"
                      className="flex-1 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-xs md:text-sm py-2 md:py-2.5"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <span>View Live</span>
                      <motion.div className="ml-1" whileHover={{ x: 3 }}>
                        <ExternalLink className="size-3 md:size-4" />
                      </motion.div>
                    </AnimatedButton>
                    {project.github && (
                      <AnimatedButton
                        variant="outline"
                        className="flex-1 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-xs md:text-sm py-2 md:py-2.5"
                        onClick={() => window.open(project.github as string, "_blank")}
                      >
                        <span>GitHub</span>
                        <motion.div className="ml-1" whileHover={{ x: 3 }}>
                          <ChevronRight className="size-3 md:size-4" />
                        </motion.div>
                      </AnimatedButton>
                    )}
                  </motion.div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        ))}

        {/* Add more projects indicator */}
        {filteredProjects.length > 0 && (
          <motion.div
            className="flex-shrink-0 w-80 md:w-96 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: filteredProjects.length * 0.1 }}
          >
            <Card className="h-full border-2 border-dashed border-purple-200 dark:border-purple-800 rounded-3xl bg-purple-50/50 dark:bg-purple-900/10 cursor-hover">
              <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  className="size-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <ExternalLink className="size-8 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                </motion.div>
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">More Projects</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Check out my GitHub for more amazing projects
                </p>
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/Sabari-Vasan-SM?tab=repositories", "_blank")}
                >
                  View GitHub
                </AnimatedButton>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
