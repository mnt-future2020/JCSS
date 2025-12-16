'use client';


import Image from 'next/image';
import { IconMessage } from '@tabler/icons-react';

interface HomeScreensProps {
  currentScreen: number;
  onScreenChange: (newScreen: number) => void;
  isTransitioning: boolean;
}

export default function HomeScreens({ currentScreen, onScreenChange, isTransitioning }: HomeScreensProps) {

  const screens = [
    {
      id: 0,
      heading: 'Welcome to JCSS.',
      subheading: "Here, we navigate the complexities of today's global business environment by offering tailored Accounting and Regulatory Services. Headquartered in Bangalore, with offices across India, Singapore, and Japan, our experienced team delivers practical, transparent solutions to help businesses thrive amidst intense competition, evolving regulations, and shifting consumer demands.",
      showTimeline: false,
      showButton: false
    },
    {
      id: 1,
      heading: 'Welcome to JCSS.',
      subheading: "Here, we navigate the complexities of today's global business environment by offering tailored Accounting and Regulatory Services. Headquartered in Bangalore, with offices across India, Singapore, and Japan, our experienced team delivers practical, transparent solutions to help businesses thrive amidst intense competition, evolving regulations, and shifting consumer demands.",
      showTimeline: false,
      showButton: true
    },
    {
      id: 2,
      heading: 'Our Journey.',
      subheading: "Since 2000, we've advised over 450 clients—from start-ups to Fortune 500 companies—across industries like Infrastructure, IT, Manufacturing, and Construction. With offices in Bangalore, Chennai, Delhi, Hyderabad, Pune, Singapore, and Tokyo, we're always close to our clients.",
      showTimeline: true,
      showButton: false
    },
    {
      id: 3,
      heading: 'Our Promise.',
      subheading: "JCSS was founded on one core value: Delivering Transparency. We simplify complex regulations, anticipate business needs, and provide clear, effective solutions. Over the years, we've grown globally, but our commitment to transparency remains unchanged, supported by a dedicated team that shares our vision.",
      showTimeline: false,
      showButton: false
    }
  ];

  const timeline = [
    { year: '2000' },
    { year: '2001' },
    { year: '2002' },
    { year: '2003' },
    { year: '2004' },
    { year: '2005' },
    { year: '2008' },
    { year: '2018' }
  ];

  // Remove local scroll handling - now handled by parent

  const currentScreenData = screens[currentScreen];

  return (
    <section className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
            currentScreen === 0 
              ? 'scale-175 translate-x-0 rotate-0' 
              : currentScreen === 1 
              ? 'scale-150 translate-x-2 rotate-1' 
              : currentScreen === 2 
              ? 'scale-125 translate-x-3 rotate-2' 
              : 'scale-110 translate-x-3 rotate-3'
          }`}
        >
          <Image
            src="/images/home.jpg"
            alt="JCSS Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Let's Talk Button - Left Side for Screen 1 */}
      {currentScreen === 1 && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 opacity-100 translate-x-0 transition-all duration-1000 ease-in-out">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-8 rounded-r-full font-normal text-xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
            <IconMessage size={24} stroke={2} />
            <span>Let&apos;s Talk</span>
          </button>
        </div>
      )}

      {/* Content Container - Right Aligned */}
      <div className="relative z-10 h-full flex items-center justify-end pr-32">
        <div className="text-right max-w-3xl flex flex-col justify-center min-h-[60vh]">
          {/* Logo - SVG */}
          <div className="mb-12 animate-fade-in flex flex-col items-end">
            <div className="mb-4">
              <Image
                src="/svg/JCSS on Orange.svg"
                alt="JCSS Logo"
                width={400}
                height={200}
                className="w-auto h-32 md:h-40"
                priority
              />
            </div>
          </div>

          {/* Dynamic Content - h3 and h4 inline */}
          <div 
            key={currentScreen}
            className="text-slate-200 animate-fade-in-up relative grow"
          >
            <p className="text-base leading-relaxed">
              <span className="font-semibold text-white">{currentScreenData.heading}</span>{' '}
              {currentScreenData.subheading}
            </p>

            {/* Timeline - Only on screen 2 */}
            {currentScreenData.showTimeline && (
              <div className="relative mt-12 pt-8 animate-fade-in-up animation-delay-200 mb-12">
                <div className="flex justify-between items-center relative">
                  <div className="absolute top-2 left-0 right-0 h-0.5 bg-slate-700"></div>
                  <div className="absolute top-2 left-0 right-0 h-0.5 bg-linear-to-r from-orange-500 to-orange-400"></div>
                  
                  {timeline.map((item, index) => (
                    <div 
                      key={item.year} 
                      className="flex flex-col items-center relative z-10"
                      style={{ 
                        animation: `fadeIn 0.5s ease-out ${index * 0.1 + 0.3}s both`
                      }}
                    >
                      <div className="w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 mb-2"></div>
                      <span className="text-xs text-slate-400 font-medium">{item.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Let's Talk Button - Within Content Container for Screens 2 & 3 */}
          {(currentScreen === 2 || currentScreen === 3) && (
            <div 
              className="flex justify-end mt-16 animate-fade-in-up animation-delay-500"
              key={`button-${currentScreen}`}
            >
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 flex items-center justify-center w-24 h-24 animate-bounce-slow hover:animate-pulse transform-gpu">
                <div className="flex flex-col items-center transition-all duration-300">
                  <svg 
                    className="w-10 h-10 mb-1 transition-transform duration-300 hover:rotate-12" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                    />
                  </svg>
                  <span className="text-xs font-semibold transition-all duration-300 hover:text-orange-100">
                    Let&apos;s Talk
                  </span>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
