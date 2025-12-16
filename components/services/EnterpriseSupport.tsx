'use client';

import Image from 'next/image';
import { IconChartBar, IconDownload } from '@tabler/icons-react';

interface EnterpriseProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

export default function EnterpriseSupport({ currentScreen, onScreenChange, isTransitioning }: EnterpriseProps) {

  const screens = [
    {
      id: 0,
      title: "Enterprise Support",
      subtitle: "Agreed-upon Procedures | Corporate Reporting | Statutory Compliance | Payroll Services | Financial Accounting | Clergy Services",
      content: "For businesses it is a challenge to maintain all the functions within the organization, especially if it involves a credible amount of compliance and know-how. Further, it might cost more for businesses to maintain the operations in-house, than to outsource it to specialists in the field.",
      content2: "JCSS supports businesses in running their business smoothly, by providing assistance in activities impacting day-to-day operations. Be it cash management or book-keeping, pay-roll management or compliance, we provide comprehensive services as well as agreed-upon procedures to enable businesses unravel their potential in their area of operation."
    },
    {
      id: 1,
      title: "Enterprise Support",
      subtitle: "Agreed-upon Procedures | Corporate Reporting | Statutory Compliance | Payroll Services | Financial Accounting | Clergy Services",
      content: "Our agreed-upon procedures services provide independent verification and testing of specific financial or operational matters as defined by you and other specified parties. These engagements are tailored to meet your unique business requirements.",
      services: [
        "Indian GAAP",
        "US-GAAP / IFRS", 
        "ERP Upload Statements",
        "Remote Access Upload"
      ]
    },
    {
      id: 2,
      title: "Enterprise Support",
      subtitle: "Agreed-upon Procedures | Corporate Reporting | Statutory Compliance | Payroll Services | Financial Accounting | Clergy Services",
      content: "Our corporate reporting services ensure your financial communications meet the highest standards of accuracy, transparency, and regulatory compliance. We assist in preparing comprehensive reports that effectively communicate your organization's financial position and performance.",
      services: [
        "Banking & Trust Account Services",
        "Facility Fit-out",
        "Representative Duties"
      ]
    },
    {
      id: 3,
      title: "Enterprise Support",
      subtitle: "Agreed-upon Procedures | Corporate Reporting | Statutory Compliance | Payroll Services | Financial Accounting | Clergy Services",
      content: "Navigate the complex landscape of regulatory requirements with our comprehensive statutory compliance services. We ensure your organization meets all applicable laws, regulations, and industry standards while minimizing compliance risks.",
      services: [
        "Cash Forecasting",
        "Purchase Order Management",
        "Asset(s) Control"
      ]
    },
    {
      id: 4,
      title: "Enterprise Support",
      subtitle: "Agreed-upon Procedures | Corporate Reporting | Statutory Compliance | Payroll Services | Financial Accounting | Clergy Services",
      content: "Streamline your payroll operations with our comprehensive payroll services. We handle all aspects of employee compensation, from salary calculations and tax withholdings to benefits administration and regulatory reporting.",
      services: [
        "Book-keeping",
        "Depreciation & Asset Management",
        "Intra-Group Accounting"
      ]
    },
    {
      id: 5,
      title: "Enterprise Support",
      subtitle: "Agreed-upon Procedures | Corporate Reporting | Statutory Compliance | Payroll Services | Financial Accounting | Clergy Services",
      content: "Our financial accounting services provide the foundation for sound business decision-making. We maintain accurate books and records, prepare financial statements, and provide insights into your organization's financial performance.",
      services: [
        "C&B Administration",
        "Retirement Administration"
      ]
    },
    {
      id: 6,
      title: "Enterprise Support",
      subtitle: "Agreed-upon Procedures | Corporate Reporting | Statutory Compliance | Payroll Services | Financial Accounting | Clergy Services",
      content: "We understand the unique financial and administrative needs of religious organizations and clergy. Our specialized services address the specific requirements of churches, ministries, and religious institutions while ensuring compliance with applicable regulations.",
      services: [
        "Corporate Tax",
        "Withholding Tax",
        "Payroll & Benefits Compliance"
      ]
    }
  ];

  const currentScreenData = screens[currentScreen];

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/es.jpg"
          alt="Enterprise Support Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container - Right Aligned */}
      <div className="relative z-10 h-full flex items-center justify-end pr-32">
        <div className="text-right max-w-7xl">
          {/* Title and Subtitle */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-medium text-orange-500 mb-2 flex items-center justify-end gap-2">
              {currentScreenData.title}
              <IconDownload size={32} className="text-white bg-gray-500 p-2 rounded-full" />
            </h1>
            <div className="text-lg mb-4 flex items-center justify-end gap-2 flex-wrap">
              <span className={`${currentScreen === 1 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Agreed-upon Procedures
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 2 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Corporate Reporting
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 3 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Statutory Compliance
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 4 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Payroll Services
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 5 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Financial Accounting
              </span>
              <span className="text-slate-500">|</span>
              <span className={`${currentScreen === 6 ? 'text-orange-400 font-semibold' : 'text-slate-400'}`}>
                Clergy Services
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

            {/* Additional content for screen 0 */}
            {currentScreenData.content2 && (
              <p className="text-base leading-relaxed text-slate-200">
                {currentScreenData.content2}
              </p>
            )}

            {/* Services List */}
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
          </div>

          {/* Screen Indicators */}
          {/* <div className="flex justify-end gap-2 mt-12">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    onScreenChange(index + 8); // Add 8 to account for home and other service screens
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
