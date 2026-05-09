// src/components/ProjectCard.jsx
import { useEffect } from "react";
import { PROJ_ACCENT } from "../data/portfolio";

export function ProjectModal({ project: p, index, onClose }) {
  const accent = PROJ_ACCENT[index] || "#60A5FA";
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(4,6,10,.92)",
        backdropFilter: "blur(10px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fadeUp .16s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface)",
          border: `1px solid ${accent}30`,
          borderRadius: 20,
          maxWidth: 540,
          width: "100%",
          padding: "36px 36px 32px",
          position: "relative",
          animation: "fadeUp .22s cubic-bezier(.22,1,.36,1)",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: `0 40px 80px rgba(0,0,0,.6), 0 0 0 1px ${accent}18`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg,${accent},transparent)`,
            borderRadius: "20px 20px 0 0",
          }}
        />
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "var(--surface2)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            width: 30,
            height: 30,
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color .2s, border-color .2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#EDF0F5";
            e.currentTarget.style.borderColor = "var(--border2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--muted)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          ×
        </button>
        <span style={{ fontSize: 34, color: accent }}>{p.icon}</span>
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: 26,
            color: "#EDF0F5",
            marginTop: 10,
            marginBottom: 4,
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            color: accent,
            fontWeight: 500,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          {p.sub}
        </p>
        <p
          style={{
            fontSize: 14.5,
            lineHeight: 1.78,
            color: "var(--muted)",
            marginBottom: 24,
          }}
        >
          {p.desc}
        </p>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            color: accent,
            marginBottom: 12,
          }}
        >
          Highlights
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 9,
            marginBottom: 24,
          }}
        >
          {p.highlights.map((h) => (
            <div
              key={h}
              style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
            >
              <span
                style={{
                  color: accent,
                  marginTop: 3,
                  flexShrink: 0,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                }}
              >
                ▸
              </span>
              <span style={{ fontSize: 14, color: "#C0CDD8", lineHeight: 1.6 }}>
                {h}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            color: "var(--dim)",
            marginBottom: 12,
          }}
        >
          Tech Stack
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 7,
            marginBottom: 28,
          }}
        >
          {p.stack.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                padding: "4px 12px",
                borderRadius: 4,
                background: accent + "10",
                border: `1px solid ${accent}28`,
                color: accent,
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        {p.link ? (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "transparent",
              color: accent,
              border: `1px solid ${accent}30`,
              padding: "9px 18px",
              borderRadius: 8,
              fontFamily: "var(--sans)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.3,
              textDecoration: "none",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accent + "12";
              e.currentTarget.style.borderColor = accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = accent + "30";
            }}
          >
            {p.linkLabel} <span style={{ fontSize: 16 }}>{p.linkIcon}</span>
          </a>
        ) : (
          <span
            style={{ fontSize: 13, color: "var(--dim)", fontStyle: "italic" }}
          >
            Link coming soon…
          </span>
        )}
      </div>
    </div>
  );
}

export function ProjectCard({ project: p, index, isHov, onHover, onClick }) {
  const accent = PROJ_ACCENT[index] || "#60A5FA";
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => onHover(p.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        background: "var(--surface)",
        border: `1px solid ${isHov ? accent + "45" : "var(--border)"}`,
        borderRadius: 15,
        padding: "26px 26px 22px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transform: isHov ? "translateY(-7px)" : "none",
        boxShadow: isHov
          ? `0 28px 64px rgba(0,0,0,.45), 0 0 0 1px ${accent}14`
          : "none",
        transition:
          "border-color .25s, transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg,${accent},transparent)`,
          borderRadius: "15px 15px 0 0",
          opacity: isHov ? 1 : 0.45,
          transition: "opacity .3s",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <span style={{ fontSize: 28, color: accent, lineHeight: 1 }}>
          {p.icon}
        </span>
        {p.link && (
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9.5,
              fontWeight: 500,
              color: accent,
              opacity: 0.6,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            {p.linkLabel} {p.linkIcon}
          </span>
        )}
      </div>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 22,
          color: "#EDF0F5",
          marginBottom: 4,
        }}
      >
        {p.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10.5,
          color: accent,
          fontWeight: 500,
          marginBottom: 14,
          letterSpacing: 0.8,
          textTransform: "uppercase",
        }}
      >
        {p.sub}
      </p>
      <p
        style={{
          fontSize: 13.5,
          lineHeight: 1.72,
          color: "var(--muted)",
          marginBottom: 18,
        }}
      >
        {p.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {p.stack.slice(0, 4).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
        {p.stack.length > 4 && (
          <span className="tag" style={{ color: "var(--dim)" }}>
            +{p.stack.length - 4}
          </span>
        )}
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 12.5,
          color: accent,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: 5,
          fontFamily: "var(--mono)",
          letterSpacing: 0.3,
        }}
      >
        View details{" "}
        <span
          style={{
            fontSize: 14,
            display: "inline-block",
            transition: "transform .2s",
            transform: isHov ? "translateX(3px)" : "none",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
}
