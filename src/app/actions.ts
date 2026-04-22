'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number.')
    .optional()
    .or(z.literal('')),
  date: z.string().min(1, 'Please select a date.'),
  time: z.string().min(1, 'Please select a time.'),
  partySize: z.string().min(1, 'Please select party size.'),
});

export async function bookTable(prevState: any, formData: FormData) {
  const parsed = bookingSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    date: formData.get('date'),
    time: formData.get('time'),
    partySize: formData.get('partySize'),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // In a real app, you would save this to a database.
  console.log('New Booking:', parsed.data);

  revalidatePath('/book-a-table');

  return {
    success: true,
    message: `Thank you, ${parsed.data.name}! Your table for ${parsed.data.partySize} on ${parsed.data.date} at ${parsed.data.time} is booked.`,
    errors: null,
  };
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // In a real app, you would send an email or save to a database.
  console.log('New Contact Message:', parsed.data);

  revalidatePath('/contact');

  return {
    success: true,
    message: `Thank you for your message, ${parsed.data.name}! We will get back to you shortly.`,
    errors: null,
  };
}
