"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    accent: "orange" | "teal" | null;
    phase: number;
}

interface NeuralBackgroundProps {
    /** Number of floating nodes. */
    nodeCount?: number;
    /** Movement speed multiplier. */
    speed?: number;
    /** Max distance (px) at which two nodes get a connecting line. */
    linkDistance?: number;
    className?: string;
}

/**
 * Animated "neural network" background: nodes float around and connect
 * with fading lines when they get close. Light ink on dark mode, dark ink
 * on light mode. Respects prefers-reduced-motion (draws one still frame).
 */
export default function NeuralBackground({
    nodeCount = 60,
    speed = 0.4,
    linkDistance = 150,
    className = "",
}: NeuralBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isDark = () => document.documentElement.classList.contains("dark");

        let width = 0;
        let height = 0;
        let nodes: Node[] = [];
        let frameId = 0;

        const seed = () => {
            nodes = Array.from({ length: nodeCount }, (_, i) => {
                const accent = i % 9 === 0 ? "orange" : i % 9 === 4 ? "teal" : null;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: Math.random() - 0.5,
                    vy: Math.random() - 0.5,
                    r: accent ? 4.5 : 2 + Math.random() * 2.2,
                    accent,
                    phase: Math.random() * Math.PI * 2,
                };
            });
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            seed();
            draw();
        };

        const step = () => {
            for (const n of nodes) {
                n.x += n.vx * speed;
                n.y += n.vy * speed;
                n.phase += 0.02;
                // Wrap around the edges so the network never empties out
                if (n.x < -20) n.x = width + 20;
                if (n.x > width + 20) n.x = -20;
                if (n.y < -20) n.y = height + 20;
                if (n.y > height + 20) n.y = -20;
            }
        };

        const draw = () => {
            const dark = isDark();
            const ink = dark ? "255,255,255" : "20,18,16";
            const orange = dark ? "255,107,74" : "255,94,56";
            const teal = dark ? "27,197,217" : "10,171,190";

            ctx.clearRect(0, 0, width, height);

            // Lines between nearby nodes, fading with distance
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.hypot(dx, dy);
                    if (d < linkDistance) {
                        const alpha = (dark ? 0.26 : 0.2) * (1 - d / linkDistance);
                        ctx.strokeStyle = `rgba(${ink},${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Nodes; accent nodes pulse and get a soft halo
            for (const n of nodes) {
                const color = n.accent === "orange" ? orange : n.accent === "teal" ? teal : ink;
                const alpha = n.accent ? 0.6 + 0.4 * Math.sin(n.phase) : dark ? 0.55 : 0.4;
                if (n.accent) {
                    ctx.fillStyle = `rgba(${color},0.15)`;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, n.r * 2.6, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.fillStyle = `rgba(${color},${alpha.toFixed(3)})`;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const loop = () => {
            step();
            draw();
            frameId = requestAnimationFrame(loop);
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);

        // Redraw when the navbar toggles the theme (needed for reduced motion)
        const themeObserver = new MutationObserver(draw);
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        resize();
        if (!reducedMotion) frameId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(frameId);
            resizeObserver.disconnect();
            themeObserver.disconnect();
        };
    }, [nodeCount, speed, linkDistance]);

    return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />;
}