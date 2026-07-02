import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { regions } from "@/data/regions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regions",
  description: "Explore LGBTQ life across Portugal — Lisbon, Porto, Algarve, and beyond.",
};

export default function RegionsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-text-primary mb-3">Regions</h1>
          <p className="text-text-secondary max-w-xl">
            The guide covers Lisbon in depth, with growing coverage of Porto, the Algarve,
            and the rest of Portugal. Each region has its own character and queer scene.
          </p>
        </div>

        <div className="space-y-4">
          {regions.map((region, i) => (
            <Link
              key={region.slug}
              href={`/regions/${region.slug}`}
              className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-surface-2 border border-border hover:border-primary/20 hover:bg-surface-3 transition-all duration-200"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h2 className="font-bold text-text-primary text-xl group-hover:text-primary transition-colors">
                    {region.name}
                  </h2>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {region.intro}
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-full bg-surface-3 border border-border text-text-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
