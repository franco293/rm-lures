import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingContact } from '@/components/layout/FloatingContact';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Captain John's Fishing Charters | Durban Fishing Tours & Handmade Lures",
  description:
    'Experience unforgettable fishing adventures in Durban with 15+ years of expertise. Professional fishing tours and handcrafted bucktail lures.',
  keywords:
    'fishing tours durban, fishing guide durban, handmade fishing lures, bucktail jigs, kzn fishing charters',
  authors: [{ name: "Captain John's Fishing Charters" }],
  openGraph: {
    title: "Captain John's Fishing Charters",
    description: 'Durban fishing tours and handmade lures',
    type: 'website',
    locale: 'en_ZA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main id="main-content" className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
