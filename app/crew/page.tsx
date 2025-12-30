'use client';

import Header from '@/components/Header/Header';
import Crew from '@/components/Crew/Crew';
<<<<<<< HEAD
import ScrollablePageProvider, { useScrollablePage } from '@/components/ScrollablePageProvider';
import { useState, useEffect } from 'react';

function CrewContent() {
  const { containerRef, handleScroll } = useScrollablePage();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleScrollWithHeaderUpdate = (e: React.UIEvent<HTMLDivElement>) => {
    // Call the original scroll handler
    handleScroll(e);
    
    // Update header background based on scroll position
    const target = e.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    setIsScrolled(scrollTop > 50);
  };

  // Update CSS custom property for header background
  useEffect(() => {
    if (isScrolled) {
      document.documentElement.style.setProperty('--crew-header-bg', 'rgb(0, 0, 0)');
    } else {
      document.documentElement.style.setProperty('--crew-header-bg', 'transparent');
    }
  }, [isScrolled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.removeProperty('--crew-header-bg');
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto"
      onScroll={handleScrollWithHeaderUpdate}
    >
      <Header />
      <Crew />
    </div>
  );
}
=======
>>>>>>> a4c793e79a70ddaa45a74b0ec60349d87ee22279

export default function CrewPage() {
  return (
    <div className="min-h-screen">
    <Header />
    <Crew />
    </div>
  );
}