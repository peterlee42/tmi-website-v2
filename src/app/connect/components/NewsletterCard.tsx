"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Newsletter } from "./types";

const NewsletterPreview = dynamic(
  () => import("./NewsletterPreview").then((mod) => mod.NewsletterPreview),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-card border border-secondary/20 rounded-md flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
      </div>
    ),
  }
);

interface NewsletterCardProps {
  newsletter: Newsletter;
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsletterCard({ newsletter }: NewsletterCardProps) {
  const pdfUrl = `/newsletters/${newsletter.filename}`;

  return (
    <div>
      <Card className="overflow-hidden flex flex-col h-full !rounded-2xl !border-2 !border-text-primary !bg-[var(--home-card)] !shadow-[6px_6px_0_0_var(--color-primary)] hover:!shadow-[6px_6px_0_0_var(--color-primary)]">
        <div className="p-4">
          <NewsletterPreview pdfUrl={pdfUrl} />
        </div>

        <div className="p-4 pt-0 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-text-primary mb-1">
            {newsletter.title}
          </h3>
          <p className="text-xs text-text-muted mb-2">
            {formatDate(newsletter.date)}
          </p>
          {newsletter.description && (
            <p className="text-sm text-text-muted mb-4 flex-1">
              {newsletter.description}
            </p>
          )}

          <div className="flex gap-2 mt-auto">
            <Button
              href={pdfUrl}
              variant="primary"
              external
              className="text-xs flex-1"
            >
              View Full PDF
            </Button>
            <Button href={pdfUrl} variant="outline" external className="text-xs">
              Download
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
