import type { Metadata } from 'next';
import { Playfair_Display, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Nav } from './_components/Nav';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
});

export const metadata: Metadata = {
  title: 'Tune In: How Radio Defined America',
  description: 'An APUSH exhibit exploring how radio shaped American identity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn('h-full antialiased scroll-smooth', playfair.variable, sourceSerif.variable, 'font-sans')}
    >
      <body className='min-h-full flex flex-col bg-background'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
