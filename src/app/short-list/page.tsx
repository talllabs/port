import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { shortlists } from "@/data/shortlists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short List — Curated Nights Out",
  description: "Curated night-out planner flows for queer Lisbon. First night in Lisbon, relaxed drinks, women's night, dancing late.",
};

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

export default function ShortListPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
            Curated by the guide
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">The Short List</h1>
          <p className="text-text-secondary leading-relaxed max-w-xl">
            Not sure where to start? These are mini planner flows for different nights out —
            each one sequenced, timed, and annotated with exactly what you need to know.
          </p>
        </div>

        {/* Plans */}
        <div className="space-y-6">
          {shortlists.map((plan, i) => (
            <Link
              key={plan.slug}
              href={`/short-list/${plan.slug}`}
              className="group block rounded-3xl bg-surface-2 border border-border hover:border-primary/25 transition-all duration-200 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Number / visual */}
                <div className="sm:w-24 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5 border-b sm:border-b-0 sm:border-r border-border py-6 sm:py-0">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h2 className="font-bold text-text-primary text-lg group-hover:text-primary transition-colors">
                        {plan.title}
                      </h2>
                      <div className="text-text-muted text-sm">{plan.subtitle}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                    {plan.description}
                  </p>

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
                    <span className="px-2 py-0.5 rounded-full bg-surface-3 border border-border text-text-muted italic">
                      {plan.vibe}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 p-5 rounded-2xl bg-surface-2 border border-border text-center">
          <p className="text-text-muted text-sm">
            These plans are editorial suggestions — not a rigid itinerary. Lisbon moves slowly. Adjust to your pace.
          </p>
        </div>
      </div>
    </div>
  );
}
