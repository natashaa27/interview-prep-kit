import React, { useEffect } from "react";
import { ArrowLeft, Search } from "lucide-react";

export type Vertical = "product" | "consulting";

export interface NavItem<S extends string> {
  id: S;
  label: string;
  icon: React.ReactNode;
  count: number;
}

interface ShellProps<S extends string> {
  vertical: Vertical;
  brandLabel: string;
  navItems: NavItem<S>[];
  activeSection: S;
  onNavigate: (section: S) => void;
  onBackToHub: () => void;
  query: string;
  onQueryChange: (q: string) => void;
  searchPlaceholder: string;
  resultCount: number | null;
  totalCount: number;
  children: React.ReactNode;
}

export function Shell<S extends string>({
  vertical,
  brandLabel,
  navItems,
  activeSection,
  onNavigate,
  onBackToHub,
  query,
  onQueryChange,
  searchPlaceholder,
  resultCount,
  totalCount,
  children,
}: ShellProps<S>) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent",
      `var(--accent-${vertical})`,
    );
    document.documentElement.style.setProperty(
      "--accent-soft",
      `var(--accent-${vertical}-soft)`,
    );
    document.documentElement.style.setProperty(
      "--accent-glow",
      `var(--accent-${vertical}-glow)`,
    );
  }, [vertical]);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: "var(--header-h)",
          background: "rgba(9,11,16,.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          gap: 16,
        }}
      >
        <button
          onClick={onBackToHub}
          aria-label="Back to hub"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--muted)",
            fontSize: 14,
            fontWeight: 600,
            padding: "6px 4px",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <ArrowLeft size={16} />
          <span style={{ color: "var(--accent)" }}>{brandLabel}</span>
        </button>

        <nav
          className="nav-tabs"
          style={{ display: "flex", gap: 4, flex: 1, minWidth: 0 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 14px",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                background:
                  activeSection === item.id ? "var(--accent-soft)" : "transparent",
                color: activeSection === item.id ? "var(--accent)" : "var(--muted)",
                fontSize: 13,
                fontWeight: activeSection === item.id ? 600 : 400,
                whiteSpace: "nowrap",
                transition: "all .15s",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id)
                  e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id)
                  e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {item.icon}
              {item.label}
              <span
                style={{
                  fontSize: 10.5,
                  padding: "1px 6px",
                  borderRadius: 10,
                  background: "var(--bg-raised)",
                  color: "var(--muted-2)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {item.count}
              </span>
            </button>
          ))}
        </nav>

        <div style={{ position: "relative", width: 260, flexShrink: 0 }}>
          <Search
            size={14}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--muted-2)",
            }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder={searchPlaceholder}
            style={{
              width: "100%",
              padding: "8px 12px 8px 32px",
              border: "1px solid var(--border)",
              borderRadius: 8,
              background: "var(--bg-raised)",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--text)",
              outline: "none",
              transition: "border-color .2s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          />
        </div>

        {resultCount !== null && (
          <span
            style={{
              fontSize: 12,
              color: "var(--muted)",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-mono)",
            }}
          >
            {resultCount}/{totalCount}
          </span>
        )}
      </header>

      <main
        className="shell-main"
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "36px 40px 60px",
        }}
      >
        {children}
      </main>
    </div>
  );
}
