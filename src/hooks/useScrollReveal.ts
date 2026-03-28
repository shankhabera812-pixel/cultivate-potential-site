import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe the element itself and any children with .reveal class
    const revealChildren = element.querySelectorAll('.reveal');
    if (element.classList.contains('reveal')) {
      observer.observe(element);
    }
    revealChildren.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
