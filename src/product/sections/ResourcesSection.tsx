import React from "react";
import type { Resource } from "../types";
import { SectionHeader, Card } from "../../shared/primitives";

export const ResourcesSection: React.FC<{ resources: Resource[] }> = ({ resources }) => (
  <div>
    <SectionHeader
      title="Learning Resources"
      subtitle="Curated books, YouTube channels, Twitter accounts and websites from the handbooks"
    />
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {resources.map((r, i) => (
        <Card key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 20px" }}>
          <div style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{r.icon}</div>
          <div>
            <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 3 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600 }}>{r.name}</h4>
              <span
                style={{
                  fontSize: 11,
                  color: "var(--muted-2)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {r.category}
              </span>
            </div>
            <p style={{ fontSize: 12.5, color: "var(--muted)" }}>{r.description}</p>
          </div>
        </Card>
      ))}
    </div>
  </div>
);
