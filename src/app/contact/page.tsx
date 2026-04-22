'use client';

import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: '123 Lagoon Avenue, Victoria Island, Lagos, Nigeria',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+234 801 234 5678',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'reservations@lagoonlagos.com',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Mon - Sun: 11:00 AM - 11:00 PM',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/90 to-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/about-interior.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container relative mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              We&apos;d Love to Hear From You
            </span>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
              Whether it&apos;s feedback, a question, or a special request, our team is here to help.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal animation="fade-right">
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold sm:text-3xl">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out to us through any of the following channels. We&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <StaggerContainer className="mt-8 space-y-6" staggerDelay={0.1}>
              {contactInfo.map((info) => (
                <StaggerItem key={info.title}>
                  <motion.div
                    className="group flex items-start gap-4 rounded-xl border bg-card p-5 transition-shadow hover:shadow-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold">{info.title}</h3>
                      <p className="mt-1 text-muted-foreground">{info.content}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={0.2}>
            <div className="rounded-2xl border bg-card p-6 shadow-lg sm:p-8">
              <h2 className="mb-6 font-headline text-2xl font-bold">Send us a Message</h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
