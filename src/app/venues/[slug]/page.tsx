import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, Globe, ExternalLink, ArrowLeft, Tag } from "lucide-react";
import { getVenueBySlug, venues } from "@/data/venues";
import { getCategoryLabel, getCategoryColor, getAudienceLabel } from "@/lib/search";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = getVenueBySlug(params.slug);
  if (!venue) return {};
  return {
    title: venue.name,
    description: venue.shortDescription,
  };
}

const priceSymbols = ["", "€", "€€", "€€€", "€€€€"];

export default function VenuePage({ params }: Props) {
  const venue = getVenueBySlug(params.slug);
  if (!venue) notFound();

  // Find nearby venues (same city, different slug)
  const nearby = venues
    .filter((v) => v.city === venue.city && v.slug !== venue.slug && v.neighborhood === venue.neighborhood)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <div className="h-64 sm:h-80 bg-gradient-to-br from-surface-3 via-surface to-background relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(232,121,249,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(129,140,248,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full pb-8">
            <Link
              href="/explore"
              className="inline-flex items-center gap-1.5 text-text-muted text-xs mb-4 hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Explore
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-sm px-2.5 py-1 rounded-full border ${getCategoryColor(venue.category)}`}>
                {getCategoryLabel(venue.category)}
              </span>
              {venue.featured && (
                <span className="text-xs px-2 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">
                  Featured
                </span>
              )}
              {venue.priceLevel && (
                <span className="text-xs px-2 py-1 rounded-full bg-surface-3 border border-border text-text-secondary">
                  {priceSymbols[venue.priceLevel]}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">{venue.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Short desc */}
            <p className="text-text-secondary text-base leading-relaxed italic border-l-2 border-primary/40 pl-4">
              {venue.shortDescription}
            </p>

            {/* Full description */}
            <div className="prose prose-sm prose-invert max-w-none">
              <p className="text-text-secondary leading-relaxed">{venue.fullDescription}</p>
            </div>

            {/* Tags */}
            {venue.tags.length > 0 && (
              <div>
                <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {venue.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Audience */}
            {venue.audience.length > 0 && (
              <div>
                <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
                  Who it&apos;s for
                </h3>
                <div className="flex flex-wrap gap-2">
                  {venue.audience.map((aud) => (
                    <span
                      key={aud}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary/80"
                    >
                      {getAudienceLabel(aud)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Vibe */}
            {venue.vibe.length > 0 && (
              <div>
                <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">Vibe</h3>
                <div className="flex flex-wrap gap-2">
                  {venue.vibe.map((v) => (
                    <span
                      key={v}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary/80"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Practical info card */}
            <div className="rounded-2xl bg-surface-2 border border-border p-5 space-y-4">
              <h3 className="font-semibold text-text-primary text-sm">Practical info</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5 text-text-secondary">
                  <MapPin className="w-4 h-4 text-text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{venue.address}</div>
                    <div className="text-text-muted text-xs">{venue.neighborhood}, {venue.city}</div>
                  </div>
                </div>

                {venue.hours && (
                  <div className="flex items-start gap-2.5 text-text-secondary">
                    <Clock className="w-4 h-4 text-text-muted mt-0.5 flex-shrink-0" />
                    <div>{venue.hours}</div>
                  </div>
                )}

                {venue.priceLevel && (
                  <div className="flex items-center gap-2.5 text-text-secondary">
                    <span className="text-text-muted text-xs">Price</span>
                    <span>{priceSymbols[venue.priceLevel]}</span>
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="space-y-2 pt-2 border-t border-border-subtle">
                {venue.websiteUrl && (
                  <a
                    href={venue.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </a>
                )}
                {venue.instagramUrl && (
                  <a
                    href={venue.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    <span className="w-4 text-center text-xs">IG</span>
                    Instagram
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </a>
                )}
                <a
                  href={`https://maps.google.com?q=${encodeURIComponent(venue.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Maps
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </a>
              </div>
            </div>

            {/* Nearby */}
            {nearby.length > 0 && (
              <div className="rounded-2xl bg-surface-2 border border-border p-5">
                <h3 className="font-semibold text-text-primary text-sm mb-3">
                  Nearby in {venue.neighborhood}
                </h3>
                <div className="space-y-2">
                  {nearby.map((v) => (
                    <Link
                      key={v.id}
                      href={`/venues/${v.slug}`}
                      className="block p-2.5 rounded-lg bg-surface-3 hover:bg-surface border border-border-subtle hover:border-primary/20 transition-all group"
                    >
                      <div className="text-sm text-text-primary group-hover:text-primary transition-colors">
                        {v.name}
                      </div>
                      <div className="text-xs text-text-muted">{getCategoryLabel(v.category)}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
