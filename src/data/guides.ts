import { Guide } from "@/types";

export const guides: Guide[] = [
  {
    id: "g001",
    slug: "first-time-visitor",
    title: "First-Time Visitor Essentials",
    intro: "What a first-time visitor to Lisbon's queer scene needs to know — neighbourhoods, timings, costs, and a few tourist traps worth skipping.",
    icon: "✈️",
    sections: [
      {
        id: "g001-s1",
        heading: "The Key Neighbourhoods",
        body: "Lisbon's queer scene is concentrated in three adjoining areas: Bairro Alto (busy, mixed, cheaper drinks, gets hectic after 23:00), Príncipe Real (more widely spaced gay bars, a slightly older crowd, and the three main dance clubs — Trumps, Construction and Posh), and Intendente/Graça (a newer, smaller cluster of more imaginative venues with performance spaces, which tend to open earlier and close around 01:00). There's also a trans-led community venue, Aconchego House, near Marquês de Pombal, and the Centro LGBT in Baixa.",
        callout: "Bairro Alto and Príncipe Real are about a 10-minute walk apart.",
      },
      {
        id: "g001-s2",
        heading: "When Does Everything Start?",
        body: "Everything in Portugal happens late. Restaurants get busy after 20:00. Bairro Alto bars don't fill until around 22:00. Dance clubs typically don't get busy until after 01:30, with a rush to get in before 02:00. If you arrive at a club at midnight, you'll likely be early.",
        callout: "Most nightclubs don't get going until 01:30. Purex is one of the few places to dance earlier.",
      },
      {
        id: "g001-s3",
        heading: "Alcohol Rules Are Changing",
        body: "Starting in February 2026, Lisbon banned the sale of alcohol for street drinking from 23:00–08:00 Sunday to Thursday, and midnight–08:00 on Friday, Saturday and public holiday eves (licensed terraces, home delivery, and June's Festas are exempt). This is expected to affect the street-drinking culture in Bairro Alto and around Cais do Sodré ('Pink Street') — how much remains to be seen. Porto has restricted in-venue alcohol sales to after 21:00 since 2025 (except June 23 and New Year's Eve), and Albufeira has banned public drinking after 23:00 since 2025.",
      },
      {
        id: "g001-s4",
        heading: "How Much Does It Cost?",
        body: "Most gay bars have no entry charge. Club entry typically runs €15–20, and your ticket is often valid for a drink at the bar — keep it. Many clubs are free entry on Thursdays outside peak season. If you're quoted €50 for entry, that's not a legitimate queer venue.",
      },
      {
        id: "g001-s5",
        heading: "Lisbon Tourist Traps Worth Skipping",
        body: "The 28 Tram gets overwhelmed by queues — try tram 24 (from Praça Luís de Camões) or tram 18 (from Cais do Sodré) instead. All funiculars and the Santa Justa lift have been closed since a September 2025 accident on the Glória Funicular, with no reopening date announced (only the Graça funicular still runs). The Museu Nacional de Arte Antiga has been closed since September 2025 for a refit (expected at least a year), and the Tile Museum has been closed since November 2025. The Gulbenkian Collection is scheduled to reopen on 18 July 2026 after its own refit.",
      },
    ],
    relatedLinks: [
      { label: "Transport guide", href: "/essentials/transport" },
      { label: "Nightlife timings", href: "/essentials/nightlife-timings" },
      { label: "Explore the map", href: "/map" },
    ],
  },
  {
    id: "g002",
    slug: "transport",
    title: "Transport & Getting Around",
    intro: "How to get around Lisbon day and night — metro hours, night buses, and what's currently closed.",
    icon: "🚌",
    sections: [
      {
        id: "g002-s1",
        heading: "The Metro",
        body: "The metro currently starts at 06:30; from October 2026 the first trains will start at 05:30. Metro and overground trains generally run until around 00:45. Check www.metrolisboa.pt/en before relying on it late at night.",
        callout: "The metro stops running around 00:45 — plan your night accordingly.",
      },
      {
        id: "g002-s2",
        heading: "Uber, Bolt & Taxis",
        body: "Uber and Bolt are popular, reliable and generally inexpensive in Lisbon — usually your easiest way to get around, especially late at night. Old-fashioned taxis have a reputation for occasional overcharging; if you do use one, check the meter is running.",
      },
      {
        id: "g002-s3",
        heading: "The Famous Trams and Funiculars",
        body: "The 28 Tram is charming but leads to long queues in peak season, and you often can't see out the windows if standing. Tram 24 (from Praça Luís de Camões) or tram 18 (from Cais do Sodré) offer a similar experience with far less crowding. All of Lisbon's funicular railways (elevadores) and the Santa Justa lift have been closed since a tragic accident on the Glória Funicular in September 2025, with no reopening date announced — only the modern Graça funicular still operates. Instead of the Santa Justa lift, you can walk up to Largo do Carmo and access the upper viewing platform for free.",
        callout: "Funiculars and the Santa Justa lift are closed indefinitely since September 2025.",
      },
      {
        id: "g002-s4",
        heading: "Public Toilets",
        body: "The community collective Infraestrutura Pública publishes a regularly updated Google Map of Lisbon's public toilets, plus printable pocket cards with opening times.",
      },
    ],
    relatedLinks: [
      { label: "First-time visitor guide", href: "/essentials/first-time-visitor" },
      { label: "Nightlife timings", href: "/essentials/nightlife-timings" },
    ],
  },
  {
    id: "g003",
    slug: "nightlife-timings",
    title: "Nightlife Timings",
    intro: "Lisbon's nightlife runs on its own schedule. Here's roughly when things happen, based on how bars and clubs actually operate.",
    icon: "🌙",
    sections: [
      {
        id: "g003-s1",
        heading: "The Lisbon Night Schedule",
        body: "Restaurants open for dinner around 19:00 and get busy after 20:00. Bars in Bairro Alto and Príncipe Real open from around 18:00–21:00 but don't fill until 22:00–00:00. Dance clubs typically don't get busy until after 01:30, with a rush to get in before 02:00. Most bars close at 02:00 during the week and 03:00 on weekends and the night before public holidays; dance venues generally run until 06:00.",
        callout: "Get into a club before 01:30–02:00 if you want to avoid queues.",
      },
      {
        id: "g003-s2",
        heading: "Early Options",
        body: "A handful of bars open unusually early: Bar Tr3s and Friends Bar both open at 18:00. Purex is one of the few venues with a dance floor open before the main clubs get going, from 22:00 (Wed–Sat).",
      },
      {
        id: "g003-s3",
        heading: "Entry & Tickets",
        body: "Most gay bars have no entry charge. The three main dance clubs (Trumps, Construction, Posh Club) typically charge on the door — tickets on the door only, no pre-sale or guest list at Trumps. Entry tickets can often be exchanged for a drink at the bar, so keep hold of yours. Many clubs are free entry on Thursdays outside peak season.",
      },
      {
        id: "g003-s4",
        heading: "Alcohol Rules",
        body: "Since February 2026, Lisbon has banned the sale of alcohol for street drinking from 23:00–08:00 Sunday to Thursday, and midnight–08:00 on Friday, Saturday and public holiday eves (licensed terraces, home delivery, and June's Festas are exempt). This is expected to affect the street-drinking culture in Bairro Alto and around Cais do Sodré/Pink Street. The legal purchase age for alcohol is 18. Portugal's drink-driving limit is 0.05% BAC (0.02% for drivers with under 3 years' experience and commercial drivers) — notably lower than in many other countries.",
        callout: "Lisbon's new street-drinking rules (Feb 2026) may change Bairro Alto's late-night culture — we're still waiting to see how.",
      },
    ],
    relatedLinks: [
      { label: "First-time visitor guide", href: "/essentials/first-time-visitor" },
      { label: "Transport at night", href: "/essentials/transport" },
    ],
  },
  {
    id: "g004",
    slug: "rights-and-safety",
    title: "Rights & Safety in Portugal",
    intro: "Portugal has strong constitutional protections for LGBTQ people. Here's what the source guide notes about rights, safety, and staying sensible.",
    icon: "🛡️",
    sections: [
      {
        id: "g004-s1",
        heading: "Legal Protections",
        body: "Portugal has constitutional protection from discrimination on grounds including sexual orientation, gender identity, ancestry, sex, race, and religion. Equal rights and legal protection extend to adoption, IVF, blood donation, civil marriage, and age of consent. Citizens are free to change their gender on birth certificates and other documents from age 18 (or 16 with parental consent). See www.equaldex.com/region/portugal for details.",
      },
      {
        id: "g004-s2",
        heading: "Drug Laws",
        body: "Drugs are not legal in Portugal, despite its reputation for a progressive approach. The law focuses on supply rather than possession — if found with a personal amount of most drugs, you'll likely get a brief lecture rather than prosecution. But supplying, gifting, or selling drugs (including buying to share with a partner or friend) can lead to arrest and serious consequences. Street sellers offering 'hashish, cocaine, pills' in central Lisbon are typically selling oregano or talcum powder, not real drugs.",
      },
      {
        id: "g004-s3",
        heading: "If Something Happens",
        body: "Police emergency number: 112. ILGA Portugal runs the Centro LGBT and can connect you with legal assistance if you experience discrimination.",
        links: [
          { label: "ILGA Portugal", href: "https://ilga-portugal.pt" },
        ],
      },
      {
        id: "g004-s4",
        heading: "Nightclub Age Limits",
        body: "The legal age for entering a nightclub is 16 (18 in venues where sex occurs on the premises) — though some venues restrict to 18+ on busy nights. Age-checking is inconsistent in practice.",
      },
    ],
    relatedLinks: [
      { label: "Trans-friendly spaces", href: "/essentials/trans-friendly" },
      { label: "Health services", href: "/explore?category=health" },
      { label: "ILGA Portugal listing", href: "/venues/ilga-portugal" },
    ],
  },
  {
    id: "g005",
    slug: "trans-friendly",
    title: "Trans & Non-Binary Friendly Spaces",
    intro: "Spaces and services in Lisbon specifically noted as welcoming to trans and non-binary people in the source guide.",
    icon: "⚧️",
    sections: [
      {
        id: "g005-s1",
        heading: "Legal Framework",
        body: "Since 2015, people in Portugal are free to change their gender on birth certificates and other documents from age 18 (or 16 with parental consent) without medical requirements.",
      },
      {
        id: "g005-s2",
        heading: "Community Venues & Services",
        body: "Aconchego House is a non-profit, trans-led community venue near Marquês de Pombal with a café/bar and co-working space. GAT Intendente is a community health centre specifically serving trans/non-binary people. SaunApolo56 explicitly welcomes a mixed male/female/trans clientele and was opened by a trans owner. Damas in Graça is noted as fully embracing trans and gender non-conformity, though it isn't an LGBTQ-specific venue.",
      },
      {
        id: "g005-s3",
        heading: "Healthcare",
        body: "GAT Intendente offers rapid, anonymous, free peer screening for HIV, syphilis and hepatitis, PrEP counselling, and referral to the National Health Service, specifically for trans/non-binary people, sex workers, and people in migration situations — weekdays 13:00–20:00, booking required.",
      },
      {
        id: "g005-s4",
        heading: "Support Networks",
        body: "ILGA Portugal's Centro LGBT hosts activities and support groups (mostly in Portuguese). Rede ex aequo is the national youth network for LGBTQ people aged 16–30, with local centres across the country.",
      },
    ],
    relatedLinks: [
      { label: "Health services", href: "/explore?category=health" },
      { label: "Rights & safety guide", href: "/essentials/rights-and-safety" },
      { label: "Community organisations", href: "/explore?category=community" },
    ],
  },
  {
    id: "g006",
    slug: "health-services",
    title: "Health & Sexual Wellbeing",
    intro: "Free and low-cost sexual health services in Lisbon, as listed in the source guide.",
    icon: "🏥",
    sections: [
      {
        id: "g006-s1",
        heading: "Checkpoint LX",
        body: "Checkpoint LX is a community-based sexual health testing and counselling centre for men who have sex with men, run by GAT and staffed entirely by bilingual (Portuguese/English) professionals from queer communities. Offers screening, treatment, and access support for PrEP and mpox vaccination. Women and straight people can use the service but can't book appointments.",
      },
      {
        id: "g006-s2",
        heading: "GAT Intendente",
        body: "GAT Intendente is a community health centre for trans/non-binary people, sex workers, people in migration situations, people with HIV, and people who are homeless — open to everyone. Services include free HIV/syphilis/hepatitis screening, PrEP counselling, and referral to the National Health Service. Weekdays 13:00–20:00, booking required.",
      },
      {
        id: "g006-s3",
        heading: "Accessing PrEP",
        body: "PrEP requests can be made at HIV testing centres, health centres, or hospitals with a PrEP consultation — appointments can take up to 6 months. If you're struggling to get a first appointment, try another organisation. Those with private health insurance can access PrEP consultations at TrofaSaúde hospitals. Prescribed medicines are covered by the same SNS costs.",
      },
      {
        id: "g006-s4",
        heading: "Other GAT Centres",
        body: "GAT also runs centres in Mouraria (for people who use drugs), for migrants of African origin (GAT Afrik), and in Almada and Setúbal — all offering free, confidential screening and support.",
      },
    ],
    relatedLinks: [
      { label: "Checkpoint LX listing", href: "/venues/checkpointlx" },
      { label: "GAT Intendente listing", href: "/venues/gat-intendente" },
      { label: "Rights & safety", href: "/essentials/rights-and-safety" },
    ],
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);
