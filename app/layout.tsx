import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header/Header";
import GlobalScrollProvider from "../components/GlobalScrollProvider";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JCSS - Professional Services & Advisory",
  description: "Expert audit, assurance, tax, legal, corporate advisory, and enterprise support services to help your business thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
        />
        <GlobalScrollProvider>
          {children}
        </GlobalScrollProvider>
      </body>
    </html>
  );
}
