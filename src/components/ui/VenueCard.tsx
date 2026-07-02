"use client";

import Link from "next/link";
import { MapPin, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Venue } from "@/types";
import { getCategoryLabel, getCategoryColor } from "@/lib/search";

interface VenueCardProps {
  venue: Venue;
  layout?: "grid" | "list";
  index?: number;
}

const priceSymbols = ["", "€", "€€", "€€€", "€€€€"];

export default function VenueCard({ venue, layout = "grid", index = 0 }: VenueCardProps) {
  if (layout === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.04 }}
      >
        <Link
          href={`/venues/${venue.slug}`}
          className="group flex gap-4 p-4 rounded-xl bg-surface-2 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-200"
        >
          {/* Category dot */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-3 flex items-center justify-center mt-0.5">
            <CategoryIcon category={venue.category} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-text-primary text-sm group-hover:text-primary transition-colors truncate">
                {venue.name}
              </h3>
              <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full border ${getCategoryColor(venue.category)}`}>
                {getCategoryLabel(venue.category)}
              </span>
            </div>
            <p className="text-text-muted text-xs mb-2 line-clamp-1">{venue.shortDescription}</p>
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {venue.neighborhood}, {venue.city}
              </span>
              {venue.hours && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {venue.hours}
                </span>
              )}
              {venue.priceLevel && (
                <span className="text-text-muted">{priceSymbols[venue.priceLevel]}</span>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        href={`/venues/${venue.slug}`}
        className="group block rounded-2xl bg-surface-2 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-200 overflow-hidden h-full"
      >
        {/* Image placeholder / gradient header */}
        <div className="h-36 bg-gradient-to-br from-surface-3 via-surface-3 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="absolute bottom-3 left-3">
            <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(venue.category)}`}>
              {getCategoryLabel(venue.category)}
            </span>
          </div>
          {venue.featured && (
            <div className="absolute top-3 right-3">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-text-primary text-sm mb-1.5 group-hover:text-primary transition-colors">
            {venue.name}
          </h3>
          <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
            {venue.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <MapPin className="w-3 h-3" />
              {venue.neighborhood}
            </span>
            <div className="flex items-center gap-2">
              {venue.priceLevel && (
                <span className="text-xs text-text-muted">{priceSymbols[venue.priceLevel]}</span>
              )}
              {venue.websiteUrl && (
                <ExternalLink className="w-3 h-3 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </div>

          {/* Tags */}
          {venue.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {venue.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-text-muted border border-border-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

function CategoryIcon({ category }: { category: string }) {
  const icons: Record<string, string> = {
    bar: "🍺",
    club: "🎵",
    cafe: "☕",
    restaurant: "🍽️",
    beach: "🏖️",
    sauna: "♨️",
    health: "💊",
    community: "🏘️",
    arts: "🎨",
    outdoor: "🌿",
    shop: "🛍️",
    accommodation: "🏨",
    cruising: "🔦",
    mixed: "✨",
  };
  return (
    <span className="text-base" role="img" aria-hidden="true">
      {icons[category] || "📍"}
    </span>
  );
}
