// src/components/Footer.jsx
import { ME } from "../data/portfolio";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "22px 28px",
        textAlign: "center",
        color: "var(--dim)",
        fontSize: 12.5,
        fontFamily: "var(--mono)",
        letterSpacing: 0.3,
      }}
    >
      <span
        style={{ fontFamily: "var(--serif)", color: "#EDF0F5", fontSize: 14 }}
      >
        {ME.name}
      </span>
      <span style={{ margin: "0 10px", color: "var(--border2)" }}>·</span>
      Full-Stack MERN Developer
      <span style={{ margin: "0 10px", color: "var(--border2)" }}>·</span>
      {ME.location}
    </footer>
  );
}
