'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Header/Navigation';
import ContactUs from '@/components/services/ContactUs';

export default function ContactUsPage() {
  const router = useRouter();
  const [language, setLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleNavigate = (item: string) => {
    if (item === 'Home') {
      router.push('/');
    } else if (item === 'Services') {
      router.push('/#services');
    } else {
      const route = item.toLowerCase().replace(' ', '-');
      router.push(`/${route}`);
    }
  };

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Component */}
      <Navigation
        activeService=""
        isInServices={false}
        onServiceChange={() => {}}
      />
      
      {/* Header */}
      <Header
        activeSection="contact-us"
        language={language}
        isLangDropdownOpen={isLangDropdownOpen}
        onNavigate={handleNavigate}
        onLanguageToggle={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        onLanguageSelect={handleLanguageSelect}
      />
      
      {/* Contact Us Component */}
      <div className="pt-24">
        <ContactUs 
          currentScreen={0} 
          onScreenChange={() => {}}
          isTransitioning={false}
        />
      </div>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center w-24 h-24 animate-pulse-slow">
        <div className="flex flex-col items-center">
          <svg className="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs font-semibold">Let&apos;s Talk</span>
        </div>
      </button>
    </div>
  );
}