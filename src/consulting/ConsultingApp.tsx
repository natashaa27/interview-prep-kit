import React, { useState, useCallback } from "react";
import { FolderKanban, Layers, BookOpen } from "lucide-react";
import { Shell, type NavItem } from "../shared/Shell";
import { CasesSection } from "./sections/CasesSection";
import { FrameworksSection } from "./sections/FrameworksSection";
import { HandbooksSection } from "./sections/HandbooksSection";
import { cases } from "./data/cases";
import { frameworks } from "./data/frameworks";
import { handbooks } from "./data/handbooks";
import type { SectionId, SourceKey } from "./types";

const NAV_ITEMS: NavItem<SectionId>[] = [
  { id: "cases", label: "Cases", icon: <FolderKanban size={14} />, count: cases.length },
  { id: "frameworks", label: "Frameworks", icon: <Layers size={14} />, count: frameworks.length },
  { id: "handbooks", label: "Handbooks", icon: <BookOpen size={14} />, count: handbooks.length },
];

const SOURCE_ITEMS = handbooks.map((hb) => ({ label: hb.source, key: hb.source, color: hb.color }));

export const ConsultingApp: React.FC<{ onBackToHub: () => void }> = ({ onBackToHub }) => {
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
    return null;
  };

  const totalCount = activeSection === "cases" ? cases.length : 0;

  return (
    <Shell
      vertical="consulting"
      brandLabel="Consulting"
      navItems={NAV_ITEMS}
      activeSection={activeSection}
      onNavigate={handleNavigate}
      onBackToHub={onBackToHub}
      query={query}
      onQueryChange={setQuery}
      searchPlaceholder="Search cases, frameworks, schools…"
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
      {activeSection === "handbooks" && <HandbooksSection handbooks={handbooks} />}
    </Shell>
  );
};
