import React from "react";
import { FileText } from "lucide-react";
import type { Handbook } from "../types";
import { SectionHeader, Card } from "../../shared/primitives";

export const HandbooksSection: React.FC<{ handbooks: Handbook[] }> = ({ handbooks }) => (
  <div>
    <SectionHeader
      title="Handbooks"
      subtitle="Overview of all source casebooks — click 'Open PDF' to read the original, hosted directly on this site"
    />
    <div
      className="cards-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 16,
      }}
    >
      {handbooks.map((hb, i) => (
        <HandbookCard key={i} handbook={hb} />
      ))}
    </div>
  </div>
);

const HandbookCard: React.FC<{ handbook: Handbook }> = ({ handbook: hb }) => {
  const pdfUrl = hb.pdfFile ? `${import.meta.env.BASE_URL}pdfs/consulting/${hb.pdfFile}` : null;

  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: 24, marginBottom: 12 }}>{hb.icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{hb.name}</h3>
      <div style={{ fontSize: 11.5, color: hb.color, fontWeight: 600, marginBottom: 12 }}>
        {hb.institution} &middot; {hb.pages} pages
      </div>
      <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.55, flex: 1 }}>
        {hb.description}
      </p>

      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            marginTop: 16,
            padding: "8px 14px",
            background: "var(--accent-soft)",
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            borderRadius: 8,
            fontSize: 12.5,
            fontWeight: 600,
            textDecoration: "none",
            width: "fit-content",
            transition: "opacity .15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <FileText size={13} />
          Open PDF
        </a>
      )}
    </Card>
  );
};
