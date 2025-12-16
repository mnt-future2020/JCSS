'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconDownload } from '@tabler/icons-react';

interface LegalProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

export default function Legal({ currentScreen, onScreenChange, isTransitioning }: LegalProps) {
  const screens = [
    {
      id: 0,
      title: "Legal",
      subtitle: "Litigation | Litigation Support | Commercial Agreements | Legal Due Diligence",
      content: "Our legal services cover a broad spectrum of activities, at various stages of business. Before the commencement of the deal (due diligence) or during the finalization of the deal (drafting agreements), resolving issues (litigation support) or legal support (litigation services). JCSS will be with you to actively advise on issues for optimal results.",
      services: []
    },
    {
      id: 1,
      title: "Legal",
      subtitle: "Litigation | Litigation Support | Commercial Agreements | Legal Due Diligence",
      content: "With a premium placed on accuracy and time, litigation process is a challenging undertaking. Businesses require specialists who can assist in litigation support in order to save time, money, and drive efficiency. JCSS with its litigation support services helps you at various stages of your case and assist you in drafting documents and correspondence.",
      services: [
        "Preparation & Analysis of Chronologies",
        "Drafting Documents & Correspondence"
      ]
    },
    {
      id: 2,
      title: "Legal",
      subtitle: "Litigation | Litigation Support | Commercial Agreements | Legal Due Diligence",
      content: "During the process of litigation, it is crucial to document the proceedings and prepare the client for the upcoming legal procedures. JCSS helps businesses in daily management of the legal proceedings and provides systematized documentary support.",
      services: [
        "Contract Paralegal",
        "Trial Presentation",
        "Court Reporting"
      ]
    },
    {
      id: 3,
      title: "Legal",
      subtitle: "Litigation | Litigation Support | Commercial Agreements | Legal Due Diligence",
      content: "While drafting commercial agreements, apart from being clear and transparent, it requires great insight on contingencies, and an in-depth understanding of the nature of business. JCSS, with its experience and expertise across years has provided straightforward, clear and realistic advice. We help businesses in drafting relevant agreements during",
      services: [
        "Private Equity (PE) or Venture Funding",
        "Mergers and Acquisitions",
        "Initial Public Offering / Follow on Offer"
      ]
    },
    {
      id: 4,
      title: "Legal",
      subtitle: "Litigation | Litigation Support | Commercial Agreements | Legal Due Diligence",
      content: "Businesses, during the course of mergers and acquisitions, need to take care of many responsibilities. JCSS provides businesses with comprehensive assessment of the target company concerned, and assists in drafting crucial documents.",
      services: [
        "Comprehensive Assessment of the Transaction",
        "Drafting Crucial Documents"
      ]
    }
  ];

  const currentScreenData = screens[currentScreen];

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/l.jpg"
          alt="Legal Background"
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
                Litigation
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 2 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Litigation Support
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 3 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Commercial Agreements
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 4 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Legal Due Diligence
              </span>
            </div>
          </div>

          {/* Dynamic Content */}
          <div 
            key={currentScreen}
            className="space-y-6 text-slate-200 animate-fade-in-up"
          >
            {/* Main Content */}
            <p className="text-base leading-relaxed text-white">
              {currentScreenData.content}
            </p>

            {/* Services List */}
            {currentScreenData.services && currentScreenData.services.length > 0 && (
              <ul className="space-y-2 text-base">
                {currentScreenData.services.map((service, index) => (
                  <li key={index} className="flex items-center justify-end gap-2">
                    <span className="text-slate-300">{service}</span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Screen Indicators */}
          {/* <div className="flex justify-end gap-2 mt-12">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    onScreenChange(index);
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
