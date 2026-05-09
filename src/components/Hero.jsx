// src/components/Hero.jsx
import { ME } from "../data/portfolio";

export function Hero({ onNav }) {
  return (
    <section
      id="Home"
      className="dots-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 40,
      }}
    >
      {[
        { top: "18%", left: "-10%", color: "rgba(96,165,250,.07)", size: 440 },
        { top: "38%", right: "-8%", color: "rgba(52,211,153,.05)", size: 320 },
      ].map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0,
            animation: "breathe 6s ease-in-out infinite",
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{ animation: "fadeUp .65s cubic-bezier(.22,1,.36,1) both" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(52,211,153,.07)",
              border: "1px solid rgba(52,211,153,.18)",
              borderRadius: 99,
              padding: "6px 14px",
              marginBottom: 30,
              fontFamily: "var(--mono)",
              fontSize: 11.5,
              fontWeight: 500,
              color: "var(--accent2)",
              letterSpacing: 0.4,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent2)",
                display: "inline-block",
                animation: "pulse 2.4s ease-in-out infinite",
              }}
            />
            Available for new opportunities
          </div>
        </div>
        <div
          style={{
            animation: "fadeUp .7s .08s cubic-bezier(.22,1,.36,1) both",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(54px,8.5vw,100px)",
              lineHeight: 1.0,
              color: "#EDF0F5",
              letterSpacing: -2,
            }}
          >
            Mohamed
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Refat.
            </em>
          </h1>
        </div>
        <div
          style={{
            marginTop: 22,
            marginBottom: 28,
            animation: "fadeUp .7s .15s cubic-bezier(.22,1,.36,1) both",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--muted)",
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          >
            Full-Stack MERN Developer · Cairo, Egypt
          </span>
        </div>
        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.8,
            color: "#4A5E78",
            maxWidth: 520,
            marginBottom: 40,
            animation: "fadeUp .7s .22s cubic-bezier(.22,1,.36,1) both",
          }}
        >
          {ME.bio}
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            animation: "fadeUp .7s .28s cubic-bezier(.22,1,.36,1) both",
          }}
        >
          {[
            {
              label: "View Projects →",
              primary: true,
              action: () => onNav("Projects"),
            },
            {
              label: "Get in touch",
              primary: false,
              action: () => onNav("Contact"),
            },
          ].map(({ label, primary, action }) => (
            <button
              key={label}
              onClick={action}
              style={{
                background: primary ? "var(--accent)" : "transparent",
                color: primary ? "#050D17" : "var(--text)",
                border: primary ? "none" : "1px solid var(--border)",
                padding: "11px 24px",
                borderRadius: 8,
                fontFamily: "var(--sans)",
                fontSize: 13.5,
                fontWeight: 700,
                letterSpacing: 0.3,
                cursor: "pointer",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                if (primary) {
                  e.currentTarget.style.opacity = ".85";
                  e.currentTarget.style.transform = "translateY(-2px)";
                } else {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                if (primary) {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "none";
                } else {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text)";
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: 44,
            marginTop: 60,
            paddingTop: 28,
            borderTop: "1px solid var(--border)",
            animation: "fadeUp .7s .36s cubic-bezier(.22,1,.36,1) both",
          }}
        >
          {[
            ["5+", "Projects"],
            ["MERN", "Stack"],
            ["2024", "Graduate"],
            ["ITI", "Trained"],
          ].map(([v, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  color: "#EDF0F5",
                  lineHeight: 1,
                }}
              >
                {v}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--dim)",
                  marginTop: 7,
                  fontWeight: 500,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
