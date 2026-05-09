// src/components/Projects.jsx
import { useState } from "react";
import { ME } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { ProjectCard, ProjectModal } from "./ProjectCard";

export function Projects() {
  const [modal, setModal] = useState(null);
  const [hovered, setHovered] = useState(null);
  return (
    <section id="Projects" style={{ paddingTop: 20, paddingBottom: 80 }}>
      <Reveal>
        <div className="sec-label">
          <span>Work</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(32px,5vw,52px)",
            color: "#EDF0F5",
            letterSpacing: -1,
            marginBottom: 8,
          }}
        >
          Selected Projects
        </h2>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12.5,
            color: "var(--dim)",
            marginBottom: 38,
            letterSpacing: 0.3,
          }}
        >
          Click any card to see details & open links.
        </p>
      </Reveal>
      <div className="proj-grid">
        {ME.projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <ProjectCard
              project={p}
              index={i}
              isHov={hovered === p.id}
              onHover={setHovered}
              onClick={() => setModal({ project: p, index: i })}
            />
          </Reveal>
        ))}
      </div>
      {modal && (
        <ProjectModal
          project={modal.project}
          index={modal.index}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
