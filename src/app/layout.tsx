import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import LanguageEffects from "@/src/components/common/lang-effects";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modac Real Estate - Premium Real Estate Solutions in Dubai",
  description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai. Expert agents, comprehensive market insights, and exceptional customer service.",
  keywords: "Dubai real estate, luxury properties, off-plan projects, property management, mortgages, conveyancing",
  authors: [{ name: "Modac Real Estate" }],
  creator: "Modac Real Estate",
  publisher: "Modac Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.modacrealestate.com'),
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
    title: "Modac Real Estate - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai.",
    url: 'https://www.modacrealestate.com',
    siteName: 'Modac Real Estate',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Modac Real Estate Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modac Real Estate - Premium Real Estate Solutions in Dubai",
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
    <html lang="en" className={`${poppins.variable} antialiased smooth-scroll`}>
      <head>
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
          <LanguageEffects />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
