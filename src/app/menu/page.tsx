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
import { menu } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MenuPage() {
  const categories = [...new Set(menu.map((dish) => dish.category))];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
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
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Our Menu
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Discover a world of flavor, from classic recipes to modern creations.
        </p>
      </div>

      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <motion.div
              className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {menu
                .filter((dish) => dish.category === category)
                .map((dish) => {
                  const image = PlaceHolderImages.find(
                    (img) => img.id === dish.imageId
                  );
                  return (
                    <motion.div
                      key={dish.id}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card
                        key={dish.id}
                        className="flex h-full flex-col overflow-hidden"
                      >
                        <CardHeader className="p-0">
                          <div className="relative aspect-video w-full">
                            {image && (
                              <Image
                                src={image.imageUrl}
                                alt={dish.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                data-ai-hint={image.imageHint}
                              />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 p-6">
                          <CardTitle className="font-headline text-xl">
                            {dish.name}
                          </CardTitle>
                          <CardDescription className="mt-2 text-base">
                            {dish.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <p className="font-semibold text-primary">
                            ${dish.price.toFixed(2)}
                          </p>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  );
                })}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
