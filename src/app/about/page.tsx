import "../home.css";
import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";
import { ExecCard } from "./components/ExecCard";
import { currentExecs, currentExecsYear } from "./currentExecs";

const values = [
  {
    title: "Transparent and reliable",
    description: "We build AI systems you can inspect and trust, going beyond black-box models.",
  },
  {
    title: "Learn by building",
    description: "Year-long technical projects on real AI safety problems, with demos and reports to show for it.",
  },
  {
    title: "Open to everyone",
    description: "Students from all programs and backgrounds are welcome, no prior ML experience required.",
  },
];

const pills = [
  { label: "Student-led", style: "bg-primary text-black -rotate-2" },
  { label: "Technical AI safety", style: "bg-secondary text-black rotate-1" },
  { label: "All backgrounds welcome", style: "bg-[var(--home-card)] border-2 border-text-primary rotate-2" },
];

const timeline = [
  { year: "2021", title: "Founded", description: "Started to promote trustworthy AI research." },
  { year: "2022", title: "First projects", description: "Our first student-led research and reading groups." },
  { year: "2023", title: "Campus recognition", description: "Became an official student organization and hosted public talks." },
  { year: "2024", title: "Expansion", description: "Grew to multiple teams on ethics, safety, and ML robustness." },
  {
    year: "2025–26",
    title: "Projects and a new website",
    description: "Four year-long project teams shipped demos and reports. We launched this website.",
  },
  { year: "2026–27", title: "Next cohort", description: "New project teams are underway." },
];

const h2 = "m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight";
const card =
  "rounded-2xl border-2 border-text-primary bg-[var(--home-card)] shadow-[6px_6px_0_0_var(--color-primary)]";

export default function AboutPage() {
  return (
    <main className="home bg-[var(--home-bg)] text-text-primary transition-colors duration-300">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24">
        <div className="home-fade-mask absolute inset-0">
          <NeuralBackground />
        </div>
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">Who we are</span>
          <h1 className="m-0 text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.05] tracking-tight">
            About TMI
          </h1>
          <p className="m-0 max-w-xl text-lg leading-relaxed text-text-muted">
            Advancing <span className="font-bold text-secondary">safe</span> and{" "}
            <span className="font-bold text-primary">trustworthy</span> AI, one student project at a time.
          </p>
          <ul className="m-0 mt-2 flex list-none flex-wrap justify-center gap-4 p-0">
            {pills.map((pill) => (
              <li key={pill.label} className={`rounded-full px-6 py-3 text-lg font-bold ${pill.style}`}>
                {pill.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="m-0 text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">Our mission</h2>
          <p className="m-0 mt-6 text-[clamp(22px,3.5vw,34px)] font-bold leading-snug tracking-tight">
            To build a UofT student community that makes AI safer and more reliable, through year-long technical
            projects, talks, and workshops open to students from every background.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/15">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className={`${card} flex flex-col gap-3 p-6`}>
                <h3 className="m-0 text-xl font-bold">{value.title}</h3>
                <p className="m-0 leading-relaxed text-text-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
                {currentExecsYear}
              </span>
              <h2 className={h2}>Meet the team</h2>
            </div>
            <Link
              href="/about/past-execs"
              className="pb-1 text-xs text-text-muted underline underline-offset-4 hover:text-text-primary"
            >
              Past executives
            </Link>
          </div>
          <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {currentExecs.map((exec) => (
              <ExecCard key={exec.name} exec={exec} />
            ))}
          </ul>
        </div>
      </section>

      {/* History */}
      <section className="bg-secondary/15">
        <div className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-16 md:py-24">
          <h2 className={`${h2} text-center`}>Our history</h2>
          <ol className="m-0 ml-3 list-none space-y-8 border-l-2 border-text-primary/20 p-0">
            {timeline.map((item, i) => (
              <li key={item.year} className="relative pl-8">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-text-primary ${
                    i % 2 === 0 ? "bg-primary" : "bg-secondary"
                  }`}
                />
                <span className="text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
                  {item.year}
                </span>
                <h3 className="m-0 mt-1 text-lg font-bold">{item.title}</h3>
                <p className="m-0 mt-1 leading-relaxed text-text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
  );
}
