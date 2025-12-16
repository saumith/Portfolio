"use client";

import React from "react";
import { motion } from "framer-motion";

// Shared styles for high-fidelity schematic look
const nodeStyle = "fill-black/60 stroke-white/20 stroke-[1.5px] backdrop-blur-md";
const labelStyle = "text-[10px] font-mono fill-muted-foreground text-center pointer-events-none select-none uppercase tracking-wider";
const subLabelStyle = "text-[7px] font-mono fill-muted-foreground/60 text-center pointer-events-none select-none";
const pathStyle = "stroke-white/10 fill-none stroke-[1.5px]";
const activePathStyle = "stroke-primary/30 fill-none stroke-[1.5px] stroke-dasharray-4";

// 1. Thoracic Disease Classification - Detailed Pipeline
export const ThoracicDiagram = ({ color = "text-primary" }: { color?: string }) => (
    <div className="w-full h-64 relative overflow-hidden rounded-xl bg-black/40 border border-white/10 my-8">
        <svg className="w-full h-full" viewBox="0 0 800 200">
            <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeOpacity="0.03" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* STAGE 1: DEEP LEARNING EXTRACTION */}
            <text x="150" y="30" className={labelStyle} fill="white">Feature Extraction Phase</text>
            <rect x="50" y="50" width="200" height="120" className="fill-white/5 stroke-white/10 stroke-1 md-rx-4" rx="8" />

            {/* Input */}
            <rect x="70" y="85" width="40" height="50" className={nodeStyle} rx="2" />
            <text x="90" y="115" textAnchor="middle" className="text-[10px] fill-white font-bold">RAW</text>
            <text x="90" y="150" textAnchor="middle" className={subLabelStyle}>NIH-14</text>

            {/* Backbone */}
            <rect x="150" y="70" width="80" height="80" className={nodeStyle} rx="4" />
            <text x="190" y="110" textAnchor="middle" className="text-[9px] fill-primary font-bold">DenseNet121</text>
            <text x="190" y="125" textAnchor="middle" className={subLabelStyle}>CheXNet Weights</text>

            {/* STAGE 2: PROCESSING & AUGMENTATION */}
            <text x="400" y="30" className={labelStyle} fill="white">Data Processing</text>
            <rect x="300" y="50" width="200" height="120" className="fill-white/5 stroke-white/10 stroke-1" rx="8" />

            {/* Feature CSV */}
            <path d="M330 80 H370 V140 H330 Z" className={nodeStyle} />
            <text x="350" y="115" textAnchor="middle" className="text-[9px] fill-white">CSV</text>
            <text x="350" y="155" textAnchor="middle" className={subLabelStyle}>1024-D VEC</text>

            {/* SMOTE */}
            <rect x="410" y="80" width="70" height="60" className="fill-purple-500/10 stroke-purple-500/30" rx="4" />
            <text x="445" y="110" textAnchor="middle" className="text-[9px] fill-purple-400 font-bold">MLSMOTE</text>
            <text x="445" y="125" textAnchor="middle" className={subLabelStyle}>Balancing</text>


            {/* STAGE 3: CLASSIFICATION ENSEMBLE */}
            <text x="650" y="30" className={labelStyle} fill="white">Classification</text>
            <rect x="550" y="50" width="200" height="120" className="fill-white/5 stroke-white/10 stroke-1" rx="8" />

            {/* Models */}
            <rect x="580" y="70" width="60" height="30" className={nodeStyle} rx="2" />
            <text x="610" y="88" textAnchor="middle" className="text-[8px] fill-white">RandomForest</text>

            <rect x="580" y="120" width="60" height="30" className={nodeStyle} rx="2" />
            <text x="610" y="138" textAnchor="middle" className="text-[8px] fill-white">XGBoost</text>

            {/* Output */}
            <rect x="690" y="70" width="40" height="80" className="fill-green-500/10 stroke-green-500/30" rx="4" />
            <text x="710" y="110" textAnchor="middle" className="text-[9px] fill-green-400 font-bold">14</text>
            <text x="710" y="125" textAnchor="middle" className={subLabelStyle}>LABELS</text>


            {/* CONNECTIONS & FLOW */}
            {/* Input -> DenseNet */}
            <path d="M110 110 H150" className={pathStyle} />
            <motion.circle r="3" fill="#3b82f6">
                <animateMotion path="M110 110 H150" dur="1.5s" repeatCount="indefinite" />
            </motion.circle>

            {/* DenseNet -> CSV */}
            <path d="M230 110 H330" className={pathStyle} />
            <motion.circle r="3" fill="#3b82f6">
                <animateMotion path="M230 110 H330" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
            </motion.circle>

            {/* CSV -> SMOTE */}
            <path d="M370 110 H410" className={pathStyle} />
            <motion.rect width="4" height="4" fill="#a855f7">
                <animateMotion path="M370 110 H410" dur="1s" begin="0.5s" repeatCount="indefinite" />
            </motion.rect>

            {/* SMOTE -> Models (Split) */}
            <path d="M480 110 H530 V85 H580" className={pathStyle} />
            <path d="M530 85 V135 H580" className={pathStyle} />

            <motion.rect width="4" height="4" fill="#a855f7">
                <animateMotion path="M480 110 H530 V85 H580" dur="1.5s" begin="0s" repeatCount="indefinite" />
            </motion.rect>
            <motion.rect width="4" height="4" fill="#a855f7">
                <animateMotion path="M480 110 H530 V135 H580" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
            </motion.rect>

            {/* Models -> Output (Merge) */}
            <path d="M640 85 H665 V110 H690" className={pathStyle} />
            <path d="M640 135 H665 V110 H690" className={pathStyle} />

            <motion.circle r="3" fill="#22c55e">
                <animateMotion path="M640 85 H665 V110 H690" dur="1s" begin="0.8s" repeatCount="indefinite" />
            </motion.circle>
        </svg>
    </div>
);


// 2. EmoLingo Chatbot - Detailed NLP Diagram
export const EmoLingoDiagram = ({ color = "text-secondary" }: { color?: string }) => (
    <div className="w-full h-64 relative overflow-hidden rounded-xl bg-black/40 border border-white/10 my-8">
        <svg className="w-full h-full" viewBox="0 0 800 200">
            <defs>
                <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" fillOpacity="0.1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dots)" />

            {/* Input Block */}
            <circle cx="60" cy="100" r="30" className={nodeStyle} />
            <text x="60" y="105" textAnchor="middle" className="text-[10px] fill-white font-bold">USER</text>

            {/* ENSEMBLE CLUSTER */}
            <rect x="150" y="40" width="180" height="120" className="fill-white/5 stroke-white/20 stroke-[1px] stroke-dasharray-4" rx="8" />
            <text x="240" y="30" textAnchor="middle" className={labelStyle}>Transformer Ensemble</text>

            <rect x="170" y="55" width="60" height="30" className="fill-blue-500/10 stroke-blue-500/30" rx="2" />
            <text x="200" y="73" textAnchor="middle" className="text-[8px] fill-blue-300">T5 (Emotion)</text>

            <rect x="170" y="90" width="60" height="30" className="fill-purple-500/10 stroke-purple-500/30" rx="2" />
            <text x="200" y="108" textAnchor="middle" className="text-[8px] fill-purple-300">RoBERTa (Tone)</text>

            <rect x="250" y="73" width="60" height="30" className="fill-orange-500/10 stroke-orange-500/30" rx="2" />
            <text x="280" y="91" textAnchor="middle" className="text-[8px] fill-orange-300">ELECTRA</text>

            {/* ANALYSIS BLOCK */}
            <text x="450" y="30" textAnchor="middle" className={labelStyle}>Context Integration</text>
            <rect x="400" y="60" width="100" height="80" className={nodeStyle} rx="4" />
            <text x="450" y="90" textAnchor="middle" className="text-[9px] fill-white font-bold">CONTEXT STATE</text>
            <text x="450" y="110" textAnchor="middle" className="text-[8px] fill-green-400">Empathy: HIGH</text>
            <text x="450" y="125" textAnchor="middle" className="text-[8px] fill-yellow-400">Proficiency: MED</text>

            {/* RESPONSE GEN */}
            <text x="650" y="30" textAnchor="middle" className={labelStyle}>Generation</text>
            <rect x="580" y="70" width="120" height="60" className="fill-white/10 stroke-white/20" rx="4" />
            <text x="640" y="100" textAnchor="middle" className="text-[10px] fill-white font-bold">STREAMLIT UI</text>
            <text x="640" y="115" textAnchor="middle" className={subLabelStyle}>Dynamic Response</text>

            {/* CONNECTORS */}
            {/* User -> Cluster */}
            <path d="M90 100 H150" className={pathStyle} />
            <motion.circle r="3" fill="white">
                <animateMotion path="M90 100 H150" dur="1s" repeatCount="indefinite" />
            </motion.circle>

            {/* Cluster Internal */}
            <path d="M230 70 H250" className={pathStyle} />
            <path d="M230 105 H250" className={pathStyle} />

            {/* Cluster -> Context */}
            <path d="M330 100 H400" className={pathStyle} />
            <motion.rect width="4" height="4" fill="#a855f7">
                <animateMotion path="M330 100 H400" dur="1s" begin="0.5s" repeatCount="indefinite" />
            </motion.rect>

            {/* Context -> UI */}
            <path d="M500 100 H580" className={pathStyle} />
            <motion.circle r="4" fill="#22c55e">
                <animateMotion path="M500 100 H580" dur="1s" begin="1s" repeatCount="indefinite" />
            </motion.circle>
        </svg>
    </div>
);


// 3. Facial Recognition - Detailed Pipeline
export const FacialRecDiagram = ({ color = "text-primary" }: { color?: string }) => (
    <div className="w-full h-64 relative overflow-hidden rounded-xl bg-black/40 border border-white/10 my-8">
        <svg className="w-full h-full" viewBox="0 0 800 200">
            <defs>
                <pattern id="grid-lines" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.05" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-lines)" />

            {/* STAGE 1: INGESTION */}
            <text x="100" y="30" className={labelStyle}>Live Feed</text>
            <path d="M50 80 L90 80 L100 120 L40 120 Z" className={nodeStyle} />
            <text x="70" y="105" textAnchor="middle" className="text-[9px] fill-white">Camera</text>

            <rect x="130" y="80" width="60" height="40" className={nodeStyle} rx="2" />
            <text x="160" y="105" textAnchor="middle" className="text-[9px] fill-white">Frame</text>

            {/* STAGE 2: DETECTION & EMBEDDING */}
            <text x="350" y="30" className={labelStyle} textAnchor="middle">Deep Learning Pipeline</text>
            <rect x="250" y="60" width="200" height="80" className="fill-white/5 stroke-white/10 stroke-1" rx="8" />

            <rect x="270" y="80" width="60" height="40" className="fill-blue-500/10 stroke-primary/30" rx="2" />
            <text x="300" y="105" textAnchor="middle" className="text-[9px] fill-primary">MTCNN</text>

            <rect x="370" y="80" width="60" height="40" className="fill-purple-500/10 stroke-purple-500/30" rx="2" />
            <text x="400" y="105" textAnchor="middle" className="text-[9px] fill-purple-400">Inception</text>
            <text x="400" y="130" textAnchor="middle" className="text-[7px] fill-purple-300/80">FaceNet</text>

            {/* STAGE 3: VECTOR SEARCH */}
            <text x="600" y="30" className={labelStyle}>Matching</text>

            {/* Vector DB */}
            <path d="M550 70 C 550 65, 590 65, 590 70 V 130 C 590 135, 550 135, 550 130 V 70" className={nodeStyle} />
            <ellipse cx="570" cy="70" rx="20" ry="5" className="fill-none stroke-white/20" />
            <text x="570" y="105" textAnchor="middle" className="text-[9px] fill-white font-bold">SQL / VEC</text>

            {/* Result */}
            <rect x="660" y="80" width="80" height="40" className="fill-green-900/20 stroke-green-500/50" rx="4" />
            <text x="700" y="105" textAnchor="middle" className="text-[10px] fill-green-400 font-bold">MATCH FOUND</text>
            <text x="700" y="135" textAnchor="middle" className={subLabelStyle}>92% ACCURACY</text>

            {/* CONNECTIONS & ANIMATIONS */}
            <path d="M90 100 H130 M190 100 H270 M330 100 H370 M430 100 H550 M590 100 H660" className={pathStyle} />

            {/* Frame Data */}
            <motion.rect width="10" height="8" fill="white" opacity="0.5">
                <animateMotion path="M90 100 H130" dur="1s" repeatCount="indefinite" />
            </motion.rect>

            {/* Face Bounding Box */}
            <motion.rect width="8" height="8" fill="transparent" stroke="#3b82f6" strokeWidth="1">
                <animateMotion path="M190 100 H270" dur="1s" begin="0.3s" repeatCount="indefinite" />
            </motion.rect>

            {/* Embedding Vector */}
            <motion.rect width="6" height="2" fill="#a855f7">
                <animateMotion path="M430 100 H550" dur="0.8s" begin="0.6s" repeatCount="indefinite" />
            </motion.rect>
        </svg>
    </div>
);
