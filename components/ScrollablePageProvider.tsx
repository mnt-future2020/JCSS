'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { useGlobalScroll } from './GlobalScrollProvider';

interface ScrollablePageContextType {
  isAtBottom: boolean;
  isAtTop: boolean;
  handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollablePageContext = createContext<ScrollablePageContextType | undefined>(undefined);

export const useScrollablePage = () => {
  const context = useContext(ScrollablePageContext);
  if (!context) {
    throw new Error('useScrollablePage must be used within a ScrollablePageProvider');
  }
  return context;
};

interface ScrollablePageProviderProps {
  children: ReactNode;
  onScrollToBottom?: () => void;
  onScrollToTop?: () => void;
}

export default function ScrollablePageProvider({ 
  children, 
  onScrollToBottom, 
  onScrollToTop 
}: ScrollablePageProviderProps) {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { handleGlobalScroll, isTransitioning } = useGlobalScroll();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    
    const threshold = 10; // 10px threshold for better UX
    const atTop = scrollTop <= threshold;
    const atBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    setIsAtTop(atTop);
    setIsAtBottom(atBottom);
    
    if (atBottom && onScrollToBottom) {
      onScrollToBottom();
    }
    
    if (atTop && onScrollToTop) {
      onScrollToTop();
    }
  };

  // Handle wheel events for this scrollable page
  useEffect(() => {
    if (isMobile || isTransitioning) return;

    let lastScrollTime = 0;
    const scrollDelay = 500; // Shorter delay for page content scrolling

    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const threshold = 10;
      const atTop = scrollTop <= threshold;
      const atBottom = scrollTop + clientHeight >= scrollHeight - threshold;

      const now = Date.now();
      
      if (e.deltaY > 0) {
        // Scrolling down
        if (atBottom) {
          // At bottom, navigate to next page
          if (now - lastScrollTime >= 1000) { // Longer delay for page navigation
            e.preventDefault();
            lastScrollTime = now;
            handleGlobalScroll('down');
          }
        }
        // Otherwise, let the container scroll naturally
      } else {
        // Scrolling up
        if (atTop) {
          // At top, navigate to previous page
          if (now - lastScrollTime >= 1000) { // Longer delay for page navigation
            e.preventDefault();
            lastScrollTime = now;
            handleGlobalScroll('up');
          }
        }
        // Otherwise, let the container scroll naturally
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [isMobile, isTransitioning, handleGlobalScroll]);

  const contextValue: ScrollablePageContextType = {
    isAtBottom,
    isAtTop,
    handleScroll,
    containerRef,
  };

  return (
    <ScrollablePageContext.Provider value={contextValue}>
      {children}
    </ScrollablePageContext.Provider>
  );
}