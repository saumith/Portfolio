"use client";

import React from "react";
import { NeonCard } from "./neon-card";
import { Activity, MessageSquare, ScanFace, Github, ExternalLink, Cpu, Database, Layers, ArrowRight } from "lucide-react";
import { ThoracicDiagram, EmoLingoDiagram, FacialRecDiagram } from "./project-architectures";

export const ProjectsGrid = () => {
    const projects = [
        {
            title: "Thoracic Disease Classification",
            subtitle: "Multi-Label Chest X-Ray Analysis",
            category: "MODULE A: COMPUTER VISION",
            description: "End-to-end deep learning pipeline detecting 14 thoracic diseases using NIH ChestX-ray14. Features a DenseNet121 backbone initialized with ImageNet/CheXNet weights, optimized with Focal Loss to handle severe class imbalance.",
            icon: Activity,
            stats: [
                { label: "ROC-AUC", value: "0.91" },
                { label: "Accuracy", value: "88%" },
                { label: "Classes", value: "14" }
            ],
            techStack: ["PyTorch", "DenseNet121", "Focal Loss", "Random Forest", "XGBoost"],
            features: [
                "CheXNet Pretrained Feature Extractor",
                "MLSMOTE & Centroid Augmentation",
                "Threshold Tuning per Label"
            ],
            glow: "primary" as const,
            link: "https://github.com/saumith/Multi-Label-Classification-of-Thoracic-Diseases-using-Chest-X-Rays",
            diagram: <ThoracicDiagram color="text-primary" />
        },
        {
            title: "EmoLingo Chatbot",
            subtitle: "Emotion-Aware NLP Agent",
            category: "MODULE B: NLP & EMOTION",
            description: "Context-aware conversational agent predicting user emotion, tone, and English proficiency. Uses an ensemble of fine-tuned transformers (T5, RoBERTa, ELECTRA) to generate empathetic and style-consistent responses.",
            icon: MessageSquare,
            stats: [
                { label: "Emotion Acc", value: "85%" },
                { label: "Models", value: "3+" },
                { label: "Latency", value: "<100ms" }
            ],
            techStack: ["Transformers (Hugging Face)", "Streamlit", "T5 / RoBERTa", "Docker"],
            features: [
                "Real-time Tone Classification",
                "English Proficiency Estimation",
                "Dynamic Response Pipeline"
            ],
            glow: "secondary" as const,
            link: "https://github.com/saumith/EmoLingo-ChatBot",
            diagram: <EmoLingoDiagram color="text-secondary" />
        },
        {
            title: "Facial Recognition Pipeline",
            subtitle: "High-Performance Biometrics",
            category: "MODULE C: LEGACY OPS",
            description: "Scalable facial recognition system for missing person detection. Optimized embedding retrieval architecture using deep learning models to achieve high accuracy and low latency matching against large databases.",
            icon: ScanFace,
            stats: [
                { label: "Accuracy", value: "92%" },
                { label: "Speedup", value: "40%" },
                { label: "Scale", value: "High" }
            ],
            techStack: ["Python", "OpenCV", "Deep Learning", "SQL", "Vector Search"],
            features: [
                "Optimized Feature Extraction",
                "High-Speed Embedding Match",
                "Automated Data Pipeline"
            ],
            glow: "primary" as const,
            link: "https://github.com/saumith",
            diagram: <FacialRecDiagram color="text-primary" />
        }
    ];

    return (
        <section className="py-24">
            <div className="flex items-end gap-4 mb-20">
                <div>
                    <h3 className="text-4xl md:text-5xl font-mono font-bold text-foreground flex items-center gap-4">
                        <span className="text-primary">//</span> ACADEMIC_MODULES
                    </h3>
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary/50 to-transparent mt-4 rounded-full" />
                </div>
            </div>

            <div className="flex flex-col gap-24">
                {projects.map((project, index) => (
                    <div key={index} className="group relative">
                        {/* Background Decoration */}
                        <div className={`absolute -inset-1 bg-gradient-to-r from-${project.glow === 'primary' ? 'primary' : 'secondary'}/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-xl`} />

                        <div className="relative bg-surface/30 backdrop-blur-xl border border-foreground/10 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-foreground/20 transition-all duration-500">

                            {/* Card Header & Description */}
                            <div className="grid lg:grid-cols-[1fr_300px] gap-12 mb-12">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-4 rounded-2xl bg-${project.glow === 'primary' ? 'primary' : 'secondary'}/10 border border-${project.glow === 'primary' ? 'primary' : 'secondary'}/20 text-${project.glow === 'primary' ? 'primary' : 'secondary'}`}>
                                            <project.icon className="w-8 h-8 md:w-10 md:h-10" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2 mb-1">
                                                <Layers className="w-3 h-3" />
                                                {project.category}
                                            </div>
                                            <h4 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h4>
                                            <p className="text-lg text-muted-foreground/80 font-mono mt-1">{project.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-foreground/10 pl-6 py-2">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Quick Stats Column */}
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-end">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-${project.glow === 'primary' ? 'primary' : 'secondary'}/10 hover:bg-${project.glow === 'primary' ? 'primary' : 'secondary'}/20 border border-${project.glow === 'primary' ? 'primary' : 'secondary'}/30 transition-colors text-${project.glow === 'primary' ? 'primary' : 'secondary'}`}>
                                            <Github className="w-5 h-5" />
                                            <span className="font-mono font-bold">VIEW REPO</span>
                                        </a>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 mt-auto">
                                        {project.stats.map((stat, i) => (
                                            <div key={i} className="flex items-center justify-between border-b border-foreground/5 pb-2">
                                                <span className="text-xs font-mono text-muted-foreground uppercase">{stat.label}</span>
                                                <span className="text-xl font-bold text-foreground">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Architecture Diagram (Full Width) */}
                            <div className="mb-12">
                                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Cpu className="w-4 h-4" /> System Architecture
                                </div>
                                {project.diagram}
                            </div>

                            {/* Tech Details Footer */}
                            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
                                <div>
                                    <h5 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Key Technologies</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded bg-surface/5 border border-foreground/10 text-xs font-mono text-muted-foreground hover:bg-surface/10 hover:text-foreground transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Implementation Features</h5>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-foreground/70">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-${project.glow === 'primary' ? 'primary' : 'secondary'}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
