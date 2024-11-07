import type { Metadata } from 'next';
import { Bodoni_Moda as TitleFont } from 'next/font/google';
import { Inter as BodyFont } from 'next/font/google';
import './reset.css';
import './globals.css';

const titleFont = TitleFont({
  subsets: ['latin'],
  weight: '400',
  variable: '--title-font',
});

const bodyFont = BodyFont({
  subsets: ['latin'],
  weight: '400',
  variable: '--body-font',
});

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
      <body className={`${titleFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
