'use client';

import { useState, useEffect } from 'react';
import HomeScreens from '@/components/Home/HomeScreens';
import Navigation from '@/components/Header/Navigation';
import Header from '@/components/Header/Header';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const homeScreens = 4;

  const handleScreenChange = (newScreen: number) => {
    if (newScreen < 0 || newScreen >= homeScreens || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentScreen(newScreen);
    
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Global scroll handler for home screens
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
        handleScreenChange(currentScreen + 1);
      } else {
        // Scroll up
        handleScreenChange(currentScreen - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentScreen, isTransitioning]);

  return (
    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header - Show on all home screens */}
      <Header
        activeSection={activeSection}
        language={language}
        isLangDropdownOpen={isLangDropdownOpen}
        onNavigate={setActiveSection}
        onLanguageToggle={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        onLanguageSelect={setLanguage}
      />

      {/* Navigation Component - Always visible */}
      <Navigation
        activeService="Corporate Advisory"
        isInServices={false}
        onServiceChange={() => {}}
      />

      {/* Home Screens Section - Full Screen */}
      <HomeScreens 
        currentScreen={currentScreen} 
        onScreenChange={handleScreenChange}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}
