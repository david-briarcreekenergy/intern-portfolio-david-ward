import HomePageHeroCarousel from './components/HomePageHeroCarousel';

export default function Home() {
  const content = `I am a blacksmith.  Code I write is for the benefit of my employer/client.  The joy of the job comes when they say to me "Do you know how much easier my job is because of your work?" \n\n
  I consider the fact that much of my work is invisible to be a compliment.  It means I have done my job well.  I am not the star of the show, but the enabler of the star of the show.  I am adaptable, collaborative, diligent, tenacious, innovative, and on time.`;

  const whatDoYouNeededForged = `What do you need forged?`;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-108px)] p-4 pb-8 gap-4 sm:p-8 sm:pb-20 sm:gap-8 lg:gap-16 lg:p-20 bg-cover bg-center bg-no-repeat bg-[url('/anvil.png')]">
      <main className="flex flex-col items-center w-full max-w-6xl row-start-2 gap-4 px-2 text-center sm:gap-6 lg:gap-8 sm:px-4">
        {/* Hero Section */}
        <section className="w-full hero">
          <HomePageHeroCarousel />
        </section>

        {/* Description Section */}
        <section
          id="desc-section"
          className="max-w-2xl px-2 space-y-3 text-sm leading-relaxed text-gray-600 sm:space-y-4 sm:text-base lg:text-lg dark:text-gray-300 sm:px-0"
        >
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-justify text-yellow-400">
              {paragraph.trim()}
            </p>
          ))}
        </section>

        <section className="w-full hero">
          <h1 className="px-2 text-2xl font-bold text-green-500 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white sm:px-0">
            {whatDoYouNeededForged}
          </h1>
        </section>
      </main>
    </div>
  );
}
