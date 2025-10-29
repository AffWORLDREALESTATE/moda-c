"use client";

import React from 'react';
import Header from '@/src/components/common/header';
import Footer from '@/src/components/common/footer';
import WhatsAppWidget from '@/src/components/common/whatsapp-widget';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
