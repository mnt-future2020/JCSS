import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GlobalScrollProvider from "../components/GlobalScrollProvider";
import ChatPopup from "../components/ChatPopup";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JCSS - Professional Services & Advisory",
  description:
    "Expert audit, assurance, tax, legal, corporate advisory, and enterprise support services to help your business thrive.",
  icons: {
    icon: [
      {
        url: "/icons/Day.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/Night.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="favicon-theme-switcher"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setFavicon() {
                  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
                  favicon.rel = 'icon';
                  favicon.href = isDark ? '/icons/Night.png' : '/icons/Day.png';
                  if (!document.querySelector('link[rel="icon"]')) {
                    document.head.appendChild(favicon);
                  }
                }
                
                // Set initial favicon
                setFavicon();
                
                // Listen for theme changes
                if (window.matchMedia) {
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${barlow.variable} antialiased`}>
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
        />
        <Script
          id="jcss-chat-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://jcss-chat.vercel.app/embed.js';
                script.async = true;
                script.onload = function() {
                  if (window.JCSSChat) {
                    window.JCSSChat.init({
                      embedId: '768673a1-57de-474d-8097-c76c53830989',
                      apiUrl: 'https://jcss-chat.vercel.app/api/chat'
                    });
                  }
                };
                document.head.appendChild(script);
              })();
            `,
          }}
        />
        <GlobalScrollProvider>{children}</GlobalScrollProvider>
        <ChatPopup />
      </body>
    </html>
  );
}
