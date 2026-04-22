'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';

export function HeroCarousel() {
  const carouselImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('hero-')
  );

  const carouselItemsContent = [
    {
      title: 'Experience Authentic Nigerian Flavors',
      description: 'A culinary journey to the heart of Lagos.',
      buttonText: 'Explore Menu',
      buttonLink: '/menu',
    },
    {
      title: 'Unforgettable Ambiance',
      description: 'Dine in style and comfort.',
      buttonText: 'Book Your Table',
      buttonLink: '/book-a-table',
    },
    {
      title: 'Handcrafted Cocktails & More',
      description: 'Perfect pairings for your perfect meal.',
      buttonText: 'View Drinks',
      buttonLink: '/menu',
    },
  ];

  return (
    <section className="relative w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={image.id}>
              <div className="relative h-[60vh] min-h-[400px] w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <h1 className="font-headline text-4xl font-bold md:text-6xl">
                      {carouselItemsContent[index].title}
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                      {carouselItemsContent[index].description}
                    </p>
                    <Button asChild size="lg" className="mt-8">
                      <Link href={carouselItemsContent[index].buttonLink}>
                        {carouselItemsContent[index].buttonText}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-white/50 bg-black/20 text-white hover:bg-black/50 hover:text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-white/50 bg-black/20 text-white hover:bg-black/50 hover:text-white" />
      </Carousel>
    </section>
  );
}
