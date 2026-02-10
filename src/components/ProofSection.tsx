"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}

const stats = [
    { value: 12, suffix: "+", label: "Ghost Systems Shipped", sublabel: "in 6 months" },
    { value: 48, suffix: "h", label: "Avg Build Time", sublabel: "concept to deploy" },
    { value: 5, suffix: "+", label: "Active Clients", sublabel: "and growing" },
    { value: 99, suffix: "%", label: "Automation Rate", sublabel: "of repetitive tasks" },
];

const tools = [
    { name: "Make.com", category: "Automation" },
    { name: "n8n", category: "Workflows" },
    { name: "OpenRouter", category: "AI APIs" },
    { name: "Vercel", category: "Deploy" },
    { name: "Cursor", category: "AI Code" },
    { name: "Next.js", category: "Framework" },
    { name: "Exa AI", category: "Search" },
    { name: "Airtable", category: "Data" },
    { name: "React", category: "Frontend" },
    { name: "Electron", category: "Desktop" },
    { name: "Stripe", category: "Payments" },
    { name: "Framer Motion", category: "Animation" },
];

const testimonials = [
    {
        quote: "GhostCode built our lead system in 2 days. It found 12 qualified prospects while I was sleeping. 😴",
        author: "Startup Founder",
        role: "E-commerce DTC",
    },
    {
        quote: "The dashboard pays for itself every week. Automated what used to take our team 4 hours daily. ⚡",
        author: "Operations Lead",
        role: "SaaS Company",
    },
];

export default function ProofSection() {
    return (
        <section id="proof" className="section-padding relative overflow-hidden">
            <div className="gradient-orb w-[600px] h-[600px] bg-neon-purple bottom-[-200px] left-[-200px]" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-mono tracking-[0.3em] text-neon-cyan uppercase">
                            Track Record ⭐
                        </span>
                        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
                            <span className="text-ghost-white/90">Proof of </span>
                            <span className="text-gradient">Ghosts 👻</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={stat.label} delay={index * 0.1}>
                            <div className="glass rounded-2xl p-6 sm:p-8 text-center group hover:neon-glow-cyan transition-all duration-500">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-sm font-semibold text-white/70 mb-1">
                                    {stat.label}
                                </p>
                                <p className="text-xs text-white/30">{stat.sublabel}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Testimonials */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -4 }}
                                className="glass rounded-2xl p-8 relative overflow-hidden"
                            >
                                <div className="absolute top-4 right-6 text-6xl text-white/5 font-serif">
                                    &ldquo;
                                </div>
                                <p className="text-white/60 leading-relaxed mb-6 relative z-10 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-sm font-bold">
                                        {t.author[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white/80">
                                            {t.author}
                                        </p>
                                        <p className="text-xs text-white/40">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Tools Grid */}
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-display font-bold text-ghost-white/80 mb-2">
                            Tools of the Trade 🛠️
                        </h3>
                        <p className="text-ghost-white/40 text-sm">
                            The ghost stack that powers invisible systems
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {tools.map((tool, index) => (
                        <ScrollReveal key={tool.name} delay={index * 0.05} direction="none">
                            <motion.div
                                whileHover={{ y: -4, scale: 1.05 }}
                                className="glass rounded-xl p-4 text-center group cursor-pointer hover:border-neon-cyan/30 transition-all duration-300"
                            >
                                <p className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                                    {tool.name}
                                </p>
                                <p className="text-xs text-white/30 mt-1">{tool.category}</p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
