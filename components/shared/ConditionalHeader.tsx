'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/Header/Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  const [language, setLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  // Don't show header on home page
  if (pathname === '/') {
    return null;
  }

  // Extract active section from pathname
  const getActiveSection = (path: string) => {
    if (path === '/') return 'home';
    const section = path.substring(1); // Remove leading slash
    return section || 'home';
  };

  const handleNavigate = (item: string) => {
    if (item === 'Home') {
      window.location.href = '/';
    } else if (item === 'Services') {
      window.location.href = '/#services';
    } else {
      // For other navigation items, use Next.js routing
      const route = item.toLowerCase().replace(' ', '-');
      window.location.href = `/${route}`;
    }
  };

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  return (
    <Header
      activeSection={getActiveSection(pathname)}
      language={language}
      isLangDropdownOpen={isLangDropdownOpen}
      onNavigate={handleNavigate}
      onLanguageToggle={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
      onLanguageSelect={handleLanguageSelect}
    />
  );
}