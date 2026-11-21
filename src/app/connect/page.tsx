"use client";

import Image from "next/image";
import "../home.css";
import NeuralBackground from "@/components/NeuralBackground";
import { DescriptionList } from "./components/DescriptionList";
import { PositionCard } from "./components/PositionCard";
import { DropdownCard } from "./components/DropdownCard";
import { LinkCard } from "./components/LinkCard";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { NewsletterForm } from "./components/NewsletterForm";
import LinktreeIcon from "@/components/LinktreeIcon";
import DiscordIcon from "@/components/DiscordIcon";
import InstagramIcon from "@/components/InstagramIcon";

const heroPills = [
    { label: "Join a project team", style: "bg-primary text-black -rotate-2" },
    { label: "Learn from researchers", style: "bg-secondary text-black rotate-1" },
    { label: "Attend events", style: "bg-[var(--home-card)] border-2 border-text-primary rotate-2" },
    { label: "Stay in the loop", style: "bg-primary text-black -rotate-1" },
];

export default function Connect() {
    const positions: { title: string; applyLink: string }[] = [
        // {
        //     title: "General Member 📣",
        //     applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDnTaJPdHzBvyi8vkjx_zMsdvmEUr0pIlrQ3AO24IEVRvZVQ/viewform",
        // }
    ];

    const descriptions = [
        "Work on technical AI safety problems like privacy, explainability, and fairness.",
        "Join a year-long team of 5 to 10 students and ship a demo and technical report.",
        "Attend talks, workshops, and events with researchers and other UofT groups.",
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
            description: "Open positions are listed in the Positions section above. If none are open, follow us on Instagram or join our Discord and we'll let you know when applications go live.",
        },
        {
            title: "Who do I contact for questions?",
            description: "Email us at utoronto.tmi@gmail.com or ask in our Discord server.",
        },
    ];

    const card =
        "rounded-2xl border-2 border-text-primary bg-[var(--home-card)] shadow-[6px_6px_0_0_var(--color-primary)]";
    const h2 = "m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight";

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
                                We aren&apos;t currently hiring for any positions. Follow us on Instagram or join our
                                Discord to be the first to know when applications open.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Stay up to date */}
            <section id="newsletter" className="scroll-mt-16 bg-secondary/15">
                <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 py-16">
                    <h2 className={`${h2} text-center`}>Stay up to date</h2>
                    <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                        <NewsletterForm />
                        <div className="grid auto-rows-fr grid-cols-1 gap-4">
                            <LinkCard
                                link="https://discord.com/invite/y2XpFCc723"
                                className="flex items-center justify-center gap-3"
                            >
                                <DiscordIcon className="size-6" />
                                <h3 className="m-0 text-base font-bold">Discord</h3>
                            </LinkCard>
                            <LinkCard
                                link="https://www.instagram.com/uoft_tmi/"
                                className="flex items-center justify-center gap-3"
                            >
                                <InstagramIcon className="size-6" />
                                <h3 className="m-0 text-base font-bold">Instagram</h3>
                            </LinkCard>
                            <LinkCard
                                link="https://linktr.ee/uoft_tmi"
                                className="flex items-center justify-center gap-3"
                            >
                                <LinktreeIcon className="size-6" />
                                <h3 className="m-0 text-base font-bold">Linktree</h3>
                            </LinkCard>
                            <LinkCard
                                link="mailto:utoronto.tmi@gmail.com"
                                className="flex items-center justify-center gap-3"
                            >
                                <EnvelopeIcon className="size-6" />
                                <h3 className="m-0 text-base font-bold">Email</h3>
                            </LinkCard>
                        </div>
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
