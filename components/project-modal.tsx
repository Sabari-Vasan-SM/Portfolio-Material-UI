"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProjectModalProps {
  project: {
    title: string
    description: string
    fullDescription: string
    image: string
    link: string
    github?: string
    technologies: string[]
    features: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-gray-900">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Button
                  onClick={onClose}
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 rounded-full bg-white/20 hover:bg-white/30 text-white"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold dark:text-white mb-2">{project.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold dark:text-white mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold dark:text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white rounded-full flex-1"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Project
                    </Button>
                    {project.github && (
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => window.open(project.github as string, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
