'use client';

import Endorsement from '@/components/Endorsement/Endorsement';
import Header from '@/components/Header/Header';
import { useGlobalScroll } from '@/components/GlobalScrollProvider';
import ScrollablePageProvider, { useScrollablePage } from '@/components/ScrollablePageProvider';

function EndorsementContent() {
  const { containerRef, handleScroll } = useScrollablePage();
  
  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col bg-[#1d4e77] overflow-y-auto"
      onScroll={handleScroll}
    >
      <Header />
      <Endorsement />
    </div>
  );
}

export default function EndorsementPage() {
  return (
    <ScrollablePageProvider>
      <EndorsementContent />
    </ScrollablePageProvider>
  );
}