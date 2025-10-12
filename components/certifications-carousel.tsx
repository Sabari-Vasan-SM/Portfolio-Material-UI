"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  description: string
  image: string
}

interface CertificationsCarouselProps {
  items: Certification[]
}

const Arrow = ({ dir = "left" }: { dir?: "left" | "right" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-300">
    <path d={dir === "left" ? "M15 18L9 12L15 6" : "M9 6L15 12L9 18"} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CertificationsCarousel: React.FC<CertificationsCarouselProps> = ({ items }) => {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Certification | null>(null)
  const count = items.length
  const listRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const startX = useRef(0)
  const currentX = useRef(0)
  const [cardWidth, setCardWidth] = useState(360)
  const autoplayRef = useRef<number | null>(null)

  useEffect(() => {
    const resize = () => {
      const el = innerRef.current?.querySelector<HTMLElement>(".cert-card")
      if (el) setCardWidth(el.offsetWidth + 24) // include gap
    }
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, count - 1))
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [count])

  // Autoplay: advance every 2s when enabled. Stop when autoplay set to false.
  useEffect(() => {
    if (!autoplay) return
    // clear any existing
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 2000)

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }
  }, [autoplay, count])

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  const onDragStart = (e: React.PointerEvent) => {
    // user started interacting: stop autoplay
    setAutoplay(false)
    startX.current = e.clientX
  }

  const onDragEnd = (e: React.PointerEvent) => {
    const dx = e.clientX - startX.current
    const threshold = Math.max(40, cardWidth * 0.15)
    if (dx > threshold) {
      prev()
    } else if (dx < -threshold) {
      next()
    }
  }

  return (
    <div className="w-full">
      <div className="relative">
        <button
          aria-label="Previous"
          onClick={() => { setAutoplay(false); prev() }}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-full p-2 shadow-lg hover:scale-105 transition-transform z-30 border border-gray-100 dark:border-gray-800"
        >
          <Arrow dir="left" />
        </button>

        <div className="overflow-hidden">
          <motion.div
            ref={listRef}
            drag="x"
            onPointerDown={onDragStart}
            onPointerUp={onDragEnd}
            dragConstraints={{ left: -9999, right: 9999 }}
            dragElastic={0.12}
            animate={{ x: -index * cardWidth }}
            transition={{ type: "spring", stiffness: 210, damping: 28 }}
            className="flex items-stretch gap-8 px-4 md:px-6 touch-pan-x"
            onMouseEnter={() => setAutoplay(false)}
          >
            <div ref={innerRef} className="flex gap-8 py-4 md:py-6">
              {items.map((item, i) => {
                const active = i === index
                return (
                  <motion.div
                    key={item.id}
                    className={`cert-card min-w-[300px] md:min-w-[360px] lg:min-w-[420px] ${active ? 'z-40' : 'z-10'}`}
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: active ? 1 : 0.55, scale: active ? 1 : 0.96, y: active ? -4 : 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    style={{ pointerEvents: 'auto' }}
                    onClick={() => {
                      setAutoplay(false)
                      setSelected(item)
                      setOpen(true)
                    }}
                  >
                    <div className={`rounded-2xl p-1 bg-gradient-to-br ${active ? 'from-purple-600 to-pink-500' : 'from-gray-100 to-gray-50'} shadow-md`}> 
                      <div className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl h-full flex flex-col gap-4 transform-gpu transition-all duration-200 ${active ? 'ring-2 ring-purple-200 dark:ring-pink-900' : ''}`}>
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 dark:bg-gray-800 shadow-sm">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg dark:text-white">{item.title}</h4>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.issuer} · {item.year}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 line-clamp-3">{item.description}</p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-xs text-gray-400">Certificate ID: {item.id}</div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setAutoplay(false)
                                setSelected(item)
                                setOpen(true)
                              }}
                              className="text-sm px-3 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <button
          aria-label="Next"
          onClick={() => { setAutoplay(false); next() }}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-full p-2 shadow-lg hover:scale-105 transition-transform z-30 border border-gray-100 dark:border-gray-800"
        >
          <Arrow dir="right" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAutoplay(false); setIndex(i) }}
            className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-purple-600 shadow-md' : 'bg-gray-300 dark:bg-gray-700'}`} 
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Detail dialog - polished layout */}
      <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) setSelected(null) }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">{selected?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {selected && (
              <div className="col-span-1 w-full rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-sm">
                <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
              </div>
            )}
            <div className="col-span-2">
              <DialogDescription>
                <p className="text-sm text-muted-foreground">{selected?.issuer} · {selected?.year}</p>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{selected?.description}</p>
                <div className="mt-6 flex gap-3">
                  <a href="#" onClick={(e)=>e.preventDefault()} className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow">View Certificate</a>
                  <DialogClose className="inline-flex items-center px-4 py-2 border rounded-md">Close</DialogClose>
                </div>
              </DialogDescription>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CertificationsCarousel
