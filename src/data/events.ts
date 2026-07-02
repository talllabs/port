import { Event } from "@/types";

// Sourced from Alex's LONG LIST — the Queer Events Calendar section and the
// venue listings, which note recurring nights and specific dated events.
// Only events with dates or recurrence patterns confirmed in the source
// document are listed here. Recurring "next date" fields are calculated
// forward from the source's stated pattern (e.g. "first Sunday of the month").

export const events: Event[] = [
  {
    id: "e001",
    name: "SUNGAY FUNDAY at SIMO's Quiosque",
    slug: "sungay-funday",
    shortDescription: "Outdoor sunset cocktails and DJ party at a hidden miradouro above Anjos — usually first Sunday of the month.",
    fullDescription:
      "An irregular (monthly-ish) outdoor sunset cocktail and DJ party at SIMO's quiosque, at the Miradouro do Monte Agudo — hidden away from the tourist bustle above Anjos Metro. Free entry. Usually held the first Sunday of the month, 15:00–21:00. Follow @simos_lisboa on Instagram to confirm each date.",
    startDate: "2026-07-05",
    timeText: "Sun 15:00–21:00",
    venueName: "Miradouro do Monte Agudo",
    city: "Lisbon",
    neighborhood: "Anjos",
    category: "party",
    audience: ["all", "mixed"],
    recurring: true,
    recurringText: "Monthly-ish, usually first Sunday",
    featured: true,
    sourceMonth: "2026-07",
    tags: ["outdoor", "sunset", "dj", "free"],
  },
  {
    id: "e002",
    name: "Free Cake Sunday at Bar Tr3s",
    slug: "bar-tr3s-free-cake",
    shortDescription: "Weekly free cake at Príncipe Real's community-oriented bear bar, every Sunday evening.",
    fullDescription:
      "Bar Tr3s serves free cake every Sunday, 18:00–20:00. The bar opens early most days and has outdoor terrace seating — a relaxed way to start a Sunday evening in Príncipe Real.",
    startDate: "2026-07-05",
    timeText: "Sun 18:00–20:00",
    venueName: "Bar Tr3s",
    venueSlug: "bar-tr3s",
    city: "Lisbon",
    neighborhood: "Príncipe Real",
    category: "community",
    audience: ["all", "gay-men", "mixed"],
    recurring: true,
    recurringText: "Every Sunday",
    featured: false,
    sourceMonth: "2026-07",
    tags: ["free", "community", "Sunday"],
  },
  {
    id: "e003",
    name: "Queer Karaoke at Aconchego House",
    slug: "aconchego-queer-karaoke",
    shortDescription: "Weekly Queer Karaoke night at the trans-led community venue near Marquês de Pombal.",
    fullDescription:
      "Aconchego House hosts Queer Karaoke every Friday, part of a regular programme that also includes dance classes, meditation groups, board game nights, and a monthly Amateur Drag Show. Check their website calendar for the exact weekly schedule.",
    startDate: "2026-07-03",
    timeText: "Fri, check aconchego.house/collab for time",
    venueName: "Aconchego House",
    venueSlug: "aconchego-house",
    city: "Lisbon",
    neighborhood: "Marquês de Pombal",
    category: "community",
    audience: ["all", "trans", "non-binary"],
    recurring: true,
    recurringText: "Every Friday",
    externalUrl: "https://www.aconchego.house/collab",
    featured: true,
    sourceMonth: "2026-07",
    tags: ["karaoke", "community", "trans-led"],
  },
  {
    id: "e004",
    name: "Finalmente Dance Club Late Show",
    slug: "finalmente-late-show",
    shortDescription: "Finalmente's late-night drag show, running seven nights a week — the show starts around 03:00.",
    fullDescription:
      "Finalmente runs two drag shows a night, seven nights a week: the early 'Café Concert' (19:00–00:30, show starts 22:30) and the late 'Finalmente Dance Club' (01:00–06:00, show starts 03:00). Book ahead in summer — it gets very crowded after 01:30 on weekends.",
    startDate: "2026-07-04",
    timeText: "Daily 01:00–06:00 (show 03:00); early show 19:00–00:30 (show 22:30)",
    venueName: "Finalmente",
    venueSlug: "finalmente",
    city: "Lisbon",
    neighborhood: "Príncipe Real",
    category: "drag",
    audience: ["all", "gay-men", "mixed"],
    recurring: true,
    recurringText: "Every night",
    externalUrl: "https://www.finalmenteclub.com",
    featured: true,
    sourceMonth: "2026-07",
    tags: ["drag", "show", "nightly"],
  },
  {
    id: "e005",
    name: "Weekend Dance Nights at Drama Bar",
    slug: "drama-bar-weekend-nights",
    shortDescription: "Live music and dance nights in the Intendente/Graça bar's basement performance space.",
    fullDescription:
      "Drama Bar hosts early live music and/or dance nights on Friday and Saturday, plus occasional burlesque/drag shows, dinners, film nights, and drag bingo in its basement. Open Wednesday to Sunday, 19:00–01:00. Note: there are two other bars in Lisbon called 'Drama Bar' — check you have the right address.",
    startDate: "2026-07-03",
    endDate: "2026-07-04",
    timeText: "Fri–Sat, from 19:00",
    venueName: "Drama Bar",
    venueSlug: "drama-bar",
    city: "Lisbon",
    neighborhood: "Intendente/Graça",
    category: "party",
    audience: ["all", "mixed", "women"],
    recurring: true,
    recurringText: "Most Fridays and Saturdays",
    featured: false,
    sourceMonth: "2026-07",
    tags: ["live-music", "dance", "mixed"],
  },
  {
    id: "e006",
    name: "Gulbenkian Museum Reopens",
    slug: "gulbenkian-reopening",
    shortDescription: "The Gulbenkian Collection reopens on July 18, 2026 after a major refit.",
    fullDescription:
      "The Gulbenkian Collection — with its remarkable and varied art collection, calm galleries, gardens and café — has been closed for a major refit and is scheduled to reopen on 18 July 2026.",
    startDate: "2026-07-18",
    timeText: "Reopens 18 July",
    venueName: "Gulbenkian Museum",
    city: "Lisbon",
    category: "arts",
    audience: ["all"],
    recurring: false,
    externalUrl: "https://gulbenkian.pt/museu/en/news/gulbenkian-museum-closes-for-renovation-work",
    featured: true,
    sourceMonth: "2026-07",
    tags: ["museum", "arts", "reopening"],
  },
  {
    id: "e007",
    name: "Mr Bear Europe 2026",
    slug: "mr-bear-europe-2026",
    shortDescription: "Ursos.pt hosts the Mr Bear Europe 2026 competition in Portugal this July.",
    fullDescription:
      "Ursos.pt — 'The Bear Association of Portugal' — will host the Mr Bear Europe 2026 competition in July 2026. Ursos.pt celebrates, supports, and strengthens the LGBTQ+ bear community, promoting visibility, inclusion, and well-being. Follow their social media for exact dates and venues.",
    startDate: "2026-07-01",
    timeText: "July 2026 — exact dates via Ursos.pt",
    venueName: "Various venues, Lisbon",
    city: "Lisbon",
    category: "party",
    audience: ["gay-men", "all"],
    recurring: false,
    featured: true,
    sourceMonth: "2026-07",
    tags: ["bear", "competition", "community"],
  },
  {
    id: "e008",
    name: "Casa do Comum Programme",
    slug: "casa-do-comum-programme",
    shortDescription: "Films, club nights, performances, live music, and workshops with a strong queer slant, Wed–Sun.",
    fullDescription:
      "Casa do Comum, a cultural space in Bairro Alto with a basement bar, runs a Wednesday–Sunday programme (from 15:00) of films, club nights, performances, live music, workshops, book readings, exhibitions and discussions — always worth checking, even though it's not a specifically LGBTQ space.",
    startDate: "2026-07-02",
    timeText: "Wed–Sun from 15:00",
    venueName: "Casa do Comum",
    venueSlug: "casa-do-comum",
    city: "Lisbon",
    neighborhood: "Bairro Alto",
    category: "arts",
    audience: ["all"],
    recurring: true,
    recurringText: "Wednesday to Sunday",
    featured: false,
    sourceMonth: "2026-07",
    tags: ["arts", "culture", "queer-friendly"],
  },
  {
    id: "e009",
    name: "Queer Porto Film Festival",
    slug: "queer-porto-film-festival",
    shortDescription: "Screens across three Porto cinemas over a week each November, with debates and parties.",
    fullDescription:
      "The Queer Porto Film Festival shows at three different cinemas over a week each October/November (3–7 November 2026), plus associated cultural events, debates and parties. Venues: Batalha Centro de Cinema, Reitoria da Universidade do Porto, and Passos Manuel.",
    startDate: "2026-11-03",
    endDate: "2026-11-07",
    timeText: "3–7 November 2026",
    venueName: "Batalha Centro de Cinema and others",
    city: "Porto",
    category: "film",
    audience: ["all"],
    recurring: false,
    externalUrl: "https://www.queerporto.pt/en",
    featured: false,
    sourceMonth: "2026-07",
    tags: ["film", "festival", "porto"],
  },
  {
    id: "e010",
    name: "Weekend Club Nights: Trumps, Construction, Posh",
    slug: "weekend-club-nights",
    shortDescription: "Lisbon's three main gay dance venues run their regular weekend nights — get in before the 02:00 rush.",
    fullDescription:
      "Trumps (Thu–Sat + eve of holidays, 23:45–06:00), Construction (Fri–Sat + eve of holidays, 23:00–06:00) and Posh Club (Sat, 23:45–06:00) are Lisbon's three main queer dance venues, each running weekly through summer. Dance floors don't fill until around 01:30 — get in before the 02:00 rush.",
    startDate: "2026-07-03",
    timeText: "Thu–Sat nights, see individual venues for hours",
    venueName: "Trumps / Construction / Posh Club",
    city: "Lisbon",
    neighborhood: "Príncipe Real",
    category: "party",
    audience: ["gay-men", "mixed", "all"],
    recurring: true,
    recurringText: "Every weekend",
    featured: true,
    sourceMonth: "2026-07",
    tags: ["dance", "club", "weekend"],
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
