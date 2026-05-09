// src/components/Education.jsx
import { ME } from "../data/portfolio";
import { Reveal } from "./Reveal";

function EduCard({ type, accent, title, org, loc, period, badge }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: `1px solid ${accent}20`,
        borderRadius: 14,
        padding: "26px 24px",
        height: "100%",
        transition:
          "border-color .25s, transform .3s cubic-bezier(.22,1,.36,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent + "40";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = accent + "20";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 9.5,
          fontWeight: 500,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: accent,
          marginBottom: 18,
        }}
      >
        {type}
      </div>
      <div
        style={{
          borderLeft: `1px solid ${accent}28`,
          paddingLeft: 20,
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: -5,
            top: 8,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: accent,
            boxShadow: `0 0 0 3px ${accent}18`,
            display: "block",
          }}
        />
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: 19,
            color: "#EDF0F5",
            marginBottom: 6,
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 13.5, color: "var(--text)", marginBottom: 4 }}>
          {org}
        </div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11.5,
            color: "var(--muted)",
            marginBottom: 18,
          }}
        >
          {loc}
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {badge && (
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 4,
                background: "rgba(52,211,153,.08)",
                color: "var(--accent2)",
                fontWeight: 500,
                border: "1px solid rgba(52,211,153,.18)",
              }}
            >
              {badge}
            </span>
          )}
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              padding: "4px 12px",
              borderRadius: 4,
              background: "var(--surface2)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            {period}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <section id="Education" style={{ paddingTop: 20, paddingBottom: 80 }}>
      <Reveal>
        <div className="sec-label">
          <span>Background</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(32px,5vw,52px)",
            color: "#EDF0F5",
            letterSpacing: -1,
            marginBottom: 36,
          }}
        >
          Education & Training
        </h2>
      </Reveal>
      <div className="edu-grid" style={{ marginBottom: 18 }}>
        <Reveal delay={0}>
          <EduCard
            type="University"
            accent="var(--accent)"
            title={ME.education.degree}
            org={ME.education.uni}
            loc={ME.education.loc}
            period={ME.education.period}
            badge={`Grade: ${ME.education.grade}`}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <EduCard
            type="Internship"
            accent="var(--accent2)"
            title={ME.internship.title}
            org={ME.internship.org}
            loc={ME.internship.loc}
            period={ME.internship.period}
          />
        </Reveal>
      </div>
    </section>
  );
}
