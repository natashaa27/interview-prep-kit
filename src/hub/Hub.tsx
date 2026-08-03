import React from "react";
import { Briefcase, LineChart, ArrowUpRight } from "lucide-react";

interface HubProps {
  onEnter: (vertical: "product" | "consulting") => void;
}

const TRACKS = [
  {
    id: "product" as const,
    icon: <LineChart size={22} />,
    title: "Product",
    tagline: "PM case interviews",
    accent: "var(--accent-product)",
    accentSoft: "var(--accent-product-soft)",
    accentGlow: "var(--accent-product-glow)",
    description:
      "Case studies, CIRCLES/AARRR-style frameworks, real interview experiences, and handbooks from PM School, BITSoM, ISB BTC, IITK and IIMC.",
    stats: [
      ["73", "Case studies"],
      ["15", "Frameworks"],
      ["26", "Interviews"],
    ],
  },
  {
    id: "consulting" as const,
    icon: <Briefcase size={22} />,
    title: "Consulting",
    tagline: "Case interviews & guesstimates",
    accent: "var(--accent-consulting)",
    accentSoft: "var(--accent-consulting-soft)",
    accentGlow: "var(--accent-consulting-glow)",
    description:
      "Market sizing, profitability, and market-entry casebooks with structured frameworks — content is being added now.",
    stats: [
      ["—", "Case studies"],
      ["—", "Frameworks"],
      ["—", "Interviews"],
    ],
  },
];

export const Hub: React.FC<HubProps> = ({ onEnter }) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 560 }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "var(--muted-2)",
          marginBottom: 14,
        }}
      >
        Interview Prep Kit
      </div>
      <h1
        style={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: "-.03em",
          lineHeight: 1.15,
          marginBottom: 16,
        }}
      >
        Pick your track.
      </h1>
      <p style={{ color: "var(--muted)", fontSize: 15.5, lineHeight: 1.6 }}>
        Two self-contained prep kits — case studies, frameworks, and real
        interview experiences — kept separate so each stays focused.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
        width: "100%",
        maxWidth: 820,
      }}
    >
      {TRACKS.map((t) => (
        <button
          key={t.id}
          onClick={() => onEnter(t.id)}
          style={{
            textAlign: "left",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 28,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            transition: "all .2s",
            fontFamily: "var(--font-sans)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = t.accent;
            e.currentTarget.style.boxShadow = `0 0 0 1px ${t.accent}, 0 16px 40px -16px ${t.accentGlow}`;
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "none";
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: t.accentSoft,
                color: t.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {t.icon}
            </div>
            <div>
              <div style={{ fontSize: 19, fontWeight: 700 }}>{t.title}</div>
              <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{t.tagline}</div>
            </div>
            <ArrowUpRight
              size={18}
              style={{ marginLeft: "auto", color: "var(--muted-2)" }}
            />
          </div>

          <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>
            {t.description}
          </p>

          <div style={{ display: "flex", gap: 20, borderTop: "1px solid var(--border-soft)", paddingTop: 16 }}>
            {t.stats.map(([value, label]) => (
              <div key={label}>
                <div style={{ fontSize: 17, fontWeight: 700, color: t.accent, fontFamily: "var(--font-mono)" }}>
                  {value}
                </div>
                <div style={{ fontSize: 11, color: "var(--muted-2)" }}>{label}</div>
              </div>
            ))}
          </div>
        </button>
      ))}
    </div>
  </div>
);
