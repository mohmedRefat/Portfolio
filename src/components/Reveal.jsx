// src/components/Reveal.jsx
import { useInView } from "../hooks";

export function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}s,
                   transform .7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
