import HomePageHeroCarousel from './components/HomePageHeroCarousel';

export default function Home() {
  const content = `I am a blacksmith.  Code I write is for the benefit of my employer/client.  The joy of the job comes when they say to me "Do you know how much easier my job is because of your work?" \n\n
  I consider the fact that much of my work is invisible to be a compliment.  It means I have done my job well.  I am not the star of the show, but the enabler of the star of the show.  I am adaptable, collaborative, diligent, tenacious, innovative, and on time.`;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-108px)] p-8 pb-20 gap-16 sm:p-20 bg-cover bg-center bg-no-repeat bg-[url('/anvil.png')]">
      <main className="flex flex-col items-center row-start-2 gap-8 text-center">
        {/* Hero Section */}
        <section className="0 hero">
          <HomePageHeroCarousel />
        </section>

        {/* Description Section */}
        <div
          id="desc-section"
          className="max-w-2xl space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-justify text-yellow-400">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
