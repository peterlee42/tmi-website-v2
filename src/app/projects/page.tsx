import { ProjectCard } from "./components/ProjectCard";
import { sampleProjects } from "./components/sampleData";
import Link from "next/link";
import "../home.css";
import NeuralBackground from "@/components/NeuralBackground";

const heroPills = [
  { label: "Interpretability", style: "bg-primary text-black -rotate-2" },
  { label: "Privacy", style: "bg-secondary text-black rotate-1" },
  { label: "Fairness", style: "bg-[var(--home-card)] border-2 border-text-primary rotate-2" },
  { label: "ML for good", style: "bg-primary text-black -rotate-1" },
];

const h2 = "m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight";

export default function Projects() {
  // Categorize projects: Current (Active, Paused) and Past (Completed)
  const currentProjects = sampleProjects.filter(
    (project) => project.status === "Active" || project.status === "Paused"
  );
  const pastProjects = sampleProjects.filter(
    (project) => project.status === "Completed"
  );

  return (
    <main className="home bg-[var(--home-bg)] text-text-primary transition-colors duration-300">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24">
        <div className="home-fade-mask absolute inset-0">
          <NeuralBackground />
        </div>
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
            What we build
          </span>
          <h1 className="m-0 text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.05] tracking-tight">
            Projects
          </h1>
          <p className="m-0 max-w-xl text-lg leading-relaxed text-text-muted">
            Advancing LLM interpretability and AI ethics.
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

      {/* Current Projects */}
      {currentProjects.length > 0 && (
        <section>
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className={`${h2} mb-10 text-center`}>Current Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Projects */}
      {pastProjects.length > 0 && (
        <section className="bg-secondary/15">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className={`${h2} mb-10 text-center`}>Past Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
          <h2 className={h2}>Have a cool research idea?</h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/connect"
              className="rounded-full border-2 border-text-primary bg-primary px-6 py-3 font-bold text-black shadow-[4px_4px_0_0_var(--color-text-primary,#000)] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Join Us
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-text-primary bg-[var(--home-card)] px-6 py-3 font-bold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
