'use client';

// Remove unused imports
import Image from 'next/image';
import { IconClipboard, IconDownload } from '@tabler/icons-react';

interface AuditAssuranceProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

export default function AuditAssurance({ currentScreen, onScreenChange, isTransitioning }: AuditAssuranceProps) {
  const screens = [
    {
      id: 0, // AD1 - Nothing highlighted
      title: "Assurance",
      content: "Audit and attestation reflects the present and guides in your business endeavours. JCSS ensures that the financial picture is displayed in an accurate and transparent manner, enhancing the opportunities for businesses to negotiate better terms with their investors, in turn helping businesses achieve their financing and growth objectives",
      services: [
        "Statutory Audits",
        "Tax Audit",
        "Quarterly Reviews for Listed Companies",
        "US GAAP & IFRS Restatement and Reporting"
      ]
    },
    {
      id: 1, // AD2 - Enterprise Risk Management
      title: "Assurance",
      content: "Apart from compliance, internal financial controls ensure businesses operate in an orderly and efficient manner, through various inbuilt safeguards and mechanisms to detect frauds / errors. With its expertise in establishing robust financial control frameworks, JCSS helps you meet national and international requirements. To wit:",
      services: [
        "Framework for Listed Companies",
        "IFCFR Framework for other companies",
        "SOX Testing /Implementation (for companies listed in US stock exchanges and their India entities)"
      ]
    },
    {
      id: 2, // AD3 - Corporate Governance
      title: "Assurance",
      content: "In the age of globalization, businesses need to meet transparency norms across various countries, and have to set up internal structures for balancing the interests of all the stakeholders. Considering the far reaching impact of every business action, JCSS understands the importance of Corporate Governance, and helps businesses to establish internal structures for transparency, enhancing stakeholder confidence and provide sustainable results",
      services: [
        "Review Roles & Responsibilities, and compliance thereof",
        "Validity & Taxability of Transactions between Group Companies",
        "Entity Level Controls Framework"
      ]
    },
    {
      id: 3, // AD4 - Audit and Attest
      title: "Assurance",
      content: "The quest for growth, coupled with risks associated with it, presents businesses with a challenge to take decisions, move forward and achieve optimal solutions. JCSS, with its in-depth knowledge in risk assessment, can assist you in your endeavours by mapping risks, developing action plans and establishing metrics to identify key control deficiencies.",
      services: [
        "Risk assessment Studies",
        "Standard Operating Procedures & Desktop Procedures",
        "Statutory Compliances Audit",
        "IT General Controls Review",
        "Cost Optimization Reviews",
        "Special Transactions Reviews",
        "Pre & Post ERP implementation reviews"
      ]
    },
    {
      id: 4, // AD5 - Internal Financial Controls
      title: "Assurance",
      content: "Businesses today are spread across geographies, requiring companies to balance, both, complex and broadening regulatory requirements and at the same time meet stakeholder demands. Transparency is the key word, which helps businesses meet diverse regulatory standards, increasing their credibility in the financial community as well as consumer world.",
      additionalContent: "JCSS, with its experience in working in diverse regulatory environments, can keep your businesses in compliance with the multitude of regulations, without any worries to you. While it takes a lot of time, expertise and resources to comply with multitude of regulators, JCSS can assure you peace of mind, so that you focus on your core business."
    },
    {
      id: 5, // AD6 - Internal Audits
      title: "Assurance",
      content: "The success of any business lies in the strength of its internal controls leading to better corporate governance practices. It not only involves complying with laws, regulations and financial reporting, but also helps maintain operational efficiency by early detection of any lapses in the processes. JCSS helps you streamline your internal processes for smooth business functioning through",
      services: [
        "Internal Audits",
        "Operations Audits",
        "Risk and Control Assurance"
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
          src="/images/ad.jpg"
          alt="Assurance Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-10 h-full flex items-center justify-start pl-16">
        <div className="text-left max-w-7xl">
          {/* Title and Subtitle */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-medium text-orange-500 mb-2 flex items-center gap-2">
              {currentScreenData.title}
              <IconDownload size={32} className="text-white bg-gray-500 p-2 rounded-full" />
            </h1>
            <div className="text-lg mb-4 flex items-center gap-2">
              <span className={`${currentScreen === 1 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Enterprise Risk Management
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 2 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Corporate Governance
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 3 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Audit and Attest
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 4 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Internal Financial Controls
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 5 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Internal Audits
              </span>
            </div>
          </div>

          {/* Dynamic Content */}
          <div 
            key={currentScreen}
            className="space-y-6 text-slate-200 animate-fade-in-up"
          >
            {/* Main Content */}
            <p className="text-base leading-relaxed text-slate-200">
              {currentScreenData.content}
            </p>

            {/* Additional Content for screen 5 */}
            {currentScreenData.additionalContent && (
              <p className="text-base leading-relaxed text-slate-300">
                {currentScreenData.additionalContent}
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

          {/* Screen Indicators */}
          {/* <div className="flex gap-2 mt-12">
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
