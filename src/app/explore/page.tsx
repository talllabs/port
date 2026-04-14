"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, List, SlidersHorizontal, X } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";
import VenueCard from "@/components/ui/VenueCard";
import FilterChip from "@/components/ui/FilterChip";
import { venues } from "@/data/venues";
import { filterVenues, getCategoryLabel } from "@/lib/search";
import { FilterState, VenueCategory, City, Audience } from "@/types";
import type { Metadata } from "next";

const CATEGORIES: VenueCategory[] = [
  "bar", "club", "cafe", "restaurant", "beach", "sauna",
  "health", "community", "arts", "outdoor", "shop", "accommodation",
];

const CITIES: City[] = ["Lisbon", "Porto", "Algarve", "Other"];

const AUDIENCES: Audience[] = [
  "all", "gay-men", "lesbians", "women", "trans", "non-binary", "qtpoc",
];

const audienceLabels: Record<string, string> = {
  all: "Everyone",
  "gay-men": "Gay Men",
  lesbians: "Lesbians",
  women: "Women",
  trans: "Trans",
  "non-binary": "Non-Binary",
  qtpoc: "QTPOC",
};

const defaultFilters: FilterState = {
  query: "",
  city: "",
  neighborhood: "",
  category: "",
  audience: "",
  vibe: "",
  priceLevel: 0,
  openNow: false,
  featured: false,
};

function ExploreContent() {
  const searchParams = useSearchParams();
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>(() => ({
    ...defaultFilters,
    category: (searchParams.get("category") as VenueCategory) || "",
    neighborhood: searchParams.get("neighborhood") || "",
    city: (searchParams.get("city") as City) || "",
    query: searchParams.get("q") || "",
  }));

  const results = useMemo(() => filterVenues(filters), [filters]);

  const setFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) =>
    setFilters((f) => ({ ...f, [key]: value }));

  const toggleFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) =>
    setFilters((f) => ({ ...f, [key]: f[key] === value ? (defaultFilters[key] as FilterState[K]) : value }));

  const clearAll = () => setFilters(defaultFilters);

  const activeFilterCount = Object.entries(filters).filter(([k, v]) => {
    const def = defaultFilters[k as keyof FilterState];
    return v !== def && v !== "" && v !== 0 && v !== false;
  }).length;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Explore</h1>
          <p className="text-text-muted text-sm">
            {results.length} venues across Lisbon and Portugal
          </p>
        </div>

        {/* Search + controls */}
        <div className="flex gap-3 mb-6">
          <SearchBar
            value={filters.query}
            onChange={(q) => setFilter("query", q)}
            className="flex-1"
          />
          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all ${
              showFilters || activeFilterCount > 0
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-surface-2 border-border text-text-secondary hover:text-text-primary"
            }`}
            aria-expanded={showFilters}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-primary text-background text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>
          <div className="flex rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setLayout("grid")}
              className={`p-2.5 transition-colors ${layout === "grid" ? "bg-primary/10 text-primary" : "bg-surface-2 text-text-muted hover:text-text-primary"}`}
              aria-label="Grid view"
              aria-pressed={layout === "grid"}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`p-2.5 transition-colors ${layout === "list" ? "bg-primary/10 text-primary" : "bg-surface-2 text-text-muted hover:text-text-primary"}`}
              aria-label="List view"
              aria-pressed={layout === "list"}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden mb-6"
            >
              <div className="p-5 rounded-2xl bg-surface-2 border border-border space-y-5">
                {/* City */}
                <div>
                  <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">City</div>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map((city) => (
                      <FilterChip
                        key={city}
                        label={city}
                        active={filters.city === city}
                        onToggle={() => toggleFilter("city", city)}
                        onRemove={() => setFilter("city", "")}
                      />
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Category</div>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <FilterChip
                        key={cat}
                        label={getCategoryLabel(cat)}
                        active={filters.category === cat}
                        onToggle={() => toggleFilter("category", cat)}
                        onRemove={() => setFilter("category", "")}
                      />
                    ))}
                  </div>
                </div>

                {/* Audience */}
                <div>
                  <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">For</div>
                  <div className="flex flex-wrap gap-2">
                    {AUDIENCES.map((aud) => (
                      <FilterChip
                        key={aud}
                        label={audienceLabels[aud]}
                        active={filters.audience === aud}
                        onToggle={() => toggleFilter("audience", aud)}
                        onRemove={() => setFilter("audience", "")}
                      />
                    ))}
                  </div>
                </div>

                {/* Special filters */}
                <div>
                  <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Show</div>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip
                      label="Featured only"
                      active={filters.featured}
                      onToggle={() => setFilter("featured", !filters.featured)}
                    />
                  </div>
                </div>

                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    Clear all filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active filter chips */}
        {activeFilterCount > 0 && !showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-text-muted">Filtering by:</span>
            {filters.city && (
              <FilterChip label={filters.city} active onToggle={() => setFilter("city", "")} onRemove={() => setFilter("city", "")} />
            )}
            {filters.category && (
              <FilterChip label={getCategoryLabel(filters.category)} active onToggle={() => setFilter("category", "")} onRemove={() => setFilter("category", "")} />
            )}
            {filters.audience && (
              <FilterChip label={audienceLabels[filters.audience] || filters.audience} active onToggle={() => setFilter("audience", "")} onRemove={() => setFilter("audience", "")} />
            )}
            {filters.featured && (
              <FilterChip label="Featured" active onToggle={() => setFilter("featured", false)} onRemove={() => setFilter("featured", false)} />
            )}
            <button onClick={clearAll} className="text-xs text-text-muted hover:text-primary transition-colors">
              Clear all
            </button>
          </div>
        )}

        {/* Results */}
        {results.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-text-primary font-semibold mb-2">No venues found</h3>
            <p className="text-text-muted text-sm mb-4">Try adjusting your search or filters</p>
            <button onClick={clearAll} className="text-primary text-sm hover:text-accent transition-colors">
              Clear all filters
            </button>
          </div>
        ) : (
          <div
            className={
              layout === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                : "space-y-3"
            }
          >
            {results.map((venue, i) => (
              <VenueCard key={venue.id} venue={venue} layout={layout} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 flex items-center justify-center"><div className="text-text-muted">Loading…</div></div>}>
      <ExploreContent />
    </Suspense>
  );
}
