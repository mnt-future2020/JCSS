'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    JCSSChat?: {
      init: (config: { embedId: string; apiUrl: string }) => void;
      destroy?: () => void;
    };
  }
}

export default function ChatWidget() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Don't load chat widget on home page
    if (isHomePage) {
      // Hide chat widget if it exists
      const chatElements = document.querySelectorAll('[class*="jcss-chat"], [id*="jcss-chat"]');
      chatElements.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });
      return;
    }

    // Show chat widget on other pages
    const chatElements = document.querySelectorAll('[class*="jcss-chat"], [id*="jcss-chat"]');
    chatElements.forEach(el => {
      (el as HTMLElement).style.display = '';
    });

    // Load the chat script if not already loaded
    if (!document.querySelector('script[src*="jcss-chat.vercel.app/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://jcss-chat.vercel.app/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.JCSSChat) {
          window.JCSSChat.init({
            embedId: '768673a1-57de-474d-8097-c76c53830989',
            apiUrl: 'https://jcss-chat.vercel.app/api/chat'
          });
        }
      };
      document.head.appendChild(script);
    }
  }, [isHomePage, pathname]);

  return null;
}
