// src/components/Contact.jsx
import { ME } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="Contact" style={{ paddingTop: 20, paddingBottom: 100 }}>
      <Reveal>
        <div
          style={{
            position: "relative",
            borderRadius: 20,
            padding: 1.5,
            background:
              "linear-gradient(135deg,rgba(96,165,250,.28),rgba(52,211,153,.2),rgba(96,165,250,.07))",
          }}
        >
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 19,
              padding: "54px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 400,
                height: 200,
                background:
                  "radial-gradient(ellipse,rgba(96,165,250,.06) 0%,transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div className="sec-label" style={{ justifyContent: "center" }}>
              <span>Contact</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(28px,5vw,50px)",
                color: "#EDF0F5",
                letterSpacing: -1,
                marginBottom: 16,
                marginTop: 4,
              }}
            >
              Let's build something
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                together.
              </em>
            </h2>
            <p
              style={{
                fontSize: 14.5,
                color: "var(--muted)",
                maxWidth: 380,
                margin: "0 auto 36px",
                lineHeight: 1.75,
              }}
            >
              I'm actively looking for new opportunities. Whether you have a
              project or just want to say hi — reach out.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 40,
              }}
            >
              {[
                {
                  href: `mailto:${ME.email}`,
                  label: "📧 Send Email",
                  primary: true,
                },
                {
                  href: `tel:${ME.phone}`,
                  label: "📞 Call Me",
                  primary: false,
                },
              ].map(({ href, label, primary }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: primary ? "var(--accent)" : "transparent",
                    color: primary ? "#050D17" : "var(--text)",
                    border: primary ? "none" : "1px solid var(--border)",
                    padding: "11px 22px",
                    borderRadius: 8,
                    fontFamily: "var(--sans)",
                    fontSize: 13.5,
                    fontWeight: 700,
                    letterSpacing: 0.3,
                    textDecoration: "none",
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
                </a>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              {[
                ["📧", ME.email, "var(--accent)"],
                ["📍", ME.location, "var(--accent2)"],
                ["📱", ME.phone, "#C084FC"],
              ].map(([ic, val, c]) => (
                <div
                  key={val}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span style={{ fontSize: 14 }}>{ic}</span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12.5,
                      color: c,
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
