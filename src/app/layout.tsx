import type React from "react";
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

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
      { url: '/images/new_.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/new_.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/new_.png',
    apple: '/images/new_.png',
  },
  openGraph: {
    title: "Modac Properties - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai.",
    url: 'https://modacproperties.com',
    siteName: 'Modac Properties',
    images: [
      {
        url: '/images/new_logo.png',
        width: 1200,
        height: 630,
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
    images: ['/images/new_logo.png'],
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
    <html lang="en" className={`${poppins.variable} ${playfairDisplay.variable} antialiased smooth-scroll`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="luxury-bg touch-optimized">
        {children}
      </body>
    </html>
  );
}
