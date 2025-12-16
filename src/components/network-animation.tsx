"use client";

import React from "react";
import { motion } from "framer-motion";

export const NetworkAnimation = () => {
    // Define nodes and connections for the network graph
    const nodes = [
        { x: 50, y: 50, r: 4 },
        { x: 200, y: 80, r: 6 },
        { x: 350, y: 50, r: 4 },
        { x: 100, y: 200, r: 5 },
        { x: 300, y: 220, r: 5 },
        { x: 50, y: 350, r: 4 },
        { x: 200, y: 320, r: 6 },
        { x: 350, y: 350, r: 4 },
    ];

    const connections = [
        [0, 1], [1, 2],
        [0, 3], [1, 3], [1, 4], [2, 4],
        [3, 5], [3, 6], [4, 6], [4, 7],
        [5, 6], [6, 7]
    ];

    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                {/* Connections */}
                {connections.map(([start, end], i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={nodes[start].x}
                        y1={nodes[start].y}
                        x2={nodes[end].x}
                        y2={nodes[end].y}
                        stroke="#00f0ff"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                    />
                ))}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={`node-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r={node.r}
                        fill="#00f0ff"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [1, 1.5, 1], opacity: 1 }}
                        transition={{
                            scale: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 },
                            opacity: { duration: 0.5, delay: i * 0.1 }
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};
