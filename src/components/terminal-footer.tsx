"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface CommandOutput {
    id: number;
    type: "input" | "output" | "error";
    text: React.ReactNode;
}

export const TerminalFooter = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<CommandOutput[]>([
        { id: 0, type: "output", text: "Type 'help' for available commands." }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newOutput = [...output, { id: Date.now(), type: "input", text: cmd } as CommandOutput];

        let response: React.ReactNode = "";
        let type: "output" | "error" = "output";

        switch (trimmedCmd) {
            case "help":
                response = (
                    <div className="flex flex-col gap-1">
                        <span>Available commands:</span>
                        <span className="text-primary">  contact   - Show contact information</span>
                        <span className="text-secondary">  social    - List social profiles</span>
                        <span className="text-muted-foreground">  clear     - Clear terminal</span>
                    </div>
                );
                break;
            case "contact":
                response = (
                    <div className="flex flex-col gap-1">
                        <div className="text-muted-foreground">devarasetty[dot]s[at]northeastern[dot]edu</div>
                    </div>
                );
                break;
            case "social":
                response = (
                    <div className="flex flex-col gap-1 pl-4">
                        <div className="flex gap-2">Output: [Links]</div>
                        <a href="https://github.com/saumith" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/saumith-devarasetty-8b58b71a7/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                    </div>
                );
                break;
            case "clear":
                setOutput([]);
                return;
            case "":
                response = "";
                break;
            default:
                response = `Command not found: ${trimmedCmd}. Type 'help' to list commands.`;
                type = "error";
        }

        if (response) {
            setOutput([...newOutput, { id: Date.now() + 1, type, text: response }]);
        } else {
            setOutput(newOutput);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCommand(input);
            setInput("");
        }
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [output]);

    return (
        <footer className="w-full border-t border-foreground/10 bg-surface/80 backdrop-blur-md pt-6 pb-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 font-mono text-sm max-h-[300px] overflow-y-auto" ref={scrollRef}>
                <div className="mb-4 text-muted-foreground text-xs">
                    Last login: {mounted ? new Date().toLocaleDateString() : "..."} on ttys001
                </div>

                <div className="space-y-2">
                    {output.map((line) => (
                        <div key={line.id} className={`${line.type === "error" ? "text-red-500" : line.type === "input" ? "text-muted-foreground" : "text-foreground"}`}>
                            {line.type === "input" ? (
                                <div className="flex items-center gap-2">
                                    <ChevronRight className="w-3 h-3 text-secondary" />
                                    <span className="text-xs text-secondary/70">guest@portfolio:~$</span>
                                    {line.text}
                                </div>
                            ) : (
                                <div className="pl-6">{line.text}</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 mt-2 group" onClick={() => inputRef.current?.focus()}>
                    <ChevronRight className="w-3 h-3 text-primary animate-pulse" />
                    <span className="text-xs text-primary/70">guest@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-foreground flex-grow focus:ring-0 placeholder:text-muted-foreground/30"
                        placeholder="contact --method email"
                        spellCheck={false}
                    />
                </div>
            </div>
        </footer>
    );
};
