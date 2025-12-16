"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NeonCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: "primary" | "secondary";
}

export const NeonCard = ({ children, className, glowColor = "primary" }: NeonCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className={cn(
                "relative group bg-surface/50 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden transition-all duration-300",
                "hover:border-opacity-50 hover:shadow-[0_0_20px_-5px_var(--shadow-color)]",
                className
            )}
            style={{
                "--shadow-color": glowColor === "primary" ? "#00f0ff" : "#bd00ff"
            } as React.CSSProperties}
        >
            {/* Corner Accents */}
            <div className={cn("absolute top-0 left-0 w-2 h-2 border-l border-t transition-colors duration-300", glowColor === "primary" ? "border-primary" : "border-secondary")} />
            <div className={cn("absolute top-0 right-0 w-2 h-2 border-r border-t transition-colors duration-300", glowColor === "primary" ? "border-primary" : "border-secondary")} />
            <div className={cn("absolute bottom-0 left-0 w-2 h-2 border-l border-b transition-colors duration-300", glowColor === "primary" ? "border-primary" : "border-secondary")} />
            <div className={cn("absolute bottom-0 right-0 w-2 h-2 border-r border-b transition-colors duration-300", glowColor === "primary" ? "border-primary" : "border-secondary")} />

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>

            {/* Hover Background Gradient */}
            <div
                className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-gradient-to-br",
                    glowColor === "primary" ? "from-primary/20 via-transparent to-transparent" : "from-secondary/20 via-transparent to-transparent"
                )}
            />
        </motion.div>
    );
};
