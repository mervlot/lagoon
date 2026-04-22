'use client';

import { BookingForm } from '@/components/booking-form';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Users, CalendarDays, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookATablePage() {
  const features = [
    { icon: Users, text: 'Tables for 1-20 guests' },
    { icon: CalendarDays, text: 'Book up to 30 days ahead' },
    { icon: Clock, text: 'Flexible timing options' },
    { icon: Sparkles, text: 'Special occasion arrangements' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/90 to-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container relative mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Secure Your Spot
            </span>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Reserve Your Table
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
              We can&apos;t wait to host you. Fill out the form below to make a reservation.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl py-16">
        {/* Features */}
        <ScrollReveal animation="fade-up">
          <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex flex-col items-center rounded-xl border bg-card p-4 text-center shadow-sm"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="rounded-2xl border bg-card p-6 shadow-lg sm:p-8">
            <BookingForm />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
