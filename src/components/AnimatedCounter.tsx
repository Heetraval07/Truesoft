"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
}

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimatedRef.current) return;

    // Create IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            startTimeRef.current = performance.now();
            
            // Start animation
            const animate = (currentTime: number) => {
              if (!startTimeRef.current) return;
              
              const elapsed = currentTime - startTimeRef.current;
              const duration = 2000; // 2 seconds
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation (ease-out)
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(easeOut * value);
              
              setCount(currentCount);
              
              if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
              } else {
                // Ensure final value is set
                setCount(value);
                if (observerRef.current && element) {
                  observerRef.current.unobserve(element);
                }
              }
            };
            
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    observerRef.current.observe(element);

    // Cleanup function
    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value]);

  return <span ref={elementRef}>{count}+</span>;
};

export default AnimatedCounter;
