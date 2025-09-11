'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { MY_ATTRIBUTES as attributes } from '@/constants';
import type { CarouselApi } from '@/components/ui/carousel';

export default function HomePageHeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex justify-center w-full">
      <Carousel
        setApi={setApi}
        className="w-full max-w-4xl mx-auto"
        opts={{ loop: true }}
      >
        <CarouselContent className="min-w-full">
          {attributes.map((attribute, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center min-w-full basis-full"
            >
              <h1 className="w-full px-2 text-xl font-bold text-center text-green-500 break-words sm:px-4 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                {attribute}
              </h1>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
