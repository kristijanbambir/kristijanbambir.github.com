import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import {
  Instrument_Serif as BodyFont,
  IBM_Plex_Serif as TitleFont,
} from 'next/font/google';
import './globals.css';
import './reset.css';

const titleFont = TitleFont({
  subsets: ['latin'],
  weight: '400',
  variable: '--title-font',
});

const bodyFont = BodyFont({
  subsets: ['latin'],
  weight: ['400'],
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
      <GoogleAnalytics gaId="G-0411R4GLWR" />
    </html>
  );
}
