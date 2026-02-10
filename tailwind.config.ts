import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    950: "#030303",
                    900: "#050505",
                    800: "#0a0a0a",
                    700: "#111111",
                    600: "#1a1a2e",
                    500: "#222240",
                },
                ghost: {
                    white: "#f0f0f5",
                    gray: "#1a1a2e",
                },
                neon: {
                    cyan: "#00f0ff",
                    purple: "#7c3aed",
                    pink: "#ff006e",
                    indigo: "#6366f1",
                    blue: "#3b82f6",
                    green: "#10b981",
                },
            },
            fontFamily: {
                display: ["Space Grotesk", "system-ui", "sans-serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "Fira Code", "monospace"],
            },
            animation: {
                "glow-pulse": "glow-pulse 3s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "fade-up": "fade-up 0.8s ease-out forwards",
                "slide-left": "slide-left 0.8s ease-out forwards",
                "slide-right": "slide-right 0.8s ease-out forwards",
                "grid-flow": "grid-flow 20s linear infinite",
                "typing": "typing 3s steps(30) forwards",
                "blink": "blink 1s step-end infinite",
                "counter": "counter 2s ease-out forwards",
                "orbit": "orbit 20s linear infinite",
                "glitch": "glitch 0.3s ease-in-out",
            },
            keyframes: {
                "glow-pulse": {
                    "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
                    "50%": { opacity: "1", transform: "scale(1.05)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(40px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-left": {
                    "0%": { opacity: "0", transform: "translateX(-60px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "slide-right": {
                    "0%": { opacity: "0", transform: "translateX(60px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "grid-flow": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-50%)" },
                },
                "typing": {
                    "from": { width: "0" },
                    "to": { width: "100%" },
                },
                "blink": {
                    "50%": { borderColor: "transparent" },
                },
                "orbit": {
                    "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
                    "100%": { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
                },
                "glitch": {
                    "0%": { transform: "translate(0)" },
                    "20%": { transform: "translate(-2px, 2px)" },
                    "40%": { transform: "translate(-2px, -2px)" },
                    "60%": { transform: "translate(2px, 2px)" },
                    "80%": { transform: "translate(2px, -2px)" },
                    "100%": { transform: "translate(0)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "grid-pattern": "linear-gradient(to right, rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.04) 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
};

export default config;
