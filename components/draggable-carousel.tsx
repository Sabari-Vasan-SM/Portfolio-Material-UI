"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"

interface DraggableCarouselProps {
  projects: any[]
  category?: string
}

export function DraggableCarousel({ projects, category }: DraggableCarouselProps) {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  const filteredProjects = category && category !== "all" ? projects.filter((p) => p.category === category) : projects

  const scrollLeft = () => {
    if (carousel.current) {
      carousel.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carousel.current) {
      carousel.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          onClick={scrollLeft}
          size="icon"
          variant="ghost"
          className="rounded-full bg-white/80 shadow-md hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <motion.div
        ref={carousel}
        className="flex overflow-x-scroll scrollbar-hide gap-6 py-4 px-2 cursor-grab active:cursor-grabbing"
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="flex gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] md:min-w-[360px]"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          onClick={scrollRight}
          size="icon"
          variant="ghost"
          className="rounded-full bg-white/80 shadow-md hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
