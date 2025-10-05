import type React from "react";
import type { Metadata } from "next";
// import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/src/contexts/LanguageContext";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins",
//   display: "swap",
// });

// const playfairDisplay = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   variable: "--font-playfair",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Modac Properties - Premium Real Estate Solutions in Dubai",
  description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai. Expert agents, comprehensive market insights, and exceptional customer service.",
  keywords: "Dubai real estate, luxury properties, off-plan projects, property management, mortgages, conveyancing",
  authors: [{ name: "Modac Properties" }],
  creator: "Modac Properties",
  publisher: "Modac Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://modacproperties.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Modac Properties - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai.",
    url: 'https://modacproperties.com',
    siteName: 'Modac Properties',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Modac Properties Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modac Properties - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai.",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased smooth-scroll">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0a4b6f" />
        <meta name="color-scheme" content="light" />
        
        {/* Enhanced Favicon Links */}
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="luxury-bg touch-optimized">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
