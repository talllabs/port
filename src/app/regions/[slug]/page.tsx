import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight } from "lucide-react";
import { getRegionBySlug, regions } from "@/data/regions";
import { getVenueBySlug } from "@/data/venues";
import { getCategoryLabel, getCategoryColor } from "@/lib/search";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const region = getRegionBySlug(params.slug);
  if (!region) return {};
  return {
    title: `${region.name} — LGBTQ Guide`,
    description: region.intro,
  };
}

export default function RegionPage({ params }: Props) {
  const region = getRegionBySlug(params.slug);
  if (!region) notFound();

  const featuredVenues = region.featuredListings
    .map((slug) => getVenueBySlug(slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-br from-surface-3 to-background border-b border-border overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, rgba(232,121,249,0.12) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(129,140,248,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full pb-8">
            <Link
              href="/regions"
              className="inline-flex items-center gap-1.5 text-text-muted text-xs mb-4 hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All regions
            </Link>
            <div className="text-xs text-primary uppercase tracking-widest font-medium mb-2">Region</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">{region.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Intro */}
        <div className="max-w-2xl mb-10">
          <p className="text-text-secondary leading-relaxed text-base">{region.intro}</p>
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="font-bold text-text-primary mb-4">Highlights</h2>
          <ul className="space-y-2">
            {region.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-text-secondary text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured venues */}
        {featuredVenues.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-text-primary">Featured venues</h2>
              <Link
                href={`/explore?city=${region.name}`}
                className="text-sm text-primary hover:text-accent flex items-center gap-1 transition-colors"
              >
                All {region.name} venues <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredVenues.map((venue) =>
                venue ? (
                  <Link
                    key={venue.id}
                    href={`/venues/${venue.slug}`}
                    className="group p-4 rounded-xl bg-surface-2 border border-border hover:border-primary/20 hover:bg-surface-3 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-text-primary text-sm group-hover:text-primary transition-colors">
                        {venue.name}
                      </h3>
                      <span className={`flex-shrink-0 text-xs px-1.5 py-0.5 rounded-full border ${getCategoryColor(venue.category)}`}>
                        {getCategoryLabel(venue.category)}
                      </span>
                    </div>
                    <p className="text-text-muted text-xs line-clamp-2">{venue.shortDescription}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-text-muted">
                      <MapPin className="w-3 h-3" />
                      {venue.neighborhood}
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        )}

        {/* Map note */}
        <div className="p-5 rounded-2xl bg-surface-2 border border-border flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-text-primary text-sm mb-1">Explore on the map</h3>
            <p className="text-text-muted text-xs">
              See {region.name} venues plotted on the interactive map
            </p>
          </div>
          <Link
            href="/map"
            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm hover:bg-primary/20 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            Open map
          </Link>
        </div>
      </div>
    </div>
  );
}
