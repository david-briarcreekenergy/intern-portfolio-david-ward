'use client';

// import HomePageHeroCarousel from './components/HomePageHeroCarousel';
import TextType from "./components/ui/TextType";
import ButtonPrimary from "./components/ButtonPrimary";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Particles from "../app/components/ui/Particles"


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  const content = `I am a blacksmith. I write code for the benefit of the client. The joy of the job comes when they say to me, "Do you know how much easier my job is because of your work? I consider the fact that much of my work is invisible to be a compliment. It means I have done my job well. I am not the star of the show, but the enabler of the star of the show. I am adaptable, collaborative, diligent, tenacious, innovative, and on time."`;

  {
    /* TextType Component */
  }
  const whatDoYouNeededBuilt = `What do you need built?`;

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([heroRef.current, descRef.current, buttonRef.current], {
      opacity: 0,
      y: 50
    });
    
    // Animate elements in sequence
    tl.to(heroRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");

    // Add hover animation to button
    const button = buttonRef.current;
    if (button) {
      const handleMouseEnter = () => {
        gsap.to(button, {
          y: -5,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="font-sans grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-[calc(100vh-108px)] p-3 pb-6 gap-3 sm:grid-rows-[20px_1fr_20px] sm:p-8 sm:pb-20 sm:gap-8 lg:gap-16 lg:p-20 bg-center bg-no-repeat bg-gradient-to-tr from-neutral-800 via-neutral-950 to-black relative">
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
      <main className="flex flex-col items-center w-full max-w-6xl row-start-2 gap-4 px-2 text-center sm:gap-6 lg:gap-8 sm:px-4 relative z-10">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center py-2 sm:py-4">
          <TextType
            text={["Hi, I'm David Ward"]}
            typingSpeed={150}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-emerald-400 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-wide font-mono"
          />
        </div>
        <section className="w-full hero">
          {/* <HomePageHeroCarousel /> */}
        </section>

        {/* Description Section */}
        <div
          ref={descRef}
          id="desc-section"
          className="max-w-2xl px-1 space-y-3 text-sm leading-relaxed text-gray-600 sm:space-y-4 sm:text-base lg:text-lg sm:px-2"
        >
          <p className="text-neutral-400 text-center">
            I am a blacksmith. I write code for the benefit of the client. The
            joy of the job comes when they say to me,
            <span className="text-white">
              "Do you know how much easier my job is because of your work?"
            </span>{" "}
            I consider the fact that much of my work is invisible to be a
            compliment. It means I have done my job well. I am not the star of
            the show, but the enabler of the star of the show. I am{" "}
            <span className="text-white">
              adaptable, collaborative, diligent, tenacious, innovative, and on
              time
            </span>
            .
          </p>
        </div>

        {/* Contact Button */}
        <div ref={buttonRef} className="mt-6 sm:mt-12 inline-flex">
          <ButtonPrimary>
            <a href="/contact" className="px-4 py-2 sm:px-6 sm:py-3 block text-sm sm:text-base">
              Let's Work Together
            </a>
          </ButtonPrimary>
        
        </div>

        <section className="w-full hero"></section>
      </main>
    </div>
  );
}
