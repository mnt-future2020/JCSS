'use client';

import { useState, useEffect, useRef } from 'react';
import CorporateAdvisory from '@/components/services/CorporateAdvisory';
import AuditAssurance from '@/components/services/AuditAssurance';
import EnterpriseSupport from '@/components/services/EnterpriseSupport';
import Tax from '@/components/services/Tax';
import Legal from '@/components/services/Legal';
import ContactUs from '@/components/services/ContactUs';

import Header from '@/components/Header/Header';
import Navigation from '@/components/Header/Navigation';

export default function Services() {
  const [activeService, setActiveService] = useState('Advisory');
  const [language, setLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const servicesRef = useRef<HTMLDivElement>(null);

  // Service screen counts
  const serviceScreenCounts = {
    'Advisory': 4,
    'Assurance': 6,
    'Support': 7,
    'Tax': 12,
    'Legal': 5,
    'Contact Us': 4
  };

  // Service order for continuous scrolling
  const serviceOrder = [
    'Advisory',
    'Assurance', 
    'Support',
    'Tax',
    'Legal',
    'Contact Us'
  ];

  // Calculate total screens across all services
  const totalScreens = Object.values(serviceScreenCounts).reduce((sum, count) => sum + count, 0);

  // Get current service and screen based on global screen position
  const getCurrentServiceAndScreen = (globalScreen: number) => {
    let screenCount = 0;
    
    for (const service of serviceOrder) {
      const serviceScreens = serviceScreenCounts[service as keyof typeof serviceScreenCounts];
      if (globalScreen < screenCount + serviceScreens) {
        return {
          service,
          localScreen: globalScreen - screenCount
        };
      }
      screenCount += serviceScreens;
    }
    
    // Fallback to last service
    return {
      service: serviceOrder[serviceOrder.length - 1],
      localScreen: serviceScreenCounts[serviceOrder[serviceOrder.length - 1] as keyof typeof serviceScreenCounts] - 1
    };
  };

  const [globalScreen, setGlobalScreen] = useState(0);

  // Update active service and current screen based on global position
  const updateServiceFromGlobalScreen = (newGlobalScreen: number) => {
    const { service, localScreen } = getCurrentServiceAndScreen(newGlobalScreen);
    setActiveService(service);
    setCurrentScreen(localScreen);
  };

  const handleScreenChange = (direction: 'up' | 'down') => {
    if (isTransitioning) return;
    
    let newGlobalScreen = globalScreen;
    
    if (direction === 'down' && globalScreen < totalScreens - 1) {
      newGlobalScreen = globalScreen + 1;
    } else if (direction === 'up' && globalScreen > 0) {
      newGlobalScreen = globalScreen - 1;
    } else {
      return; // No change needed
    }
    
    setIsTransitioning(true);
    setGlobalScreen(newGlobalScreen);
    updateServiceFromGlobalScreen(newGlobalScreen);
    
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleServiceChange = (service: string) => {
    // Calculate global screen position for the start of selected service
    let screenCount = 0;
    for (const s of serviceOrder) {
      if (s === service) break;
      screenCount += serviceScreenCounts[s as keyof typeof serviceScreenCounts];
    }
    
    setGlobalScreen(screenCount);
    setActiveService(service);
    setCurrentScreen(0);
  };

  // Global scroll handler for continuous scrolling
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollDelay = 1000;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < scrollDelay || isTransitioning) return;
      
      lastScrollTime = now;

      if (e.deltaY > 0) {
        // Scroll down
        handleScreenChange('down');
      } else {
        // Scroll up
        handleScreenChange('up');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [globalScreen, isTransitioning, totalScreens]);

  const handleNavigate = (item: string) => {
    if (item === 'Home') {
      window.location.href = '/';
    } else if (item === 'Services') {
      // Already on services page, do nothing or scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Component - Always visible */}
      <Navigation
        activeService={activeService}
        isInServices={true}
        onServiceChange={handleServiceChange}
      />

      {/* Header - Always visible on services page */}
      <Header
        activeSection="services"
        language={language}
        isLangDropdownOpen={isLangDropdownOpen}
        onNavigate={handleNavigate}
        onLanguageToggle={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        onLanguageSelect={handleLanguageSelect}
      />

      {/* Services Section */}
      <div ref={servicesRef} className="relative min-h-screen">
        <main className="relative">
          {activeService === 'Advisory' && (
            <CorporateAdvisory 
              currentScreen={currentScreen} 
              onScreenChange={() => {}} // Disabled individual service navigation
              isTransitioning={isTransitioning}
            />
          )}
          {activeService === 'Assurance' && (
            <AuditAssurance 
              currentScreen={currentScreen} 
              onScreenChange={() => {}} // Disabled individual service navigation
              isTransitioning={isTransitioning}
            />
          )}
          {activeService === 'Support' && (
            <EnterpriseSupport 
              currentScreen={currentScreen} 
              onScreenChange={() => {}} // Disabled individual service navigation
              isTransitioning={isTransitioning}
            />
          )}
          {activeService === 'Tax' && (
            <Tax 
              currentScreen={currentScreen} 
              onScreenChange={() => {}} // Disabled individual service navigation
              isTransitioning={isTransitioning}
            />
          )}
          {activeService === 'Legal' && (
            <Legal 
              currentScreen={currentScreen} 
              onScreenChange={() => {}} // Disabled individual service navigation
              isTransitioning={isTransitioning}
            />
          )}
          {activeService === 'Contact Us' && (
            <ContactUs 
              currentScreen={currentScreen} 
              onScreenChange={() => {}} // Disabled individual service navigation
              isTransitioning={isTransitioning}
            />
          )}
        </main>
      </div>

      {/* Floating Action Button - Let's Talk */}
      <button className="fixed bottom-8 right-22 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center w-24 h-24 animate-pulse-slow">
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