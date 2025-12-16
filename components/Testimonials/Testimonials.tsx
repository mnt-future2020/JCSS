'use client';

interface TestimonialsProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  hasVideo?: boolean;
}

export default function Testimonials({ currentScreen, onScreenChange, isTransitioning }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Whitaker",
      title: "CFO",
      company: "Ellington Tech Solutions",
      quote: "Their audit team is incredibly thorough and professional. They made a complex process feel smooth and efficient. I trust them implicitly with our financial reporting.",
      image: "https://i.pravatar.cc/300?img=12"
    },
    {
      id: 2,
      name: "Sophia Bennett",
      title: "CEO",
      company: "Bennett & Co. Marketing",
      quote: "From start to finish, the audit team was a pleasure to work with. Their expertise and transparency built real confidence across our leadership.",
      image: "https://i.pravatar.cc/300?img=47"
    },
    {
      id: 3,
      name: "Laura Chen",
      title: "Director of Operations",
      company: "Apex Health Group",
      quote: "They brought structure and clarity to our financial audits. Their communication was outstanding throughout every phase.",
      image: "https://i.pravatar.cc/300?img=32",
      hasVideo: true
    },
    {
      id: 4,
      name: "Arjun Mehra",
      title: "Managing Director",
      company: "Mehra Industries",
      quote: "Exceptional service and deep industry knowledge. Their attention to detail and compliance helped us identify key areas for improvement.",
      image: "https://i.pravatar.cc/300?img=68"
    },
    {
      id: 5,
      name: "Carlos D'Souza",
      title: "Owner",
      company: "D'Souza Logistics",
      quote: "Their audit insights went beyond the numbers — they helped us strengthen internal controls and gave actionable advice. Highly recommended.",
      image: "https://i.pravatar.cc/300?img=51"
    },
    {
      id: 6,
      name: "Natalie Brooks",
      title: "Founder",
      company: "Brooks Design Studio",
      quote: "Their audit report didn't just tick boxes — it helped us see blind spots and opportunities. A great strategic partner!",
      image: "https://i.pravatar.cc/300?img=44"
    }
  ];

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#1d4e77' }}>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full overflow-y-auto flex items-start justify-center p-8 pt-32 pb-8">
        <div className="max-w-7xl w-full">
          {/* Grid Layout for Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-xl animate-fade-in-up flex overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Profile Image - 30% width */}
                <div className="relative w-3/10 shrink-0">
                  <div className="w-full h-full">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-linear-to-br from-gray-300 to-gray-400 items-center justify-center text-gray-600 text-sm">
                      Photo
                    </div>
                  </div>
                  {testimonial.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-4 h-4 text-blue-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content - 70% width */}
                <div className="w-7/10 p-6">
                  {/* Name and Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-3">
                      {testimonial.title}, {testimonial.company}
                    </p>
                    <div className="w-full h-0.5 bg-orange-500"></div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 leading-relaxed text-base">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}