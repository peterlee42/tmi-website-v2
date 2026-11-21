"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const input =
    "w-full rounded-lg border-2 bg-[var(--home-card)] px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-2";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const next: { name?: string; email?: string } = {};
        if (!name.trim()) next.name = "Please enter your name";
        if (!EMAIL_REGEX.test(email)) next.email = "Please enter a valid email";
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setStatus("submitting");
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), email: email.trim() }),
            });
            if (!res.ok) throw new Error("Subscription failed");
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="flex h-full w-full flex-col justify-center rounded-2xl border-2 border-text-primary bg-[var(--home-card)] p-8 shadow-[6px_6px_0_0_var(--color-secondary)]">
            {status === "success" ? (
                <div className="flex flex-col items-center gap-3 py-4 text-center" role="status">
                    <CheckCircleIcon className="size-12 text-secondary" />
                    <h3 className="m-0 text-2xl font-bold">You&apos;re subscribed!</h3>
                    <p className="m-0 text-text-muted">Thanks, {name.trim()}. Watch your inbox for our next update.</p>
                </div>
            ) : (
                <>
                    <div className="text-center">
                        <h3 className="m-0 text-2xl font-bold">Get the newsletter</h3>
                        <p className="m-0 mt-2 text-text-muted">
                            Events, projects, and openings, straight to your inbox.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
                        <div>
                            <label htmlFor="newsletter-name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="newsletter-name"
                                type="text"
                                autoComplete="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                aria-invalid={!!errors.name}
                                className={`${input} ${errors.name ? "border-red-600 focus:ring-red-600" : "border-text-primary focus:ring-secondary"}`}
                            />
                            {errors.name && <p className="m-0 mt-1.5 text-sm text-red-600">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="newsletter-email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                aria-invalid={!!errors.email}
                                className={`${input} ${errors.email ? "border-red-600 focus:ring-red-600" : "border-text-primary focus:ring-secondary"}`}
                            />
                            {errors.email && <p className="m-0 mt-1.5 text-sm text-red-600">{errors.email}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-primary px-7 font-semibold text-black transition-colors hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {status === "submitting" ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                    {status === "error" && (
                        <p className="m-0 mt-3 text-center text-sm text-red-600" role="alert">
                            Something went wrong. Please try again.
                        </p>
                    )}
                    <p className="m-0 mt-4 text-center text-xs text-text-muted">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </>
            )}
        </div>
    );
}
