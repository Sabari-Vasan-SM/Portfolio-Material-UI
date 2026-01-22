"use client"

import { useEffect, useState } from "react"

import { MapPin } from "lucide-react"

type TechStackItem = {
    name: string
    logo: string
    color: string
    bg: string
    border: string
}

const techStack: TechStackItem[] = [
    {
        name: "Flutter",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRaazQd2nP4zhAOIcADgvWh1eNcReh_xeyw&s",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        name: "FastAPI",
        logo:
            "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAg1AAZAA0",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
    {
        name: "PostgreSQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
    },
]

const logoUrl = "https://harveedesigns.b-cdn.net/images/logo.webp"
const fallbackLogo = "https://via.placeholder.com/150?text=Logo"

type Intern3DCardProps = {
    onClose?: () => void
}

export function Intern3DCard({ onClose }: Intern3DCardProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-6 font-sans">
            <div
                className={`transition-all duration-700 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
            >
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                    {onClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-5 top-5 z-10 inline-flex items-center justify-center rounded-full bg-white/95 p-4 text-2xl font-semibold text-red-500 shadow-xl ring-1 ring-red-200 transition hover:text-red-700 hover:ring-red-300"
                            aria-label="Close"
                        >
                            ×
                        </button>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-50/60 via-white to-slate-50/60" aria-hidden="true" />

                    <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center px-8 py-10 lg:px-12 lg:py-12">
                        <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/3">
                            <div className="relative">
                                <div className="absolute -inset-5 rounded-2xl bg-violet-100/60 blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />
                                <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-2xl border border-slate-100 bg-white shadow-md flex items-center justify-center p-6">
                                    <img
                                        src={logoUrl}
                                        alt="Logo"
                                        className="w-full h-full object-contain"
                                        onError={(event) => {
                                            event.currentTarget.onerror = null
                                            event.currentTarget.src = fallbackLogo
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-slate-500 text-sm font-semibold uppercase tracking-[0.18em]">
                                <div className="p-2 rounded-xl bg-slate-100 text-violet-600">
                                    <MapPin size={16} />
                                </div>
                                Coimbatore, India
                            </div>

                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="space-y-3">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Current Role</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">Full Stack Developer</h2>
                                    <span className="inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700 border border-violet-100">
                                        SaaS Product Team
                                    </span>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed text-base lg:text-lg max-w-3xl">
                                Working on building and scaling SaaS applications by developing end-to-end features, from responsive user interfaces to robust backend services.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-400">
                                    <span className="h-px flex-1 bg-slate-200" />Tech Stack<span className="h-px flex-1 bg-slate-200" />
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.map((tech, index) => (
                                        <div
                                            key={tech.name}
                                            style={{ transitionDelay: `${index * 80}ms` }}
                                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border ${tech.bg} ${tech.border} ${tech.color} text-sm font-semibold transition-all hover:-translate-y-[2px] hover:shadow-md hover:shadow-current/10`}
                                        >
                                            <img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="w-6 h-6 object-contain transition-transform group-hover:scale-[1.02]"
                                            />
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intern3DCard
