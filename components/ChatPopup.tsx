'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ChatPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Don't show popup on home page
    if (isHomePage) {
      setIsVisible(false);
      return;
    }

    // Show popup after 3 seconds
    const showTimer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(showTimer);
  }, [isDismissed, isHomePage]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible || isHomePage) return null;

  return (
    <div className="fixed bottom-28 right-6 z-[9999] animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs border border-gray-200 relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm transition-colors"
          aria-label="Close popup"
        >
          ×
        </button>
        
        {/* Arrow pointing down to chat widget */}
        <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        
        {/* Message content */}
        <div className="text-gray-800">
          <p className="font-semibold text-orange-500 mb-1">👋 Need help?</p>
          <p className="text-sm">Chat with us! We&apos;re here to answer your questions about our services.</p>
        </div>
      </div>
    </div>
  );
}
