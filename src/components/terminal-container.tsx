"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface TerminalContainerProps {
    children: React.ReactNode;
}

export const TerminalContainer = ({ children }: TerminalContainerProps) => {
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("main-theme") || "dark";
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("main-theme", newTheme);
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary transition-colors duration-300">
            {/* Grid Background */}
            <div className={`absolute inset-0 bg-grid-pattern bg-[size:40px_40px] pointer-events-none transition-opacity duration-300 ${theme === 'dark' ? 'opacity-[0.05]' : 'opacity-[0.02]'}`} />

            {/* Scanline Effect (Only in Dark Mode or very subtle in Light) */}
            <div className={`fixed inset-0 pointer-events-none z-50 mix-blend-overlay transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-20'}`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,4px_100%]" />
            </div>
            {theme === 'dark' && (
                <div className="fixed inset-0 pointer-events-none z-50 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[5px] w-full animate-scan" />
            )}

            {/* Main Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
                {/* Top Status Bar */}
                <div className="flex items-center justify-between mb-8 text-xs font-mono text-muted py-2 border-b border-primary/20">
                    <div className="flex items-center space-x-4">
                        <span className="text-primary animate-pulse">● ONLINE</span>
                        <span>SYSTEM: ARCHITECT_TERMINAL_V1</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="hover:text-primary transition-colors focus:outline-none"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                        <span>USER: GUEST</span>
                    </div>
                </div>

                {children}
            </motion.div>
        </div>
    );
};
