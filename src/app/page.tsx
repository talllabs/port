"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Map, Calendar, Compass, Heart, Shield, Sun, Users, Zap } from "lucide-react";
import VenueCard from "@/components/ui/VenueCard";
import EventCard from "@/components/ui/EventCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { getFeaturedVenues } from "@/data/venues";
import { getFeaturedEvents } from "@/data/events";

const quickActions = [
  {
    href: "/events",
    icon: Calendar,
    label: "What's On",
    sublabel: "Tonight & this week",
    color: "from-pink-900/40 to-pink-900/10 border-pink-800/30 hover:border-pink-700/50",
    iconColor: "text-pink-400",
  },
  {
    href: "/explore?category=bar",
    icon: Zap,
    label: "Go Out",
    sublabel: "Bars & clubs",
    color: "from-purple-900/40 to-purple-900/10 border-purple-800/30 hover:border-purple-700/50",
    iconColor: "text-purple-400",
  },
  {
    href: "/explore?category=beach",
    icon: Sun,
    label: "Beaches",
    sublabel: "Queer-friendly spots",
    color: "from-cyan-900/40 to-cyan-900/10 border-cyan-800/30 hover:border-cyan-700/50",
    iconColor: "text-cyan-400",
  },
  {
    href: "/explore?category=health",
    icon: Heart,
    label: "Health",
    sublabel: "Services & support",
    color: "from-green-900/40 to-green-900/10 border-green-800/30 hover:border-green-700/50",
    iconColor: "text-green-400",
  },
  {
    href: "/explore?category=community",
    icon: Users,
    label: "Meet People",
    sublabel: "Community spaces",
    color: "from-blue-900/40 to-blue-900/10 border-blue-800/30 hover:border-blue-700/50",
    iconColor: "text-blue-400",
  },
  {
    href: "/essentials/rights-and-safety",
    icon: Shield,
    label: "Stay Safe",
    sublabel: "Rights & info",
    color: "from-amber-900/40 to-amber-900/10 border-amber-800/30 hover:border-amber-700/50",
    iconColor: "text-amber-400",
  },
  {
    href: "/regions",
    icon: Compass,
    label: "Beyond Lisbon",
    sublabel: "Porto, Algarve & more",
    color: "from-orange-900/40 to-orange-900/10 border-orange-800/30 hover:border-orange-700/50",
    iconColor: "text-orange-400",
  },
  {
    href: "/map",
    icon: Map,
    label: "Explore Map",
    sublabel: "Spatial discovery",
    color: "from-fuchsia-900/40 to-fuchsia-900/10 border-fuchsia-800/30 hover:border-fuchsia-700/50",
    iconColor: "text-fuchsia-400",
  },
];

const neighborhoods = [
  { name: "Príncipe Real", tag: "Gay village", count: "12 venues" },
  { name: "Bairro Alto", tag: "Nightlife", count: "8 venues" },
  { name: "Mouraria", tag: "Community", count: "5 venues" },
  { name: "Cais do Sodré", tag: "Mixed scene", count: "6 venues" },
  { name: "Chiado", tag: "Arts & cocktails", count: "4 venues" },
  { name: "Intendente", tag: "Emerging", count: "3 venues" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function HomePage() {
  const featuredVenues = getFeaturedVenues().slice(0, 6);
  const featuredEvents = getFeaturedEvents().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #e879f9 0%, #818cf8 50%, transparent 80%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Updated April 2026 · Lisbon & Portugal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-none"
          >
            <span className="text-text-primary">The queer guide to</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #e879f9 0%, #a78bfa 50%, #818cf8 100%)",
              }}
            >
              Lisbon & Portugal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Venues, events, beaches, health services and essential info —
            curated for the LGBTQ community. Updated monthly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-accent transition-colors shadow-glow-pink"
            >
              Explore the guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/map"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-2 border border-border text-text-primary font-medium text-sm hover:border-primary/30 hover:bg-surface-3 transition-colors"
            >
              <Map className="w-4 h-4 text-primary" />
              Open the map
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
        </motion.div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">What are you looking for?</h2>
          <p className="text-text-muted text-sm">Jump straight to what you need</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {quickActions.map((action) => (
            <motion.div key={action.href} variants={item}>
              <Link
                href={action.href}
                className={`group block p-4 rounded-2xl bg-gradient-to-br border transition-all duration-200 hover:scale-[1.02] ${action.color}`}
              >
                <action.icon className={`w-5 h-5 mb-3 ${action.iconColor}`} />
                <div className="font-semibold text-text-primary text-sm">{action.label}</div>
                <div className="text-text-muted text-xs mt-0.5">{action.sublabel}</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Events this month"
            subtitle="Highlights from the April 2026 programme"
            viewAllHref="/events"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURED VENUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Essential venues"
            subtitle="The places worth knowing about"
            viewAllHref="/explore"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredVenues.map((venue, i) => (
              <VenueCard key={venue.id} venue={venue} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* MAP TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/map"
            className="group block rounded-3xl border border-border bg-surface-2 overflow-hidden hover:border-primary/30 transition-all duration-300"
          >
            <div className="relative h-64 sm:h-80 bg-gradient-to-br from-surface-3 to-background flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, rgba(232,121,249,0.3) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(129,140,248,0.2) 0%, transparent 40%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {[
                { x: "30%", y: "45%" },
                { x: "45%", y: "38%" },
                { x: "52%", y: "55%" },
                { x: "60%", y: "42%" },
                { x: "38%", y: "60%" },
              ].map((pin, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary border-2 border-background shadow-glow-pink animate-glow-pulse"
                  style={{ left: pin.x, top: pin.y, animationDelay: `${i * 0.4}s` }}
                />
              ))}

              <div className="relative z-10 text-center px-4">
                <Map className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  Explore the Lisbon map
                </h2>
                <p className="text-text-secondary text-sm max-w-md mx-auto">
                  Browse queer venues by area, filter by category, and discover what&apos;s nearby.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Open interactive map
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Browse by neighbourhood"
            subtitle="Lisbon's queer geography"
            viewAllHref="/explore"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {neighborhoods.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <Link
                  href={`/explore?neighborhood=${encodeURIComponent(n.name)}`}
                  className="group block p-4 rounded-xl bg-surface-2 border border-border hover:border-primary/20 hover:bg-surface-3 transition-all duration-200 text-center"
                >
                  <div className="font-semibold text-text-primary text-sm mb-1 group-hover:text-primary transition-colors">
                    {n.name}
                  </div>
                  <div className="text-text-muted text-xs">{n.tag}</div>
                  <div className="text-primary/60 text-[10px] mt-1">{n.count}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ESSENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Essential info"
            subtitle="Everything a first-time visitor needs"
            viewAllHref="/essentials"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { slug: "first-time-visitor", title: "First-Time Visitor", desc: "Neighbourhoods, timings, costs, and the vibe.", icon: "✈️" },
              { slug: "transport", title: "Transport & Getting Around", desc: "Metro, night buses, Uber, taxis, and late-night logistics.", icon: "🚌" },
              { slug: "nightlife-timings", title: "Nightlife Timings", desc: "When does everything actually start? (Later than you think.)", icon: "🌙" },
              { slug: "rights-and-safety", title: "Rights & Safety", desc: "Portugal's legal protections and practical safety info.", icon: "🛡️" },
              { slug: "health-services", title: "Health Services", desc: "Free HIV testing, PrEP, STI checks, and harm reduction.", icon: "🏥" },
              { slug: "trans-friendly", title: "Trans & Non-Binary", desc: "Specifically welcoming spaces and services.", icon: "⚧️" },
            ].map((guide, i) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <Link
                  href={`/essentials/${guide.slug}`}
                  className="group flex gap-3 p-4 rounded-xl bg-surface-2 border border-border hover:border-primary/20 hover:bg-surface-3 transition-all duration-200"
                >
                  <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">{guide.icon}</span>
                  <div>
                    <div className="font-semibold text-text-primary text-sm mb-1 group-hover:text-primary transition-colors">{guide.title}</div>
                    <div className="text-text-muted text-xs leading-relaxed">{guide.desc}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SHORT LIST TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-gradient-to-br from-surface-2 to-surface overflow-hidden p-8 sm:p-12"
        >
          <div className="max-w-xl">
            <div className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
              The Short List
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Curated nights out for every mood
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Not sure where to start? We&apos;ve built four mini planner flows — from your first night in Lisbon to a full-on late session.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["First Night in Lisbon", "Relaxed Drinks", "Queer Women's Night", "Dancing Late"].map((plan) => (
                <span key={plan} className="text-xs px-3 py-1.5 rounded-full bg-surface-3 border border-border text-text-secondary">
                  {plan}
                </span>
              ))}
            </div>
            <Link
              href="/short-list"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-accent transition-colors"
            >
              View the Short List
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
