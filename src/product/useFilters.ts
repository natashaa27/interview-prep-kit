import { useState, useMemo } from "react";
import type { CaseStudy, InterviewExperience, CaseType, SourceKey } from "./types";

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

export function useExpFilter({
  experiences,
  query,
}: {
  experiences: InterviewExperience[];
  query: string;
}) {
  const [filter, setFilter] = useState<"all" | "Yes" | "No" | "Product" | "Tech" | "BA">(
    "all",
  );

  const filtered = useMemo(() => {
    let list = experiences;
    if (filter === "Yes") list = experiences.filter((e) => e.offered === "Yes");
    else if (filter === "No") list = experiences.filter((e) => e.offered === "No");
    else if (filter === "Product") list = experiences.filter((e) => e.type === "Product");
    else if (filter === "Tech") list = experiences.filter((e) => e.type === "Tech");
    else if (filter === "BA") list = experiences.filter((e) => e.type === "BA");
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (e) =>
          e.company.toLowerCase().includes(q) ||
          e.role.toLowerCase().includes(q) ||
          e.rounds.toLowerCase().includes(q),
      );
    }
    return list;
  }, [experiences, query, filter]);

  return { filter, setFilter, filtered };
}
