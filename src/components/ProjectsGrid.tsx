"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

interface Project {
    title: string;
    vibe: string;
    description: string;
    stack: string[];
    image?: string;
    gradient: string;
    accentColor: string;
}

const accentColorMap: Record<string, string> = {
    "neon-cyan": "text-neon-cyan",
    "neon-purple": "text-neon-purple",
    "neon-green": "text-neon-green",
    "neon-pink": "text-neon-pink",
};

const projects: Project[] = [
    {
        title: "GhostScrape 👻🔍",
        vibe: "Data extraction on autopilot",
        description:
            "Aggregates job listings from multiple boards, scores them with AI based on user skills and preferences. Smart filtering, real-time updates, and priority scoring.",
        stack: ["Next.js", "n8n", "OpenRouter", "Airtable"],
        image: "/projects/dashboard-2.jpg",
        gradient: "from-neon-cyan to-neon-purple",
        accentColor: "neon-cyan",
    },
    {
        title: "GhostLead 👻🎯",
        vibe: "24/7 lead generation",
        description:
            "Scrapes Reddit, Twitter, LinkedIn for any niche. AI-scores leads, surfaces hot prospects with smart criteria and real-time discovery activity.",
        stack: ["Make.com", "Exa AI", "Pushshift API", "React"],
        image: "/projects/dashboard-3.jpg",
        gradient: "from-neon-purple to-neon-pink",
        accentColor: "neon-purple",
    },
    {
        title: "GhostWork 👻⚡",
        vibe: "Know your machine at a glance",
        description:
            "Real-time system monitor with CPU, GPU, RAM metrics. Aesthetic HUD overlay with smooth animations and live performance graphs.",
        stack: ["Electron", "React", "systeminformation", "Framer Motion"],
        image: "/projects/pc-dashboard.png",
        gradient: "from-neon-cyan to-neon-green",
        accentColor: "neon-cyan",
    },
    {
        title: "GhostPage 👻🌐",
        vibe: "Ship tonight, sell tomorrow",
        description:
            "AI-generated landing pages from simple prompts with one-click deploy. Full customization, payment integration, and instant publishing.",
        stack: ["Next.js", "Vercel AI SDK", "shadcn/ui", "Stripe"],
        image: "/projects/rapid-landing.png",
        gradient: "from-neon-green to-neon-cyan",
        accentColor: "neon-green",
    },
];

function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    return (
        <ScrollReveal delay={index * 0.15} direction="up">
            <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden glass border-gradient cursor-pointer h-full"
            >
                {/* Top accent line */}
                <div
                    className={`h-[2px] w-full bg-gradient-to-r ${project.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="p-6 sm:p-8 flex flex-col h-full">
                    {/* Project image */}
                    {project.image && (
                        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-dark-800">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent" />
                            {/* Hover scan line effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent top-1/3" />
                            </div>
                        </div>
                    )}

                    {/* No image — gradient placeholder */}
                    {!project.image && (
                        <div
                            className={`relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-br ${project.gradient} opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 flex items-center justify-center`}
                        >
                            <div className="text-5xl opacity-40">⚡</div>
                        </div>
                    )}

                    {/* Vibe tagline */}
                    <p
                        className={`text-xs font-mono tracking-widest ${accentColorMap[project.accentColor] || "text-neon-indigo"} mb-3 uppercase`}
                    >
                        {project.vibe}
                    </p>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-ghost-white/90 mb-3 group-hover:text-ghost-white transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-ghost-white/40 leading-relaxed mb-6 flex-grow group-hover:text-ghost-white/55 transition-colors duration-500">
                        {project.description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/[0.03] text-white/40 border border-white/[0.06] group-hover:border-white/15 group-hover:text-white/60 transition-all duration-500"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-ghost-white/30 group-hover:text-ghost-white/70 transition-all duration-500">
                        <span>View System</span>
                        <motion.span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                            →
                        </motion.span>
                    </div>
                </div>

                {/* Hover glow overlay */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${project.gradient}`}
                />
            </motion.div>
        </ScrollReveal>
    );
}

export default function ProjectsGrid() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section id="projects" ref={sectionRef} className="relative py-32 sm:py-40">
            {/* Subtle background glow on scroll */}
            <motion.div
                style={{ opacity: bgOpacity }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="gradient-orb w-[600px] h-[600px] bg-neon-purple/50 top-[10%] left-[-200px]" />
                <div className="gradient-orb w-[400px] h-[400px] bg-neon-cyan/30 bottom-[10%] right-[-100px]" />
            </motion.div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section header */}
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-xs font-mono tracking-[0.3em] text-neon-cyan/80 uppercase">
                            Ghost Systems 👻
                        </span>
                        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                            <span className="text-ghost-white/90">What I&apos;ve </span>
                            <span className="text-gradient">Built</span>
                        </h2>
                        <p className="mt-5 text-lg text-ghost-white/35 max-w-2xl mx-auto leading-relaxed">
                            Invisible systems that run your business. Each shipped in 48 hours
                            with AI tools and relentless iteration.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
