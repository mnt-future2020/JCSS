'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconPhone, IconClipboard, IconMail, IconDownload } from '@tabler/icons-react';

interface CorporateAdvisoryProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

export default function CorporateAdvisory({ currentScreen, onScreenChange, isTransitioning }: CorporateAdvisoryProps) {

  const screens = [
    {
      id: 0,
      title: "Advisory",
      subtitle: "Business Modelling and Valuation | Due Diligence | Structuring & Restructuring",
      heading: "Navigating Compliance with Confidence",
      content: "In today's dynamic business landscape, staying compliant while adapting to industry shifts is crucial. At JCSS, we offer tailored advisory services that address compliance, diagnostics, and forecasting needs. Our solutions consider legal, policy, and local factors to deliver customized, effective strategies. From business structuring to mergers, demergers, and joint ventures, we've successfully guided companies across sectors and borders.",
      contact: {
        title: "Let's Connect",
        description: "Schedule a complimentary meeting to discuss your needs.",
        phone: "+91 80 2334 7000",
        email: "ask@jcssglobal.com"
      }
    },
    {
      id: 1,
      title: "Advisory",
      subtitle: "Business Modelling and Valuation | Due Diligence | Structuring & Restructuring",
      content: "JCSS, with expertise gained from monitoring the market and our experience, takes into consideration the prevailing economic scenario, and factors affecting specific industries, will assist you in:",
      services: [
        "Detailed and Iterative Business and Financial Plan Valuation",
        "Negotiating and Finalising Term Sheets",
        "Commercial, Financial and Tax Due Diligence",
        "Shareholders Agreements - Share Purchase Agreements"
      ]
    },
     {
      id: 2,
      title: "Advisory",
      subtitle: "Business Modelling and Valuation | Due Diligence | Structuring & Restructuring",
      content: "JCSS understands the criticality of investment decisions, and the stakes involved for investors, both financial and strategic. We ensure that detailed information is collected and converted into a productive tool to make informed investment decisions. We work with our clients to provide:",
      services: [
        "Preliminary Business Review",
        "Financial Due Diligence", 
        "Tax Due Diligence (Direct and Indirect)",
        "Legal Due Diligence"
      ]
    },
    {
      id: 3,
      title: "Advisory", 
      subtitle: "Business Modelling and Valuation | Due Diligence | Structuring & Restructuring",
      content: "JCSS offers advice on matters related to financial and corporate restructuring, during the periods of change. As many aspects need to be considered during this period, and we help companies through the process of structuring and restructuring by advising on:",
      sections: [
        {
          title: "Joint Ventures",
          services: [
            "Structuring optimal Joint Ventures",
            "Share Purchase and Joint Venture Agreements",
            "Exit Structuring and Implementation"
          ]
        },
        {
          title: "Mergers and Demergers",
          services: [
            "Scheme of mergers/demergers",
            "Regulatory representation and assistance",
            "Post-merger synchronization"
          ]
        }
      ]
    }
  ];

  // Remove local scroll handling - now handled by parent

  const currentScreenData = screens[currentScreen];

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ca.jpg"
          alt="Corporate Advisory Background"
          fill
          className="object-cover"
          priority
        />
      </div> 

      {/* Content Container - Right Aligned */}
      <div className="relative z-10 h-full flex items-center justify-end pr-32">
        <div className="text-right max-w-4xl">
          {/* Title and Subtitle */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-medium text-orange-500 mb-2 flex items-center justify-end gap-2">
              {currentScreenData.title}
              <IconDownload size={32} className="text-white bg-gray-500 p-2 rounded-full" />
            </h1>
            <div className="text-lg mb-4 flex items-center justify-end gap-2">
              <span className={`${currentScreen === 1 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Business Modelling and Valuation
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 2 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Due Diligence
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 3 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Structuring & Restructuring
              </span>
            </div>
          </div>

          {/* Dynamic Content */}
          <div 
            key={currentScreen}
            className="space-y-6 text-slate-200 animate-fade-in-up"
          >
            {/* Heading for screen 3 */}
            {currentScreenData.heading && (
              <h2 className="text-xl font-semibold text-white">
                {currentScreenData.heading}
              </h2>
            )}

            {/* Main Content */}
            <p className="text-base leading-relaxed text-slate-200">
              {currentScreenData.content}
            </p>

            {/* Services List - Screens 1 & 2 */}
            {currentScreenData.services && (
              <ul className="space-y-2 text-base">
                {currentScreenData.services.map((service, index) => (
                  <li key={index} className="flex items-center justify-end gap-2">
                    <span className="text-slate-300">{service}</span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  </li>
                ))}
              </ul>
            )}

            {/* Contact Info - Screen 3 */}
            {currentScreenData.contact && (
              <div className="space-y-3 mt-8">
                <h3 className="text-lg font-semibold text-white">
                  {currentScreenData.contact.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {currentScreenData.contact.description}
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-slate-300">{currentScreenData.contact.phone}</span>
                    <IconPhone size={16} className="text-orange-500" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-slate-300">{currentScreenData.contact.email}</span>
                    <IconMail size={16} className="text-orange-500" />
                  </div>
                </div>
              </div>
            )}

            {/* Sections - Screen 4 */}
            {currentScreenData.sections && (
              <div className="space-y-6">
                {currentScreenData.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-3">
                    <h3 className="text-lg font-semibold text-orange-400">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center justify-end gap-2 text-sm">
                          <span className="text-slate-300">{service}</span>
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Screen Indicators */}
          {/* <div className="flex justify-end gap-2 mt-12">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    onScreenChange(index + 4); // Add 4 to account for home screens
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentScreen ? 'bg-orange-500 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
