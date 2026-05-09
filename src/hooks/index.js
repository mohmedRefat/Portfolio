// src/hooks/index.js
import { useState, useEffect, useRef } from "react";
import { NAV } from "../data/portfolio";

export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

export function useActiveSection() {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const handler = () => {
      for (const id of [...NAV].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(id);
          return;
        }
      }
      setActive("Home");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return [active, setActive];
}
