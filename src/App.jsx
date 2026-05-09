// src/Portfolio.jsx
import { GlobalStyles } from "./styles/global";
import {
  Navbar,
  Hero,
  Skills,
  Projects,
  Education,
  Contact,
  Footer,
} from "./components";

export default function Portfolio() {
  const goto = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <style>{GlobalStyles}</style>
      <Navbar />
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Hero onNav={goto} />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
