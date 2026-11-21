"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Project, ProjectMedia } from "./types";
import { Badge } from "@/components/ui/Badge";

const statusVariant = {
    Active: "active",
    Paused: "paused",
    Completed: "completed",
} as const;

interface ProjectDetailProps {
    project: Project;
    open: boolean;
    onClose: () => void;
}

/** Full-screen project detail dialog: media gallery on one side, info on the other. */
export function ProjectDetail({ project, open, onClose }: ProjectDetailProps) {
    if (!open) return null;
    return createPortal(<Dialog project={project} onClose={onClose} />, document.body);
}

function Dialog({ project, onClose }: { project: Project; onClose: () => void }) {
    const panelRef = useRef<HTMLDivElement>(null);
    const slides = project.media.filter((m) => m.type !== "overview");
    const hasMedia = slides.length > 0;

    const links = [
        { label: "GitHub", href: project.links.github },
        { label: "Paper", href: project.links.paper },
        { label: "Demo", href: project.links.demo },
        { label: "HuggingFace", href: project.links.huggingface },
        { label: "Proposal", href: project.links.proposal },
        { label: "Slides", href: project.links.slides },
    ].filter((l): l is { label: string; href: string } => Boolean(l.href));

    // Lock page scroll, close on Escape, and restore focus afterwards
    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        panelRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
            previouslyFocused?.focus();
        };
    }, [onClose]);

    return (
        <div
            className="home fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onClick={(e) => {
                // Portal events bubble through React ancestors; keep them contained
                e.stopPropagation();
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                ref={panelRef}
                tabIndex={-1}
                className={`relative flex max-h-full w-full flex-col overflow-y-auto rounded-3xl border-2 border-text-primary bg-[var(--home-card)] text-text-primary shadow-[10px_10px_0_0_var(--color-primary)] outline-none lg:overflow-hidden ${
                    hasMedia ? "max-w-6xl lg:flex-row" : "max-w-2xl"
                }`}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border-2 border-text-primary bg-[var(--home-card)] text-lg font-bold transition hover:bg-primary hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                    ✕
                </button>

                {hasMedia && (
                    <div className="shrink-0 border-b-2 border-text-primary bg-secondary/10 p-4 md:p-6 lg:w-[58%] lg:border-b-0 lg:border-r-2 lg:overflow-y-auto">
                        <Gallery project={project} slides={slides} />
                    </div>
                )}

                <div className="flex flex-1 flex-col gap-6 p-6 md:p-8 lg:overflow-y-auto">
                    <div className="flex flex-col items-start gap-3 pr-10">
                        <Badge variant={statusVariant[project.status]} className="font-bold">
                            {project.status}
                        </Badge>
                        <h2 className="m-0 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                            {project.title}
                        </h2>
                    </div>

                    <p className="m-0 text-base leading-relaxed text-text-muted md:text-lg">
                        {project.description}
                    </p>

                    {(project.leads.length > 0 || project.advisor) && (
                        <dl className="m-0 grid gap-4 rounded-2xl border-2 border-text-primary/15 bg-secondary/10 p-4 sm:grid-cols-2">
                            {project.leads.length > 0 && (
                                <div>
                                    <dt className="text-xs font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
                                        Research {project.leads.length > 1 ? "leads" : "lead"}
                                    </dt>
                                    <dd className="m-0 mt-1 text-sm font-semibold">
                                        {project.leads.join(", ")}
                                    </dd>
                                </div>
                            )}
                            {project.advisor && (
                                <div>
                                    <dt className="text-xs font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
                                        Advising professor
                                    </dt>
                                    <dd className="m-0 mt-1 text-sm font-semibold">{project.advisor}</dd>
                                </div>
                            )}
                        </dl>
                    )}

                    {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-text-primary/20 bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {links.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-3 pt-2">
                            {links.map((link, i) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`rounded-full border-2 border-text-primary px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                                        i === 0
                                            ? "bg-primary text-black"
                                            : "bg-[var(--home-card)] hover:bg-secondary/15"
                                    }`}
                                >
                                    {link.label} ↗
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Gallery({ project, slides }: { project: Project; slides: ProjectMedia[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: slides.length > 1 });
    const [selected, setSelected] = useState(0);

    const onSelect = useCallback(() => {
        if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const multiple = slides.length > 1;

    const arrow =
        "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-text-primary bg-[var(--home-card)] font-bold shadow-md transition hover:bg-primary hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

    return (
        <div
            className="flex flex-col gap-4"
            role="region"
            aria-roledescription="carousel"
            aria-label={`${project.title} media`}
            onKeyDown={(e) => {
                if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
                if (e.key === "ArrowRight") emblaApi?.scrollNext();
            }}
        >
            <div className="relative">
                <div
                    ref={emblaRef}
                    className="overflow-hidden rounded-2xl border-2 border-text-primary bg-background"
                >
                    <div className="flex">
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className="min-w-0 flex-[0_0_100%]"
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${i + 1} of ${slides.length}`}
                            >
                                <Slide slide={slide} title={project.title} />
                            </div>
                        ))}
                    </div>
                </div>

                {multiple && (
                    <>
                        <button
                            type="button"
                            onClick={() => emblaApi?.scrollPrev()}
                            className={`${arrow} left-3`}
                            aria-label="Previous slide"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            onClick={() => emblaApi?.scrollNext()}
                            className={`${arrow} right-3`}
                            aria-label="Next slide"
                        >
                            →
                        </button>
                    </>
                )}
            </div>

            {multiple && (
                <div className="flex items-center justify-center gap-3">
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => emblaApi?.scrollTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={i === selected}
                                className={`h-2.5 rounded-full border border-text-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                                    i === selected ? "w-8 bg-primary" : "w-2.5 bg-transparent hover:bg-secondary/40"
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-text-muted">
                        {selected + 1} / {slides.length}
                    </span>
                </div>
            )}
        </div>
    );
}

function Slide({ slide, title }: { slide: ProjectMedia; title: string }) {
    if (slide.type === "image") {
        return (
            <div className="relative aspect-[4/3] w-full">
                <Image
                    src={slide.src}
                    alt={slide.alt || title}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    unoptimized
                />
            </div>
        );
    }
    if (slide.type === "video") {
        return (
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-black">
                <video
                    src={slide.src}
                    controls
                    className="max-h-full max-w-full"
                    aria-label={`Video for ${title}`}
                />
            </div>
        );
    }
    if (slide.type === "code") {
        return (
            <div className="aspect-[4/3] w-full overflow-auto bg-gray-900 p-4 dark:bg-gray-950">
                <div className="mb-2 font-mono text-xs text-gray-400">{slide.language}</div>
                <pre className="m-0 overflow-x-auto font-mono text-xs text-gray-100">
                    <code>{slide.code}</code>
                </pre>
            </div>
        );
    }
    return null;
}
