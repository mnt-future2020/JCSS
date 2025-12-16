'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { IconCalendar, IconArrowLeft, IconFileText } from '@tabler/icons-react';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import { november2025Newsletter } from '@/components/Newsletters/november2025';
import { october2025Newsletter } from '@/components/Newsletters/october2025';

interface ContentItem {
  heading: string;
  subheading: string;
  content: string;
}

interface Section {
  title: string;
  content: ContentItem[];
}

interface Newsletter {
  title: string;
  date: string;
  sections: Record<string, Section>;
}

const newsletterData: Record<string, Newsletter> = {
  'november-2025': november2025Newsletter,
  'october-2025': october2025Newsletter,
};

export default function NewsletterDetail() {
  const params = useParams();
  const id = params.id as string;
  
  // Header state
  const [language, setLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleNavigate = (item: string) => {
    console.log('Navigate to:', item);
  };

  const handleLanguageToggle = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const newsletter = newsletterData[id];

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-[#1d4e77] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Newsletter Not Found</h1>
          <Link 
            href="/newsletters" 
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            ← Back to Newsletters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1d4e77]">
      <Header
        activeSection="newsletters"
        language={language}
        isLangDropdownOpen={isLangDropdownOpen}
        onNavigate={handleNavigate}
        onLanguageToggle={handleLanguageToggle}
        onLanguageSelect={handleLanguageSelect}
      />

      <div className="container mx-auto px-6 mt-24 pb-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/newsletters"
            className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors"
          >
            <IconArrowLeft className="w-5 h-5" />
            <span>Back to Newsletters</span>
          </Link>
        </div>

        {/* Newsletter Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <div className="flex items-start space-x-4">
            <div className="p-4 bg-orange-500/20 rounded-lg">
              <IconFileText className="w-12 h-12 text-orange-500" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-4">
                {newsletter.title}
              </h1>
              <div className="flex items-center space-x-2 text-gray-300">
                <IconCalendar className="w-5 h-5" />
                <span className="text-lg">{newsletter.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Content */}
        <div className="space-y-8">
          {Object.entries(newsletter.sections).map(([sectionKey, section]) => (
            <div 
              key={sectionKey}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-orange-500 mb-6 border-b border-orange-500/30 pb-3">
                {section.title}
              </h2>
              
              <div className="space-y-6">
                {section.content.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {item.heading}
                    </h3>
                    
                    {item.subheading && (
                      <h4 className="text-lg font-medium text-orange-400">
                        {item.subheading}
                      </h4>
                    )}
                    
                    <div className="text-gray-300 leading-relaxed">
                      {item.content.split('\n\n').map((paragraph, pIndex) => (
                        <div key={pIndex} className="mb-4">
                          {paragraph.split('\n').map((line, lIndex) => {
                            // Handle bullet points
                            if (line.startsWith('• ')) {
                              return (
                                <div key={lIndex} className="flex items-start space-x-2 mb-2">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                                  <span>{line.substring(2)}</span>
                                </div>
                              );
                            }
                            // Handle numbered lists
                            if (/^\d+\./.test(line)) {
                              return (
                                <div key={lIndex} className="mb-2 ml-4">
                                  <span className="text-orange-400 font-medium">{line}</span>
                                </div>
                              );
                            }
                            // Regular paragraphs
                            return line ? (
                              <p key={lIndex} className="mb-2">{line}</p>
                            ) : null;
                          })}
                        </div>
                      ))}
                    </div>
                    
                    {index < section.content.length - 1 && (
                      <hr className="border-gray-600/30 my-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}