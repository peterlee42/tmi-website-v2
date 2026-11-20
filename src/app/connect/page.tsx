"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../home.css";
import NeuralBackground from "@/components/NeuralBackground";
import { DescriptionList } from "./components/DescriptionList";
import { PositionCard } from "./components/PositionCard";
import { DropdownCard } from "./components/DropdownCard";
import { LinkCard } from "./components/LinkCard";
import { NewsletterGrid } from "./components/NewsletterGrid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const heroPills = [
    { label: "Join a project team", style: "bg-primary text-black -rotate-2" },
    { label: "Learn from researchers", style: "bg-secondary text-black rotate-1" },
    { label: "Attend events", style: "bg-[var(--home-card)] border-2 border-text-primary rotate-2" },
    { label: "Stay in the loop", style: "bg-primary text-black -rotate-1" },
];

export default function Connect() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const positions: { title: string; applyLink: string }[] = [
        // {
        //     title: "General Member 📣",
        //     applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDnTaJPdHzBvyi8vkjx_zMsdvmEUr0pIlrQ3AO24IEVRvZVQ/viewform",
        // }
    ];

    const descriptions = [
        "Work on technical AI safety problems like privacy, explainability, and fairness in decision systems.",
        "Join a year-long project team of 5 to 10 students and ship an interactive demo and technical report.",
        "Learn from researchers, including talks from the Vector Institute.",
        "Attend workshops, seminars, and joint events with other UofT groups.",
        "Build a public portfolio of real work on our project showcase website.",
    ];

    const faqs = [
        {
            title: "What is TMI?",
            description: "Trustworthy Machine Intelligence is a UofT student community focused on technical AI safety, reliability, and responsible machine learning. Our work centres on four themes: data responsibility and privacy, explainability, bias and fairness in decision systems, and ML for good.",
        },
        {
            title: "What do members actually do?",
            description: "Members work in year-long project teams of 5 to 10 students, tackling real AI safety problems and shipping interactive demos and technical reports. We also host workshops, talks from researchers (including the Vector Institute), and joint events with other UofT groups.",
        },
        {
            title: "Do I need machine learning experience?",
            description: "No. We welcome students from all backgrounds and programs. Some positions may ask for specific technical skills, so check the Positions section when applications are open.",
        },
        {
            title: "How do I join, and when do applications open?",
            description: "Open positions are listed in the Positions section above. If none are open, subscribe to our newsletter and we'll let you know when applications go live.",
        },
        {
            title: "Who do I contact for questions?",
            description: "Email us at utoronto.tmi@gmail.com or ask in our Discord server.",
        },
    ];

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: { name?: string; email?: string } = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!validateEmail(email)) newErrors.email = "Please enter a valid email address";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Subscription failed");
            }

            router.push(`/connect/confirmation?name=${encodeURIComponent(name)}`);
        } catch (error) {
            console.error("Signup error:", error);
            setIsSubmitting(false);
        }
    };

    const card =
        "rounded-2xl border-2 border-text-primary bg-[var(--home-card)] shadow-[6px_6px_0_0_var(--color-primary)]";
    const h2 = "m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight";
    const inputBase =
        "w-full rounded-lg border-2 bg-[var(--home-card)] px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-2";
    const inputOk = "border-text-primary focus:ring-secondary";
    const inputErr = "border-red-600 focus:ring-red-600";

    return (
        <main className="home bg-[var(--home-bg)] text-text-primary transition-colors duration-300">
            {/* Hero */}
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-24">
                <div className="home-fade-mask absolute inset-0">
                    <NeuralBackground />
                </div>

                <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
                        Join the community
                    </span>
                    <h1 className="m-0 text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.05] tracking-tight">
                        Connect with TMI
                    </h1>
                    <p className="m-0 max-w-xl text-lg leading-relaxed text-text-muted">
                        Build real-world, ethical AI projects with a collaborative community of students from diverse
                        backgrounds.
                    </p>
                    <ul className="m-0 mt-2 flex list-none flex-wrap justify-center gap-4 p-0">
                        {heroPills.map((pill) => (
                            <li key={pill.label} className={`rounded-full px-6 py-3 text-lg font-bold ${pill.style}`}>
                                {pill.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why join */}
            <section>
                <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
                    <Image
                        src="/tmi-team.png"
                        alt="TMI Team Picture"
                        width={560}
                        height={560}
                        className="mx-auto h-auto w-full max-w-md rounded-2xl border-2 border-text-primary object-contain shadow-[6px_6px_0_0_var(--color-secondary)]"
                    />
                    <div className="flex flex-col items-start gap-6">
                        <h2 className={h2}>Why join?</h2>
                        <DescriptionList descriptions={descriptions} />
                    </div>
                </div>
            </section>

            {/* Positions */}
            <section id="positions" className="scroll-mt-16">
                <div className="mx-auto flex max-w-[1100px] flex-col gap-12 px-6 py-24">
                    <h2 className={`${h2} text-center`}>Positions</h2>
                    {positions.length > 0 ? (
                        <div className="grid grid-flow-row gap-6">
                            {positions.map((position, index) => (
                                <PositionCard
                                    key={index}
                                    positionTitle={position.title}
                                    applyLink={position.applyLink}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={`${card} mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-14 text-center`}>
                            <h3 className="m-0 text-2xl font-bold">Check back later!</h3>
                            <p className="m-0 mt-3 max-w-md leading-relaxed text-text-muted">
                                We aren&apos;t currently hiring for any positions. Subscribe to our newsletter below to
                                be the first to know when applications open.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter signup */}
            <section id="newsletter" className="scroll-mt-16 bg-primary text-black">
                <div className="mx-auto max-w-[1100px] px-6 py-24">
                    <div className="mx-auto w-full max-w-md rounded-2xl border-2 border-black bg-[var(--home-card)] p-8 text-text-primary shadow-[6px_6px_0_0_#000]">
                        <div className="mb-8 text-center">
                            <span className="inline-block -rotate-2 rounded-full bg-secondary px-4 py-1 text-sm font-bold text-black">
                                Newsletter
                            </span>
                            <h2 className="m-0 mt-5 text-3xl font-extrabold leading-tight tracking-tight">
                                Subscribe for updates
                            </h2>
                            <p className="m-0 mt-3 leading-relaxed text-text-muted">
                                Get the latest updates on AI ethics, events, and project news delivered to your inbox.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                            <div>
                                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                                    }}
                                    placeholder="Your name"
                                    className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                                />
                                {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                                    }}
                                    placeholder="you@example.com"
                                    className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                                />
                                {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-primary px-7 font-semibold text-black transition-colors hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? "Signing up..." : "Sign up"}
                            </button>
                        </form>
                        <p className="m-0 mt-6 text-center text-xs text-text-muted">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter previews */}
            <NewsletterGrid />

            {/* Stay up to date */}
            <section className="bg-secondary/15">
                <div className="mx-auto flex max-w-[1100px] flex-col gap-12 px-6 py-24">
                    <h2 className={`${h2} text-center`}>Stay up to date</h2>
                    <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-3">
                        <LinkCard
                            link="https://docs.google.com/forms/d/e/1FAIpQLSdS1rDb7ixs7ub8Tnd914hGWpINzhEaGipffXfqs5dyxlCd3g/viewform"
                            className="flex items-center justify-center gap-4"
                        >
                            <EnvelopeIcon className="size-8" />
                            <h3 className="m-0 text-xl font-bold">Mailing List</h3>
                        </LinkCard>
                        <LinkCard
                            link="https://discord.com/invite/y2XpFCc723"
                            className="flex items-center justify-center gap-4"
                        >
                            <Image src="/discord-logo.svg" alt="Discord Logo" width={32} height={32} />
                            <h3 className="m-0 text-xl font-bold">Discord Server</h3>
                        </LinkCard>
                        <LinkCard
                            link="https://www.instagram.com/uoft_tmi/"
                            className="flex items-center justify-center gap-4"
                        >
                            <Image src="/instagram-logo.svg" alt="Instagram Logo" width={32} height={32} />
                            <h3 className="m-0 text-xl font-bold">Instagram</h3>
                        </LinkCard>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section>
                <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-24">
                    <h2 className={`${h2} text-center`}>FAQ</h2>
                    <div className="grid grid-cols-1 gap-5">
                        {faqs.map((faq, index) => (
                            <DropdownCard key={index} title={faq.title} description={faq.description} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
