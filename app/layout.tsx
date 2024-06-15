import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

// Vercel speedindsight imported and added to layout body below

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
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
