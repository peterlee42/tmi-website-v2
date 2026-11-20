"use client";

import { NewsletterCard } from "./NewsletterCard";
import { getRecentNewsletters } from "./data";

export function NewsletterGrid() {
  const recentNewsletters = getRecentNewsletters(2);

  if (recentNewsletters.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-[1100px] mx-auto px-6 py-24">
      <div className="text-center mb-12 flex flex-col gap-3">
        <h2 className="m-0 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight tracking-tight">
          Recent newsletters
        </h2>
        <p className="m-0 text-lg text-text-muted">Catch up on our latest updates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recentNewsletters.map((newsletter) => (
          <NewsletterCard key={newsletter.id} newsletter={newsletter} />
        ))}
      </div>
    </section>
  );
}
