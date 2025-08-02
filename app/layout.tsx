import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Bajrang Barala - Full Stack Developer',
  description: 'Professional portfolio of Bajrang Barala, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'full stack developer, react developer, next.js, web development, javascript, typescript, portfolio',
  authors: [{ name: 'Bajrang Barala' }],
  creator: 'Bajrang Barala',
  openGraph: {
    title: 'Bajrang Barala - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development expertise and projects.',
    url: 'https://barala.info',
    siteName: 'Bajrang Barala Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bajrang Barala - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development expertise and projects.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}