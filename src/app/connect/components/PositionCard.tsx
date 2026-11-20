"use client";

import "./apply.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function PositionCard({
    positionTitle,
    applyLink,
}: {
    positionTitle?: string;
    applyLink?: string;
}) {
    return (
        <div className="flex flex-col justify-between gap-2 rounded-2xl border-2 border-text-primary bg-[var(--home-card)] p-6 shadow-[6px_6px_0_0_var(--color-primary)] transition-transform hover:-translate-y-1">
            <div className="flex md:flex-row md:items-center md:justify-between md:gap-4 flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <div>
                        <p className="flex items-center gap-1 text-status-open text-xs font-semibold bg-status-open/20 px-2.5 py-1 rounded-full">
                            Open
                            <CheckCircleIcon className="stroke-status-open size-4" />
                        </p>
                    </div>
                    <h3 className="md:text-xl text-base flex justify-items-start font-semibold tracking-tight text-text-primary">
                        {positionTitle}
                    </h3>
                </div>
                {applyLink && (
                    <a
                        href={applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full md:w-auto items-center justify-center bg-primary hover:bg-hover-orange text-black font-semibold rounded-lg min-h-12 px-7 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Apply
                    </a>
                )}
            </div>
        </div>
    );
}
