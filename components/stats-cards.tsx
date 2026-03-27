"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
    label: string
    value: number
    suffix?: string
    duration?: number
    delay?: number
}

function useCountUp(target: number, duration: number = 1.2) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { margin: "-15% 0px -15% 0px" })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) {
            setCount(0)
            return
        }

        let frameId = 0
        const startTime = performance.now()

        const animate = (now: number) => {
            const elapsed = (now - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(target * progress))

            if (progress < 1) {
                frameId = requestAnimationFrame(animate)
            }
        }

        frameId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(frameId)
    }, [duration, isInView, target])

    return { count, ref }
}

function StatCard({ label, value, suffix = "+", duration = 1.2, delay = 0 }: StatCardProps) {
    const { count, ref } = useCountUp(value, duration)
    const formattedCount = count.toLocaleString()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.6, delay }}
            className="w-full"
        >
            <Card className="overflow-hidden border-purple-100 dark:border-purple-900 bg-white dark:bg-gray-800 shadow-sm rounded-2xl h-full">
                <CardContent className="p-6 md:p-7">
                    <div ref={ref} className="flex items-center gap-5 md:gap-6 min-h-[120px]">
                        <div className="shrink-0 rounded-2xl bg-purple-50 dark:bg-purple-900/20 px-5 py-4 md:px-6 md:py-5 border border-purple-100 dark:border-purple-800">
                            <span className="text-4xl md:text-5xl font-bold tracking-tight text-purple-700 dark:text-purple-300">
                                {formattedCount}
                                {suffix}
                            </span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                                {label}
                            </h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export function StatsCards() {
    const stats = [
        { label: "Months Experience", value: 4, suffix: "+", duration: 1.1 },
        { label: "Technologies Used", value: 12, suffix: "+", duration: 1.25 },
        { label: "Projects Completed", value: 20, suffix: "+", duration: 1.4 },
        { label: "Repos in GitHub", value: 75, suffix: "+", duration: 1.55 },
        { label: "Lines of Code Changed", value: 20571648, suffix: "+", duration: 1.9 },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 md:gap-6 mt-10 mb-12">
            {stats.map((stat, index) => (
                <StatCard
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    delay={index * 0.12}
                />
            ))}
        </div>
    )
}
