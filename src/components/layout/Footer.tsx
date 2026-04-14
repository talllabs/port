import Link from "next/link";
import { MapPin, Heart } from "lucide-react";

const footerLinks = [
  {
    heading: "Discover",
    links: [
      { label: "Explore All", href: "/explore" },
      { label: "Events", href: "/events" },
      { label: "Map", href: "/map" },
      { label: "Short Lists", href: "/short-list" },
    ],
  },
  {
    heading: "Regions",
    links: [
      { label: "Lisbon", href: "/regions/lisbon" },
      { label: "Porto", href: "/regions/porto" },
      { label: "Algarve", href: "/regions/algarve" },
      { label: "Elsewhere", href: "/regions/elsewhere" },
    ],
  },
  {
    heading: "Essentials",
    links: [
      { label: "First-Time Visitor", href: "/essentials/first-time-visitor" },
      { label: "Transport", href: "/essentials/transport" },
      { label: "Nightlife Timings", href: "/essentials/nightlife-timings" },
      { label: "Rights & Safety", href: "/essentials/rights-and-safety" },
      { label: "Health Services", href: "/essentials/health-services" },
      { label: "Trans-Friendly", href: "/essentials/trans-friendly" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-text-primary">
                Alex&apos;s<span className="text-primary"> Long List</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              The curated LGBTQ guide to Lisbon and Portugal. Updated monthly. No fluff.
            </p>
          </div>

          {/* Nav links */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Alex&apos;s Long List. Content curated with{" "}
            <Heart className="inline w-3 h-3 text-primary" /> for the community.
          </p>
          <p className="text-text-muted text-xs text-center sm:text-right max-w-sm">
            This guide is updated monthly. Always verify opening hours and event details
            directly with venues.
          </p>
        </div>
      </div>
    </footer>
  );
}
