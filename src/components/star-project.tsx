"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Target, Search, BarChart3, Database, FileText, CheckCircle,
    Layers, Settings, Activity, Server, Github, ExternalLink
} from "lucide-react";

export const StarProject = () => {
    return (
        <section className="py-20">
            <div className="flex flex-col xl:flex-row gap-12 items-center">
                {/* Project Info */}
                <div className="xl:w-1/3 space-y-6">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded inline-block text-xs font-mono mb-2 border border-primary/20">
                        FLAGSHIP ARCHITECTURE
                    </div>
                    <h2 className="text-4xl font-mono font-bold text-foreground">
                        Automated Due Diligence <span className="text-secondary">Agent Swarm</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Architected a containerized multi-agent system on GCP (GKE, Cloud Run) using LangGraph. Coordinated specialized agents to ingest 75+ SEC filings with Hybrid Search and Cross-Encoder Reranking.
                    </p>

                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>0.95 Faithfulness Score (CI/CD)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>40% Retrieval Precision Boost</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>100% Citation-Backed Reporting</span>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <a
                            href="https://github.com/saumith/Automated-Due-Diligence-Market-Intelligence-Agent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-surface/5 border border-foreground/10 rounded hover:bg-surface/10 transition-colors text-sm font-mono text-foreground/80"
                        >
                            <Github className="w-4 h-4" /> REPO
                        </a>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded hover:bg-primary/20 transition-colors text-sm font-mono text-primary">
                            <ExternalLink className="w-4 h-4" /> DEMO
                        </button>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div className="xl:w-2/3 w-full relative bg-surface/30 rounded-xl border border-foreground/10 p-2 md:p-6 overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                    {/* Layers Container */}
                    <div className="relative z-10 grid grid-rows-5 gap-4 font-mono text-xs">

                        {/* Layer 1: Data Pipeline */}
                        <div className="bg-surface/40 border border-foreground/5 p-4 rounded flex flex-col md:flex-row items-center gap-4 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                            <div className="w-32 font-bold text-blue-400 shrink-0">DATA PIPELINE</div>
                            <div className="flex-1 flex items-center justify-between w-full">
                                <div className="flex items-center gap-2 text-muted-foreground"><Database className="w-4 h-4" /> Ingestion</div>
                                <div className="h-[1px] bg-blue-500/20 flex-1 mx-2" />
                                <div className="flex items-center gap-2 text-muted-foreground"><Settings className="w-4 h-4" /> Chunking</div>
                                <div className="h-[1px] bg-blue-500/20 flex-1 mx-2" />
                                <div className="flex items-center gap-2 text-foreground"><Database className="w-4 h-4" /> Qdrant Vector DB</div>
                            </div>
                        </div>

                        {/* Layer 2: Model Pipeline (Agent Swarm) */}
                        <div className="bg-surface/40 border border-foreground/5 p-4 rounded flex flex-col md:flex-row items-center gap-4 relative overflow-hidden group hover:border-primary/30 transition-colors">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                            <div className="w-32 font-bold text-primary shrink-0">MODEL SWARM</div>
                            <div className="flex-1 grid grid-cols-5 gap-2 w-full text-center">
                                <div className="bg-primary/10 p-2 rounded border border-primary/20 text-primary-foreground/80">Orchestrator</div>
                                <div className="bg-primary/10 p-2 rounded border border-primary/20 text-primary-foreground/80">Planner</div>
                                <div className="bg-primary/10 p-2 rounded border border-primary/20 text-primary-foreground/80">Researcher</div>
                                <div className="bg-primary/10 p-2 rounded border border-primary/20 text-primary-foreground/80 text-[10px] md:text-xs">Synthesiser</div>
                                <div className="bg-primary/10 p-2 rounded border border-primary/20 text-primary-foreground/80">Evaluator</div>
                            </div>
                            {/* Horizontal Flow Animation using CSS class in globals or Framer */}
                            <div className="absolute top-1/2 left-32 right-4 h-[2px] pointer-events-none">
                                <motion.div
                                    className="w-2 h-2 bg-primary rounded-full absolute top-[-3px]"
                                    animate={{ left: ["0%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>

                        {/* Layer 3: Evaluation */}
                        <div className="bg-surface/40 border border-foreground/5 p-4 rounded flex flex-col md:flex-row items-center gap-4 relative overflow-hidden group hover:border-green-500/30 transition-colors">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500" />
                            <div className="w-32 font-bold text-green-500 shrink-0">MODEL EVAL</div>
                            <div className="flex-1 flex items-center justify-around w-full text-muted-foreground">
                                <span>Synthetic Tests</span>
                                <span>→</span>
                                <span>Bias Check</span>
                                <span>→</span>
                                <span className="text-green-400">Final Report</span>
                            </div>
                        </div>

                        {/* Layer 4: CI/CD Deployment */}
                        <div className="bg-surface/40 border border-foreground/5 p-4 rounded flex flex-col md:flex-row items-center gap-4 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />
                            <div className="w-32 font-bold text-purple-500 shrink-0">DEPLOYMENT</div>
                            <div className="flex-1 flex items-center justify-between w-full">
                                <div className="flex flex-col items-center">
                                    <Github className="w-4 h-4 mb-1" />
                                    <span>Actions</span>
                                </div>
                                <div className="w-full h-[1px] bg-purple-500/20 mx-2 relative">
                                    <motion.div
                                        className="w-1 h-3 bg-purple-500 absolute top-[-4px]"
                                        animate={{ left: ["0%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>
                                <div className="flex flex-col items-center">
                                    <Layers className="w-4 h-4 mb-1" />
                                    <span>Docker</span>
                                </div>
                                <div className="w-full h-[1px] bg-purple-500/20 mx-2" />
                                <div className="flex flex-col items-center text-foreground">
                                    <Server className="w-4 h-4 mb-1" />
                                    <span>GKE Cluster</span>
                                </div>
                            </div>
                        </div>

                        {/* Layer 5: Monitoring */}
                        <div className="bg-surface/40 border border-foreground/5 p-4 rounded flex flex-col md:flex-row items-center gap-4 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />
                            <div className="w-32 font-bold text-orange-500 shrink-0">MONITORING</div>
                            <div className="flex-1 flex items-center justify-between w-full">
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 bg-white/5 rounded">API Logs</span>
                                    <span className="px-2 py-1 bg-white/5 rounded">Latency</span>
                                    <span className="px-2 py-1 bg-white/5 rounded">Errors</span>
                                </div>
                                <div className="flex items-center gap-2 text-orange-400">
                                    <Activity className="w-4 h-4" /> System Health: 99.9%
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
