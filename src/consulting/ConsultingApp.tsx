import React, { useState } from "react";
import { FolderKanban, Layers, Users, BookOpen, Link2 } from "lucide-react";
import { Shell, type NavItem } from "../shared/Shell";
import { SectionHeader, Card, EmptyState, Tag } from "../shared/primitives";
import { cases } from "./data/cases";
import { frameworks, experiences, handbooks, resources } from "./data/content";
import type { SectionId } from "./types";

const NAV_ITEMS: NavItem<SectionId>[] = [
  { id: "cases", label: "Cases", icon: <FolderKanban size={14} />, count: cases.length },
  { id: "frameworks", label: "Frameworks", icon: <Layers size={14} />, count: frameworks.length },
  { id: "experiences", label: "Interviews", icon: <Users size={14} />, count: experiences.length },
  { id: "handbooks", label: "Handbooks", icon: <BookOpen size={14} />, count: handbooks.length },
  { id: "resources", label: "Resources", icon: <Link2 size={14} />, count: resources.length },
];

export const ConsultingApp: React.FC<{ onBackToHub: () => void }> = ({ onBackToHub }) => {
  const [activeSection, setActiveSection] = useState<SectionId>("cases");
  const [query, setQuery] = useState("");

  return (
    <Shell
      vertical="consulting"
      brandLabel="Consulting"
      navItems={NAV_ITEMS}
      activeSection={activeSection}
      onNavigate={(s) => {
        setActiveSection(s);
        setQuery("");
      }}
      onBackToHub={onBackToHub}
      query={query}
      onQueryChange={setQuery}
      searchPlaceholder="Search cases, frameworks…"
      resultCount={null}
      totalCount={0}
    >
      {activeSection === "cases" && (
        <div>
          <SectionHeader
            title="Case Studies"
            subtitle="Casebooks are being added — check back soon for real market-entry, profitability and market-sizing cases."
          />
          <EmptyState message="No casebooks yet. This section is ready to go as soon as content is added." />
        </div>
      )}

      {activeSection === "frameworks" && (
        <div>
          <SectionHeader
            title="Frameworks & Templates"
            subtitle="Starter consulting case frameworks — more will be added alongside real casebooks"
          />
          <div
            className="cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 16,
            }}
          >
            {frameworks.map((fw) => (
              <Card key={fw.id}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{fw.name}</h3>
                <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 18 }}>
                  {fw.subtitle} &middot; <em>{fw.source}</em>
                </div>
                <ol style={{ listStyle: "none" }}>
                  {fw.steps.map((step, i) => (
                    <li
                      key={i}
                      style={{ display: "flex", gap: 12, marginBottom: 12, fontSize: 13, lineHeight: 1.55 }}
                    >
                      <span
                        style={{
                          minWidth: 24,
                          height: 24,
                          background: "var(--accent-soft)",
                          color: "var(--accent)",
                          border: "1px solid var(--accent)",
                          borderRadius: "50%",
                          fontSize: 11,
                          fontWeight: 700,
                          fontFamily: "var(--font-mono)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        {step.letter}
                      </span>
                      <div>
                        <strong style={{ color: "var(--accent)" }}>{step.title}:</strong>{" "}
                        <span style={{ color: "var(--text)" }}>{step.description}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === "experiences" && (
        <div>
          <SectionHeader
            title="Interview Experiences"
            subtitle="Real interview accounts will appear here once shared"
          />
          <EmptyState message="No interview experiences yet." />
        </div>
      )}

      {activeSection === "handbooks" && (
        <div>
          <SectionHeader title="Handbooks" subtitle="Casebook PDFs will appear here once added" />
          <EmptyState message="No handbooks yet." />
        </div>
      )}

      {activeSection === "resources" && (
        <div>
          <SectionHeader
            title="Learning Resources"
            subtitle="Books, websites and communities for consulting case-interview prep"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {resources.map((r, i) => (
              <Card key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 20px" }}>
                <div style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{r.icon}</div>
                <div>
                  <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 3 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600 }}>{r.name}</h4>
                    <Tag>{r.category}</Tag>
                  </div>
                  <p style={{ fontSize: 12.5, color: "var(--muted)" }}>{r.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </Shell>
  );
};
