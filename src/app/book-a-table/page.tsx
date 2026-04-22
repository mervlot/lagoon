'use client';

import { BookingForm } from '@/components/booking-form';
import { motion } from 'framer-motion';

export default function BookATablePage() {
  return (
    <motion.div
      className="container mx-auto max-w-2xl py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Reserve Your Table
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          We can't wait to host you. Please fill out the form below to make a
          reservation.
        </p>
      </div>
      <BookingForm />
    </motion.div>
  );
}
