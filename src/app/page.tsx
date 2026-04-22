'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HeroCarousel } from '@/components/hero-carousel';
import { menu } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredDishes = menu.slice(0, 4);
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === 'about-interior'
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col">
      <HeroCarousel />

      <motion.section
        id="about"
        className="container mx-auto py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              A Taste of Lagos in the Heart of the City
            </h2>
            <p className="text-muted-foreground">
              The Lagoon is more than just a restaurant; it's an experience. We
              bring the vibrant, bold, and diverse flavors of Lagos, Nigeria, to
              your plate, prepared with a modern twist. Our mission is to
              provide an unforgettable dining journey that blends authentic
              Nigerian heritage with contemporary culinary techniques.
            </p>
            <p className="text-muted-foreground">
              Our chefs use only the freshest locally-sourced ingredients to
              craft dishes that are both comforting and exciting. From classic
              Jollof Rice to our signature Grilled Tilapia, every bite tells a
              story.
            </p>
            <Button asChild>
              <Link href="/menu">
                Explore Our Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="featured"
        className="bg-secondary/50 py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Signature Dishes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A selection of our most loved dishes, crafted with passion and
              the finest ingredients.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={cardContainerVariants}
          >
            {featuredDishes.map((dish) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === dish.imageId
              );
              return (
                <motion.div
                  key={dish.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={dish.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="mb-2 font-headline text-lg font-bold">
                        {dish.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {dish.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/menu">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
