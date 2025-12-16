"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Cloud, Wrench, Brain, Users } from "lucide-react";

export const TechnicalSkills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: Code2,
            skills: ["Python", "SQL", "Java", "MATLAB", "TypeScript"],
            color: "text-primary"
        },
        {
            title: "Libraries & Frameworks",
            icon: Cpu,
            skills: ["PyTorch", "TensorFlow", "LangGraph", "Pandas", "Transformers", "NumPy", "Scikit-learn"],
            color: "text-secondary"
        },
        {
            title: "Platforms",
            icon: Cloud,
            skills: ["GCP (GKE, Cloud Run)", "AWS", "Azure", "OpenAI APIs"],
            color: "text-blue-400"
        },
        {
            title: "Tools & Technologies",
            icon: Wrench,
            skills: ["Docker", "Kubernetes", "CI/CD", "RAG", "Git", "GitHub Actions"],
            color: "text-orange-400"
        },
        {
            title: "Domain Knowledge",
            icon: Brain,
            skills: ["Agentic AI", "MLOps", "LLMs", "Computer Vision", "System Optimization"],
            color: "text-green-400"
        },
        {
            title: "Core Competencies",
            icon: Users,
            skills: ["Problem-Solving", "Analytical Thinking", "Teamwork", "Leadership", "Collaboration"],
            color: "text-purple-400"
        }
    ];

    return (
        <section className="py-20">
            <h3 className="text-xl font-mono text-muted-foreground mb-8 pl-1 border-l-4 border-primary">
        // TECHNICAL_SKILLS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-surface/30 border border-white/5 p-6 rounded-lg backdrop-blur-sm hover:border-white/10 transition-colors"
                    >
                        <div className={`flex items-center gap-3 mb-4 ${category.color}`}>
                            <category.icon className="w-5 h-5" />
                            <h4 className="font-mono font-bold uppercase text-sm">{category.title}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs font-mono text-foreground/80 hover:bg-white/10 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
