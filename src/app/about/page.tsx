import { LOREM_IPSUM } from '@/constants';
export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-[calc(100vh-108px)] p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center row-start-2 gap-8 text-center">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            The About Page
          </h1>
        </section>

        {/* Lorem Ipsum Section */}
        <div className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          <p>{LOREM_IPSUM}</p>
        </div>
      </main>
    </div>
  );
}
