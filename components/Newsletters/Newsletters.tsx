'use client';

import { useState } from 'react';
import { IconFileText, IconCalendar, IconEye, IconSearch } from '@tabler/icons-react';

import Header from '../Header/Header';

interface NewsletterSection {
  title: string;
  content: string;
  type: 'text' | 'list' | 'highlight';
  items?: string[];
}

interface Newsletter {
  id: string;
  title: string;
  date: string;
  description: string;
  fileName: string;
  fileUrl: string;
  content: NewsletterSection[];
  highlights: string[];
  keyMetrics?: {
    label: string;
    value: string;
  }[];
}

interface ContentItem {
  section: string;
  heading: string;
  subheading: string;
  content: string;
}

// Generate newsletters from data file
const generateNewslettersFromData = () => {
  const newsletters: Newsletter[] = [
    {
      id: '1',
      title: 'Newsletter 2025 - November',
      date: 'November 2025',
      description: 'Our comprehensive November 2025 newsletter featuring the latest company updates, project milestones, team achievements, and industry insights. This edition covers our recent strategic initiatives, client success stories, and upcoming developments that showcase our commitment to delivering transparency and excellence.',
      fileName: 'Newsletter November 2025 (1).docx',
      fileUrl: '/Newsletter November  2025 (1).docx',
      highlights: [
        'Record-breaking quarterly performance',
        'New strategic partnerships established',
        'Team expansion across multiple departments',
        'Enhanced service delivery capabilities'
      ],
      keyMetrics: [
        { label: 'Projects Completed', value: '45+' },
        { label: 'Client Satisfaction', value: '98%' },
        { label: 'Team Growth', value: '25%' },
        { label: 'New Partnerships', value: '8' }
      ],
      content: [
        {
          title: 'Executive Summary',
          type: 'text',
          content: 'November 2025 has been a transformative month for JCSS, marked by exceptional growth, strategic partnerships, and outstanding client achievements. Our commitment to delivering transparency and excellence continues to drive our success across all service verticals.'
        },
        {
          title: 'Key Achievements',
          type: 'list',
          content: 'This month brought several significant milestones:',
          items: [
            'Successfully completed 45+ client projects across various sectors',
            'Achieved 98% client satisfaction rating through enhanced service delivery',
            'Expanded our team by 25% with top-tier professionals',
            'Established 8 new strategic partnerships to strengthen our market position',
            'Launched innovative digital solutions for audit and compliance services'
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Newsletter 2025 - October',
      date: 'October 2025',
      description: 'Comprehensive GST and regulatory updates for October 2025, featuring critical developments in tax law, customs regulations, and international compliance. This edition covers significant AAR rulings, tribunal decisions, and policy changes affecting businesses across India and Singapore.',
      fileName: 'Newsletter October 2025.docx',
      fileUrl: '/Newsletter October  2025.docx',
      highlights: [
        'Critical GST AAR rulings on ITC eligibility',
        'Launch of GST Appellate Tribunal (GSTAT)',
        'Risk-based provisional GST refunds introduced',
        'Singapore MAS guidelines on digital financial content'
      ],
      keyMetrics: [
        { label: 'GST Updates', value: '15+' },
        { label: 'Court Rulings', value: '8' },
        { label: 'Policy Changes', value: '12' },
        { label: 'Compliance Alerts', value: '25+' }
      ],
      content: [
        {
          title: 'GST Updates',
          type: 'text' as const,
          content: 'Comprehensive GST updates covering latest rulings and policy changes'
        },
        {
          title: 'Customs Updates',
          type: 'text' as const,
          content: 'Latest customs litigation updates and tribunal decisions'
        }
      ]
    }
  ];
  
  return newsletters;
};

const newsletters = generateNewslettersFromData();

export default function Newsletters() {

  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'overview' | 'fullContent'>('overview');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  
  // Header state
  const [language, setLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleNavigate = (item: string) => {
    // Handle navigation logic here
    console.log('Navigate to:', item);
  };

  const handleLanguageToggle = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const handleViewNewsletter = (newsletter: Newsletter) => {
    // Convert title to URL-friendly format
    const urlId = newsletter.title.toLowerCase()
      .replace('newsletter 2025 - ', '')
      .replace(/\s+/g, '-');
    
    window.location.href = `/newsletters/${urlId}-2025`;
  };





  // Enhanced search functionality
  const getFilteredContent = () => {
    if (!searchTerm) return newsletters;
    
    return newsletters.filter(newsletter =>
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.highlights.some(highlight => 
        highlight.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const filteredNewsletters = getFilteredContent();

  return (
    <>
        <Header
        activeSection="newsletters"
        language={language}
        isLangDropdownOpen={isLangDropdownOpen}
        onNavigate={handleNavigate}
        onLanguageToggle={handleLanguageToggle}
        onLanguageSelect={handleLanguageSelect}
      />
    <div className="min-h-screen bg-[#1d4e77] pt-16">

      {/* Newsletters Grid */}
      <div className="container mx-auto px-6 mt-24">
        <div className="text-center mt-16 mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Newsletter
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Access our comprehensive newsletter archive featuring detailed regulatory updates, compliance guides, and industry insights.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search newsletters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredNewsletters.length > 0 ? (
            filteredNewsletters.map((newsletter, index) => (
            <div
              key={newsletter.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Newsletter Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <IconFileText className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                      {newsletter.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <IconCalendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{newsletter.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Description */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {newsletter.description}
              </p>

              {/* Action Button */}
              <div className="flex">
                <button
                  onClick={() => handleViewNewsletter(newsletter)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <IconEye className="w-5 h-5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <IconSearch className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No newsletters found</h3>
              <p className="text-gray-400">
                Try adjusting your search terms or browse all available newsletters.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}