import React, { useState, useEffect, useMemo } from "react";
import type { CaseStudy, CaseType, SourceKey } from "../types";
import { useCaseFilter } from "../useFilters";
import { Chip, Tag, SectionHeader, Card, EmptyState } from "../../shared/primitives";
import { CaseModal } from "./CaseModal";

const CASE_TYPES: { label: string; value: CaseType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Product Design", value: "Product Design" },
  { label: "Retention", value: "Retention" },
  { label: "GTM / Launch", value: "GTM" },
  { label: "Metrics", value: "Metrics" },
  { label: "Root Cause", value: "RCA" },
  { label: "Strategy", value: "Strategy" },
  { label: "Guesstimate", value: "Guesstimate" },
  { label: "Monetisation", value: "Monetisation" },
];

interface CasesSectionProps {
  cases: CaseStudy[];
  externalSource: SourceKey | null;
  externalQuery: string;
  onSourceChange: (s: SourceKey | null) => void;
}

export const CasesSection: React.FC<CasesSectionProps> = ({
  cases,
  externalSource,
  externalQuery,
  onSourceChange,
}) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const { activeType, setActiveType, activeSource, setActiveSource, filtered } =
    useCaseFilter({ cases });

  useEffect(() => {
    setActiveSource(externalSource);
  }, [externalSource, setActiveSource]);

  const finalFiltered = useMemo(() => {
    const q = externalQuery.toLowerCase();
    return filtered.filter((c) => {
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.domain.toLowerCase().includes(q) ||
        c.source.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [filtered, externalQuery]);

  return (
    <div>
      <SectionHeader
        title="Case Studies"
        subtitle={`${cases.length} real PM interview cases — PM School, BITSoM, ISB BTC, IITK & IIMC`}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {CASE_TYPES.map((ct) => (
          <Chip
            key={ct.value}
            active={activeType === ct.value}
            onClick={() => {
              setActiveType(ct.value);
              onSourceChange(null);
            }}
          >
            {ct.label}
          </Chip>
        ))}
      </div>

      {activeSource && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--accent-soft)",
            border: "1px solid var(--accent)",
            borderRadius: 20,
            padding: "5px 14px",
            marginBottom: 20,
            fontSize: 12.5,
          }}
        >
          Filtered by: <strong>{activeSource}</strong>
          <button
            onClick={() => {
              setActiveSource(null);
              onSourceChange(null);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: 15,
              lineHeight: 1,
            }}
          >
            &times;
          </button>
        </div>
      )}

      {finalFiltered.length === 0 ? (
        <EmptyState message="No case studies match your filters." />
      ) : (
        <div
          className="cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {finalFiltered.map((c) => (
            <CaseCard key={c.id} caseStudy={c} onClick={() => setSelectedCase(c)} />
          ))}
        </div>
      )}

      <CaseModal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />
    </div>
  );
};

const CaseCard: React.FC<{ caseStudy: CaseStudy; onClick: () => void }> = ({
  caseStudy,
  onClick,
}) => (
  <Card
    interactive
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === "Enter") onClick();
    }}
  >
    <div
      style={{
        fontSize: 10.5,
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "var(--muted-2)",
        marginBottom: 10,
      }}
    >
      {caseStudy.source}
    </div>
    <h3 style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.35, marginBottom: 10 }}>
      {caseStudy.title}
    </h3>
    <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.55, marginBottom: 16 }}>
      {caseStudy.summary}
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      <Tag tone="accent">{caseStudy.domain}</Tag>
      <Tag>{caseStudy.type}</Tag>
      {caseStudy.tags.slice(0, 2).map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  </Card>
);
