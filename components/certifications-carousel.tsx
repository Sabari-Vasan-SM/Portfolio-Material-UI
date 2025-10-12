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

        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900">
              {/* Full image banner */}
              <div className="w-full h-64 md:h-72 bg-gray-100 dark:bg-gray-800">
                <img
                  src={items[index]?.image}
                  alt={items[index]?.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => { setAutoplay(false); setSelected(items[index]); setOpen(true) }}
                />
              </div>

              {/* Meta */}
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{items[index]?.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{items[index]?.issuer} · {items[index]?.year}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{items[index]?.description}</p>
                {/* removed in-card View button — image is clickable to open dialog */}
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex items-center gap-3 overflow-x-auto px-2 py-1">
            {items.map((it, i) => (
              <button
                key={it.id}
                onClick={() => { setAutoplay(false); setIndex(i) }}
                className={`w-20 h-12 rounded-md overflow-hidden border transition-shadow ${i === index ? 'ring-2 ring-purple-300 shadow-md' : 'border-gray-200 dark:border-gray-700'}`}
                aria-label={`Go to ${it.title}`}
              >
                <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
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
              <div className="col-span-1 w-full rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-sm flex items-center justify-center">
                <img src={selected.image} alt={selected.title} className="w-full h-[70vh] object-contain" />
              </div>
            )}
            <div className="col-span-2">
              <DialogDescription>
                <p className="text-sm text-muted-foreground">{selected?.issuer} · {selected?.year}</p>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{selected?.description}</p>
                <div className="mt-6 flex gap-3">
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
