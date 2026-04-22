'use client';

import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      className="container mx-auto py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          We'd love to hear from you. Whether it's feedback, a question, or a
          special request, our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline">Our Address</h3>
              <p className="text-muted-foreground">
                123 Lagoon Avenue, Victoria Island, Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline">Call Us</h3>
              <p className="text-muted-foreground">+234 801 234 5678</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline">Email Us</h3>
              <p className="text-muted-foreground">
                reservations@lagoonlagos.com
              </p>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
}
