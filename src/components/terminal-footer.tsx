"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const TerminalFooter = () => {
    return (
        <footer className="w-full border-t border-foreground/10 bg-surface/80 backdrop-blur-md py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-muted-foreground">

                {/* Copyright */}
                <div>
                    © {new Date().getFullYear()} Saumith Devarasetty. All systems nominal.
                </div>

                {/* Static Links */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>devarasetty[dot]s[at]northeastern[dot]edu</span>
                    </div>

                    <a
                        href="https://github.com/saumith"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/saumith-devarasetty-8b58b71a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};
