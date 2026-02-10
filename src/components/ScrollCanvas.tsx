"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 40;

function getFramePath(index: number): string {
    const padded = index.toString().padStart(2, "0");
    return `/frames/frame_${padded}_delay-0.2s.gif`;
}

export default function ScrollCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Preload all images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loaded = 0;

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loaded++;
                setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
                if (loaded === TOTAL_FRAMES) {
                    setImages(loadedImages);
                    setLoading(false);
                }
            };
            img.onerror = () => {
                loaded++;
                setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
                if (loaded === TOTAL_FRAMES) {
                    setImages(loadedImages);
                    setLoading(false);
                }
            };
            loadedImages[i] = img;
        }
    }, []);

    // Draw frame to canvas
    const drawFrame = useCallback(
        (index: number) => {
            const canvas = canvasRef.current;
            if (!canvas || images.length === 0) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const img = images[Math.round(index)];
            if (!img || !img.complete) return;

            // Set canvas size to match container
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

            // Clear
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Draw image maintaining aspect ratio (contain fit)
            const imgAspect = img.naturalWidth / img.naturalHeight;
            const canvasAspect = rect.width / rect.height;

            let drawWidth, drawHeight, drawX, drawY;

            if (imgAspect > canvasAspect) {
                drawWidth = rect.width;
                drawHeight = rect.width / imgAspect;
                drawX = 0;
                drawY = (rect.height - drawHeight) / 2;
            } else {
                drawHeight = rect.height;
                drawWidth = rect.height * imgAspect;
                drawX = (rect.width - drawWidth) / 2;
                drawY = 0;
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        },
        [images]
    );

    // Subscribe to scroll changes
    useEffect(() => {
        const unsubscribe = frameIndex.on("change", (latest) => {
            drawFrame(latest);
        });
        return unsubscribe;
    }, [frameIndex, drawFrame]);

    // Draw initial frame
    useEffect(() => {
        if (!loading && images.length > 0) {
            drawFrame(0);
        }
    }, [loading, images, drawFrame]);

    // Text overlay configuration
    const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -60]);

    const feature1Opacity = useTransform(scrollYProgress, [0.2, 0.28, 0.4, 0.48], [0, 1, 1, 0]);
    const feature1X = useTransform(scrollYProgress, [0.2, 0.28], [-40, 0]);

    const feature2Opacity = useTransform(scrollYProgress, [0.5, 0.58, 0.7, 0.78], [0, 1, 1, 0]);
    const feature2X = useTransform(scrollYProgress, [0.5, 0.58], [40, 0]);

    const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.9], [0, 1]);
    const ctaY = useTransform(scrollYProgress, [0.82, 0.9], [40, 0]);

    return (
        <div ref={containerRef} className="relative h-[500vh]">
            {/* Sticky canvas container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-dark-950">
                {/* Loading state */}
                {loading && (
                    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-dark-950">
                        <div className="relative w-20 h-20 mb-6">
                            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                            <div
                                className="absolute inset-0 rounded-full border-2 border-neon-cyan border-t-transparent animate-spin"
                            />
                            <div className="absolute inset-2 rounded-full border border-neon-indigo/30 border-b-transparent animate-spin"
                                style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
                            />
                        </div>
                        <p className="text-white/50 font-mono text-sm tracking-wider">
                            LOADING EXPERIENCE
                        </p>
                        <div className="mt-4 w-48 h-1 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-neon-indigo to-neon-cyan"
                                initial={{ width: 0 }}
                                animate={{ width: `${loadProgress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <p className="mt-2 text-white/30 font-mono text-xs">{loadProgress}%</p>
                    </div>
                )}

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ imageRendering: "auto" }}
                />

                {/* Text overlays */}
                {!loading && (
                    <>
                        {/* Hero headline at 0% scroll */}
                        <motion.div
                            style={{ opacity: heroOpacity, y: heroY }}
                            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                        >
                            <div className="text-center px-6">
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white/90">
                                    Ghost <span className="text-gradient">Engineering</span>
                                </h2>
                                <p className="mt-4 text-lg sm:text-xl text-white/50 font-light">
                                    Watch chaos transform into clarity
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 1 at 30% — Left aligned */}
                        <motion.div
                            style={{ opacity: feature1Opacity, x: feature1X }}
                            className="absolute inset-y-0 left-0 flex items-center z-10 pointer-events-none"
                        >
                            <div className="ml-8 sm:ml-16 max-w-md">
                                <div className="glass rounded-2xl p-6 sm:p-8 neon-glow-indigo">
                                    <span className="text-xs font-mono text-neon-indigo tracking-widest">
                                        01 — IDEATION
                                    </span>
                                    <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white/90">
                                        From Prompt to Prototype
                                    </h3>
                                    <p className="mt-3 text-white/50 leading-relaxed">
                                        AI amplifies creativity. A single prompt becomes a
                                        functional product in hours, not weeks.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 2 at 60% — Right aligned */}
                        <motion.div
                            style={{ opacity: feature2Opacity, x: feature2X }}
                            className="absolute inset-y-0 right-0 flex items-center z-10 pointer-events-none"
                        >
                            <div className="mr-8 sm:mr-16 max-w-md">
                                <div className="glass rounded-2xl p-6 sm:p-8 neon-glow-cyan">
                                    <span className="text-xs font-mono text-neon-cyan tracking-widest">
                                        02 — REFINEMENT
                                    </span>
                                    <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white/90">
                                        Iterate at Light Speed
                                    </h3>
                                    <p className="mt-3 text-white/50 leading-relaxed">
                                        Every component is visible, every detail matters.
                                        Ship with confidence, not compromise.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA at 90% — Centered */}
                        <motion.div
                            style={{ opacity: ctaOpacity, y: ctaY }}
                            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                        >
                            <div className="text-center px-6">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white/90">
                                    Ship Tonight,{" "}
                                    <span className="text-gradient">Sell Tomorrow</span>
                                </h2>
                                <p className="mt-4 text-lg text-white/50">
                                    Rapid prototyping meets production quality
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
}
