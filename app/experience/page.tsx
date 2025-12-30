'use client';

import Header from '@/components/Header/Header';
import Navigation from '@/components/Header/Navigation';
import Experience from '@/components/Experience/Experience';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#1d4e77]">
      <Navigation />
      <Header />
      <Experience />
     
      
      {/* Floating Action Button */}
      {/* <button className="fixed bottom-8 right-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center w-24 h-24 animate-pulse-slow">
        <div className="flex flex-col items-center">
          <svg className="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs font-semibold">Let&apos;s Talk</span>
        </div>
      </button> */}
    </div>
  );
}