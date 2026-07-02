"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, LayoutGrid, List, RefreshCw } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import FilterChip from "@/components/ui/FilterChip";
import SearchBar from "@/components/ui/SearchBar";
import { events } from "@/data/events";
import { EventCategory, City } from "@/types";

const CATEGORIES: { value: EventCategory; label: string }[] = [
  { value: "party", label: "Party" },
  { value: "drag", label: "Drag" },
  { value: "live-music", label: "Live Music" },
  { value: "community", label: "Community" },
  { value: "arts", label: "Arts" },
  { value: "pride", label: "Pride" },
  { value: "film", label: "Film" },
  { value: "sport", label: "Sport" },
  { value: "market", label: "Market" },
  { value: "workshop", label: "Workshop" },
];

const CITIES: City[] = ["Lisbon", "Porto", "Algarve"];

type TimeFilter = "all" | "this-week" | "this-month" | "upcoming";

function EventsContent() {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<EventCategory | "">("");
  const [city, setCity] = useState<City | "">("");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [showRecurring, setShowRecurring] = useState(true);

  const now = new Date();
  const weekEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const filtered = useMemo(() => {
    let res = [...events];

    if (query) {
      const q = query.toLowerCase();
      res = res.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.shortDescription.toLowerCase().includes(q) ||
          e.venueName.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
      );
    }

    if (category) res = res.filter((e) => e.category === category);
    if (city) res = res.filter((e) => e.city === city);
    if (!showRecurring) res = res.filter((e) => !e.recurring);

    if (timeFilter === "this-week") {
      res = res.filter((e) => {
        const d = new Date(e.startDate);
        return d >= now && d <= weekEnd;
      });
    } else if (timeFilter === "this-month") {
      res = res.filter((e) => {
        const d = new Date(e.startDate);
        return d >= now && d <= monthEnd;
      });
    } else if (timeFilter === "upcoming") {
      res = res.filter((e) => new Date(e.startDate) >= now);
    }

    return res.sort(
      (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
  }, [query, category, city, timeFilter, showRecurring, now, weekEnd, monthEnd]);

  const featured = events.filter((e) => e.featured).slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-primary text-xs font-medium uppercase tracking-widest mb-2">
            <Calendar className="w-3.5 h-3.5" />
            April – June 2026
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Events</h1>
          <p className="text-text-muted text-sm">
            Parties, drag nights, community gatherings, and more
          </p>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-10">
            <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-4">Featured this month</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featured.map((event, i) => (
                <EventCard key={event.id} event={event} layout="grid" index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Search + time filters */}
        <div className="flex gap-3 mb-5">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search events, venues…"
            className="flex-1"
          />
          <div className="flex rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setLayout("list")}
              className={`p-2.5 transition-colors ${layout === "list" ? "bg-primary/10 text-primary" : "bg-surface-2 text-text-muted hover:text-text-primary"}`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout("grid")}
              className={`p-2.5 transition-colors ${layout === "grid" ? "bg-primary/10 text-primary" : "bg-surface-2 text-text-muted hover:text-text-primary"}`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Time filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(["all", "this-week", "this-month", "upcoming"] as TimeFilter[]).map((tf) => (
            <FilterChip
              key={tf}
              label={
                tf === "all" ? "All dates" :
                tf === "this-week" ? "This week" :
                tf === "this-month" ? "This month" : "Upcoming"
              }
              active={timeFilter === tf}
              onToggle={() => setTimeFilter(tf)}
            />
          ))}
          <div className="border-l border-border mx-1 self-stretch" />
          <FilterChip
            label={
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3" />
                Recurring
              </span> as unknown as string
            }
            active={showRecurring}
            onToggle={() => setShowRecurring((v) => !v)}
          />
        </div>

        {/* Category + city chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CITIES.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={city === c}
              onToggle={() => setCity((prev) => (prev === c ? "" : c))}
              onRemove={() => setCity("")}
            />
          ))}
          <div className="border-l border-border mx-1 self-stretch" />
          {CATEGORIES.map((cat) => (
            <FilterChip
              key={cat.value}
              label={cat.label}
              active={category === cat.value}
              onToggle={() => setCategory((prev) => (prev === cat.value ? "" : cat.value))}
              onRemove={() => setCategory("")}
            />
          ))}
        </div>

        {/* Results count */}
        <p className="text-text-muted text-xs mb-4">
          {filtered.length} event{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-text-primary font-semibold mb-2">No events found</h3>
            <p className="text-text-muted text-sm">Try adjusting your filters or time range</p>
          </div>
        ) : layout === "list" ? (
          <div className="space-y-3">
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} layout="list" index={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} layout="grid" index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 flex items-center justify-center"><div className="text-text-muted">Loading…</div></div>}>
      <EventsContent />
    </Suspense>
  );
}
