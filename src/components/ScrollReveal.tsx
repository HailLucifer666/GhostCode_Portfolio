"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    once?: boolean;
    parallax?: boolean;
    parallaxOffset?: number;
}

export default function ScrollReveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 1,
    once = true,
    parallax = false,
    parallaxOffset = 50,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const parallaxY = useTransform(
        scrollYProgress,
        [0, 1],
        [parallaxOffset, -parallaxOffset]
    );

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 60 : 0,
            x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    if (parallax) {
        return (
            <motion.div
                ref={ref}
                style={{ y: parallaxY }}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}
