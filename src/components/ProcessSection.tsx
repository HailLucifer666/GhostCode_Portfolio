"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const colorClasses: Record<string, { bg: string; shadow: string; text: string }> = {
    "neon-cyan": { bg: "bg-neon-cyan", shadow: "shadow-neon-cyan/30", text: "text-neon-cyan" },
    "neon-purple": { bg: "bg-neon-purple", shadow: "shadow-neon-purple/30", text: "text-neon-purple" },
    "neon-green": { bg: "bg-neon-green", shadow: "shadow-neon-green/30", text: "text-neon-green" },
    "neon-pink": { bg: "bg-neon-pink", shadow: "shadow-neon-pink/30", text: "text-neon-pink" },
};

const steps = [
    {
        num: "01",
        title: "Audit",
        description: "You tell us your biggest time suck. We identify the ghost system 👻 that replaces it.",
        icon: "🎯",
        color: "neon-cyan",
        example: '"I spend 20hrs/week on lead gen..."',
    },
    {
        num: "02",
        title: "Build",
        description: "We assemble your ghost system with AI + no-code in 48 hours. 🛠️",
        icon: "⚡",
        color: "neon-purple",
        example: "→ Full automation pipeline scaffolded in hours",
    },
    {
        num: "03",
        title: "Handoff",
        description: "You own it forever. Complete documentation, zero vendor lock-in. 🔑",
        icon: "🎓",
        color: "neon-green",
        example: "→ Custom system, your infrastructure, your control",
    },
    {
        num: "04",
        title: "Vanish",
        description: "We disappear. Your system runs itself. Like a ghost. 👻",
        icon: "✨",
        color: "neon-cyan",
        example: "→ Zero maintenance, zero monthly fees to us",
    },
];

export default function ProcessSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

    return (
        <section id="process" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Background accent */}
            <div className="gradient-orb w-[500px] h-[500px] bg-neon-purple top-[20%] right-[-200px]" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-xs font-mono tracking-[0.3em] text-neon-cyan uppercase">
                            The Method ⚙️
                        </span>
                        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
                            <span className="text-ghost-white/90">How I </span>
                            <span className="text-gradient">GhostCode</span>
                        </h2>
                        <p className="mt-4 text-lg text-ghost-white/40 max-w-xl mx-auto">
                            From chaos to invisible system in four steps. We build it, you own it, we vanish. 👻
                        </p>
                    </div>
                </ScrollReveal>

                {/* Pipeline Steps */}
                <div className="relative">
                    {/* Animated vertical line */}
                    <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-px bg-white/5 sm:-translate-x-px">
                        <motion.div
                            className="w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-green"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <ScrollReveal
                            key={step.num}
                            direction={index % 2 === 0 ? "left" : "right"}
                            delay={index * 0.1}
                        >
                            <div
                                className={`relative flex items-center mb-16 last:mb-0 ${index % 2 === 0
                                    ? "sm:flex-row"
                                    : "sm:flex-row-reverse"
                                    } flex-row`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[28px] sm:left-1/2 sm:-translate-x-1/2 z-10">
                                    <div className={`w-4 h-4 rounded-full ${colorClasses[step.color]?.bg} shadow-lg ${colorClasses[step.color]?.shadow}`}>
                                        <div className={`absolute inset-0 rounded-full ${colorClasses[step.color]?.bg} animate-ping opacity-20`} />
                                    </div>
                                </div>

                                {/* Content card */}
                                <div
                                    className={`ml-16 sm:ml-0 sm:w-[calc(50%-40px)] ${index % 2 === 0 ? "sm:pr-0" : "sm:pl-0"
                                        }`}
                                >
                                    <div className="glass rounded-2xl p-6 sm:p-8 group hover:neon-glow-cyan transition-shadow duration-500">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{step.icon}</span>
                                            <div>
                                                <span className={`text-xs font-mono ${colorClasses[step.color]?.text} tracking-widest`}>
                                                    STEP {step.num}
                                                </span>
                                                <h3 className="text-xl font-display font-bold text-ghost-white/90">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-ghost-white/50 leading-relaxed mb-4">
                                            {step.description}
                                        </p>
                                        <div className="px-4 py-3 rounded-lg bg-dark-800/50 font-mono text-xs text-white/40 border border-white/5">
                                            {step.example}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
