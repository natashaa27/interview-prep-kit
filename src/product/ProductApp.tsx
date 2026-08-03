import React, { useState, useCallback } from "react";
import { FolderKanban, Layers, Users, BookOpen, Link2 } from "lucide-react";
import { Shell, type NavItem } from "../shared/Shell";
import { CasesSection } from "./sections/CasesSection";
import { FrameworksSection } from "./sections/FrameworksSection";
import { ExperiencesSection } from "./sections/ExperiencesSection";
import { HandbooksSection } from "./sections/HandbooksSection";
import { ResourcesSection } from "./sections/ResourcesSection";
import { cases } from "./data/cases";
import { frameworks, experiences, handbooks, resources } from "./data/content";
import type { SectionId, SourceKey } from "./types";

const NAV_ITEMS: NavItem<SectionId>[] = [
  { id: "cases", label: "Cases", icon: <FolderKanban size={14} />, count: cases.length },
  { id: "frameworks", label: "Frameworks", icon: <Layers size={14} />, count: frameworks.length },
  { id: "experiences", label: "Interviews", icon: <Users size={14} />, count: experiences.length },
  { id: "handbooks", label: "Handbooks", icon: <BookOpen size={14} />, count: handbooks.length },
  { id: "resources", label: "Resources", icon: <Link2 size={14} />, count: resources.length },
];

const SOURCE_ITEMS: { label: string; key: SourceKey; color: string }[] = [
  { label: "PM School Vol. I", key: "PM School Vol. I", color: "#f97066" },
  { label: "PM School Vol. II", key: "PM School Vol. II", color: "#fb923c" },
  { label: "BITSoM Handbook", key: "BITSoM Handbook", color: "#60a5fa" },
  { label: "ISB BTC 2021", key: "ISB BTC 2021", color: "#4ade80" },
  { label: "ISB BTC Co2024", key: "ISB BTC Co2024", color: "#c084fc" },
  { label: "IITK Casebook", key: "IITK Casebook", color: "#22d3ee" },
  { label: "IIMC Casebook", key: "IIMC Casebook", color: "#f472b6" },
];

export const ProductApp: React.FC<{ onBackToHub: () => void }> = ({ onBackToHub }) => {
  const [activeSection, setActiveSection] = useState<SectionId>("cases");
  const [activeSource, setActiveSource] = useState<SourceKey | null>(null);
  const [query, setQuery] = useState("");

  const handleNavigate = useCallback((section: SectionId) => {
    setActiveSection(section);
    if (section !== "cases") setActiveSource(null);
    setQuery("");
  }, []);

  const getResultCount = () => {
    if (activeSection === "cases") {
      const q = query.toLowerCase();
      return cases.filter((c) => {
        const matchesSource = !activeSource || c.source === activeSource;
        const matchesQuery =
          !q ||
          c.title.toLowerCase().includes(q) ||
          c.domain.toLowerCase().includes(q) ||
          c.source.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q));
        return matchesSource && matchesQuery;
      }).length;
    }
    if (activeSection === "experiences" && query) {
      const q = query.toLowerCase();
      return experiences.filter(
        (e) =>
          e.company.toLowerCase().includes(q) ||
          e.role.toLowerCase().includes(q) ||
          e.rounds.toLowerCase().includes(q),
      ).length;
    }
    return null;
  };

  const totalCount =
    activeSection === "cases"
      ? cases.length
      : activeSection === "experiences"
        ? experiences.length
        : 0;

  return (
    <Shell
      vertical="product"
      brandLabel="Product"
      navItems={NAV_ITEMS}
      activeSection={activeSection}
      onNavigate={handleNavigate}
      onBackToHub={onBackToHub}
      query={query}
      onQueryChange={setQuery}
      searchPlaceholder="Search cases, frameworks, companies…"
      resultCount={getResultCount()}
      totalCount={totalCount}
    >
      {activeSection === "cases" && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 20,
            paddingBottom: 20,
            borderBottom: "1px solid var(--border-soft)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "var(--muted-2)",
              textTransform: "uppercase",
              letterSpacing: ".08em",
              fontFamily: "var(--font-mono)",
              alignSelf: "center",
              marginRight: 4,
            }}
          >
            Source
          </span>
          {SOURCE_ITEMS.map((src) => {
            const active = activeSource === src.key;
            return (
              <button
                key={src.key}
                onClick={() => setActiveSource(active ? null : src.key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 12px",
                  borderRadius: 20,
                  border: `1px solid ${active ? src.color : "var(--border)"}`,
                  background: active ? `${src.color}22` : "var(--surface)",
                  color: active ? src.color : "var(--muted)",
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all .15s",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: src.color,
                    flexShrink: 0,
                  }}
                />
                {src.label}
              </button>
            );
          })}
        </div>
      )}

      {activeSection === "cases" && (
        <CasesSection
          cases={cases}
          externalSource={activeSource}
          externalQuery={query}
          onSourceChange={setActiveSource}
        />
      )}
      {activeSection === "frameworks" && <FrameworksSection frameworks={frameworks} />}
      {activeSection === "experiences" && (
        <ExperiencesSection experiences={experiences} query={query} />
      )}
      {activeSection === "handbooks" && <HandbooksSection handbooks={handbooks} />}
      {activeSection === "resources" && <ResourcesSection resources={resources} />}
    </Shell>
  );
};
