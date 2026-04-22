'use client';

import { OrderClient } from '@/components/order-client';
import { motion } from 'framer-motion';

export default function OrderOnlinePage() {
  return (
    <motion.div
      className="container mx-auto py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Order Online
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Enjoy your favorite dishes from the comfort of your home. Select
          items to add them to your cart.
        </p>
      </div>
      <OrderClient />
    </motion.div>
  );
}
