import React from "react";
import type { CaseStudy } from "../types";
import { Modal, ModalSection, Tag } from "../../shared/primitives";

export const CaseModal: React.FC<{ caseStudy: CaseStudy | null; onClose: () => void }> = ({
  caseStudy,
  onClose,
}) => (
  <Modal open={!!caseStudy} onClose={onClose} ariaLabel={caseStudy?.title ?? "Case study"}>
    {caseStudy && (
      <>
        <div
          style={{
            fontSize: 11,
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            letterSpacing: ".1em",
            color: "var(--muted)",
            marginBottom: 10,
          }}
        >
          {caseStudy.source} &middot; {caseStudy.domain}
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>
          {caseStudy.title}
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          <Tag tone="accent">{caseStudy.type}</Tag>
          {caseStudy.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <ModalSection heading="The Question">
          <p style={{ fontSize: 13.5, color: "var(--text)", lineHeight: 1.65 }}>
            {caseStudy.question}
          </p>
        </ModalSection>

        <ModalSection heading="Key Takeaway">
          <div
            style={{
              background: "var(--accent-soft)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: "0 8px 8px 0",
              padding: "14px 16px",
              fontSize: 13.5,
              lineHeight: 1.65,
            }}
          >
            {caseStudy.keyTakeaway}
          </div>
        </ModalSection>

        <ModalSection heading="Approach / Framework">
          <ul style={{ paddingLeft: 18 }}>
            {caseStudy.approach.map((step, i) => (
              <li
                key={i}
                style={{
                  fontSize: 13.5,
                  color: "var(--text)",
                  lineHeight: 1.65,
                  marginBottom: 6,
                }}
              >
                {step}
              </li>
            ))}
          </ul>
        </ModalSection>

        <ModalSection heading="Summary">
          <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65 }}>
            {caseStudy.summary}
          </p>
        </ModalSection>
      </>
    )}
  </Modal>
);
