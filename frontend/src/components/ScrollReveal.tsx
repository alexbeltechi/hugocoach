"use client";

import { useEffect } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const elements = main.querySelectorAll<HTMLElement>("section, footer");
    if (elements.length === 0) return;

    elements.forEach((el, i) => {
      if (i === 0) return;
      el.classList.add("scroll-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((el, i) => {
      if (i === 0) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("revealed");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
