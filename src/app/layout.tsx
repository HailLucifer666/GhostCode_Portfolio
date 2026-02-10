import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "GhostCode — Invisible Systems. Visible Results.",
    description:
        "GhostCode builds AI-powered automation systems, premium dashboards, and invisible software that runs itself. 12+ products shipped.",
    keywords: [
        "ghostcode",
        "AI developer",
        "rapid prototyping",
        "no-code",
        "portfolio",
        "Next.js",
        "automation",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="bg-dark-950 text-white antialiased noise-overlay">
                {children}
            </body>
        </html>
    );
}
