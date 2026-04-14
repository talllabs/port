"use client";

import { X } from "lucide-react";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onToggle: () => void;
  onRemove?: () => void;
  count?: number;
}

export default function FilterChip({
  label,
  active = false,
  onToggle,
  onRemove,
  count,
}: FilterChipProps) {
  return (
    <button
      onClick={onToggle}
      className={`filter-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
        active
          ? "bg-primary/15 border-primary/40 text-primary"
          : "bg-surface-2 border-border text-text-secondary hover:border-border hover:bg-surface-3 hover:text-text-primary"
      }`}
      aria-pressed={active}
    >
      {label}
      {count !== undefined && (
        <span className={`text-[10px] ${active ? "text-primary/70" : "text-text-muted"}`}>
          {count}
        </span>
      )}
      {active && onRemove && (
        <span
          role="button"
          tabIndex={-1}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-0.5 p-0.5 rounded-full hover:bg-primary/20"
          aria-label={`Remove ${label} filter`}
        >
          <X className="w-2.5 h-2.5" />
        </span>
      )}
    </button>
  );
}
