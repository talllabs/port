import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getGuideBySlug, guides } from "@/data/guides";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.intro,
  };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <Link
            href="/essentials"
            className="inline-flex items-center gap-1.5 text-text-muted text-xs mb-6 hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All essentials
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl" role="img" aria-hidden="true">{guide.icon}</span>
            <div className="text-xs text-primary uppercase tracking-widest font-medium">Essential Guide</div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">{guide.title}</h1>
          <p className="text-text-secondary leading-relaxed text-lg">{guide.intro}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-10">
          {guide.sections.map((section, i) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                <span className="text-primary/40 text-sm font-normal mr-2">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>

              <div
                className="text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: section.body
                    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-text-primary font-semibold'>$1</strong>")
                    .replace(/\n/g, "<br />"),
                }}
              />

              {section.callout && (
                <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20 flex gap-3">
                  <span className="text-primary text-lg flex-shrink-0" aria-hidden="true">💡</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{section.callout}</p>
                </div>
              )}

              {section.links && section.links.length > 0 && (
                <div className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}

              {i < guide.sections.length - 1 && (
                <div className="mt-8 border-t border-border-subtle" />
              )}
            </div>
          ))}
        </div>

        {/* Related links */}
        {guide.relatedLinks && guide.relatedLinks.length > 0 && (
          <div className="mt-12 p-6 rounded-2xl bg-surface-2 border border-border">
            <h3 className="font-semibold text-text-primary mb-4">Related guides</h3>
            <div className="space-y-2">
              {guide.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="mt-8">
          <Link
            href="/essentials"
            className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All essential guides
          </Link>
        </div>
      </div>
    </div>
  );
}
