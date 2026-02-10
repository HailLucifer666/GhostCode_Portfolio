"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    alpha: number;
    life: number;
    maxLife: number;
}

export default function DataFlowBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 40;
        const colors = ["#00f0ff", "#7c3aed"]; // cyan, purple

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticle = (x?: number, y?: number): Particle => ({
            x: x ?? Math.random() * canvas.width,
            y: y ?? Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.1,
            life: 0,
            maxLife: Math.random() * 200 + 100,
        });

        const init = () => {
            resize();
            particles = Array.from({ length: particleCount }, () => createParticle());
        };

        const drawLine = (p1: Particle, p2: Particle) => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 150;

            if (distance < maxDist) {
                ctx.beginPath();
                const opacity = (1 - distance / maxDist) * 0.15;
                ctx.strokeStyle = p1.color;
                ctx.globalAlpha = opacity;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    drawLine(particles[i], particles[j]);
                }
            }

            // Draw and update particles
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life++;

                // Reset if off-screen or end of life
                if (
                    p.x < -50 || p.x > canvas.width + 50 ||
                    p.y < -50 || p.y > canvas.height + 50 ||
                    p.life > p.maxLife
                ) {
                    particles[index] = createParticle();
                }

                // Draw particle (data point)
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        init();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-transparent"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
