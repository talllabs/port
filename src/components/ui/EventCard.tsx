"use client";

import Link from "next/link";
import { MapPin, Calendar, ExternalLink, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { Event } from "@/types";
import { getEventCategoryColor } from "@/lib/search";

interface EventCardProps {
  event: Event;
  layout?: "grid" | "list";
  index?: number;
}

const categoryLabels: Record<string, string> = {
  party: "Party",
  drag: "Drag",
  "live-music": "Live Music",
  community: "Community",
  arts: "Arts",
  sport: "Sport",
  workshop: "Workshop",
  pride: "Pride",
  market: "Market",
  film: "Film",
  other: "Other",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export default function EventCard({ event, layout = "grid", index = 0 }: EventCardProps) {
  if (layout === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.04 }}
      >
        <div className="group flex gap-4 p-4 rounded-xl bg-surface-2 border border-border hover:border-primary/20 transition-all duration-200">
          {/* Date block */}
          <div className="flex-shrink-0 w-14 text-center">
            <div className="text-primary text-lg font-bold leading-none">
              {new Date(event.startDate).getDate()}
            </div>
            <div className="text-text-muted text-xs mt-0.5">
              {new Date(event.startDate).toLocaleDateString("en-GB", { month: "short" })}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-text-primary text-sm group-hover:text-primary transition-colors">
                {event.name}
              </h3>
              <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full border ${getEventCategoryColor(event.category)}`}>
                {categoryLabels[event.category]}
              </span>
            </div>
            <p className="text-text-muted text-xs mb-2 line-clamp-1">{event.shortDescription}</p>
            <div className="flex items-center flex-wrap gap-3 text-xs text-text-muted">
              <span>{event.timeText}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {event.venueName}
              </span>
              {event.recurring && (
                <span className="flex items-center gap-1 text-secondary">
                  <RefreshCw className="w-3 h-3" />
                  {event.recurringText}
                </span>
              )}
            </div>
          </div>

          {event.externalUrl && (
            <a
              href={event.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 self-center p-2 rounded-lg bg-surface-3 hover:bg-primary/10 text-text-muted hover:text-primary transition-colors"
              aria-label={`More info for ${event.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="group rounded-2xl bg-surface-2 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-200 overflow-hidden h-full flex flex-col">
        {/* Header */}
        <div className="h-28 bg-gradient-to-br from-surface-3 to-background relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full border ${getEventCategoryColor(event.category)}`}>
              {categoryLabels[event.category]}
            </span>
            {event.recurring && (
              <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary flex items-center gap-1">
                <RefreshCw className="w-2.5 h-2.5" />
                Recurring
              </span>
            )}
          </div>
          {event.featured && (
            <div className="absolute top-3 right-3">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-xs text-primary mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(event.startDate)}</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted">{event.timeText}</span>
          </div>

          <h3 className="font-semibold text-text-primary text-sm mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
            {event.name}
          </h3>
          <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
            {event.shortDescription}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <MapPin className="w-3 h-3" />
              {event.venueName}
            </span>
            {event.externalUrl && (
              <a
                href={event.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:text-accent flex items-center gap-1 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Info <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
