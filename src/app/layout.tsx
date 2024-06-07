import type { Metadata } from 'next';
import { Red_Hat_Mono as Font } from 'next/font/google';
import './reset.css';
import './globals.css';

const font = Font({ subsets: ['latin'], weight: '400' });

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
