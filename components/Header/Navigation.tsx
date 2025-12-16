'use client';

import { useState } from 'react';

interface NavigationProps {
  activeService: string;
  isInServices: boolean;
  onServiceChange: (service: string) => void;
}

const serviceItems = [
  'Advisory',
  'Assurance',
  'Support',
  'Tax',
  'Legal',
  'Contact Us'
];

export default function Navigation({
  activeService,
  isInServices,
  onServiceChange
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Laptop - Right Side Vertical Service Menu */}
      <div className="hidden md:flex fixed right-3 xl:right-5 top-0 min-h-screen z-40 flex-col justify-center space-y-1">
        {serviceItems.map((service, index) => (
          <button
            key={service}
            onClick={() => {
              if (isInServices) {
                onServiceChange(service);
              }
            }}
            className={`service-tab group relative text-white py-4 xl:py-6 px-2 xl:px-2.5 text-xs xl:text-sm rounded-r-2xl font-medium transition-all duration-500 hover:px-2.5 xl:hover:px-3.5 ${
              isInServices && activeService === service 
                ? 'bg-orange-500 hover:bg-orange-600' 
                : 'bg-slate-700/80 hover:bg-slate-600'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="block writing-mode-vertical transform transition-all duration-300 group-hover:scale-105 tracking-wide">
              {service}
            </span>
          </button>
        ))}
      </div>

      {/* Tablet - Horizontal Menu at Bottom */}
      <div className="hidden md:flex lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {serviceItems.map((service, index) => (
            <button
              key={service}
              onClick={() => {
                if (isInServices) {
                  onServiceChange(service);
                }
              }}
              className={`service-tab group relative text-white py-2 px-3 text-sm rounded-full font-medium transition-all duration-500 whitespace-nowrap ${
                isInServices && activeService === service 
                  ? 'bg-orange-500 hover:bg-orange-600' 
                  : 'bg-slate-700/80 hover:bg-slate-600'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="transform transition-all duration-300 group-hover:scale-105">
                {service}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile - Hamburger Menu */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 right-4 z-50 bg-slate-700/90 text-white p-3 rounded-full backdrop-blur-sm"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-800 shadow-xl transform transition-transform duration-300">
              <div className="flex flex-col pt-20 px-6 space-y-4">
                {serviceItems.map((service, index) => (
                  <button
                    key={service}
                    onClick={() => {
                      if (isInServices) {
                        onServiceChange(service);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={`service-tab group relative text-white py-4 px-4 text-base rounded-xl font-medium transition-all duration-500 text-left ${
                      isInServices && activeService === service 
                        ? 'bg-orange-500 hover:bg-orange-600' 
                        : 'bg-slate-700/80 hover:bg-slate-600'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="transform transition-all duration-300 group-hover:scale-105">
                      {service}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}