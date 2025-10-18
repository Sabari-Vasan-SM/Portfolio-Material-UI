"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { AnimatedButton } from "./animated-button"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    category: string
    link: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Card className="overflow-hidden border-0 rounded-3xl shadow-md hover:shadow-xl transition-all group">
        <div className="relative">
          <Image
            src={project.image || "/placeholder.svg"}
            width={600}
            height={400}
            alt={project.title}
            className="w-full aspect-[3/2] object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-white/80">{project.description}</p>
              <div className="mt-4">
                <AnimatedButton
                  size="sm"
                  variant="outline"
                  className="bg-white/20 text-white border-white/40 hover:bg-white/30"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project
                  <ExternalLink className="ml-2 size-4" />
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{project.description}</p>
            </div>
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
              {project.category}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
