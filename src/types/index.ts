export interface Venue {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: VenueCategory;
  subcategory?: string;
  city: City;
  neighborhood: string;
  address: string;
  coordinates: [number, number]; // [lng, lat]
  tags: string[];
  audience: Audience[];
  vibe: string[];
  hours?: string;
  websiteUrl?: string;
  instagramUrl?: string;
  priceLevel?: 1 | 2 | 3 | 4;
  featured: boolean;
  mapPriority: number;
  sourceSection?: string;
  openNow?: boolean;
  image?: string;
}

export type VenueCategory =
  | "bar"
  | "club"
  | "cafe"
  | "restaurant"
  | "beach"
  | "sauna"
  | "health"
  | "shop"
  | "accommodation"
  | "community"
  | "arts"
  | "outdoor"
  | "cruising"
  | "mixed";

export type City = "Lisbon" | "Porto" | "Algarve" | "Other";

export type Audience =
  | "all"
  | "gay-men"
  | "lesbians"
  | "women"
  | "trans"
  | "non-binary"
  | "qtpoc"
  | "mixed"
  | "local"
  | "tourist";

export interface Event {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  startDate: string; // ISO date string
  endDate?: string;
  timeText: string;
  venueName: string;
  venueSlug?: string;
  city: City;
  neighborhood?: string;
  coordinates?: [number, number];
  category: EventCategory;
  audience: Audience[];
  recurring: boolean;
  recurringText?: string;
  externalUrl?: string;
  featured: boolean;
  sourceMonth: string;
  image?: string;
  tags?: string[];
}

export type EventCategory =
  | "party"
  | "drag"
  | "live-music"
  | "community"
  | "arts"
  | "sport"
  | "workshop"
  | "pride"
  | "market"
  | "film"
  | "other";

export interface Group {
  id: string;
  name: string;
  slug: string;
  category: GroupCategory;
  city: City | "National";
  summary: string;
  description: string;
  tags: string[];
  websiteUrl?: string;
  contactUrl?: string;
  instagramUrl?: string;
  audience: Audience[];
}

export type GroupCategory =
  | "support"
  | "social"
  | "health"
  | "rights"
  | "community"
  | "sport"
  | "arts"
  | "trans"
  | "women"
  | "qtpoc";

export interface GuideSection {
  id: string;
  heading: string;
  body: string;
  callout?: string;
  links?: { label: string; href: string }[];
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  intro: string;
  icon: string;
  sections: GuideSection[];
  relatedLinks?: { label: string; href: string }[];
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  intro: string;
  featuredListings: string[]; // venue slugs
  mapCenter: [number, number];
  mapZoom: number;
  heroStyle: string;
  highlights: string[];
}

export interface ShortList {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  vibe: string;
  duration: string;
  audience: Audience[];
  stops: ShortListStop[];
  tips: string[];
  image?: string;
}

export interface ShortListStop {
  order: number;
  time: string;
  venueName: string;
  venueSlug?: string;
  description: string;
  duration: string;
  note?: string;
}

export interface FilterState {
  query: string;
  city: City | "";
  neighborhood: string;
  category: VenueCategory | "";
  audience: Audience | "";
  vibe: string;
  priceLevel: number | 0;
  openNow: boolean;
  featured: boolean;
}
