import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View all",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex items-end justify-between mb-6 ${className}`}>
      <div>
        <h2 className="text-xl font-bold text-text-primary">{title}</h2>
        {subtitle && (
          <p className="text-text-muted text-sm mt-1">{subtitle}</p>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors flex-shrink-0 ml-4"
        >
          {viewAllLabel}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
