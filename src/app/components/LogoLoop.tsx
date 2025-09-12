'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LogoLoopProps {
  className?: string;
}

export default function LogoLoop({ className = '' }: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      // Consider both width and height for better mobile detection
      const isMobileDevice =
        window.innerWidth < 768 ||
        (window.innerWidth < 1024 && window.innerHeight < 768);
      setIsMobile(isMobileDevice);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const logos = [
    { src: '/logos/nextjs-icon-light-background.png', alt: 'Next.js' },
    { src: '/logos/Tailwind CSS.svg', alt: 'Tailwind CSS' },
    { src: '/logos/React.svg', alt: 'React' },
    { src: '/logos/MongoDB.svg', alt: 'MongoDB' },
    { src: '/logos/PHP.svg', alt: 'PHP' },
    { src: '/logos/laravel.svg', alt: 'Laravel' },
    { src: '/logos/Vue.js.svg', alt: 'Vue.js' },
    { src: '/logos/MySQL.svg', alt: 'MySQL' },
    { src: '/logos/postgresql.png', alt: 'PostgreSQL' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const logoElements = container.querySelectorAll('.logo-item');

    // Mobile settings for better spacing and positioning (including landscape)
    const staggerDelay = isMobile ? 4 : 2; // Increased spacing for mobile landscape
    const animationDuration = isMobile ? 30 : 20; // Slower for better visibility
    const startPosition = isMobile ? '120vw' : '50vw'; // Start further right on mobile
    const endPosition = isMobile ? '-120vw' : '-50vw'; // Exit further left on mobile
    const loopGap = isMobile ? 4 : 0; // Longer gap between loop cycles on mobile

    const tl = gsap.timeline({ repeat: -1 });

    // Set initial position based on device
    tl.set(logoElements, { x: startPosition }).to(logoElements, {
      x: endPosition,
      duration: animationDuration,
      ease: 'none',
      stagger: {
        each: staggerDelay,
        repeat: -1,
        repeatDelay: loopGap,
      },
    });

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div
      className={`overflow-hidden w-full ${className} border border-neutral-700 rounded-lg bg-neutral-900/50`}
    >
      <div
        ref={containerRef}
        className="relative flex items-center h-24 sm:h-32 md:h-48"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center logo-item"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={isMobile ? 40 : 60}
              height={isMobile ? 80 : 120}
              className="object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 sm:w-[60px] sm:h-[120px] md:w-[75px] md:h-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
