"use client";

import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import "./apply.css";

export function DropdownCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-2xl border-2 border-text-primary bg-[var(--home-card)] px-5 py-4 shadow-[4px_4px_0_0_var(--color-primary)] md:px-6 md:py-5">
            <button
                className="w-full flex items-start justify-between gap-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-base md:text-lg font-bold text-text-primary">
                    {title}
                </h3>
                {isOpen && <ChevronUpIcon className="size-6 text-primary" />}
                {!isOpen && <ChevronDownIcon className="size-6 text-primary" />}
            </button>
            {isOpen && (
                <p className="mt-3 text-sm md:text-base leading-relaxed text-text-muted">
                    {description}
                </p>
            )}
        </div>
    );
}
