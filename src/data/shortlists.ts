import { ShortList } from "@/types";

export const shortlists: ShortList[] = [
  {
    id: "sl001",
    slug: "first-night-lisbon",
    title: "First Night in Lisbon",
    subtitle: "A classic route through the queer scene",
    description:
      "A first-night route through Lisbon's queer scene, timed the way locals actually go out — dinner, a slow start in Príncipe Real, then Bairro Alto, then Finalmente for the late show.",
    vibe: "Social, all-night",
    duration: "20:00 – 05:00",
    audience: ["all", "mixed"],
    stops: [
      {
        order: 1,
        time: "21:00",
        venueName: "Bar 106",
        venueSlug: "bar-106",
        description: "Start with a drink at this small, friendly neighbourhood bar in Príncipe Real. Bar 106 opens at 21:00.",
        duration: "1 hour",
      },
      {
        order: 2,
        time: "22:00",
        venueName: "Bar Tr3s",
        venueSlug: "bar-tr3s",
        description: "Walk over to Bar Tr3s — it opens early and has outdoor seating, good for easing into the evening.",
        duration: "1 hour",
      },
      {
        order: 3,
        time: "23:00",
        venueName: "Purex",
        venueSlug: "purex",
        description: "Head to Bairro Alto and Purex — one of the few places with a dance floor before 01:30, free entry.",
        duration: "1.5 hours",
        note: "Bairro Alto gets hectic after 23:00, especially on weekends.",
      },
      {
        order: 4,
        time: "01:00",
        venueName: "Finalmente",
        venueSlug: "finalmente",
        description: "Head to Finalmente for the late show — starts around 03:00, so arrive early to get in before the 01:30/02:00 rush.",
        duration: "Until close",
        note: "Two shows run here: an early Café Concert and a late Dance Club show. This route follows the late one.",
      },
    ],
    tips: [
      "Lisbon nightlife starts late — bars don't fill until after midnight, clubs not until 01:00–02:00.",
      "Since Feb 2026, street drinking after 23:00 (Sun–Thu) or midnight (Fri/Sat/holiday eves) is restricted in Bairro Alto and around Cais do Sodré — licensed terraces are exempt.",
      "Most bars close at 02:00 in the week, 03:00 on weekends and the night before public holidays. Dance venues generally run until 06:00.",
      "Uber and Bolt are reliable and inexpensive for getting home.",
    ],
  },
  {
    id: "sl002",
    slug: "relaxed-drinks",
    title: "Relaxed Drinks Evening",
    subtitle: "A calmer night in Príncipe Real",
    description:
      "Not every night needs to be a late one. This route sticks to Príncipe Real's quieter, more spaced-out bars for a few good drinks without a full session.",
    vibe: "Relaxed, conversational",
    duration: "19:00 – 23:00",
    audience: ["all", "mixed"],
    stops: [
      {
        order: 1,
        time: "19:00",
        venueName: "Jardim do Príncipe Real",
        description: "Start with a sit in the park as the evening cools — a free, pleasant way to begin the night.",
        duration: "45 minutes",
      },
      {
        order: 2,
        time: "20:00",
        venueName: "Bar Tr3s",
        venueSlug: "bar-tr3s",
        description: "Bar Tr3s opens early and has outdoor seating — a relaxed, community-oriented bear bar, good for conversation.",
        duration: "1.5 hours",
      },
      {
        order: 3,
        time: "21:30",
        venueName: "Bar 106",
        venueSlug: "bar-106",
        description: "Move to Bar 106, a small, friendly neighbourhood bar — famous for its Sunday message nights.",
        duration: "1 hour",
      },
    ],
    tips: [
      "This route works any night of the week.",
      "Príncipe Real's bars are more widely spaced than Bairro Alto's and tend to attract a slightly older, calmer crowd.",
      "If you want to extend the night, Purex and the Bairro Alto bars are a short walk away.",
    ],
  },
  {
    id: "sl003",
    slug: "queer-womens-night",
    title: "Queer Women's Night",
    subtitle: "Making the most of Lisbon's women's spaces",
    description:
      "Lisbon doesn't have a large concentration of dedicated women's venues, but this route covers the best-known options in Bairro Alto plus a mixed, women-popular spot in Graça.",
    vibe: "Community, social",
    duration: "19:30 – 02:00",
    audience: ["lesbians", "women", "all"],
    stops: [
      {
        order: 1,
        time: "19:30",
        venueName: "Bairrus Bodega",
        venueSlug: "bairrus-bodega",
        description: "Start at this Portuguese wine bar in Bairro Alto — not an LGBTQ venue, but very popular with a queer crowd, especially women, and mostly staffed by women.",
        duration: "1.5 hours",
      },
      {
        order: 2,
        time: "21:30",
        venueName: "Purex",
        venueSlug: "purex",
        description: "Cross the road to Purex, a bar owned and largely staffed by women with a small dance floor.",
        duration: "2 hours",
      },
      {
        order: 3,
        time: "23:30",
        venueName: "Drama Bar",
        venueSlug: "drama-bar",
        description: "If there's an event on, head to Drama Bar in Intendente/Graça — check their Instagram or WhatsApp group first, as it's only open Wed–Sun.",
        duration: "Until late",
      },
    ],
    tips: [
      "Follow Siren Call Lisboa's calendar (for FLINTA+ events) and the Fabulez, Azu-Lez, and Goddess Events Instagram accounts for pop-up women's parties at other venues.",
      "Lisbon's queer women's scene leans on occasional pop-up events more than fixed venues — check social media before you go.",
    ],
  },
  {
    id: "sl004",
    slug: "dancing-late",
    title: "Dancing Late",
    subtitle: "A full night on the dancefloor",
    description:
      "Most Lisbon nightclubs don't get busy until around 01:30. This route covers an early warm-up and then the main dance venues.",
    vibe: "Late, dancefloor",
    duration: "00:00 – 06:00",
    audience: ["all", "mixed"],
    stops: [
      {
        order: 1,
        time: "00:00",
        venueName: "Purex",
        venueSlug: "purex",
        description: "Start at Purex for early dancing — it's one of the few venues with a dance floor before 01:30.",
        duration: "1 hour",
      },
      {
        order: 2,
        time: "01:30",
        venueName: "Trumps",
        venueSlug: "trumps",
        description: "Head to Trumps, the largest of Lisbon's main gay dance venues, with two dance floors and drag shows. Get in before the 02:00 rush.",
        duration: "2 hours",
      },
      {
        order: 3,
        time: "03:30",
        venueName: "Construction",
        venueSlug: "construction",
        description: "If you want something later and a bit more intense, Construction runs until 06:00 with an older, 'shirts-off' crowd.",
        duration: "Until close",
      },
    ],
    tips: [
      "Club entry is typically €15–20 and your ticket is often valid for a drink at the bar — keep hold of it.",
      "Many clubs are free entry on Thursdays outside peak season.",
      "If you're offered entry for €50, that's not a real queer venue — try somewhere else.",
    ],
  },
];

export const getShortlistBySlug = (slug: string): ShortList | undefined =>
  shortlists.find((s) => s.slug === slug);
