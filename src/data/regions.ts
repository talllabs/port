import { Region } from "@/types";

export const regions: Region[] = [
  {
    id: "r001",
    name: "Lisbon",
    slug: "lisbon",
    intro:
      "The heart of Portugal's queer scene. Lisbon has a vibrant, welcoming LGBTQ community centred on Príncipe Real and Bairro Alto, with growing QTPOC and women's spaces across the city. The nightlife is legendary — late, loose, and full of character.",
    featuredListings: ["purex", "finalmente", "agua-no-bico", "checkpointlx", "gat-lisboa", "galeria-ze-dos-bois", "portas-largas"],
    mapCenter: [-9.1399, 38.7223],
    mapZoom: 13,
    heroStyle: "dark-city",
    highlights: [
      "Europe's most welcoming capital for queer travellers",
      "Vibrant Príncipe Real gay village",
      "Active QTPOC and women's scene",
      "Free HIV testing and PrEP at community health centres",
      "Pride parade draws hundreds of thousands",
    ],
  },
  {
    id: "r002",
    name: "Porto",
    slug: "porto",
    intro:
      "Portugal's second city has a smaller but tight-knit queer community. Porto's scene is less commercialised and more underground than Lisbon — if anything, that's its charm. The city itself is architecturally stunning, and the local queer scene reflects its independent, creative character.",
    featuredListings: ["base-porto", "rosa-amarela"],
    mapCenter: [-8.6131, 41.1579],
    mapZoom: 14,
    heroStyle: "blue-dusk",
    highlights: [
      "Underground queer club scene with strong DJ culture",
      "LGBTQ film festival each spring",
      "Smaller, community-focused bars",
      "Stunning riverside setting",
    ],
  },
  {
    id: "r003",
    name: "Algarve",
    slug: "algarve",
    intro:
      "The Algarve is Portugal's southern coast — famous for its beaches, cliffs, and warm summers. For queer visitors, the highlight is Praia do Castelo, the most established gay beach in Portugal. Albufeira and Lagos have some queer-friendly venues and the scene peaks in July and August.",
    featuredListings: ["praia-do-castelo"],
    mapCenter: [-8.2536, 37.0802],
    mapZoom: 11,
    heroStyle: "golden-coast",
    highlights: [
      "Praia do Castelo — Portugal's most established gay beach",
      "Summer scene peaks July–August",
      "Warm water, dramatic cliffs, beautiful scenery",
      "Day trips from Lisbon possible but a long day",
    ],
  },
  {
    id: "r004",
    name: "Elsewhere in Portugal",
    slug: "elsewhere",
    intro:
      "Beyond Lisbon, Porto, and the Algarve, Portugal has smaller queer communities in cities like Braga, Coimbra, and Évora. These scenes are quieter but exist — and the cities themselves are worth visiting for their history, architecture, and character.",
    featuredListings: [],
    mapCenter: [-8.2, 39.5],
    mapZoom: 7,
    heroStyle: "landscape",
    highlights: [
      "Coimbra — university city with a small but active queer scene",
      "Braga — more conservative but improving",
      "Évora — stunning historic city, limited queer infrastructure",
      "Sintra day trip from Lisbon — palaces, forests, beautiful walks",
    ],
  },
];

export const getRegionBySlug = (slug: string): Region | undefined =>
  regions.find((r) => r.slug === slug);
