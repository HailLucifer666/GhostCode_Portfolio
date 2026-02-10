"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.8,
            delay: 0.6 + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.6,
        },
    },
};

// Deterministic particle data
function seededRandom(seed: number) {
    const x = Math.sin(seed * 9301 + 49297) * 49297;
    return x - Math.floor(x);
}

const PARTICLE_DATA = Array.from({ length: 30 }, (_, i) => ({
    left: seededRandom(i * 3 + 1) * 100,
    top: seededRandom(i * 3 + 2) * 100,
    size: 1 + seededRandom(i * 3 + 3) * 2,
    color:
        i % 3 === 0
            ? "rgba(0,240,255,0.4)"
            : i % 3 === 1
                ? "rgba(124,58,237,0.3)"
                : "rgba(240,240,245,0.15)",
    yOffset: -40 - seededRandom(i * 3 + 4) * 30,
    duration: 4 + seededRandom(i * 3 + 5) * 6,
    delay: seededRandom(i * 3 + 6) * 5,
}));

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

    const headline1 = "Invisible systems.";
    const headline2 = "Visible results.";

    return (
        <section
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background grid with parallax */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 bg-grid opacity-40"
            />

            {/* Gradient orbs — GhostCode colors */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="gradient-orb w-[700px] h-[700px] bg-neon-cyan top-[-250px] left-[-250px]"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="gradient-orb w-[500px] h-[500px] bg-neon-purple bottom-[-150px] right-[-200px]"
                />
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="gradient-orb w-[300px] h-[300px] bg-neon-pink top-[30%] left-[55%] opacity-[0.08]"
                />
            </motion.div>

            {/* Star field particles */}
            {PARTICLE_DATA.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: p.color,
                    }}
                    animate={{
                        y: [0, p.yOffset, 0],
                        opacity: [0.1, 0.6, 0.1],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Main content */}
            <motion.div
                style={{ y: textY, opacity, scale }}
                className="relative z-10 max-w-6xl mx-auto px-6 text-center"
            >
                {/* Ghost badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass text-sm text-ghost-white/60 mb-10"
                >
                    <span className="text-lg">👻</span>
                    <span className="font-medium tracking-wide">
                        @ghostcode — Open for projects
                    </span>
                </motion.div>

                {/* Headline line 1 — Space Grotesk */}
                <div className="overflow-hidden mb-2">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center flex-wrap"
                        style={{ perspective: 600 }}
                    >
                        {headline1.split("").map((char, i) => (
                            <motion.span
                                key={`h1-${i}`}
                                variants={letterVariants}
                                custom={i}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight text-ghost-white/90 inline-block"
                                style={{ transformOrigin: "center bottom" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Headline line 2 — gradient */}
                <div className="overflow-hidden mb-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center flex-wrap"
                        style={{ perspective: 600 }}
                    >
                        {headline2.split("").map((char, i) => (
                            <motion.span
                                key={`h2-${i}`}
                                variants={{
                                    hidden: { opacity: 0, y: 80, rotateX: 90 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        rotateX: 0,
                                        transition: {
                                            duration: 0.8,
                                            delay: 1.2 + i * 0.04,
                                            ease: [0.16, 1, 0.3, 1],
                                        },
                                    },
                                }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight text-gradient inline-block"
                                style={{ transformOrigin: "center bottom" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Sub */}
                <motion.p
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-xl md:text-2xl text-ghost-white/40 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
                >
                    AI automation systems shipped in 48 hours.
                    <br className="hidden sm:block" />
                    Software that runs itself. 🤖
                </motion.p>

                {/* Code block */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-lg mx-auto mb-14"
                >
                    <div className="glass rounded-2xl p-6 text-left font-mono text-sm neon-glow-cyan">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-neon-pink/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-neon-green/60" />
                            <span className="ml-auto text-xs text-ghost-white/20 tracking-wider">
                                ghost-engine.ts
                            </span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.8, duration: 0.6 }}
                        >
                            <span className="text-neon-purple">const</span>{" "}
                            <span className="text-neon-cyan">system</span>{" "}
                            <span className="text-ghost-white/40">=</span>{" "}
                            <span className="text-neon-purple">await</span>{" "}
                            <span className="text-neon-green">ghost</span>
                            <span className="text-ghost-white/60">(</span>
                            <span className="text-yellow-400">&quot;automate&quot;</span>
                            <span className="text-ghost-white/60">)</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3.1, duration: 0.6 }}
                        >
                            {"  "}
                            <span className="text-ghost-white/25">
                                {"// "}invisible systems, visible results 👻
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3.4, duration: 0.6 }}
                        >
                            {"  "}.<span className="text-neon-cyan">deploy</span>
                            <span className="text-ghost-white/60">()</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3.7, duration: 0.6 }}
                        >
                            {"  "}.<span className="text-neon-green">vanish</span>
                            <span className="text-ghost-white/60">()</span>{" "}
                            <span className="text-ghost-white/25">{"// 👻"}</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative px-10 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-display font-semibold text-base overflow-hidden transition-shadow duration-500 hover:shadow-2xl hover:shadow-neon-cyan/25"
                    >
                        <span className="relative z-10">See Ghost Systems 👻</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.a>
                    <motion.a
                        href="#process"
                        whileHover={{ scale: 1.05 }}
                        className="px-10 py-4 rounded-xl glass text-ghost-white/60 font-display font-medium text-base hover:text-ghost-white hover:border-white/20 transition-all duration-500"
                    >
                        How It Works →
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent"
                />
            </motion.div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none z-20" />
        </section>
    );
}
