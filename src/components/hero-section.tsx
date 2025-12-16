"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlitchText } from "./glitch-text";
import { NetworkAnimation } from "./network-animation";
import { Award, Mail, Phone, Github, Linkedin, GraduationCap, MapPin } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-start pt-20">
            <NetworkAnimation />

            {/* Header / Intro Card */}
            <div className="relative z-10 w-full mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-6">
                    <div>
                        <GlitchText
                            text="SAUMITH DEVARASETTY"
                            as="h1"
                            className="text-5xl md:text-7xl font-mono font-bold tracking-tighter text-foreground mb-4 block"
                        />
                        <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground">
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Boston, MA</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Boston, MA</span>
                            <span className="flex items-center gap-2 text-muted-foreground/80 cursor-not-allowed">
                                <Mail className="w-4 h-4" /> devarasetty[dot]s[at]northeastern[dot]edu
                            </span>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/saumith" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/saumith-devarasetty-8b58b71a7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section (as per Resume flow) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-surface/30 border border-white/5 rounded-lg backdrop-blur-sm"
                >
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3 text-primary">
                            <GraduationCap className="w-6 h-6" />
                            <h3 className="font-bold font-mono">Northeastern University</h3>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">Exp May 2026</span>
                    </div>
                    <p className="text-foreground font-mono text-sm mb-1">Master of Science in Artificial Intelligence</p>
                    <p className="text-xs text-muted-foreground">Related Courses: Foundations of Artificial Intelligence, Algorithms, Machine Learning, NLP</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 bg-surface/30 border border-white/5 rounded-lg backdrop-blur-sm"
                >
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3 text-secondary">
                            <GraduationCap className="w-6 h-6" />
                            <h3 className="font-bold font-mono">Vellore Institute of Technology</h3>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">June 2024</span>
                    </div>
                    <p className="text-foreground font-mono text-sm mb-1">Bachelor of Engineering in CSE</p>
                    <p className="text-xs text-muted-foreground">GPA: 8.2/10.0</p>
                </motion.div>
            </div>
        </section>
    );
};
