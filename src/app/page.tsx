'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/optimized-image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HeroCarousel } from '@/components/hero-carousel';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { menu } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Utensils, Clock, Award, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredDishes = menu.slice(0, 4);
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === 'about-interior'
  );

  const features = [
    {
      icon: Utensils,
      title: 'Authentic Recipes',
      description: 'Traditional Nigerian dishes passed down through generations',
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Ingredients sourced fresh from local markets every morning',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as one of the best Nigerian restaurants in the city',
    },
    {
      icon: Sparkles,
      title: 'Modern Twist',
      description: 'Classic flavors reimagined with contemporary techniques',
    },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeroCarousel />

      {/* Features Section */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-4" staggerDelay={0.15}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="group flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-headline text-sm font-semibold sm:text-base">{feature.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal animation="fade-right" className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Story
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                A Taste of Lagos in the Heart of the City
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Lagoon is more than just a restaurant; it&apos;s an experience. We
                bring the vibrant, bold, and diverse flavors of Lagos, Nigeria, to
                your plate, prepared with a modern twist.
              </p>
              <p className="text-muted-foreground">
                Our chefs use only the freshest locally-sourced ingredients to
                craft dishes that are both comforting and exciting. From classic
                Jollof Rice to our signature Grilled Tilapia, every bite tells a
                story.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/menu">
                    Explore Our Menu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/book-a-table">Book a Table</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={0.2} className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
                {aboutImage && (
                  <OptimizedImage
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    data-ai-hint={aboutImage.imageHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                )}
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary/20" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="featured" className="bg-secondary/30 py-20 sm:py-28">
        <div className="container mx-auto">
          <ScrollReveal animation="fade-up" className="mb-14 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Chef&apos;s Selection
            </div>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Our Signature Dishes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A selection of our most loved dishes, crafted with passion and
              the finest ingredients.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
            {featuredDishes.map((dish) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === dish.imageId
              );
              return (
                <StaggerItem key={dish.id}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Card className="group h-full overflow-hidden border-0 bg-card shadow-lg transition-shadow hover:shadow-2xl">
                      <CardHeader className="p-0">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          {image && (
                            <OptimizedImage
                              src={image.imageUrl}
                              alt={dish.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              data-ai-hint={image.imageHint}
                              quality={80}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                              ${dish.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-5">
                        <CardTitle className="mb-2 font-headline text-xl font-bold transition-colors group-hover:text-primary">
                          {dish.name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm">
                          {dish.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal animation="fade-up" delay={0.4} className="mt-14 text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
        <div className="absolute inset-0 bg-[url('/images/hero-2.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container relative mx-auto text-center">
          <ScrollReveal animation="zoom-in">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/90">
              Book your table today and embark on a culinary journey through the
              heart of Nigerian cuisine.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="group text-base">
                <Link href="/book-a-table">
                  Reserve a Table
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/order-online">Order Online</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
