import { Region } from "@/types";

export const regions: Region[] = [
  {
    id: "r001",
    name: "Lisbon",
    slug: "lisbon",
    intro:
      "Lisbon's queer scene is concentrated in three main areas: Bairro Alto (busy, mixed, cheaper drinks), Príncipe Real (more spaced-out gay bars and the three main dance clubs — Trumps, Construction, and Posh), and Intendente/Graça (newer, more imaginative venues with performance spaces). There's also a community venue near Marquês de Pombal (Aconchego House) and the Centro LGBT in Baixa.",
    featuredListings: ["purex", "finalmente", "bar-tr3s", "checkpointlx", "gat-intendente", "aconchego-house", "trumps"],
    mapCenter: [-9.1399, 38.7223],
    mapZoom: 13,
    heroStyle: "dark-city",
    highlights: [
      "Two adjoining nightlife districts — Bairro Alto and Príncipe Real",
      "A newer scene developing in Intendente/Graça",
      "Free HIV/STI testing and PrEP support via GAT and Checkpoint LX",
      "Lisbon's Pride march runs each June along Avenida da Liberdade",
    ],
  },
  {
    id: "r002",
    name: "Porto",
    slug: "porto",
    intro:
      "Porto has a smaller queer scene than Lisbon, centred on a handful of venues. Zoom is the city's largest queer dance club (Friday/Saturday only), and Posh Club Porto runs weekend theme nights with drag. Porto Pride's 2026 dates and organisers have been in flux — check current listings before planning around it.",
    featuredListings: ["zoom-porto", "posh-club-porto"],
    mapCenter: [-8.6131, 41.1579],
    mapZoom: 14,
    heroStyle: "blue-dusk",
    highlights: [
      "Zoom — Porto's largest queer dance club, Fri/Sat only",
      "Alcohol sales restricted before 21:00 in bars/clubs since 2025 (exceptions on June 23 and New Year's Eve)",
      "Porto Pride 2026: two separate events announced — a March in April and a festival in September",
    ],
  },
  {
    id: "r003",
    name: "Algarve",
    slug: "algarve",
    intro:
      "The Algarve's queer scene is spread across Lagos, Portimão, Albufeira, Faro and Tavira, and is smallest outside summer. Espelho in Albufeira is a long-running, camp gay-friendly bar. Public drinking in Albufeira has been restricted after 23:00 since 2025.",
    featuredListings: ["espelho-albufeira"],
    mapCenter: [-8.2536, 37.0802],
    mapZoom: 11,
    heroStyle: "golden-coast",
    highlights: [
      "Scene concentrated in Lagos, Portimão, Albufeira, Faro and Tavira",
      "Espelho — long-running gay-friendly bar in Albufeira",
      "Local Pride events: Algarve Pride (Faro) and Pride Lagos (September)",
      "Public drinking restricted after 23:00 in Albufeira since 2025",
    ],
  },
  {
    id: "r004",
    name: "Elsewhere in Portugal",
    slug: "elsewhere",
    intro:
      "Beyond Lisbon, Porto and the Algarve, smaller queer communities and Pride marches exist in cities including Braga, Guimarães, Barcelos, Vila Real, Santo Tirso and Trofa, plus the Spanish border towns of Vigo and Badajoz. See Alex's Map of LGBTQ Portugal for the full list.",
    featuredListings: [],
    mapCenter: [-8.2, 39.5],
    mapZoom: 7,
    heroStyle: "landscape",
    highlights: [
      "Local Pride marches now run in several smaller cities",
      "Rede ex aequo has youth-network branches across the country",
      "Check local social media accounts — many groups are small and event-based rather than venue-based",
    ],
  },
];

export const getRegionBySlug = (slug: string): Region | undefined =>
  regions.find((r) => r.slug === slug);
