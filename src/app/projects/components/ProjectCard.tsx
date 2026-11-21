"use client";

import { useCallback, useState } from "react";
import { Project } from "./types";
import { Badge } from "@/components/ui/Badge";
import { ProjectDetail } from "./ProjectDetail";

const MAX_PREVIEW_TAGS = 3;

const statusVariant = {
    Active: "active",
    Paused: "paused",
    Completed: "completed",
} as const;

const shadows = [
    "shadow-[6px_6px_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-secondary)]",
    "shadow-[6px_6px_0_0_var(--color-secondary)] hover:shadow-[8px_8px_0_0_var(--color-primary)]",
];

interface ProjectCardProps {
    project: Project;
    index?: number;
}

/** Compact preview cell. Clicking it opens the full project details. */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const close = useCallback(() => setIsOpen(false), []);

    const visibleTags = project.tags.slice(0, MAX_PREVIEW_TAGS);
    const hiddenCount = project.tags.length - visibleTags.length;

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-haspopup="dialog"
                className={`group flex h-full w-full cursor-pointer flex-col gap-4 rounded-2xl border-2 border-text-primary bg-[var(--home-card)] p-6 text-left transition-all duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${shadows[index % shadows.length]}`}
            >
                <Badge variant={statusVariant[project.status]} className="self-start font-bold">
                    {project.status}
                </Badge>

                <h3 className="m-0 text-xl font-extrabold leading-snug tracking-tight">
                    {project.title}
                </h3>

                <p className="m-0 text-sm leading-relaxed text-text-muted">
                    {project.description}
                </p>

                <div className="mt-auto flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                        {visibleTags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-text-primary/20 bg-secondary/10 px-2.5 py-0.5 text-xs font-bold text-secondary"
                            >
                                {tag}
                            </span>
                        ))}
                        {hiddenCount > 0 && (
                            <span className="rounded-full px-2.5 py-0.5 text-xs font-bold text-text-muted">
                                +{hiddenCount}
                            </span>
                        )}
                    </div>
                    <span className="text-sm font-bold text-primary">
                        View project
                        <span className="inline-block transition-transform group-hover:translate-x-1"> →</span>
                    </span>
                </div>
            </button>

            <ProjectDetail project={project} open={isOpen} onClose={close} />
        </>
    );
}
