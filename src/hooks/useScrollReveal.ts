import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
