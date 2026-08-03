import React, { useState } from "react";
import type { InterviewExperience } from "../types";
import { useExpFilter } from "../useFilters";
import { Chip, SectionHeader, Card, EmptyState, Tag } from "../../shared/primitives";

const EXP_FILTERS = ["all", "Yes", "No", "Product", "Tech", "BA"] as const;
type ExpFilter = (typeof EXP_FILTERS)[number];

const FILTER_LABEL: Record<ExpFilter, string> = {
  all: "All",
  Yes: "Offer Received",
  No: "No Offer",
  Product: "PM Roles",
  Tech: "Tech Roles",
  BA: "BA Roles",
};

export const ExperiencesSection: React.FC<{
  experiences: InterviewExperience[];
  query: string;
}> = ({ experiences, query }) => {
  const { filter, setFilter, filtered } = useExpFilter({ experiences, query });

  return (
    <div>
      <SectionHeader
        title="Interview Experiences"
        subtitle={`${experiences.length} real accounts from ISB BTC and IITK placements — full round-by-round detail, exact questions asked, and insider tips`}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {EXP_FILTERS.map((f) => (
          <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>
            {FILTER_LABEL[f]}
          </Chip>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {filtered.length === 0 ? (
          <EmptyState message="No matching experiences." />
        ) : (
          filtered.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)
        )}
      </div>
    </div>
  );
};

const ExperienceCard: React.FC<{ exp: InterviewExperience }> = ({ exp }) => {
  const [expanded, setExpanded] = useState(false);
  const roundsPreview = exp.rounds.slice(0, 200);
  const shouldTruncate = exp.rounds.length > 200;

  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 14,
        }}
      >
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>{exp.company}</span>
            <span
              style={{
                fontSize: 11,
                padding: "3px 10px",
                borderRadius: 12,
                background:
                  exp.offered === "Yes"
                    ? "rgba(45,212,191,.14)"
                    : exp.offered === "No"
                      ? "var(--accent-soft)"
                      : "var(--bg-raised)",
                color:
                  exp.offered === "Yes"
                    ? "#2dd4bf"
                    : exp.offered === "No"
                      ? "var(--accent)"
                      : "var(--muted)",
                fontWeight: 600,
              }}
            >
              {exp.offered === "Yes" ? "Offer Received" : exp.offered === "No" ? "No Offer" : "Unknown"}
            </span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{exp.role}</span>
            <span style={{ fontSize: 12, color: "var(--muted-2)" }}>&middot;</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>
              {exp.type === "Product" ? "PM Role" : exp.type === "Tech" ? "Tech Role" : "BA Role"}
            </span>
            <Tag>{exp.source}</Tag>
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: 13,
          color: "var(--text)",
          lineHeight: 1.7,
          whiteSpace: "pre-line",
          marginBottom: 10,
        }}
      >
        {shouldTruncate && !expanded ? `${roundsPreview}…` : exp.rounds}
      </div>
      {shouldTruncate && (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--accent)",
            fontSize: 12.5,
            fontFamily: "var(--font-sans)",
            padding: "2px 0",
            marginBottom: 10,
            fontWeight: 600,
          }}
        >
          {expanded ? "Show less" : "Show full interview detail"}
        </button>
      )}

      <div
        style={{
          borderTop: "1px solid var(--border-soft)",
          paddingTop: 12,
          marginTop: 4,
          fontSize: 12.5,
          color: "var(--muted)",
          lineHeight: 1.6,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            color: "var(--accent)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: ".05em",
            fontFamily: "var(--font-mono)",
          }}
        >
          Insider Tip{" "}
        </span>
        {exp.tip}
      </div>
    </Card>
  );
};
