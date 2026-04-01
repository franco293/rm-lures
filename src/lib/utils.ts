import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function getWhatsAppUrl(message: string = ''): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '27821234567';
  const defaultMessage = 'Hi! I would like to inquire about your fishing tours.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}