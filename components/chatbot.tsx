"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface Message {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

interface QuickAction {
    label: string
    query: string
}

const botResponses: Record<string, string> = {
    hello: "Hi, I am your portfolio assistant. How can I help you today?",
    hi: "Hi, I am your portfolio assistant. How can I help you today?",
    "what are your skills": "I'm proficient in:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Express, MongoDB\n• Full Stack: MEAN Stack Development\n• Cloud: AWS, Cloud Computing basics\n• DevOps: CI/CD, Docker basics\n\nI have 4+ months of professional experience. Would you like to know more about any specific skill?",
    skills: "I'm proficient in:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Express, MongoDB\n• Full Stack: MEAN Stack Development\n• Cloud: AWS, Cloud Computing basics\n• DevOps: CI/CD, Docker basics\n\nI have 4+ months of professional experience. Would you like to know more about any specific skill?",
    "your projects": "I've completed 20+ projects! Here are some highlights:\n• Portfolio websites with Next.js\n• E-commerce platforms\n• Data visualization dashboards\n• Real-time applications\n\nVisit the 'Projects' section to see all my work!",
    projects: "I've completed 20+ projects! Here are some highlights:\n• Portfolio websites with Next.js\n• E-commerce platforms\n• Data visualization dashboards\n• Real-time applications\n\nVisit the 'Projects' section to see all my work!",
    experience: "I have 4+ months of professional experience as a Web Developer. I've worked on:\n• Full-stack development\n• Frontend optimization\n• Database design\n• Cloud deployment\n\nCheck my 'Experience' section for detailed information!",
    technologies: "I work with 12+ technologies including:\n• React, Next.js, Vue.js\n• Node.js, Express\n• MongoDB, Firebase\n• TypeScript, Tailwind CSS\n• AWS, Docker\n\nWhat interests you most?",
    contact: "You can reach me through:\n📧 Email: sabarivasan.sm@example.com\n📱 Phone: +91 9677465071\n💼 LinkedIn: linkedin.com/in/sabarivasan-s-m-b10229255/\n🐙 GitHub: github.com/Sabari-Vasan-SM\n\nFeel free to send me a message using the contact form!",
    "how to contact": "You can reach me through:\n📧 Email: sabarivasan.sm@example.com\n📱 Phone: +91 9677465071\n💼 LinkedIn: linkedin.com/in/sabarivasan-s-m-b10229255/\n🐙 GitHub: github.com/Sabari-Vasan-SM\n\nFeel free to send me a message using the contact form!",
    email: "📧 Email: sabarivasan.sm@example.com\nYou can reach me anytime!",
    phone: "📱 Phone: +91 9677465071\nFeel free to call or text!",
    github: "🐙 GitHub: github.com/Sabari-Vasan-SM\nCheck out my repositories!",
    linkedin: "💼 LinkedIn: linkedin.com/in/sabarivasan-s-m-b10229255/\nLet's connect!",
    education: "I'm a student at Kongu Engineering College, pursuing education in Information Technology. I'm passionate about web development and cloud computing!",
    certifications: "I have certifications in various technologies and cloud platforms. Visit my 'Certifications' section to see them all!",
    help: "I can help you with:\n• 🎯 Skills & Technologies\n• 💻 Projects & Portfolio\n• 💼 Work Experience\n• 🎓 Education & Certifications\n• 📞 Contact Information\n• 🚀 Getting Started\n\nJust ask me anything!",
}

const quickActions: QuickAction[] = [
    { label: "View projects", query: "projects" },
    { label: "Show skills", query: "skills" },
    { label: "Contact info", query: "contact" },
]

function findBestMatch(userInput: string): string {
    const input = userInput.toLowerCase().trim()

    // Direct match
    if (botResponses[input]) {
        return botResponses[input]
    }

    // Partial match
    for (const [key, value] of Object.entries(botResponses)) {
        if (input.includes(key) || key.includes(input)) {
            return value
        }
    }

    // Default response
    return "I'm not sure I understood that. Try asking about my skills, projects, experience, or contact information. Type 'help' to see all options!"
}

function TypewriterText({
    text,
    animate,
    onDone,
}: {
    text: string
    animate: boolean
    onDone?: () => void
}) {
    const [visibleText, setVisibleText] = useState(animate ? "" : text)

    useEffect(() => {
        if (!animate) {
            setVisibleText(text)
            return
        }

        let i = 0
        const interval = setInterval(() => {
            i += 1
            setVisibleText(text.slice(0, i))
            if (i >= text.length) {
                clearInterval(interval)
                onDone?.()
            }
        }, 16)

        return () => clearInterval(interval)
    }, [animate, onDone, text])

    return <span className="whitespace-pre-wrap break-words">{visibleText}</span>
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi, I am your portfolio bot. How can I help you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [typingMessageId, setTypingMessageId] = useState<string | null>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendUserMessage = (text: string) => {
        if (!text.trim() || isLoading) return

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        // Simulate bot thinking delay
        setTimeout(() => {
            const botResponse = findBestMatch(text)
            const newMessageId = (Date.now() + 1).toString()
            const botMessage: Message = {
                id: newMessageId,
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, botMessage])
            setTypingMessageId(newMessageId)
            setIsLoading(false)
        }, 600)
    }

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        sendUserMessage(input)
    }

    return (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 sm:bottom-6 sm:right-6">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mb-3 sm:mb-4"
                    >
                        <Card className="w-full sm:w-[360px] md:w-[380px] h-[72vh] max-h-[560px] sm:h-[540px] flex flex-col shadow-xl border border-white/20 bg-white/40 dark:bg-slate-900/60 backdrop-blur-lg rounded-2xl overflow-hidden">
                            <div className="border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between bg-white dark:bg-slate-900">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-8 w-8 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center">
                                        <Bot className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                        Portfolio Care Bot
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-slate-100 dark:hover:bg-slate-800 p-1 rounded-full transition-colors text-slate-600 dark:text-slate-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-slate-50 dark:bg-slate-800">
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        {message.sender === "bot" ? (
                                            <div className="flex items-start gap-2 max-w-[94%]">
                                                <div className="h-8 w-8 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Bot className="h-4 w-4" />
                                                </div>
                                                <div className="bg-blue-100 dark:bg-blue-900/40 text-slate-900 dark:text-slate-100 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed">
                                                    <TypewriterText
                                                        text={message.text}
                                                        animate={typingMessageId === message.id}
                                                        onDone={() => {
                                                            if (typingMessageId === message.id) {
                                                                setTypingMessageId(null)
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="max-w-[88%] bg-violet-600 text-white px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed">
                                                <p className="whitespace-pre-wrap break-words">{message.text}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                {messages.length <= 2 && (
                                    <div className="pl-10 sm:pl-10 flex flex-col items-start gap-2">
                                        {quickActions.map((action) => (
                                            <button
                                                key={action.label}
                                                type="button"
                                                onClick={() => sendUserMessage(action.query)}
                                                disabled={isLoading}
                                                className="text-violet-700 dark:text-violet-300 border border-violet-500 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-colors disabled:opacity-60"
                                            >
                                                {action.label}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="flex items-start gap-2">
                                            <div className="h-8 w-8 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                                                <Bot className="h-4 w-4" />
                                            </div>
                                            <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2.5 rounded-2xl rounded-tl-sm">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                                                    <div
                                                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                                        style={{ animationDelay: "0.1s" }}
                                                    />
                                                    <div
                                                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                                        style={{ animationDelay: "0.2s" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <form
                                onSubmit={handleSendMessage}
                                className="border-t border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900 flex gap-2"
                            >
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about skills, projects, contact..."
                                    className="flex-1 h-10 border-slate-300 dark:border-slate-600"
                                    disabled={isLoading}
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={isLoading}
                                    className="h-10 w-10 bg-violet-600 hover:bg-violet-700"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="ml-auto w-14 h-14 rounded-full bg-violet-600 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Bot className="w-6 h-6" />
                )}
            </motion.button>
        </div>
    )
}
