"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);            // <- RefObject VÁLIDO
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { root: null, threshold: 0.1, ...(options || {}) }
    );

    obs.observe(node);
    return () => {
      if (node) obs.unobserve(node);
      obs.disconnect();
    };
  }, [options]);

  return { ref, isVisible };                     // <- chave "ref"
}
