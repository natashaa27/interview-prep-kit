import { useState, useMemo } from "react";
import type { CaseStudy, CaseType, SourceKey } from "./types";

export function useCaseFilter({ cases }: { cases: CaseStudy[] }) {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<CaseType | "all">("all");
  const [activeSource, setActiveSource] = useState<SourceKey | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return cases.filter((c) => {
      const matchesType = activeType === "all" || c.type === activeType;
      const matchesSource = !activeSource || c.source === activeSource;
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.domain.toLowerCase().includes(q) ||
        c.source.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q));
      return matchesType && matchesSource && matchesQuery;
    });
  }, [cases, query, activeType, activeSource]);

  return { query, setQuery, activeType, setActiveType, activeSource, setActiveSource, filtered };
}
