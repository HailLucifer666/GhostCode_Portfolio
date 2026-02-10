"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
    return (
        <section id="contact" className="relative py-40 overflow-hidden">
            {/* Background effects — dramatic glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-neon-purple/[0.03] to-dark-950" />
            <div className="gradient-orb w-[1000px] h-[1000px] bg-neon-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <ScrollReveal delay={0.1}>
                    <p className="text-xs font-mono tracking-[0.3em] text-white/25 uppercase text-center mb-8">
                        Connect With Me
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                        {[
                            {
                                name: "Linktree",
                                href: "https://linktr.ee/acarghyachowdhury25",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M7.953 15.066l-.038-4.28-4.36-.002.006-3.478 4.36.002.037-4.282h3.456l-.037 4.282 4.36-.002-.007 3.478-4.36.002.038 4.28h-3.456zm1.727 6.93h.01V18.5h3.456v3.496h-3.466z" />
                                    </svg>
                                ),
                                gradient: "from-green-400 to-green-600",
                            },
                            {
                                name: "Instagram",
                                href: "https://www.instagram.com/lucifer_galactus",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                ),
                                gradient: "from-pink-500 via-purple-500 to-yellow-500",
                            },
                            {
                                name: "Threads",
                                href: "https://www.threads.com/@lucifer_galactus",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.414 2.35 5.56 3.996 3.51 5.845 1.205 8.598.024 12.179 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.74.725c-1.057-3.793-3.594-5.573-7.583-5.596-2.677.017-4.724.888-6.087 2.587-1.27 1.584-1.933 3.878-1.958 6.707.026 2.83.689 5.124 1.958 6.708 1.363 1.7 3.41 2.57 6.087 2.587 1.98-.016 3.517-.457 4.668-1.307 1.312-.97 1.975-2.394 1.975-4.261 0-1.27-.346-2.276-1.03-2.993-.637-.665-1.521-1.045-2.62-1.13.077.59.114 1.16.114 1.7 0 .658-.046 1.276-.135 1.85-.354 2.28-1.72 3.617-3.975 3.834a4.78 4.78 0 01-.526.028c-1.378 0-2.545-.493-3.372-1.424-.782-.88-1.192-2.087-1.192-3.494 0-1.4.408-2.604 1.183-3.486.827-.942 1.998-1.44 3.387-1.44.816 0 1.538.173 2.156.52.254-.922.622-1.706 1.1-2.34a6.15 6.15 0 00-3.272-.852c-2.3 0-4.097.767-5.17 2.2-.97 1.295-1.46 3.062-1.46 5.275 0 2.213.49 3.978 1.46 5.272 1.073 1.434 2.87 2.202 5.17 2.202h.003z" />
                                    </svg>
                                ),
                                gradient: "from-pink-500 via-purple-500 to-yellow-500",
                            },
                            {
                                name: "Gmail",
                                href: "mailto:acarghyachowdhury25@gmail.com",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                ),
                                gradient: "from-red-400 to-red-600",
                            },
                        ].map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 text-white/50 hover:text-white transition-all duration-500 shadow-xl hover:shadow-neon-purple/5"
                            >
                                <span className="transition-colors duration-300">{link.icon}</span>
                                <span className="text-sm font-medium tracking-wide">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass text-sm text-ghost-white/50 mb-10">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green" />
                        </span>
                        Open for new ghost systems 👻
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-8">
                        <span className="text-ghost-white/90">Stop doing </span>
                        <span className="text-gradient">robot work</span>
                        <br />
                        <span className="text-ghost-white/90">get a ghost 👻</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <p className="text-lg sm:text-xl text-ghost-white/35 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
                        Most founders spend 20 hours a week on repetitive work. 😫 GhostCode builds AI systems 🤖
                        that handle it automatically—in 48 hours ⏱️, for 1/10th the cost of hiring. 💰
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <motion.a
                            href="mailto:acarghyachowdhury25@gmail.com"
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan text-white font-display font-semibold text-lg overflow-hidden shadow-2xl shadow-neon-cyan/15 hover:shadow-neon-cyan/30 transition-shadow duration-500"
                        >
                            <span className="relative z-10">Get Your Ghost System 👻</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.a>
                    </div>
                </ScrollReveal>
            </div>

            {/* Footer */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/[0.04]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-indigo to-neon-cyan flex items-center justify-center font-mono font-bold text-xs">
                            GC
                        </div>
                        <span className="text-sm text-white/25 tracking-wide">
                            © 2025 GhostCode. Invisible systems. Visible results.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
