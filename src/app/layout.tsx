import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

const font = Playfair_Display({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kristijan Bambir',
  description: 'Kristijan Bambir personal pages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
