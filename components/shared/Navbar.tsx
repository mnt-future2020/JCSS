'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Career', href: '/career' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HI', name: 'Hindi' },
    { code: 'JA', name: 'Japanese' },
    { code: 'ID', name: 'Indonesia' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left Corner */}
        <Link href="/" className="logo-container">
          <h1 className="text-3xl font-bold text-orange-500">
            JCSS
            <span className="block text-xs text-orange-400">Delivering Transparency</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item relative text-sm font-medium transition-all duration-300 hover:text-orange-500 ${
                pathname === item.href ? 'text-orange-500' : 'text-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 animate-slide-in"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Language Dropdown */}
        <div className="relative animate-fade-in">
          <button
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isLangDropdownOpen ? 'bg-orange-500 text-white' : 'bg-slate-700/50 hover:bg-slate-700 text-white'
            }`}
          >
            {language}
          </button>

          {isLangDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-slate-800 rounded-lg shadow-xl overflow-hidden animate-fade-in-down">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    language === lang.code
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span className="font-bold">{lang.code}</span>
                  <span className="text-xs">- {lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}