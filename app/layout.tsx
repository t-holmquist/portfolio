import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

// Vercel speedindsight imported and added to layout body below

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
  description: "Modern Next.js powered portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${sourceSans3.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SpeedInsights/>
          </ThemeProvider>
      </body>
    </html>
  );
}
