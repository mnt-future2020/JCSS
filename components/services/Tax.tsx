'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconPhone, IconInbox, IconMail, IconDownload } from '@tabler/icons-react';

interface TaxProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

export default function Tax({ currentScreen, onScreenChange, isTransitioning }: TaxProps) {

  const screens = [
    {
      id: 0,
      title: "Tax",
      subtitle: "Overview",
      content: "The constant improvement in the rankings of ease of business index by World Bank reflects increasing confidence of entrepreneurs to invest in India. That, coupled with consistent tweaks in tax structures to simplify business is a boon, yet presents a challenge to keep up with the current tax regulations. JCSS, combining its in-depth knowledge of the regulations with insights on the industry, helps businesses to effectively operate within the regulatory scheme of things. JCSS has catered to businesses at every stage of their lifecycle, operating in different industries, and has provided effective solutions in the areas of taxation, litigation and advisory matters.",
      showAllSubtitles: true
    },
    {
      id: 1,
      title: "Tax",
      subtitle: "Indirect Taxes",
      content: "The simplification of indirect tax structure through implementation of Goods and Services Tax (GST) has significantly impacted businesses, reducing the hassles of compliance. Though the measure eases the tax complications, adapting to the new tax regime and complying throws a challenge to businesses, as it requires a significant reconfiguration of operations.",
      additionalContent: "JCSS, with its deep knowledge of cross border trade in various sectors and countries, provides assistance to businesses with their insights on Indian and International taxes helping them identify potential risk areas and plan for a stable future.",
      finalContent: "JCSS has substantial experience in Indian Customs, Transfer Pricing and Export Promotion Schemes"
    },
    {
      id: 2,
      title: "Tax",
      subtitle: "Foreign Trade Policy",
      content: "Foreign Trade Policy services to help businesses navigate international trade regulations and optimize their global operations.",
      services: [
        "Advisory and Consulting",
        "Transaction Cost Minimization", 
        "SEZ & EOU",
        "Compliance & Support"
      ]
    },
    {
      id: 3,
      title: "Tax",
      subtitle: "Customs & International Trade",
      content: "Our customs and international trade services ensure smooth cross-border operations while maintaining full compliance with regulatory requirements.",
      services: [
        "Advisory",
        "Transaction Structuring",
        "Regulatory Compliance",
        "Representation and Legal Support",
        "Valuation and Assessment"
      ]
    },
    {
      id: 4,
      title: "Tax",
      subtitle: "Goods and Service Tax (GST)",
      content: "Comprehensive GST services covering all aspects of goods and services tax compliance, from registration to advanced advisory services.",
      services: [
        "Advisory",
        "Transaction Structuring",
        "Regulatory Compliance",
        "Due Diligence",
        "Review and Adjudication",
        "Refunds / Rebate",
        "Training",
        "Advance Ruling"
      ]
    },
    {
      id: 5,
      title: "Tax",
      subtitle: "Direct Taxes",
      content: "With rapidly transforming tax and regulatory environment, businesses across the world are finding it hard to keep abreast with the changing tax structures. Taxation throw challenges in compliance and litigation, but sometimes provides opportunities in the form of benefits for specific industries. Thus, a system needs to be established to navigate through these complex changes.",
      additionalContent: "JCSS, with its experience in handling tax matters in India, Singapore, Thailand, Japan and other countries, can direct clients in complying with tax computation, returns and handle tax litigation matters in these jurisdictions."
    },
    {
      id: 6,
      title: "Tax",
      subtitle: "International Taxation",
      content: "JCSS, with its deep knowledge of cross border trade in various sectors and countries, provides assistance to businesses with their insights on Indian and International taxes.",
      services: [
        "Cross-border Taxation",
        "Double Taxation Treaties",
        "International Compliance",
        "Global Tax Planning"
      ]
    },
    {
      id: 7,
      title: "Tax",
      subtitle: "Transfer Pricing",
      content: "JCSS has substantial experience in Indian Customs, Transfer Pricing and Export Promotion Schemes, helping businesses identify potential risk areas and plan for a stable future.",
      services: [
        "Transfer Pricing Documentation",
        "Economic Analysis",
        "Benchmarking Studies",
        "Dispute Resolution"
      ]
    },
    {
      id: 8,
      title: "Tax",
      subtitle: "Litigation",
      content: "Expert representation in tax disputes and litigation matters across various forums and jurisdictions.",
      services: [
        "Tax Litigation",
        "Appeals Management",
        "Dispute Resolution",
        "Settlement Negotiations"
      ]
    },
    {
      id: 9,
      title: "Tax",
      subtitle: "Expatriate Taxation",
      content: "Specialized tax services for expatriates and international assignments, ensuring compliance across multiple jurisdictions.",
      services: [
        "Expatriate Tax Planning",
        "International Assignments",
        "Tax Equalization",
        "Compliance Management"
      ]
    },
    {
      id: 10,
      title: "Tax",
      subtitle: "Advisory Services",
      content: "Strategic tax advisory services to optimize business operations and ensure long-term tax efficiency.",
      services: [
        "Tax Strategy Development",
        "Business Restructuring",
        "Mergers & Acquisitions",
        "Tax Optimization"
      ]
    },
    {
      id: 11,
      title: "Tax",
      subtitle: "Corporate Taxes",
      heading: "Expert Corporate Tax Solutions",
      content: "JCSS, with its experience in handling tax matters in India, Singapore, Thailand, Japan and other countries, can direct clients in complying with tax computation, returns and handle tax litigation matters in these jurisdictions.",
      contact: {
        title: "Let's Connect",
        description: "Schedule a complimentary meeting to discuss your corporate tax needs.",
        phone: "+91 80 2334 7000",
        email: "tax@jcssglobal.com"
      }
    }
  ];

  // Remove local scroll handling - now handled by parent

  const currentScreenData = screens[currentScreen];

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/t.jpg"
          alt="Tax Services Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-10 h-full flex items-center justify-start pl-32">
        <div className="text-left max-w-7xl">
          {/* Title and Subtitle */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-medium text-orange-500 mb-2 flex items-center gap-2">
              {currentScreenData.title}
              <IconDownload size={32} className="text-white bg-gray-500 p-2 rounded-full" />
            </h1>
            {/* Active Status Subtitles - Horizontal Layout */}
            <div className="space-y-4 mb-4 font-medium">
              <div className="flex flex-wrap gap-1  text-lg border-b border-orange-500 pb-2">
                <span className={`px-2 py-1 ${(currentScreen >= 1 && currentScreen <= 4) ? 'text-orange-500' : 'text-slate-300'}`}>Indirect Taxes</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 2 ? 'text-orange-500' : 'text-slate-300'}`}>Foreign Trade Policy</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 3 ? 'text-orange-500' : 'text-slate-300'}`}>Customs & International Trade</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 4 ? 'text-orange-500' : 'text-slate-300'}`}>Goods and Service Tax (GST)</span>
              </div>
              <div className="flex flex-wrap gap-1 text-lg">
                <span className={`px-2 py-1 ${(currentScreen >= 5 && currentScreen <= 11) ? 'text-orange-500' : 'text-slate-300'}`}>Direct Taxes</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 6 ? 'text-orange-500' : 'text-slate-300'}`}>International Taxation</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 7 ? 'text-orange-500' : 'text-slate-300'}`}>Transfer Pricing</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 8 ? 'text-orange-500' : 'text-slate-300'}`}>Litigation</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 9 ? 'text-orange-500' : 'text-slate-300'}`}>Expatriate Taxation</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 10 ? 'text-orange-500' : 'text-slate-300'}`}>Advisory Services</span>
                <span className="text-slate-500">|</span>
                <span className={`px-2 py-1 ${currentScreen === 11 ? 'text-orange-500' : 'text-slate-300'}`}>Corporate Taxes</span>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <div 
            key={currentScreen}
            className="space-y-6 text-white animate-fade-in-up"
          >
            {/* Heading for screen 3 */}
            {currentScreenData.heading && (
              <h2 className="text-xl font-semibold text-white">
                {currentScreenData.heading}
              </h2>
            )}

            {/* Main Content - All Screens */}
            <div className="space-y-4">
              {/* Show subtitle as heading for screens 2-4 and 6+ */}
              {(currentScreen >= 2 && currentScreen <= 4) || currentScreen >= 6 ? (
                <h3 className="text-lg font-semibold text-orange-400">
                  {currentScreenData.subtitle}
                </h3>
              ) : null}

              {/* Main content paragraph */}
              <p className="text-base leading-relaxed text-white">
                {currentScreenData.content}
              </p>

              {/* Additional content for screens 1 and 5 */}
              {currentScreenData.additionalContent && (
                <p className="text-base leading-relaxed text-white">
                  {currentScreenData.additionalContent}
                </p>
              )}

              {/* Final content for screen 1 */}
              {currentScreenData.finalContent && (
                <p className="text-base leading-relaxed text-white">
                  {currentScreenData.finalContent}
                </p>
              )}

              {/* Services List */}
              {currentScreenData.services && (
                <ul className="space-y-2 text-base">
                  {currentScreenData.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-slate-300">{service}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Contact Info */}
            {currentScreenData.contact && (
              <div className="space-y-3 mt-8">
                <h3 className="text-lg font-semibold text-white">
                  {currentScreenData.contact.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {currentScreenData.contact.description}
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <IconPhone size={16} className="text-orange-500" />
                    <span className="text-slate-300">{currentScreenData.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconMail size={16} className="text-orange-500" />
                    <span className="text-slate-300">{currentScreenData.contact.email}</span>
                  </div>
                </div>
              </div>
            )}


          </div>

          {/* Screen Indicators */}
          {/* <div className="flex gap-1 mt-12 flex-wrap max-w-md">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    onScreenChange(index + 8); // Add offset for tax screens
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentScreen ? 'bg-orange-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}