import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/data/guides";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essentials",
  description: "Essential visitor info for LGBTQ travellers in Lisbon and Portugal — transport, nightlife, rights, health, and more.",
};

export default function EssentialsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-text-primary mb-3">Essentials</h1>
          <p className="text-text-secondary leading-relaxed max-w-xl">
            Practical guides for LGBTQ visitors to Lisbon and Portugal. From transport
            and nightlife timings to rights, health services, and trans-specific resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/essentials/${guide.slug}`}
              className="group flex gap-4 p-5 rounded-2xl bg-surface-2 border border-border hover:border-primary/20 hover:bg-surface-3 transition-all duration-200"
            >
              <span className="text-3xl flex-shrink-0" role="img" aria-hidden="true">
                {guide.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-1">
                  {guide.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                  {guide.intro}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read guide <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick tips */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-2 border border-border">
          <h2 className="font-semibold text-text-primary mb-4">Quick reference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: "Metro closes", value: "~01:00 (use Uber after)" },
              { label: "Clubs start", value: "01:00–02:00 (really)" },
              { label: "HIV testing", value: "GAT Lisboa & CheckpointLX (free)" },
              { label: "Emergency", value: "112" },
              { label: "Marriage equality", value: "Since 2010" },
              { label: "Beer in supermarket", value: "€0.80–1.50" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between gap-4">
                <span className="text-text-muted">{item.label}</span>
                <span className="text-text-primary text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
