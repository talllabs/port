"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ExternalLink, Clock, Filter } from "lucide-react";
import FilterChip from "@/components/ui/FilterChip";
import { venues } from "@/data/venues";
import { Venue, VenueCategory } from "@/types";
import { getCategoryLabel, getCategoryColor } from "@/lib/search";
import Link from "next/link";

const CATEGORIES: VenueCategory[] = [
  "bar", "club", "health", "community", "beach", "sauna", "arts",
];

const categoryColors: Record<string, string> = {
  bar: "#a855f7",
  club: "#e879f9",
  cafe: "#f59e0b",
  restaurant: "#f97316",
  beach: "#06b6d4",
  sauna: "#ef4444",
  health: "#22c55e",
  community: "#3b82f6",
  arts: "#8b5cf6",
  outdoor: "#10b981",
  shop: "#eab308",
  accommodation: "#6366f1",
};

// Approximate SVG map of Lisbon neighbourhoods
function LisbonSVGMap({
  venues,
  selectedVenue,
  onSelectVenue,
}: {
  venues: Venue[];
  selectedVenue: Venue | null;
  onSelectVenue: (v: Venue | null) => void;
}) {
  // Convert lat/lng to SVG coordinates
  // Lisbon center ~[-9.14, 38.72], roughly
  const lngMin = -9.22;
  const lngMax = -9.08;
  const latMin = 38.70;
  const latMax = 38.74;

  const toSVG = (lng: number, lat: number, w = 800, h = 500) => ({
    x: ((lng - lngMin) / (lngMax - lngMin)) * w,
    y: h - ((lat - latMin) / (latMax - latMin)) * h,
  });

  const lisbon = venues.filter((v) => v.city === "Lisbon" && v.coordinates);

  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      aria-label="Map of LGBTQ venues in Lisbon"
      role="img"
    >
      {/* Background */}
      <rect width="800" height="500" fill="#0f0f0f" rx="0" />

      {/* Simple road lines representing major streets */}
      <g stroke="#1e1e1e" strokeWidth="1" fill="none">
        {/* Avenida da Liberdade */}
        <line x1="370" y1="0" x2="370" y2="200" />
        {/* Av 24 de Julho along waterfront */}
        <line x1="0" y1="450" x2="800" y2="480" />
        {/* Rua do Alecrim */}
        <line x1="330" y1="300" x2="380" y2="460" />
        {/* Grid */}
        {[100, 200, 300, 400, 500, 600, 700].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="500" stroke="#161616" />
        ))}
        {[100, 200, 300, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#161616" />
        ))}
      </g>

      {/* River Tagus */}
      <rect x="0" y="460" width="800" height="40" fill="#0a1a2a" opacity="0.8" />
      <text x="400" y="490" textAnchor="middle" fill="#1e3a5f" fontSize="11">Rio Tejo</text>

      {/* Neighbourhood labels */}
      {[
        { label: "Príncipe Real", x: 240, y: 180 },
        { label: "Bairro Alto", x: 320, y: 240 },
        { label: "Mouraria", x: 490, y: 200 },
        { label: "Chiado", x: 350, y: 300 },
        { label: "Cais do Sodré", x: 310, y: 380 },
        { label: "Intendente", x: 530, y: 150 },
      ].map((n) => (
        <text key={n.label} x={n.x} y={n.y} fill="#2a2a2a" fontSize="10" textAnchor="middle" fontFamily="system-ui">
          {n.label}
        </text>
      ))}

      {/* Venue pins */}
      {lisbon.map((venue) => {
        const pos = toSVG(venue.coordinates[0], venue.coordinates[1]);
        const color = categoryColors[venue.category] || "#e879f9";
        const isSelected = selectedVenue?.id === venue.id;

        return (
          <g
            key={venue.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            style={{ cursor: "pointer" }}
            onClick={() => onSelectVenue(isSelected ? null : venue)}
            role="button"
            aria-label={`${venue.name} - ${venue.category}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelectVenue(isSelected ? null : venue)}
          >
            {/* Glow */}
            {isSelected && (
              <circle r="14" fill={color} opacity="0.2">
                <animate attributeName="r" values="12;18;12" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}
            {/* Pin circle */}
            <circle
              r={isSelected ? 9 : 7}
              fill={color}
              stroke={isSelected ? "#fff" : "#080808"}
              strokeWidth={isSelected ? 2 : 1.5}
              opacity={isSelected ? 1 : 0.85}
            />
            {/* Dot */}
            <circle r="2.5" fill="white" opacity="0.9" />
          </g>
        );
      })}
    </svg>
  );
}

export default function MapPage() {
  const [selectedCategory, setSelectedCategory] = useState<VenueCategory | "">("");
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredVenues = selectedCategory
    ? venues.filter((v) => v.category === selectedCategory)
    : venues;

  const lisbonVenues = filteredVenues.filter((v) => v.city === "Lisbon");

  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Map area */}
        <div className="flex-1 relative bg-surface min-h-[60vh] lg:min-h-0">
          {/* Map controls */}
          <div className="absolute top-4 left-4 right-4 z-10 flex gap-2 flex-wrap">
            <button
              onClick={() => setShowFilters((v) => !v)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm border transition-all backdrop-blur-sm ${
                showFilters
                  ? "bg-primary/20 border-primary/40 text-primary"
                  : "bg-surface/80 border-border text-text-secondary hover:text-text-primary"
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              Filter
            </button>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="flex flex-wrap gap-1.5"
                >
                  {CATEGORIES.map((cat) => (
                    <FilterChip
                      key={cat}
                      label={getCategoryLabel(cat)}
                      active={selectedCategory === cat}
                      onToggle={() =>
                        setSelectedCategory((prev) => (prev === cat ? "" : cat))
                      }
                      onRemove={() => setSelectedCategory("")}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SVG Map */}
          <div className="w-full h-full min-h-[60vh] lg:min-h-screen">
            <LisbonSVGMap
              venues={lisbonVenues}
              selectedVenue={selectedVenue}
              onSelectVenue={setSelectedVenue}
            />
          </div>

          {/* Mapbox notice */}
          <div className="absolute bottom-4 right-4 text-[10px] text-text-muted bg-surface/80 backdrop-blur-sm px-2 py-1 rounded">
            Add NEXT_PUBLIC_MAPBOX_TOKEN for full interactive map
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-border bg-surface flex flex-col max-h-[40vh] lg:max-h-screen overflow-hidden">
          <div className="p-4 border-b border-border flex-shrink-0">
            <h1 className="font-bold text-text-primary">
              Lisbon Map
            </h1>
            <p className="text-text-muted text-xs mt-0.5">
              {lisbonVenues.length} venues · Tap a pin to see details
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
              <a
                href="https://shorturl.at/fBJ19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                <MapPin className="w-3 h-3" />
                Open Alex&apos;s full Map of LGBTQ Lisbon on Google Maps
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://shorturl.at/iMYiN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                <MapPin className="w-3 h-3" />
                Open Alex&apos;s Map of LGBTQ Portugal on Google Maps
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Selected venue detail */}
          <AnimatePresence>
            {selectedVenue && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="border-b border-border flex-shrink-0"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h2 className="font-semibold text-text-primary text-sm">
                        {selectedVenue.name}
                      </h2>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full border ${getCategoryColor(selectedVenue.category)}`}>
                        {getCategoryLabel(selectedVenue.category)}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedVenue(null)}
                      className="p-1 rounded text-text-muted hover:text-text-primary transition-colors flex-shrink-0"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-text-muted text-xs mb-3">{selectedVenue.shortDescription}</p>
                  <div className="flex flex-col gap-1.5 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {selectedVenue.address}
                    </span>
                    {selectedVenue.hours && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {selectedVenue.hours}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/venues/${selectedVenue.slug}`}
                      className="flex-1 text-center py-1.5 rounded-lg bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
                    >
                      View details
                    </Link>
                    {selectedVenue.websiteUrl && (
                      <a
                        href={selectedVenue.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 py-1.5 px-3 rounded-lg bg-surface-2 text-text-secondary text-xs hover:text-text-primary transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Venue list */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {lisbonVenues.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setSelectedVenue((v) => (v?.id === venue.id ? null : venue))}
                className={`w-full text-left px-4 py-3 border-b border-border-subtle hover:bg-surface-2 transition-colors ${
                  selectedVenue?.id === venue.id ? "bg-primary/5 border-l-2 border-l-primary" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm font-medium transition-colors ${
                      selectedVenue?.id === venue.id ? "text-primary" : "text-text-primary"
                    }`}
                  >
                    {venue.name}
                  </span>
                  <span className={`flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full border ${getCategoryColor(venue.category)}`}>
                    {getCategoryLabel(venue.category)}
                  </span>
                </div>
                <div className="text-text-muted text-xs mt-0.5">{venue.neighborhood}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
