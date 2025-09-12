'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LogoLoopProps {
  className?: string;
}

export default function LogoLoop({ className = '' }: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: '/logos/nextjs-icon-light-background.png', alt: 'Next.js' },
    { src: '/logos/Tailwind CSS.svg', alt: 'Tailwind CSS' },
    { src: '/logos/React.svg', alt: 'React' },
    { src: '/logos/MongoDB.svg', alt: 'MongoDB' },
    // { src: '/logos/Express.svg', alt: 'Express.js' },
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

    // Responsive settings based on screen size
    const isMobile = window.innerWidth < 768;

    // Mobile settings for better spacing and positioning
    const staggerDelay = isMobile ? 3 : 2;
    const animationDuration = isMobile ? 25 : 20;
    const startPosition = isMobile ? '100vw' : '50vw';
    const endPosition = isMobile ? '-100vw' : '-50vw';
    const loopGap = isMobile ? 3 : 0; // Gap between loop cycles on mobile

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
  }, []);

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
              width={50}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 sm:w-[60px] sm:h-[120px] md:w-[75px] md:h-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
