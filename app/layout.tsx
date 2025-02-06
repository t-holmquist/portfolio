import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--oswald'
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--sourceSans3',
})

export const metadata: Metadata = {
  title: "Tjalfe Portfolio",
  description: "Front-end Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${oswald.variable} ${sourceSans3.variable} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-1WBHZKETK5" />
    </html>
  );
}
