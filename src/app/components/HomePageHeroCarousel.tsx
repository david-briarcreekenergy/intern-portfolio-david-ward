'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useRef, useState } from 'react';
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
    <Carousel
      setApi={setApi}
      className="w-full max-w-4xl"
      opts={{ loop: true }}
    >
      <CarouselContent className="min-w-full">
        {attributes.map((attribute, index) => (
          <CarouselItem key={index} className="min-w-full basis-full">
            <h1 className="w-full px-4 text-4xl font-bold text-center text-green-500 md:text-6xl dark:text-white whitespace-nowrap">
              {attribute}
            </h1>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
