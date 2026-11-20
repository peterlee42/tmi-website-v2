"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
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
 * Animated "neural network" background: plain nodes drift and connect
 * with faint lines when they get close. Light ink on dark mode, dark ink
 * on light mode. Respects prefers-reduced-motion (draws one still frame).
 */
export default function NeuralBackground({
    nodeCount = 45,
    speed = 0.25,
    linkDistance = 140,
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
            nodes = Array.from({ length: nodeCount }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: Math.random() - 0.5,
                vy: Math.random() - 0.5,
            }));
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

            ctx.clearRect(0, 0, width, height);

            // Lines between nearby nodes, fading with distance
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.hypot(dx, dy);
                    if (d < linkDistance) {
                        const alpha = (dark ? 0.18 : 0.14) * (1 - d / linkDistance);
                        ctx.strokeStyle = `rgba(${ink},${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Nodes
            ctx.fillStyle = `rgba(${ink},${dark ? 0.45 : 0.35})`;
            for (const n of nodes) {
                ctx.beginPath();
                ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2);
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