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
    { src: '/logos/Next.js.svg', alt: 'Next.js' },
    { src: '/logos/Tailwind CSS.svg', alt: 'Tailwind CSS' },
    { src: '/logos/React.svg', alt: 'React' },
    { src: '/logos/Express.svg', alt: 'Express.js' },
    { src: '/logos/PHP.svg', alt: 'PHP' },
    { src: '/logos/Vue.js.svg', alt: 'Vue.js' },
    { src: '/logos/MySQL.svg', alt: 'MySQL' },
    { src: '/logos/MongoDB.svg', alt: 'MongoDB' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const logoElements = container.querySelectorAll('.logo-item');
    
    // Calculate timing for seamless loop
    const logoCount = logoElements.length;
    const staggerDelay = 1; // Time between each logo starting (reduced for tighter spacing)
    const totalCycleDuration = logoCount * staggerDelay; // Total time for one complete cycle
    const animationDuration = 20; // Time for each logo to cross the screen (increased for slower movement)
    
    const tl = gsap.timeline({ repeat: -1 });
    
    // Set initial position off-screen to the right
    tl.set(logoElements, { x: '100vw' })
      .to(logoElements, {
        x: '-150vw',
        duration: animationDuration,
        ease: 'none',
        stagger: {
          each: staggerDelay,
          repeat: -1,
          repeatDelay: 0
        }
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={`overflow-hidden w-full ${className} border border-neutral-700 rounded-lg bg-neutral-900/50`}>
      <div ref={containerRef} className="relative h-24 sm:h-32 md:h-48 flex items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="logo-item absolute flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={50}
              height={100}
              className="object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 sm:w-[60px] sm:h-[120px] md:w-[75px] md:h-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}