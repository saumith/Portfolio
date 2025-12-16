"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

export const Publications = () => {
    return (
        <section className="py-20">
            <h3 className="text-xl font-mono text-muted-foreground mb-8 pl-1 border-l-4 border-secondary">
        // ACADEMIC_PUBLICATIONS
            </h3>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-surface/30 border border-white/5 p-6 rounded-lg backdrop-blur-sm hover:border-white/10 transition-colors flex items-start gap-4"
            >
                <div className="p-3 rounded bg-secondary/10 border border-secondary/20">
                    <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div>
                    <h4 className="text-lg font-bold font-mono text-foreground mb-2">
                        &quot;Finding Missing Persons&quot;
                    </h4>
                    <p className="text-muted-foreground font-mono text-sm mb-4">
                        AIP Conference Proceedings, Vol. 3156, Issue 1, 2024
                    </p>
                    {/* Placeholder link if exists, otherwise non-clickable visual */}
                    <div className="flex items-center gap-2 text-xs font-mono text-primary cursor-pointer hover:underline">
                        <span>VIEW_PUBLICATION</span>
                        <ExternalLink className="w-3 h-3" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
