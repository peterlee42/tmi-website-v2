// app/events/page.tsx
import "../home.css";
import NeuralBackground from "@/components/NeuralBackground";
import { EventCard } from "./components/EventCard";
import type { Event } from "./components/type";
import { sampleEvents } from "./components/sampleData";

export default function Events() {
    const today = new Date().toISOString().slice(0, 10);
    const isPast = (e: Event) => e.status === "Completed" || e.date < today;

    // Upcoming: earliest first. Past: most recent first.
    const upcomingEvents = sampleEvents
        .filter((e) => !isPast(e))
        .sort((a, b) => a.date.localeCompare(b.date));
    const pastEvents = sampleEvents
        .filter(isPast)
        .sort((a, b) => b.date.localeCompare(a.date));

    const h2 = "m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight";

    return (
        <main className="home min-h-dvh w-full bg-[var(--home-bg)] text-text-primary transition-colors duration-300">
            {/* Hero */}
            <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden px-6 py-24">
                <div className="home-fade-mask absolute inset-0">
                    <NeuralBackground />
                </div>

                <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--home-eyebrow)]">
                        Workshops, talks &amp; community
                    </span>
                    <h1 className="m-0 text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.05] tracking-tight">
                        Events
                    </h1>
                    <p className="m-0 max-w-xl text-lg leading-relaxed text-text-muted">
                        Upcoming workshops, talks, and community events.
                    </p>
                </div>
            </section>

            {/* Upcoming events */}
            <section>
                <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 pb-24">
                    <h2 className={`${h2} text-center`}>Upcoming Events</h2>
                    {upcomingEvents.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {upcomingEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    ) : (
                        <div className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-2xl border-2 border-text-primary bg-[var(--home-card)] px-6 py-14 text-center shadow-[6px_6px_0_0_var(--color-primary)]">
                            <h3 className="m-0 text-2xl font-bold">Nothing for now</h3>
                            <p className="m-0 mt-3 max-w-md leading-relaxed text-text-muted">
                                There are no planned events right now. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Past events */}
            {pastEvents.length > 0 && (
                <section className="bg-secondary/15">
                    <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 py-16">
                        <h2 className={`${h2} text-center`}>Past Events</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {pastEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
