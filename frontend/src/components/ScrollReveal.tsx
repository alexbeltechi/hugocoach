"use client";

import { useEffect } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const sections = main.querySelectorAll<HTMLElement>("section, footer");
    if (sections.length === 0) return;

    sections[0].classList.add("revealed");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach((section, i) => {
      if (i > 0) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
