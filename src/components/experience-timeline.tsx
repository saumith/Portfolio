"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, BrainCircuit, Network, ChevronRight } from "lucide-react";

export const ExperienceTimeline = () => {
    const experiences = [
        {
            role: "AI/ML Intern",
            company: "Tata Consultancy Services (TCS)",
            period: "Jul 2025 - Aug 2025",
            location: "Remote / Hybrid",
            icon: Network, // Represents the "Network/System" nature of the work
            details: [
                "Reduced manual query resolution time by ~40% via Agentic AI RAG chatbot.",
                "Architected a containerized multi-agent system on GCP (GKE, Cloud Run) using LangGraph.",
                "Engineered Hybrid Search with Cross-Encoder Reranking to process 75+ SEC filings with high precision."
            ],
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-500/50",
            gradient: "from-blue-500/20 to-transparent"
        },
        {
            role: "AI Developer, Team Leader",
            company: "Smart Bridge AI",
            period: "May 2023 - Jul 2023",
            location: "Hyderabad, India",
            icon: BrainCircuit, // Represents the "Deep Learning" nature
            details: [
                "Achieved 92% facial ID accuracy in missing-person detection tasks using Deep Learning.",
                "Reduced feature-matching time by 40% via high-performance facial embeddings retrieval.",
                "Led the development of the end-to-end pipeline using Python, SQL, and optimized feature extraction."
            ],
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "group-hover:border-purple-500/50",
            gradient: "from-purple-500/20 to-transparent"
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="mb-12">
                <h3 className="text-3xl md:text-5xl font-bold font-mono text-foreground mb-4">
                    PROFESSIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ARCHIVES</span>
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <div className="flex flex-col gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        {/* Holographic Card */}
                        <div className={`relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:bg-white/5 ${exp.border}`}>

                            {/* Ambient Gradient Background */}
                            <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Large Decorative Icon Background */}
                            <exp.icon className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 group-hover:text-white/10 transition-colors duration-500 rotate-12" />

                            <div className="relative p-8 md:p-10 z-10 grid md:grid-cols-[300px_1fr] gap-8">

                                {/* Left Column: Role Info */}
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground w-fit">
                                        <Calendar className="w-3 h-3" />
                                        {exp.period}
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-bold text-foreground leading-tight mb-2 group-hover:text-white transition-colors">{exp.role}</h4>
                                        <div className={`flex items-center gap-2 font-mono ${exp.color}`}>
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-lg">{exp.company}</span>
                                        </div>
                                    </div>

                                    {/* Tech Badge Decoration */}
                                    <div className={`mt-auto pt-4 flex gap-2`}>
                                        <div className="h-1 w-12 bg-current rounded-full opacity-50" />
                                        <div className="h-1 w-2 bg-current rounded-full opacity-30" />
                                        <div className="h-1 w-2 bg-current rounded-full opacity-10" />
                                    </div>
                                </div>

                                {/* Right Column: Details */}
                                <div className="space-y-4 relative">
                                    <div className="absolute left-[-20px] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

                                    <ul className="space-y-4">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
                                                <ChevronRight className={`w-5 h-5 ${exp.color} shrink-0 mt-0.5`} />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
