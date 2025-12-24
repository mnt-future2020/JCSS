'use client';

import Header from '@/components/Header/Header';
import Crew from '@/components/Crew/Crew';
import { useGlobalScroll } from '@/components/GlobalScrollProvider';
import ScrollablePageProvider, { useScrollablePage } from '@/components/ScrollablePageProvider';

function CrewContent() {
  const { containerRef, handleScroll } = useScrollablePage();
  
  return (
    <div 
      ref={containerRef}
      className="min-h-screen overflow-y-auto"
      onScroll={handleScroll}
    >
      <Header />
      <Crew />
    </div>
  );
}

export default function CrewPage() {
  return (
    <ScrollablePageProvider>
      <CrewContent />
    </ScrollablePageProvider>
  );
}