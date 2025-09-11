'use client';

import { LOREM_IPSUM } from '@/constants';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LogoLoop from '../components/LogoLoop';
import Particles from '../components/ui/Particles';

export default function About() {
  const titleRef = useRef(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const techStackRef = useRef(null);

  const whoIam = `Who I Am`;

  const intro = `I am a software developer with a passion for creating efficient and scalable solutions.  I enjoy working on both front-end and back-end development, and I am always eager to learn new technologies and improve my skills.`;

  const background = `Having 5+ years of web development experience, I have primarily been a CRM developer utilizing PHP with Laravel for server-side business logic.  I make extensive use of MySql, and am daily writing complex queries to pull data my clients want to see.  I have employed both Vue.js and React front-end frameworks, harnessing assets such Material UI, Tailwind CSS, and PrimeVue to provide the best UI/UX  I can. I am well versed in consuming APIs as I spent 3+ years as the lead developer managing the Adobe Sign API for a former employer.`;

  const recently = `Recently, I have been expanding my skill set by learning Next.js and TypeScript, and I am excited to apply these technologies in future projects. `;

  const currently = `Currently, I am working on GameDay Sports, a Little League Baseball tournament management application.  It will allow the client to manage teams, players, schedules, and scores for multiple tournaments.  It is being built with Next.js front-end and express.js backend .  The application is still in the early stages of development, but I am excited about the potential it has to streamline tournament management for my client.`;

  const techStack = [
    '/logos/react.jpg',
    '/logos/Nextjs.png',
    '/logos/typescript.png',
    '/logos/js.png',
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, scale: 0.8 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
    )
    .fromTo(paragraphsRef.current.filter(Boolean), 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, 
      "-=0.5"
    )
    .fromTo(techStackRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
      "-=0.3"
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
            {whoIam}
          </h1>
        </section>

        {/* Intro Section */}
        <div className="text-neutral-400 max-w-2xl space-y-4 leading-relaxed flex-column text-sm sm:text-base lg:text-lg px-2 sm:px-0">
          <p 
            ref={(el) => { paragraphsRef.current[0] = el; }}
            className="text-justify opacity-0"
          >
            {intro}
          </p>
          <p 
            ref={(el) => { paragraphsRef.current[1] = el; }}
            className="text-justify opacity-0"
          >
            {background}
          </p>
          <p 
            ref={(el) => { paragraphsRef.current[2] = el; }}
            className="text-justify opacity-0"
          >
            {recently}
          </p>
          <p 
            ref={(el) => { paragraphsRef.current[3] = el; }}
            className="text-justify opacity-0"
          >
            {currently}
          </p>
        </div>

        {/* Tech Stack Section */}
        <div 
          ref={techStackRef}
          className="w-full max-w-4xl opacity-0"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 mb-4 sm:mb-6 text-center pt-4 sm:pt-8 font-mono">
            Technologies I Work With
          </h2>
          <LogoLoop className="mb-8" />
        </div>
      </main>
    </div>
  );
}
