'use client';

import Image from 'next/image';
import GameDaySports from '@public/projects/gameday-sports.png';
import CardPrimary from '@/components/CardPrimary';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Particles from '../components/ui/Particles';

export default function Projects() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  const projectsTitle = `Projects`;

  const projectDescription = `An app that allows League administrators to manage multiple tournaments, teams, coaches, etc.; coaches to manage their teams, players, and coaches; and parents to manage their player's information and communicate with the coach.`;

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(imageRef.current, 
      { opacity: 0, x: -50, rotation: -5 }, 
      { opacity: 1, x: 0, rotation: 0, duration: 1, ease: "back.out(1.7)" }, 
      "-=0.3"
    )
    .fromTo(cardRef.current, 
      { opacity: 0, x: 50 }, 
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, 
      "-=0.5"
    );
  }, []);

  return (
    <div className="font-sans grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-[calc(100vh-108px)] p-3 pb-8 gap-4 sm:grid-rows-[20px_1fr_20px] sm:p-8 sm:pb-20 sm:gap-16 lg:p-20 bg-gradient-to-tr from-neutral-800 via-neutral-950 to-black relative">
      {/* Full-screen particles background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <main className="flex flex-col items-center row-start-2 gap-4 text-center sm:gap-8 relative z-10">
        {/* Hero Section */}
        <section className="hero">
          <h1 
            ref={titleRef}
            className="text-2xl font-bold text-emerald-400 tracking-wide font-mono sm:text-4xl md:text-6xl opacity-0"
          >
            {projectsTitle}
          </h1>
        </section>

        {/* Project Section */}
        <section className="w-full max-w-6xl px-2 sm:px-0">
          <div className="grid items-center grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
            {/* Image */}
            <div 
              ref={imageRef}
              className="flex justify-center opacity-0 order-2 md:order-1"
            >
              <Image
                src={GameDaySports}
                alt="GameDay Sports Project Image"
                className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full"
              />
            </div>
            <div 
              ref={cardRef}
              className="opacity-0 order-1 md:order-2"
            >
              <CardPrimary
                cardTitle="GameDay Sports"
                cardDescription="Manage Little League Baseball Tournaments"
                cardContent={projectDescription}
                cardFooter="Currently built with a Next.js frontend and an express.js backend.  Soon, the backend will be built with Next.js API routes."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
