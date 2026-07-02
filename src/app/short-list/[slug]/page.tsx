import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users, MapPin, ChevronRight } from "lucide-react";
import { getShortlistBySlug, shortlists } from "@/data/shortlists";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return shortlists.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plan = getShortlistBySlug(params.slug);
  if (!plan) return {};
  return {
    title: plan.title,
    description: plan.description,
  };
}

const audienceLabels: Record<string, string> = {
  all: "Everyone",
  "gay-men": "Gay Men",
  lesbians: "Lesbians",
  women: "Women",
  trans: "Trans",
  "non-binary": "Non-Binary",
  qtpoc: "QTPOC",
  mixed: "Mixed",
};

export default function ShortListDetailPage({ params }: Props) {
  const plan = getShortlistBySlug(params.slug);
  if (!plan) notFound();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <Link
            href="/short-list"
            className="inline-flex items-center gap-1.5 text-text-muted text-xs mb-6 hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All short lists
          </Link>

          <div className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
            The Short List
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">{plan.title}</h1>
          <p className="text-text-secondary mb-5">{plan.subtitle}</p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {plan.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {plan.audience.map((a) => audienceLabels[a] || a).join(", ")}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-surface-3 border border-border">
              {plan.stops.length} stops
            </span>
            <span className="italic text-text-muted">{plan.vibe}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Description */}
        <p className="text-text-secondary leading-relaxed mb-10">{plan.description}</p>

        {/* Stops */}
        <div className="mb-10">
          <h2 className="font-bold text-text-primary mb-6">The route</h2>
          <div className="space-y-0">
            {plan.stops.map((stop, i) => (
              <div key={stop.order} className="relative">
                {/* Connector line */}
                {i < plan.stops.length - 1 && (
                  <div className="absolute left-7 top-16 w-px h-full bg-gradient-to-b from-primary/30 to-transparent z-0" />
                )}

                <div className="relative z-10 flex gap-4 pb-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 flex flex-col items-center justify-center">
                      <div className="text-primary font-bold text-sm">{stop.time}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        {stop.venueSlug ? (
                          <Link
                            href={`/venues/${stop.venueSlug}`}
                            className="font-bold text-text-primary hover:text-primary transition-colors text-lg"
                          >
                            {stop.venueName}
                          </Link>
                        ) : (
                          <h3 className="font-bold text-text-primary text-lg">{stop.venueName}</h3>
                        )}
                      </div>
                      <span className="flex-shrink-0 text-xs px-2 py-1 rounded-full bg-surface-2 border border-border text-text-muted flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {stop.duration}
                      </span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {stop.description}
                    </p>

                    {stop.note && (
                      <div className="p-3 rounded-lg bg-amber-900/10 border border-amber-800/20 flex gap-2">
                        <span className="text-amber-400 text-sm flex-shrink-0">→</span>
                        <p className="text-amber-300/80 text-xs">{stop.note}</p>
                      </div>
                    )}

                    {stop.venueSlug && (
                      <Link
                        href={`/venues/${stop.venueSlug}`}
                        className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:text-accent transition-colors"
                      >
                        View venue details
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        {plan.tips.length > 0 && (
          <div className="p-6 rounded-2xl bg-surface-2 border border-border mb-8">
            <h2 className="font-bold text-text-primary mb-4">Tips for this night</h2>
            <ul className="space-y-2.5">
              {plan.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back */}
        <Link
          href="/short-list"
          className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors text-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All short lists
        </Link>
      </div>
    </div>
  );
}
