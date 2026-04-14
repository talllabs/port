import { Guide } from "@/types";

export const guides: Guide[] = [
  {
    id: "g001",
    slug: "first-time-visitor",
    title: "First-Time Visitor Essentials",
    intro: "Everything a first-time visitor to Lisbon's queer scene needs to know — from the neighbourhoods to the timings, the costs to the customs.",
    icon: "✈️",
    sections: [
      {
        id: "g001-s1",
        heading: "The Key Neighbourhoods",
        body: "Lisbon's queer scene is concentrated in two main areas: **Príncipe Real** (the gay village — bars, clubs, saunas, health services) and **Bairro Alto** (the wider nightlife district — more mixed, very lively, cheaper drinks). Mouraria and Intendente have emerging queer community spaces. Most venues are walkable between these areas.",
        callout: "You can walk between Príncipe Real and Bairro Alto in about 10 minutes.",
      },
      {
        id: "g001-s2",
        heading: "When Does Everything Start?",
        body: "Lisbon is very late by northern European standards. Bars open around 22:00 but don't fill until midnight. Clubs genuinely don't start until 01:00–02:00. If you arrive at a club at midnight, you will be early. Pre-drink at bars in Bairro Alto or Príncipe Real from around 22:00–01:00 first.",
        callout: "Don't show up to a club before 01:00. Really.",
      },
      {
        id: "g001-s3",
        heading: "Getting Around at Night",
        body: "The metro closes around 01:00. After that, your options are: Uber (works well, widely used), Bolt (often cheaper), taxis (avoid unlicensed ones), or walking (the central areas are compact and walkable). Walking between Príncipe Real, Bairro Alto, and Chiado is easy. Buses run all night but are infrequent.",
        callout: "Uber and Bolt are your friends after 01:00. Have the app ready.",
      },
      {
        id: "g001-s4",
        heading: "How Much Does It Cost?",
        body: "Lisbon is more affordable than most western European capitals. A beer in a bar costs €2–4. Cocktails €8–12. Club entry ranges from free to €15 depending on the night. Most gay bars have no entry charge. Tipping is not mandatory but appreciated — rounding up or leaving €1 on bar orders is fine.",
      },
      {
        id: "g001-s5",
        heading: "What's the Vibe Like?",
        body: "Lisbon's queer scene is generally open, mixed, and relaxed. The Príncipe Real bars tend toward a more gay male-dominated crowd but are welcoming. Bairro Alto is very mixed. There is a growing, vibrant QTPOC scene centred on community spaces. The overall atmosphere is warm and unpretentious.",
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
    intro: "How to get around Lisbon day and night — from the metro to late-night Uber, public toilets to tram tourist traps.",
    icon: "🚌",
    sections: [
      {
        id: "g002-s1",
        heading: "The Metro",
        body: "Lisbon's metro is clean, reliable, and covers the main areas. It runs from approximately 06:30 to 01:00. Four lines: Yellow (useful for Rato/Marquês), Green (Cais do Sodré/Baixa), Blue (airport and Baixa), Red (Oriente). A single ticket costs €1.61; a day pass €6.80. The Viva Viagem card (€0.50) is rechargeable.",
        callout: "The metro stops at 01:00. Plan your night accordingly.",
      },
      {
        id: "g002-s2",
        heading: "Night Buses",
        body: "Several night bus routes (numbered 200+) run from Cais do Sodré throughout the night. They are infrequent, can be crowded, and routes aren't always intuitive for visitors. Useful as a backup, but Uber is generally faster after midnight.",
      },
      {
        id: "g002-s3",
        heading: "Uber & Bolt",
        body: "Both Uber and Bolt work well throughout Lisbon. Uber is slightly more reliable; Bolt often cheaper. Surge pricing applies Friday/Saturday nights after clubs empty (typically 05:00–07:00). During surge periods, consider waiting 15–20 minutes or walking part of the way.",
      },
      {
        id: "g002-s4",
        heading: "The Famous Trams",
        body: "The historic tram 28 is a tourist attraction but is notorious for pickpocketing and overcrowding. If you actually want to travel, use the metro or buses. If you want the experience, go early morning on weekdays.",
        callout: "Tram 28 is a tourist trap for actual transport. Use the metro.",
      },
      {
        id: "g002-s5",
        heading: "Public Toilets",
        body: "Public toilets in Lisbon are scarce and not always reliable. Most bars and restaurants will let you use theirs if you buy something. There are public toilets at major metro stations, near Praça do Comércio, and at Parque Eduardo VII. Some require a small coin (€0.20–0.50).",
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
    intro: "Lisbon's nightlife runs on its own time. Here's exactly when things happen so you don't waste a night showing up too early.",
    icon: "🌙",
    sections: [
      {
        id: "g003-s1",
        heading: "The Lisbon Night Schedule",
        body: "20:00–21:00: Dinner. 22:00–00:00: Pre-drinks in Bairro Alto or Príncipe Real bars. 00:00–01:00: Streets fill, bars peak. 01:00–02:00: Move to clubs. 02:00–04:00: Club peak hours. 04:00–07:00: After-hours clubs, second wind. 08:00+: Breakfast at a pastelaria.",
        callout: "The golden hour for clubs is 02:00–05:00. Don't miss it by going too early.",
      },
      {
        id: "g003-s2",
        heading: "Weekly Pattern",
        body: "Thursday is the big student night — younger crowd, cheaper drinks. Friday is very popular — mixed age, busy from midnight. Saturday is the main night — start later, expect queues at clubs. Sunday has a quieter but committed late crowd; the Sunday afternoon tea dance at Purex is a local institution.",
      },
      {
        id: "g003-s3",
        heading: "Entry & Queues",
        body: "Most gay bars have no entry charge. Main clubs (Finalmente, Trumps, Construction) charge €5–15 depending on the night. Queues at clubs form after 02:00 on Saturdays. Having tickets in advance helps. Dress codes are generally relaxed except at specific fetish nights.",
      },
      {
        id: "g003-s4",
        heading: "Alcohol Rules",
        body: "Drinking in public is legal in Portugal. Beer and wine can be bought in supermarkets and convenience stores at any hour. Bars and clubs are licensed until 04:00–06:00 depending on their licence. Some nightclubs have after-hours licences. Minimum drinking age is 18.",
        callout: "Supermarket beers are €0.80–1.50. Stock up before going out.",
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
    intro: "Portugal is one of Europe's most LGBTQ-friendly countries. Here's what you need to know about rights, safety, and staying smart.",
    icon: "🛡️",
    sections: [
      {
        id: "g004-s1",
        heading: "Legal Protections",
        body: "Portugal has some of the strongest LGBTQ legal protections in Europe. Same-sex marriage has been legal since 2010. Co-adoption and full adoption rights since 2016. Legal gender recognition without medical requirements since 2018. Conversion therapy banned. Non-binary gender recognition is in progress.",
      },
      {
        id: "g004-s2",
        heading: "General Safety",
        body: "Lisbon and Porto are generally very safe for queer people, including same-sex couples being publicly affectionate. The main tourist areas and queer neighbourhoods are welcoming. Rural Portugal and some suburbs are more conservative — use your own judgement.",
        callout: "Lisbon is one of Europe's safest cities for queer travellers.",
      },
      {
        id: "g004-s3",
        heading: "If Something Happens",
        body: "Police emergency: 112. The PSP (Polícia de Segurança Pública) are generally professional in Lisbon. ILGA Portugal offers support and can connect you with legal assistance if you experience discrimination. Some staff speak English in central Lisbon.",
        links: [
          { label: "ILGA Portugal", href: "https://ilga-portugal.pt" },
          { label: "Emergency contacts", href: "/essentials/safety-contacts" },
        ],
      },
      {
        id: "g004-s4",
        heading: "Trans & Non-Binary Travellers",
        body: "Portugal's gender recognition law is progressive. Trans travellers should be aware that ID checks at clubs match your presented gender without issue in Lisbon's queer spaces. The trans community has an active support network through ILGA and Rede ex aequo. See our trans-friendly spaces guide for specific recommendations.",
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
    intro: "Specifically welcoming spaces for trans and non-binary people in Lisbon and Portugal.",
    icon: "⚧️",
    sections: [
      {
        id: "g005-s1",
        heading: "Overall Climate",
        body: "Lisbon's queer community has a strong trans presence and trans-affirming culture in most queer spaces. Portugal's legal framework is one of Europe's most progressive for gender recognition. That said, trans experiences in non-queer spaces, particularly outside major cities, can vary significantly.",
      },
      {
        id: "g005-s2",
        heading: "Recommended Venues & Spaces",
        body: "Casa do Comum consistently centres trans voices and is explicitly trans-welcoming. ILGA Portugal has a dedicated trans team. CheckpointLX provides non-judgmental sexual health services for trans people. Água no Bico is explicitly trans-inclusive and non-binary affirming.",
      },
      {
        id: "g005-s3",
        heading: "Healthcare",
        body: "The UTIG (Unidade de Identidade de Género) at Hospital Santa Maria provides trans-specific healthcare through the public system — waiting lists exist. Private gender medicine is available. GAT and CheckpointLX provide non-judgmental sexual health services. For PrEP or other medication, pharmacies generally dispense without issue with a valid prescription.",
      },
      {
        id: "g005-s4",
        heading: "Support Networks",
        body: "ILGA Portugal has a trans rights and support team. Rede ex aequo is the national LGBTQ youth network with strong non-binary and trans visibility. Trans Murmurations is a local peer support group. Check their social media for meeting times.",
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
    intro: "Free and low-cost health services for LGBTQ people in Lisbon — HIV testing, PrEP, STI checks, and more.",
    icon: "🏥",
    sections: [
      {
        id: "g006-s1",
        heading: "HIV Testing",
        body: "Free, rapid HIV testing is available at GAT Lisboa and CheckpointLX. Both are confidential, non-judgmental, and have English-speaking staff. Results in 20 minutes. No appointment needed at GAT (walk-in). CheckpointLX prefers appointments but accepts walk-ins.",
      },
      {
        id: "g006-s2",
        heading: "PrEP in Portugal",
        body: "PrEP is available free through the public health system for those who qualify. CheckpointLX can navigate you through the process and provide referrals. Private PrEP costs approximately €40–60/month. GAT can assist with access and information.",
      },
      {
        id: "g006-s3",
        heading: "STI Testing",
        body: "GAT and CheckpointLX both offer comprehensive STI testing including chlamydia, gonorrhoea, syphilis, and hepatitis. Free or low-cost. Results can take a few days for full panels. Bring ID if possible.",
      },
      {
        id: "g006-s4",
        heading: "Harm Reduction",
        body: "GAT provides harm reduction services including safer drug use information, testing strips, and naloxone training. Neither GAT nor CheckpointLX will judge you — they exist to keep the community healthy. Drug checking services available at some events via DrogasNáoBigotas.",
        callout: "Use harm reduction services — they exist precisely for this community.",
      },
    ],
    relatedLinks: [
      { label: "GAT Lisboa listing", href: "/venues/gat-lisboa" },
      { label: "CheckpointLX listing", href: "/venues/checkpointlx" },
      { label: "Rights & safety", href: "/essentials/rights-and-safety" },
    ],
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);
