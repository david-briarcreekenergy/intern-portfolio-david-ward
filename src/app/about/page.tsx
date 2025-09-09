import { LOREM_IPSUM } from '@/constants';
import Image from 'next/image';

export default function About() {
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

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-108px)] p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center row-start-2 gap-8 text-center">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            {whoIam}
          </h1>
        </section>

        {/* Intro Section */}
        <div className="max-w-2xl space-y-4 leading-relaxed text-gray-600 flex-column space-y-4text-lg dark:text-gray-300">
          <p className="text-justify">{intro}</p>
          <p className="text-justify">{background}</p>
          <p className="text-justify">{recently}</p>
          <p className="text-justify">{currently}</p>
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {techStack.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-2">
              <Image
                src={logo}
                alt={`Tech logo ${index + 1}`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
