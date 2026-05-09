// src/components/Skills.jsx
import { ME, SKILL_ACCENT, SKILL_ICON } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="Skills" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Reveal>
        <div className="sec-label">
          <span>Expertise</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(32px,5vw,52px)",
            color: "#EDF0F5",
            letterSpacing: -1,
            marginBottom: 44,
          }}
        >
          Technical Skills
        </h2>
      </Reveal>
      <div className="skills-grid">
        {Object.entries(ME.skills).map(([cat, list], i) => {
          const accent = SKILL_ACCENT[cat];
          const icon = SKILL_ICON[cat];
          return (
            <Reveal key={cat} delay={i * 0.07}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "22px 20px",
                  height: "100%",
                  transition:
                    "border-color .25s, transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent + "40";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,.4),0 0 0 1px ${accent}14`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: accent + "14",
                      border: `1px solid ${accent}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      color: accent,
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {icon}
                  </div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#EDF0F5",
                      letterSpacing: 0.3,
                    }}
                  >
                    {cat}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {list.map((s) => (
                    <span
                      key={s}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "4px 11px",
                        borderRadius: 4,
                        fontSize: 11.5,
                        fontWeight: 500,
                        fontFamily: "var(--mono)",
                        background: accent + "10",
                        border: `1px solid ${accent}28`,
                        color: accent,
                        transition: "transform .15s, background .15s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.06)";
                        e.currentTarget.style.background = accent + "1E";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.background = accent + "10";
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
