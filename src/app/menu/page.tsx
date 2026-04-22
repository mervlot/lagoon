'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { menu } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MenuPage() {
  const categories = [...new Set(menu.map((dish) => dish.category))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/90 to-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-2.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container relative mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Discover Our Flavors
            </span>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Our Menu
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
              Discover a world of flavor, from classic recipes to modern creations.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <Tabs defaultValue={categories[0]} className="w-full">
          <ScrollReveal animation="fade-up">
            <TabsList className="mb-8 grid w-full grid-cols-2 sm:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm font-medium sm:text-base"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollReveal>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <StaggerContainer
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                staggerDelay={0.1}
              >
                {menu
                  .filter((dish) => dish.category === category)
                  .map((dish) => {
                    const image = PlaceHolderImages.find(
                      (img) => img.id === dish.imageId
                    );
                    return (
                      <StaggerItem key={dish.id}>
                        <motion.div
                          whileHover={{ y: -8 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <Card className="group flex h-full flex-col overflow-hidden border-0 shadow-lg transition-shadow hover:shadow-2xl">
                            <CardHeader className="p-0">
                              <div className="relative aspect-[4/3] w-full overflow-hidden">
                                {image && (
                                  <Image
                                    src={image.imageUrl}
                                    alt={dish.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    data-ai-hint={image.imageHint}
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                              </div>
                            </CardHeader>
                            <CardContent className="flex-1 p-6">
                              <CardTitle className="font-headline text-xl transition-colors group-hover:text-primary">
                                {dish.name}
                              </CardTitle>
                              <CardDescription className="mt-2 line-clamp-3 text-base">
                                {dish.description}
                              </CardDescription>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                              <p className="rounded-full bg-primary/10 px-4 py-1.5 text-lg font-bold text-primary">
                                ${dish.price.toFixed(2)}
                              </p>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
              </StaggerContainer>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
