import "./home.css";
import Image from "next/image";
import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";

const pillars = ["Data Responsibility & Privacy", "Explainability", "Bias and Fairness in Decision Systems", "ML for good"];

const stats = [
    { value: "4", label: "year-long projects" },
    { value: "5–10", label: "students per team" },
    { value: "90+", label: "newsletter subscribers" },
];

const pillStyles = [
    "bg-primary text-black -rotate-2",
    "bg-secondary text-black rotate-1",
    "bg-[var(--home-card)] border-2 border-text-primary rotate-2",
    "bg-primary text-black -rotate-1",
];

const accomplishments = [
    {
        title: "Year-long technical projects",
        body: "Teams of 5 to 10 students tackled real AI safety problems and shipped interactive demos and technical reports.",
    },
    {
        title: "Project showcase website",
        body: "A new site with embedded project pages and working demos, so anyone can explore our results.",
    },
    {
        title: "Newsletter, talks and events",
        body: "Monthly updates, researchers from the Vector Institute, and joint events with other UofT groups.",
    },
];

export default function Home() {
    return (
        <div className="home bg-[var(--home-bg)] text-text-primary transition-colors duration-300">
            {/* Hero */}
            <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-20">
                <div className="home-fade-mask absolute inset-0">
                    <NeuralBackground />
                </div>

                <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8 text-center">
                    <Image
                        src="/images/TMI.png"
                        alt="TMI logo"
                        width={1000}
                        height={1000}
                        priority
                        className="h-auto w-[clamp(160px,22vw,240px)]"
                    />
                    <h1 className="m-0 max-w-3xl text-[clamp(32px,6vw,64px)] font-bold leading-[1.05] tracking-tight">
                        Trustworthy Machine Intelligence
                    </h1>
                    <div className="mt-2 flex flex-wrap justify-center gap-3">
                        <Link
                            href="/about"
                            className="inline-flex min-h-12 items-center rounded-lg bg-primary px-7 font-semibold text-black transition-colors hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                            Join us
                        </Link>
                        <Link
                            href="/connect"
                            className="inline-flex min-h-12 items-center rounded-lg bg-secondary px-7 font-semibold text-black transition-colors hover:bg-hover-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            Connect
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary text-black">
                <dl className="mx-auto m-0 grid max-w-[1100px] grid-cols-1 gap-8 px-6 py-14 text-center sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1">
                            <dt className="order-2 text-lg font-medium">{stat.label}</dt>
                            <dd className="m-0 text-6xl font-extrabold tracking-tight">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* What is TMI */}
            <section>
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
                    <h2 className="m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight">
                        What is Trustworthy Machine Intelligence?
                    </h2>
                    <p className="m-0 max-w-xl text-lg leading-relaxed text-text-muted">
                        A student community focused on technical AI safety, reliability, and responsible machine
                        learning.
                    </p>
                    <ul className="m-0 mt-2 flex list-none flex-wrap justify-center gap-4 p-0">
                        {pillars.map((pillar, i) => (
                            <li
                                key={pillar}
                                className={`rounded-full px-6 py-3 text-lg font-bold ${pillStyles[i % pillStyles.length]}`}
                            >
                                {pillar}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Key accomplishments */}
            <section className="bg-secondary/15">
                <div className="mx-auto flex max-w-[1100px] flex-col gap-12 px-6 py-24">
                    <h2 className="m-0 text-center text-[clamp(30px,5vw,48px)] font-extrabold tracking-tight">
                        Key accomplishments
                    </h2>
                    <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-3">
                        {accomplishments.map((item, i) => (
                            <li
                                key={item.title}
                                className="flex flex-col gap-3 rounded-2xl border-2 border-text-primary bg-[var(--home-bg)] p-6 shadow-[6px_6px_0_0_var(--color-primary)] transition-transform hover:-translate-y-1"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-extrabold text-black">
                                    {i + 1}
                                </span>
                                <h3 className="m-0 text-xl font-bold leading-snug">{item.title}</h3>
                                <p className="m-0 leading-relaxed text-text-muted">{item.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}