// src/components/Navbar.jsx
import { useScrolled, useActiveSection } from "../hooks";
import { ME, NAV } from "../data/portfolio";

export function Navbar() {
  const scrolled = useScrolled();
  const [active, setActive] = useActiveSection();
  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        background: scrolled ? "rgba(7,8,13,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(22px)" : "none",
        transition: "all .4s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 28px",
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => goto("Home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--serif)",
            fontSize: 21,
            color: "#EDF0F5",
            letterSpacing: -0.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          MR
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>.</span>
        </button>
        <div style={{ display: "flex", gap: 2 }} className="hide-mob">
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => goto(n)}
              style={{
                background: active === n ? "rgba(96,165,250,.08)" : "none",
                border: "none",
                fontFamily: "var(--sans)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 0.35,
                color: active === n ? "var(--accent)" : "var(--muted)",
                cursor: "pointer",
                padding: "6px 14px",
                borderRadius: 6,
                transition: "color .2s, background .2s",
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <a
          href={`mailto:${ME.email}`}
          className="hide-mob"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "var(--accent)",
            color: "#050D17",
            border: "none",
            padding: "8px 18px",
            borderRadius: 8,
            fontFamily: "var(--sans)",
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: 0.4,
            textDecoration: "none",
            transition: "opacity .2s, transform .2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = ".85";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "none";
          }}
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
