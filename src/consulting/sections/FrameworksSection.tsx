import React from "react";
import type { Framework } from "../types";
import { SectionHeader, Card } from "../../shared/primitives";

export const FrameworksSection: React.FC<{ frameworks: Framework[] }> = ({ frameworks }) => (
  <div>
    <SectionHeader
      title="Frameworks & Templates"
      subtitle="Consulting case frameworks distilled from all source casebooks"
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
        <FrameworkCard key={fw.id} framework={fw} />
      ))}
    </div>
  </div>
);

const FrameworkCard: React.FC<{ framework: Framework }> = ({ framework }) => (
  <Card>
    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{framework.name}</h3>
    <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 18 }}>
      {framework.subtitle} &middot; <em>{framework.source}</em>
    </div>
    <ol style={{ listStyle: "none" }}>
      {framework.steps.map((step, i) => (
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
);
