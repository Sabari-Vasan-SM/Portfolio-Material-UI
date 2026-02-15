"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Laptop, Cpu, Monitor, HardDrive, Terminal } from "lucide-react"

const expertiseData = [
    {
        category: "Frontend",
        badges: [
            { name: "HTML5", src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
            { name: "CSS3", src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
            { name: "JavaScript", src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
            { name: "TypeScript", src: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
            { name: "React", src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
            { name: "React Native", src: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
            { name: "Next.js", src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
            { name: "Flutter", src: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" },
        ]
    },
    {
        category: "Backend",
        badges: [
            { name: "Node.js", src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
            { name: "Express.js", src: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
            { name: "FastAPI", src: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" },
            { name: "REST API", src: "https://img.shields.io/badge/REST_API-023047?style=for-the-badge&logo=openapi&logoColor=white" },
            { name: "Webhooks", src: "https://img.shields.io/badge/Webhooks-FF4F8B?style=for-the-badge&logo=webhooks&logoColor=white" },
            { name: "WebSockets", src: "https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socketdotio&logoColor=white" },
            { name: "Python", src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
        ]
    },
    {
        category: "Database",
        badges: [
            { name: "MongoDB", src: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" },
            { name: "PostgreSQL", src: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
            { name: "Supabase", src: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
        ]
    },
    {
        category: "DevOps & Cloud",
        badges: [
            { name: "Git", src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
            { name: "GitHub", src: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
            { name: "Docker", src: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
            { name: "Nginx", src: "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" },
            { name: "Jenkins", src: "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" },
            { name: "GitHub Actions", src: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" },
        ]
    },
    {
        category: "Deployment",
        badges: [
            { name: "Vercel", src: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" },
            { name: "Netlify", src: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" },
            { name: "AWS", src: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" },
            { name: "Render", src: "https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" },
        ]
    },
    {
        category: "Design Tools",
        badges: [
            { name: "Miro", src: "https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=miro&logoColor=white" },
            { name: "Canva", src: "https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white" },
        ]
    },
    {
        category: "AI Tools",
        badges: [
            { name: "ChatGPT", src: "https://img.shields.io/badge/ChatGPT-10A37F?style=for-the-badge&logo=openai&logoColor=white" },
            { name: "Gemini", src: "https://img.shields.io/badge/Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" },
            { name: "Claude", src: "https://img.shields.io/badge/Claude-111111?style=for-the-badge&logo=anthropic&logoColor=white" },
            { name: "DeepSeek", src: "https://img.shields.io/badge/DeepSeek-000000?style=for-the-badge" },
            { name: "Perplexity", src: "https://img.shields.io/badge/Perplexity-1FB6FF?style=for-the-badge" },
        ]
    },
    {
        category: "Others",
        badges: [
            { name: "VS Code", src: "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" },
            { name: "Antigravity", src: "https://img.shields.io/badge/Antigravity-000000?style=for-the-badge" },
            { name: "Cursor", src: "https://img.shields.io/badge/Cursor-000000?style=for-the-badge" },
            { name: "Windsurf", src: "https://img.shields.io/badge/Windsurf-0055FF?style=for-the-badge" },
            { name: "Android Studio", src: "https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white" },
            { name: "FileZilla", src: "https://img.shields.io/badge/FileZilla-BF0000?style=for-the-badge&logo=filezilla&logoColor=white" },
            { name: "PuTTY", src: "https://img.shields.io/badge/PuTTY-FFCC00?style=for-the-badge&logo=putty&logoColor=black" },
            { name: "Stitch", src: "https://img.shields.io/badge/Stitch-000000?style=for-the-badge" },
            { name: "Swagger", src: "https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" },
            { name: "Postman", src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
            { name: "Arduino", src: "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white" },
        ]
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100
        }
    }
}

export function TechnicalExpertise() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills Column - Spans 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Card className="overflow-hidden border-purple-100 dark:border-purple-900 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
                        <CardContent className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                {expertiseData.map((section, index) => (
                                    <motion.div key={section.category} variants={itemVariants} className="space-y-4">
                                        <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-700 dark:text-purple-300">
                                            {section.category}
                                        </div>
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {section.badges.map((badge) => (
                                                <motion.div
                                                    key={badge.name}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="cursor-pointer"
                                                >
                                                    <img
                                                        src={badge.src}
                                                        alt={badge.name}
                                                        className="h-6 md:h-7 rounded opacity-90 hover:opacity-100 transition-opacity"
                                                        loading="lazy"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Workspace Spec Column */}
            <div className="lg:col-span-1">
                <AnimatedSection animation="slide-right" delay={0.2} className="sticky top-24">
                    <Card className="overflow-hidden border-purple-100 dark:border-purple-900 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-2xl">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                            <div className="flex items-center gap-2">
                                <Monitor className="size-5" />
                                <h3 className="font-bold text-lg">Workspace Spec</h3>
                            </div>
                        </div>
                        <CardContent className="p-6 space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                    <Laptop className="size-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Device</p>
                                    <p className="font-bold text-gray-900 dark:text-white mt-1">Acer Aspire Lite</p>
                                    <div className="mt-2 text-xs bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 inline-block">
                                        Daily Driver
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full" />

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Cpu className="size-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Processor</p>
                                    <p className="font-bold text-gray-900 dark:text-white mt-1">Intel Core i5</p>
                                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <img src="https://img.shields.io/badge/Intel-Iris%20Xe%20Graphics-0071C5?style=flat-square&logo=intel&logoColor=white" alt="Iris Xe" className="h-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full" />

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                    <HardDrive className="size-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">OS Environment</p>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="flex items-center gap-2">
                                            <img src="https://img.shields.io/badge/Windows%2011-0078D4?style=flat-square&logo=windows&logoColor=white" alt="Windows 11" className="h-6" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="https://img.shields.io/badge/Ubuntu%2025.10-E95420?style=flat-square&logo=ubuntu&logoColor=white" alt="Ubuntu" className="h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full" />

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-gray-600 dark:text-gray-400">
                                    <Terminal className="size-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Primary Tools</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="text-xs border border-gray-200 dark:border-gray-700 rounded-full px-2 py-1">VS Code</span>
                                        <span className="text-xs border border-gray-200 dark:border-gray-700 rounded-full px-2 py-1">Cursor</span>
                                        <span className="text-xs border border-gray-200 dark:border-gray-700 rounded-full px-2 py-1">Windsurf</span>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </AnimatedSection>
            </div>
        </div>
    )
}
