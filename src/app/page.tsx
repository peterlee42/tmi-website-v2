import "./home.css";
import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";

// Fill in the club's LinkedIn page URL; the LinkedIn tile only shows once this is set.
const LINKEDIN_URL = "";

interface SocialLink {
    name: string;
    handle: string;
    href: string;
    icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
    {
        name: "Instagram",
        handle: "@uoft_tmi",
        href: "https://www.instagram.com/uoft_tmi/",
        icon: (
            <svg className="h-11 w-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Discord",
        handle: "Join the server",
        href: "https://discord.com/invite/y2XpFCc723",
        icon: (
            <svg className="h-11 w-11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 2.9l-.6 1.2a18.3 18.3 0 0 0-5.5 0l-.6-1.2a19.7 19.7 0 0 0-4.9 1.5C.5 9-.3 13.6.1 18.1a19.9 19.9 0 0 0 6 3l1.3-2a13 13 0 0 1-1.9-.9l.4-.3a14.2 14.2 0 0 0 12.1 0l.4.3a12.3 12.3 0 0 1-1.9.9l1.2 2a19.8 19.8 0 0 0 6-3c.5-5.2-.8-9.7-3.5-13.7zM8 15.3c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.5 8 10.5s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        handle: "UofT TMI",
        href: LINKEDIN_URL,
        icon: (
            <svg className="h-11 w-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17" />
            </svg>
        ),
    },
];

const eyebrow = "m-0 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--home-eyebrow)]";

export default function Home() {
    return (
        <div className="home bg-[var(--home-bg)] text-text-primary transition-colors duration-300">
            {/* Hero */}
            <section className="relative flex min-h-[760px] items-center justify-center overflow-hidden px-6 pb-32 pt-24">
                <div className="home-fade-mask absolute inset-0">
                    <NeuralBackground />
                </div>
                <div aria-hidden="true" className="home-glow pointer-events-none absolute inset-0" />
                <div aria-hidden="true" className="home-veil pointer-events-none absolute inset-0" />

                <div className="relative z-10 flex max-w-4xl flex-col items-center gap-7 text-center">
                    <p className={eyebrow}>University of Toronto · Student AI Club</p>
                    <h1 className="m-0 text-[clamp(64px,12vw,148px)] font-black leading-[0.95] tracking-[-0.04em]">
                        UofT <span className="text-primary">TMI</span>
                    </h1>
                    <p className="m-0 max-w-xl text-[clamp(19px,2.4vw,26px)] leading-snug text-text-muted">
                        Building Trustworthy Machine Intelligence
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-3.5">
                        <a
                            href="#connect"
                            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-bold text-black shadow-[0_8px_30px_-8px_var(--color-primary)] transition hover:-translate-y-0.5 hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                            Join Us
                            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                        <a
                            href="#mission"
                            className="inline-flex min-h-12 items-center rounded-xl border-[1.5px] border-[var(--home-line)] bg-[var(--home-card)] px-6 text-base font-semibold transition hover:-translate-y-0.5 hover:border-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            Our mission
                        </a>
                    </div>
                </div>

                <a
                    href="#mission"
                    aria-label="Scroll to our mission"
                    className="home-bob absolute bottom-7 left-1/2 -ml-[22px] flex h-11 w-11 items-center justify-center text-text-muted"
                >
                    <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </a>
            </section>

            {/* Mission */}
            <section id="mission" className="scroll-mt-4 border-y border-[var(--home-line)] bg-[var(--home-card)]">
                <div className="mx-auto flex max-w-[1100px] flex-wrap items-start gap-x-[72px] gap-y-10 px-6 py-24">
                    <div className="flex flex-[1_1_260px] flex-col gap-3.5">
                        <p className={eyebrow}>Our mission</p>
                        <h2 className="m-0 text-[clamp(32px,4vw,44px)] font-extrabold leading-tight tracking-[-0.02em]">
                            AI people can rely on.
                        </h2>
                        <div className="h-1 w-16 rounded-sm bg-primary" />
                    </div>
                    <p className="m-0 flex-[2_1_420px] text-lg leading-[1.75] text-text-muted md:text-[19px]">
                        Our mission is to empower students to build and understand AI systems that are reliable,
                        interpretable, and aligned with human values. Through collaboration, education, and community
                        engagement, we work to ensure that machine intelligence benefits society responsibly.
                    </p>
                </div>
            </section>

            {/* Stay connected */}
            <section id="connect" className="scroll-mt-4">
                <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-11 px-6 py-28 text-center">
                    <div className="flex flex-col items-center gap-3.5">
                        <p className={eyebrow}>Get involved</p>
                        <h2 className="m-0 text-[clamp(32px,4vw,44px)] font-extrabold leading-tight tracking-[-0.02em]">
                            Stay connected
                        </h2>
                        <p className="m-0 max-w-[520px] text-lg leading-relaxed text-text-muted">
                            Follow along, join the conversation and hear about our next event first.
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                        {socialLinks
                            .filter((link) => link.href)
                            .map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit TMI on ${link.name}`}
                                    className="flex flex-col items-center gap-3.5 rounded-[20px] border border-[var(--home-line)] bg-[var(--home-card)] px-6 py-8 text-text-primary transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-[0_18px_40px_-20px_var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    {link.icon}
                                    <span className="text-[19px] font-bold">{link.name}</span>
                                    <span className="text-sm text-text-muted">{link.handle}</span>
                                </a>
                            ))}
                    </div>

                    <p className="m-0 text-base text-text-muted">
                        Prefer email?{" "}
                        <Link href="/newsletter" className="font-semibold text-[var(--home-eyebrow)] hover:text-primary">
                            Join our mailing list →
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
}