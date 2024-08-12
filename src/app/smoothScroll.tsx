// components/SmoothScroll.tsx
"use client"
// components/SmoothScroll.tsx
import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      gsap.to(scrollContainer, {
        y: 0,
        duration: 1,
        ease: 'power1.inOut', // Coba berbagai easing seperti "power1", "power2", "power3", "power4", "sine", dll.
        scrollTrigger: {
          markers:true,
          trigger: scrollContainer,
          start: 'top top',
          end: '800',
          scrub: 1, // Atur nilai scrub untuk tingkat smoothness yang diinginkan, misalnya 0.5, 1, 1.5, dll.
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      ref={scrollContainerRef}
      overflow="hidden"
      width="100%"
      height="100vh"
      position="relative"
    >
      {children}
    </Box>
  );
};

export default SmoothScroll;
