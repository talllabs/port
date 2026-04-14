import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "e001",
    name: "QUEER RAVE at Lux",
    slug: "queer-rave-lux",
    shortDescription: "The biggest queer electronic night in Lisbon — three rooms, international DJs, and a full house.",
    fullDescription:
      "The monthly Queer Rave at Lux Frágil is the flagship event of Lisbon's queer electronic scene. Three rooms of music spanning techno, house, and electronic pop. International DJ guests alongside local residents. Expect a 1000+ crowd, long queue, and a night that goes until noon.",
    startDate: "2026-04-19",
    timeText: "Sat 00:00 – Sun 14:00",
    venueName: "Lux Frágil",
    venueSlug: "lux-fragil",
    city: "Lisbon",
    neighborhood: "Santa Apolónia",
    coordinates: [-9.1204, 38.7138],
    category: "party",
    audience: ["all", "mixed"],
    recurring: true,
    recurringText: "Monthly, third Saturday",
    externalUrl: "https://luxfragil.com",
    featured: true,
    sourceMonth: "2026-04",
    tags: ["electronic", "techno", "house", "party", "late-night"],
    image: "/images/events/queer-rave.jpg",
  },
  {
    id: "e002",
    name: "Drag Brunch at Finalmente",
    slug: "drag-brunch-finalmente",
    shortDescription: "Saturday afternoon drag extravaganza with bottomless mimosas — book ahead, always sold out.",
    fullDescription:
      "Finalmente's beloved drag brunch runs every Saturday afternoon with performances from the resident queens and special guests. Bottomless mimosas, a short menu, and a spectacular two-hour show. Sell-out every week — book online at least a week in advance.",
    startDate: "2026-04-18",
    timeText: "Sat 13:00–16:00",
    venueName: "Finalmente",
    venueSlug: "finalmente",
    city: "Lisbon",
    neighborhood: "Príncipe Real",
    category: "drag",
    audience: ["all", "mixed"],
    recurring: true,
    recurringText: "Every Saturday",
    externalUrl: "https://finalmenteclube.pt",
    featured: true,
    sourceMonth: "2026-04",
    tags: ["drag", "brunch", "performance", "Saturday"],
  },
  {
    id: "e003",
    name: "Queer Women's Social Night",
    slug: "queer-womens-social",
    shortDescription: "Monthly social gathering for queer women and non-binary people — casual, inclusive, and fun.",
    fullDescription:
      "A monthly social gathering for queer women and non-binary people at Água no Bico. No agenda — just drinks, conversation, and community. Welcoming to newcomers, tourists, and anyone seeking queer women's social space. Runs the first Thursday of each month.",
    startDate: "2026-05-07",
    timeText: "Thu 19:00–23:00",
    venueName: "Água no Bico",
    venueSlug: "agua-no-bico",
    city: "Lisbon",
    neighborhood: "Mouraria",
    category: "community",
    audience: ["lesbians", "women", "all"],
    recurring: true,
    recurringText: "First Thursday monthly",
    featured: true,
    sourceMonth: "2026-05",
    tags: ["women", "social", "community", "monthly"],
  },
  {
    id: "e004",
    name: "Lisboa Pride Parade 2026",
    slug: "lisboa-pride-2026",
    shortDescription: "Lisbon's main Pride parade — one of the largest in southern Europe, free and spectacular.",
    fullDescription:
      "Lisbon Pride (Marcha LGBT de Lisboa) is one of the largest Pride marches in southern Europe, drawing hundreds of thousands of participants and spectators. The parade runs from Marquês de Pombal along Avenida da Liberdade to Praça do Comércio. Free to join, politically engaged, and genuinely celebratory.",
    startDate: "2026-06-20",
    timeText: "Sat 15:00 – late",
    venueName: "Avenida da Liberdade",
    city: "Lisbon",
    neighborhood: "Avenida da Liberdade",
    coordinates: [-9.1498, 38.7223],
    category: "pride",
    audience: ["all"],
    recurring: false,
    externalUrl: "https://marchalgbt.pt",
    featured: true,
    sourceMonth: "2026-06",
    tags: ["pride", "parade", "annual", "political", "free"],
  },
  {
    id: "e005",
    name: "Queer Night Market",
    slug: "queer-night-market",
    shortDescription: "Pop-up market of queer and LGBTQ+ independent makers, artists, and designers.",
    fullDescription:
      "A quarterly pop-up queer night market in central Lisbon featuring independent LGBTQ+ designers, artists, zine makers, and food producers. Free entry, welcoming crowd, and always something surprising. Check Instagram for exact location each edition.",
    startDate: "2026-05-30",
    timeText: "Sat–Sun 14:00–22:00",
    venueName: "LX Factory",
    city: "Lisbon",
    neighborhood: "Alcântara",
    category: "market",
    audience: ["all"],
    recurring: false,
    featured: false,
    sourceMonth: "2026-05",
    tags: ["market", "makers", "art", "design", "free"],
  },
  {
    id: "e006",
    name: "Trans* Visibility Day Events",
    slug: "trans-visibility-events",
    shortDescription: "Week of events marking Trans Visibility Day — panels, film, community, and celebration.",
    fullDescription:
      "A week of events marking International Transgender Day of Visibility, coordinated by ILGA Portugal and partner organisations. Includes panel discussions, documentary screenings, community dinners, and a public celebration. Programme released closer to the date.",
    startDate: "2026-04-25",
    endDate: "2026-05-02",
    timeText: "Multiple events across the week",
    venueName: "Various venues, Lisbon",
    city: "Lisbon",
    category: "community",
    audience: ["trans", "non-binary", "all"],
    recurring: false,
    externalUrl: "https://ilga-portugal.pt",
    featured: true,
    sourceMonth: "2026-04",
    tags: ["trans", "visibility", "community", "panel", "film"],
  },
  {
    id: "e007",
    name: "House of Vogue Ball",
    slug: "house-of-vogue-ball",
    shortDescription: "Lisbon's flagship ballroom event — categories, judges, legends, and the full vogue experience.",
    fullDescription:
      "The House of Vogue Ball is Lisbon's main ballroom competition, bringing together voguing houses from across Portugal and sometimes internationally. Categories span runway, face, realness, and more. Open to spectators — entry fee applies. Check Instagram for the next date.",
    startDate: "2026-05-15",
    timeText: "Sat 21:00 – late",
    venueName: "Culturgest",
    city: "Lisbon",
    neighborhood: "Marvila",
    category: "arts",
    audience: ["all", "qtpoc"],
    recurring: false,
    featured: true,
    sourceMonth: "2026-05",
    tags: ["ballroom", "vogue", "performance", "QTPOC", "arts"],
  },
  {
    id: "e008",
    name: "Porto Queer Film Festival",
    slug: "porto-queer-film-festival",
    shortDescription: "Annual LGBTQ film festival in Porto with international features, shorts, and Q&As.",
    fullDescription:
      "Porto's Queer Film Festival runs for a week each spring, presenting a curated selection of international LGBTQ feature films and shorts, with filmmaker Q&As, panels, and social events. One of the best queer cultural events outside Lisbon.",
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    timeText: "7 days of screenings",
    venueName: "Cinema Trindade",
    city: "Porto",
    category: "film",
    audience: ["all"],
    recurring: false,
    featured: true,
    sourceMonth: "2026-06",
    tags: ["film", "festival", "porto", "cinema", "arts"],
  },
  {
    id: "e009",
    name: "Sunday Tea Dance",
    slug: "sunday-tea-dance",
    shortDescription: "Classic Sunday afternoon tea dance at Purex — house music, vintage vibes, relaxed crowd.",
    fullDescription:
      "The Sunday afternoon tea dance at Purex is a Lisbon institution. Starting at 17:00, it draws a mixed queer crowd for house music, afternoon cocktails, and a relaxed vibe before Sunday winds down. No entry charge, genuinely welcoming.",
    startDate: "2026-04-19",
    timeText: "Sun 17:00–22:00",
    venueName: "Purex",
    venueSlug: "purex",
    city: "Lisbon",
    neighborhood: "Bairro Alto",
    category: "party",
    audience: ["all", "mixed"],
    recurring: true,
    recurringText: "Every Sunday",
    featured: false,
    sourceMonth: "2026-04",
    tags: ["tea-dance", "house", "Sunday", "relaxed"],
  },
  {
    id: "e010",
    name: "QTPOC Gathering",
    slug: "qtpoc-gathering",
    shortDescription: "Monthly safe space gathering for queer and trans people of colour in Lisbon.",
    fullDescription:
      "A monthly gathering specifically for queer and trans people of colour living in or visiting Lisbon. Created by and for the community, it rotates between venues and always centres QTPOC voices. Check Casa do Comum's Instagram for the next date and location.",
    startDate: "2026-04-25",
    timeText: "Sat 18:00–23:00",
    venueName: "Casa do Comum",
    venueSlug: "casa-do-comum",
    city: "Lisbon",
    neighborhood: "Intendente",
    category: "community",
    audience: ["qtpoc", "all"],
    recurring: true,
    recurringText: "Monthly (check socials for date)",
    featured: true,
    sourceMonth: "2026-04",
    tags: ["QTPOC", "community", "safe-space", "monthly"],
  },
  {
    id: "e011",
    name: "Fetish Night at Construction",
    slug: "fetish-night-construction",
    shortDescription: "Monthly themed fetish night — dress code enforced, dark dancefloor, no restrictions on what you wear.",
    fullDescription:
      "Construction's monthly themed fetish night is Lisbon's main event for the leather and kink community. Dress code is enforced (sportswear to leather — no street clothes). Music is dark and driving. The crowd is confident and welcoming to newcomers who respect the space.",
    startDate: "2026-04-26",
    timeText: "Sat 22:00–06:00",
    venueName: "Construction",
    venueSlug: "construction",
    city: "Lisbon",
    neighborhood: "Príncipe Real",
    category: "party",
    audience: ["gay-men"],
    recurring: true,
    recurringText: "Monthly (last Saturday)",
    featured: false,
    sourceMonth: "2026-04",
    tags: ["fetish", "leather", "kink", "gay-men", "dress-code"],
  },
  {
    id: "e012",
    name: "Queer Yoga Morning",
    slug: "queer-yoga-morning",
    shortDescription: "Sunday morning yoga class specifically for LGBTQ people — beginner friendly, outdoor in summer.",
    fullDescription:
      "A Sunday morning yoga session run by and for the LGBTQ community, currently held in Jardim do Príncipe Real in summer months and at a local studio in cooler weather. All levels welcome. Small group, low-cost, friendly.",
    startDate: "2026-04-20",
    timeText: "Sun 09:30–11:00",
    venueName: "Jardim do Príncipe Real",
    city: "Lisbon",
    neighborhood: "Príncipe Real",
    category: "sport",
    audience: ["all"],
    recurring: true,
    recurringText: "Every Sunday (weather permitting)",
    featured: false,
    sourceMonth: "2026-04",
    tags: ["yoga", "wellness", "outdoor", "Sunday", "community"],
  },
];

export const getEventBySlug = (slug: string): Event | undefined =>
  events.find((e) => e.slug === slug);

export const getFeaturedEvents = (): Event[] =>
  events.filter((e) => e.featured);

export const getUpcomingEvents = (): Event[] => {
  const now = new Date();
  return events
    .filter((e) => new Date(e.startDate) >= now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
};

export const getEventsByCity = (city: string): Event[] =>
  events.filter((e) => e.city === city);

export const getEventsByCategory = (category: string): Event[] =>
  events.filter((e) => e.category === category);

export const getThisWeekEvents = (): Event[] => {
  const now = new Date();
  const weekEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  return events.filter((e) => {
    const d = new Date(e.startDate);
    return d >= now && d <= weekEnd;
  });
};
