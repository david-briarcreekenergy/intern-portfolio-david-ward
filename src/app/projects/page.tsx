import Image from 'next/image';
import GameDaySports from '@public/projects/gameday-sports.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LOREM_IPSUM } from '@/constants';

export default function Projects() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-[calc(100vh-108px)] p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center row-start-2 gap-8 text-center">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            The Projects Page
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

            {/* Card */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>GameDay Sports</CardTitle>
                <CardDescription>
                  Manage Little League Baseball Tournaments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {LOREM_IPSUM}
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Maybe TechStack badges?</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
