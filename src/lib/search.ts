import Fuse from "fuse.js";
import { Venue, Event, FilterState } from "@/types";
import { venues } from "@/data/venues";
import { events } from "@/data/events";

// Venue search
const venueSearchIndex = new Fuse(venues, {
  keys: [
    { name: "name", weight: 2 },
    { name: "shortDescription", weight: 1.5 },
    { name: "neighborhood", weight: 1.5 },
    { name: "category", weight: 1 },
    { name: "tags", weight: 1 },
    { name: "vibe", weight: 0.8 },
    { name: "fullDescription", weight: 0.5 },
  ],
  threshold: 0.35,
  includeScore: true,
  ignoreLocation: true,
});

export const searchVenues = (query: string): Venue[] => {
  if (!query.trim()) return venues;
  return venueSearchIndex.search(query).map((r) => r.item);
};

// Event search
const eventSearchIndex = new Fuse(events, {
  keys: [
    { name: "name", weight: 2 },
    { name: "shortDescription", weight: 1.5 },
    { name: "venueName", weight: 1 },
    { name: "category", weight: 1 },
    { name: "tags", weight: 0.8 },
  ],
  threshold: 0.35,
  includeScore: true,
  ignoreLocation: true,
});

export const searchEvents = (query: string): Event[] => {
  if (!query.trim()) return events;
  return eventSearchIndex.search(query).map((r) => r.item);
};

// Filter venues
export const filterVenues = (filters: FilterState): Venue[] => {
  let results = filters.query ? searchVenues(filters.query) : [...venues];

  if (filters.city) {
    results = results.filter((v) => v.city === filters.city);
  }
  if (filters.neighborhood) {
    results = results.filter((v) =>
      v.neighborhood.toLowerCase().includes(filters.neighborhood.toLowerCase())
    );
  }
  if (filters.category) {
    results = results.filter((v) => v.category === filters.category);
  }
  if (filters.audience) {
    results = results.filter((v) => v.audience.includes(filters.audience as any));
  }
  if (filters.vibe) {
    results = results.filter((v) =>
      v.vibe.some((vi) => vi.toLowerCase().includes(filters.vibe.toLowerCase()))
    );
  }
  if (filters.priceLevel) {
    results = results.filter((v) => v.priceLevel === filters.priceLevel);
  }
  if (filters.featured) {
    results = results.filter((v) => v.featured);
  }

  return results;
};

export const getCategoryLabel = (category: string): string => {
  const map: Record<string, string> = {
    bar: "Bar",
    club: "Club",
    cafe: "Café",
    restaurant: "Restaurant",
    beach: "Beach",
    sauna: "Sauna",
    health: "Health",
    shop: "Shop",
    accommodation: "Stay",
    community: "Community",
    arts: "Arts",
    outdoor: "Outdoor",
    cruising: "Cruising",
    mixed: "Mixed",
  };
  return map[category] || category;
};

export const getAudienceLabel = (audience: string): string => {
  const map: Record<string, string> = {
    all: "Everyone",
    "gay-men": "Gay Men",
    lesbians: "Lesbians",
    women: "Women",
    trans: "Trans",
    "non-binary": "Non-Binary",
    qtpoc: "QTPOC",
    mixed: "Mixed",
    local: "Local",
    tourist: "Visitor",
  };
  return map[audience] || audience;
};

export const getCategoryColor = (category: string): string => {
  const map: Record<string, string> = {
    bar: "bg-purple-900/40 text-purple-300 border-purple-800/50",
    club: "bg-pink-900/40 text-pink-300 border-pink-800/50",
    cafe: "bg-amber-900/40 text-amber-300 border-amber-800/50",
    restaurant: "bg-orange-900/40 text-orange-300 border-orange-800/50",
    beach: "bg-cyan-900/40 text-cyan-300 border-cyan-800/50",
    sauna: "bg-red-900/40 text-red-300 border-red-800/50",
    health: "bg-green-900/40 text-green-300 border-green-800/50",
    community: "bg-blue-900/40 text-blue-300 border-blue-800/50",
    arts: "bg-violet-900/40 text-violet-300 border-violet-800/50",
    outdoor: "bg-emerald-900/40 text-emerald-300 border-emerald-800/50",
    shop: "bg-yellow-900/40 text-yellow-300 border-yellow-800/50",
    accommodation: "bg-indigo-900/40 text-indigo-300 border-indigo-800/50",
    cruising: "bg-rose-900/40 text-rose-300 border-rose-800/50",
    mixed: "bg-surface-3 text-text-secondary border-border",
  };
  return map[category] || "bg-surface-3 text-text-secondary border-border";
};

export const getEventCategoryColor = (category: string): string => {
  const map: Record<string, string> = {
    party: "bg-pink-900/40 text-pink-300 border-pink-800/50",
    drag: "bg-fuchsia-900/40 text-fuchsia-300 border-fuchsia-800/50",
    "live-music": "bg-purple-900/40 text-purple-300 border-purple-800/50",
    community: "bg-blue-900/40 text-blue-300 border-blue-800/50",
    arts: "bg-violet-900/40 text-violet-300 border-violet-800/50",
    sport: "bg-green-900/40 text-green-300 border-green-800/50",
    workshop: "bg-amber-900/40 text-amber-300 border-amber-800/50",
    pride: "bg-orange-900/40 text-orange-300 border-orange-800/50",
    market: "bg-yellow-900/40 text-yellow-300 border-yellow-800/50",
    film: "bg-indigo-900/40 text-indigo-300 border-indigo-800/50",
    other: "bg-surface-3 text-text-secondary border-border",
  };
  return map[category] || "bg-surface-3 text-text-secondary border-border";
};
