import React, { useEffect } from "react";

export const Chip: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      padding: "6px 14px",
      borderRadius: 20,
      border: `1px solid ${active ? "var(--accent)" : "var(--border)"}`,
      background: active ? "var(--accent-soft)" : "var(--surface)",
      color: active ? "var(--accent)" : "var(--muted)",
      fontSize: 12.5,
      fontWeight: active ? 600 : 400,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      transition: "all .15s",
      userSelect: "none",
      whiteSpace: "nowrap",
    }}
    onMouseEnter={(e) => {
      if (!active) {
        e.currentTarget.style.borderColor = "var(--muted-2)";
        e.currentTarget.style.color = "var(--text)";
      }
    }}
    onMouseLeave={(e) => {
      if (!active) {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--muted)";
      }
    }}
  >
    {children}
  </button>
);

export const Tag: React.FC<{ children: React.ReactNode; tone?: "accent" | "neutral" }> = ({
  children,
  tone = "neutral",
}) => (
  <span
    style={{
      fontSize: 11,
      padding: "3px 10px",
      borderRadius: 12,
      background: tone === "accent" ? "var(--accent-soft)" : "var(--bg-raised)",
      color: tone === "accent" ? "var(--accent)" : "var(--muted)",
      border: `1px solid ${tone === "accent" ? "transparent" : "var(--border-soft)"}`,
      fontFamily: "var(--font-mono)",
      letterSpacing: ".01em",
    }}
  >
    {children}
  </span>
);

export const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div style={{ marginBottom: 28 }}>
    <h1
      style={{
        fontSize: 26,
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: 8,
        letterSpacing: "-.02em",
      }}
    >
      {title}
    </h1>
    <p style={{ color: "var(--muted)", fontSize: 14, maxWidth: 640 }}>{subtitle}</p>
  </div>
);

export const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }
> = ({ interactive, style, children, ...rest }) => (
  <div
    {...rest}
    style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: 20,
      transition: "all .2s",
      cursor: interactive ? "pointer" : "default",
      ...style,
    }}
    onMouseEnter={(e) => {
      if (interactive) {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = `0 0 0 1px var(--accent), 0 8px 24px -8px var(--accent-glow)`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }
      rest.onMouseEnter?.(e);
    }}
    onMouseLeave={(e) => {
      if (interactive) {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }
      rest.onMouseLeave?.(e);
    }}
  >
    {children}
  </div>
);

export const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <div style={{ textAlign: "center", padding: "64px 20px", color: "var(--muted)" }}>
    <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.5 }}>&times;</div>
    <p>{message}</p>
  </div>
);

export const ModalSection: React.FC<{ heading: string; children: React.ReactNode }> = ({
  heading,
  children,
}) => (
  <div style={{ marginBottom: 22 }}>
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: 10,
        fontFamily: "var(--font-mono)",
      }}
    >
      {heading}
    </div>
    {children}
  </div>
);

export const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  ariaLabel: string;
  children: React.ReactNode;
}> = ({ open, onClose, ariaLabel, children }) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(4,5,8,.6)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 14,
          maxWidth: 700,
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "36px 36px 32px",
          position: "relative",
          boxShadow: "0 24px 60px -20px rgba(0,0,0,.6)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "var(--bg-raised)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            width: 32,
            height: 32,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--muted)",
            fontSize: 16,
            transition: "all .15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--muted)";
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
