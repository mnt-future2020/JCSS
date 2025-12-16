'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  activeSection: string;
  language: string;
  isLangDropdownOpen: boolean;
  onNavigate: (item: string) => void;
  onLanguageToggle: () => void;
  onLanguageSelect: (langCode: string) => void;
}

export default function Header({
  activeSection,
  language,
  isLangDropdownOpen,
  onNavigate,
  onLanguageToggle,
  onLanguageSelect
}: HeaderProps) {
  const navItems = ['Home', 'Services', 'Team', 'Career', 'Case Studies', 'Testimonials', 'Newsletters', 'Contact Us'];
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HI', name: 'Hindi' },
    { code: 'JA', name: 'Japanese' },
    { code: 'ID', name: 'Indonesia' }
  ];

  const isSpecialPage = activeSection === 'case-studies' || activeSection === 'testimonials' || activeSection === 'newsletters';
  
  return (
    <header 
      className="fixed top-0 left-0 right-10 z-50"
      style={{ backgroundColor: isSpecialPage ? '#042d4d' : 'transparent' }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left Corner */}
        <div className="logo-container flex flex-col items-end">
          <div className="mb-1">
            <Image
              src="/svg/JCSS on Orange.svg"
              alt="JCSS Logo"
              width={120}
              height={60}
              className="w-auto h-12 rounded-sm"
              priority
            />
          </div>
        </div>

        {/* Right Side Container - Navigation + Language Dropdown */}
        <div className="flex items-center gap-8">
          {/* Part 1: Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const isHome = item === 'Home';
              const isServices = item === 'Services';
              const href = isHome ? '/' : isServices ? '/services' : `/${item.toLowerCase().replace(' ', '-')}`;
              
              if (isHome || isServices) {
                return (
                  <Link
                    key={item}
                    href={href}
                    className={`nav-item relative text-lg font-medium transition-all duration-300 hover:text-orange-500 ${
                      activeSection === item.toLowerCase().replace(' ', '-') ? 'text-orange-500' : 'text-white'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </Link>
                );
              }
              
              return (
                <Link
                  key={item}
                  href={href}
                  className={`nav-item relative text-lg font-medium transition-all duration-300 hover:text-orange-500 ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-orange-500' : 'text-white'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Part 2: Language Dropdown */}
          <div className="relative animate-fade-in">
            <button
              onClick={onLanguageToggle}
              className={`px-4 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
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
                    onClick={() => onLanguageSelect(lang.code)}
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
      </div>
    </header>
  );
}