"use client";

import "./apply.css";

export function LinkCard({
    link,
    children,
    className,
}: {
    link?: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl border-2 border-text-primary bg-[var(--home-card)] p-4 text-text-primary shadow-[4px_4px_0_0_var(--color-primary)] transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${className}`}
        >
            {children}
        </a>
    );
}
