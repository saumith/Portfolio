"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "span" | "div";
}

export const GlitchText = ({ text, className = "", as: Component = "span" }: GlitchTextProps) => {
    return (
        <Component className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:animate-glitch" aria-hidden="true">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-0 group-hover:opacity-70 group-hover:animate-glitch" style={{ animationDelay: "0.1s" }} aria-hidden="true">
                {text}
            </span>
        </Component>
    );
};
