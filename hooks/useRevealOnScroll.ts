'use client';

import { useEffect } from 'react';

interface UseRevealOnScrollOptions {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}

export function useRevealOnScroll(options: UseRevealOnScrollOptions = {}) {
  const { rootMargin = '0px 0px 20% 0px', threshold = 0, once = true } = options;

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, once]);
}

