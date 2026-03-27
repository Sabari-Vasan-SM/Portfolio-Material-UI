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

function formatLargeNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K"
    }
    return num.toLocaleString()
}

function StatCard({ label, value, suffix = "+", duration = 1.2, delay = 0 }: StatCardProps) {
    const { count, ref } = useCountUp(value, duration)
    const formattedCount = formatLargeNumber(count)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.6, delay }}
            className="w-full"
        >
            <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/30 dark:to-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-2xl h-full">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                    <div ref={ref} className="w-full flex flex-col items-center gap-4">
                        <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 px-6 py-4 w-fit">
                            <span className="text-3xl md:text-4xl font-bold text-white leading-none">
                                {formattedCount}
                                <span className="text-2xl md:text-3xl">{suffix}</span>
                            </span>
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-snug max-w-xs">
                            {label}
                        </h3>
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
        { label: "All-time Contributions", value: 910, suffix: "+", duration: 1.75 },
    ]

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-10 mb-12 max-w-6xl mx-auto">
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
        </div>
    )
}
