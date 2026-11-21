import "../../home.css";
import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";
import { ExecCard } from "../components/ExecCard";
import { pastExecs } from "./data";

const h2 = "m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight";

export const metadata = { title: "Past Executives | TMI" };

export default function PastExecs() {
  return (
    <main className="home min-h-dvh bg-[var(--home-bg)] text-text-primary transition-colors duration-300">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden px-6 py-24">
        <div className="home-fade-mask absolute inset-0">
          <NeuralBackground />
        </div>
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
            Thank you
          </span>
          <h1 className="m-0 text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.05] tracking-tight">
            Past Executives
          </h1>
          <p className="m-0 max-w-xl text-lg leading-relaxed text-text-muted">
            The students who led TMI in previous years.
          </p>
        </div>
      </section>

      {pastExecs.map((group, i) => (
        <section key={group.year} className={i % 2 === 1 ? "bg-secondary/15" : undefined}>
          <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 pb-24 pt-8">
            <h2 className={`${h2} text-center`}>{group.year}</h2>
            <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {group.execs.map((exec) => (
                <ExecCard key={exec.name} exec={exec} />
              ))}
            </ul>
          </div>
        </section>
      ))}

      <div className="px-6 pb-16 text-center">
        <Link href="/about" className="text-xs text-text-muted underline underline-offset-4 hover:text-text-primary">
          ← Back to About
        </Link>
      </div>
    </main>
  );
}
