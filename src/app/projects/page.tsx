import Image from 'next/image';
import GameDaySports from '@public/projects/gameday-sports.png';
import CardPrimary from '@/components/CardPrimary';
import { LOREM_IPSUM } from '@/constants';

export default function Projects() {
  const projectsTitle = `Projects`;

  const projectDescription = `An app that allows League administrators to manage multiple tournaments, teams, coaches, etc.; coaches to manage their teams, players, and coaches; and parents to manage their player's information and communicate with the coach.`;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-[calc(100vh-108px)] p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center row-start-2 gap-8 text-center">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            {projectsTitle}
          </h1>
        </section>

        {/* Project Section */}
        <section className="w-full max-w-6xl">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={GameDaySports}
                alt="GameDay Sports Project Image"
                className="rounded-lg shadow-lg"
              />
            </div>
            <CardPrimary
              cardTitle="GameDay Sports"
              cardDescription="Manage Little League Baseball Tournaments"
              cardContent={projectDescription}
              cardFooter="Currently built with a Next.js frontend and an express.js backend.  Soon, the backend will be built with Next.js API routes."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
