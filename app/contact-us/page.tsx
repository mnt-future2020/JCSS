'use client';

import Header from '@/components/Header/Header';
import Navigation from '@/components/Header/Navigation';
import ContactUs from '@/components/Contact/ContactUs';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <ContactUs />
    </div>
  );
}