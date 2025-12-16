'use client';

interface CaseStudiesProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
}

export default function CaseStudies({ currentScreen, onScreenChange, isTransitioning }: CaseStudiesProps) {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Forensic Accounting Case Studies",
      subtitle: "Uncovering fraud and corruption in complex scenarios and high risk environments",
      description: "Forensic accounting cases are available to higher education faculty and cover a broad array of topics including payroll, claims management, sales commission fraud, procurement fraud, asset misappropriation, tax fraud, sales fraud and FCPA investigations.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
      category: "Forensic Accounting"
    },
    {
      id: 2,
      title: "Predicting the unpredictable",
      subtitle: "How will technology change the future of work?",
      description: "The future is an unexplored frontier, and our intuitions about what we'll find there are often wrong. Christopher Columbus famously thought that he was establishing a new trade route to the Indies when he stumbled across the Americas. Similarly, predictions about the future of work typically bear little resemblance to the actual future.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      category: "Future of Work"
    },
    {
      id: 3,
      title: "Generative AI in Asia Pacific",
      subtitle: "Young employees lead as employers play catch-up",
      description: "Generative artificial intelligence is the topic of conversation for senior business leaders across all industries and geographies. It's exploded on the agenda with the introduction of applications like ChatGPT, Gemini, Midjourney, Claude, and GitHub Copilot alongside software vendors incorporating gen AI capabilities into their products.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      category: "Artificial Intelligence"
    },
    {
      id: 4,
      title: "A burgeoning 'AI-generated' market",
      subtitle: "AI insurance could be a nearly US$5 billion market in eight years, according to Deloitte US",
      description: "Generative artificial intelligence is the topic of conversation for senior business leaders across all industries and geographies. It's exploded on the agenda with the introduction of applications like ChatGPT, Gemini, Midjourney, Claude, and GitHub Copilot alongside software vendors incorporating gen AI capabilities into their products.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
      category: "AI Insurance"
    }
  ];

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden pt-16" style={{ backgroundColor: '#1d4e77' }}>
      {/* Content Container */}
      <div className="relative z-10 h-full overflow-y-auto flex items-start justify-center p-8 pt-32 pb-8">
        <div className="max-w-7xl w-full min-h-">
          {/* Case Studies Grid */}
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white bg-opacity-95 rounded-lg shadow-xl animate-fade-in-up flex overflow-hidden h-48"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image - 30% width */}
                <div className="relative w-2/10 shrink-0">
                  <div className="w-full h-full">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-linear-to-br from-gray-300 to-gray-400 items-center justify-center text-gray-600 text-xs">
                      Case Image
                    </div>
                  </div>
                </div>

                {/* Content - 70% width */}
                <div className="w-8/10 p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-orange-500 ">
                    {study.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {study.subtitle}
                  </h4>
                  
                  {/* Orange line */}
                  <div className="w-full h-0.5 bg-orange-500 mb-2"></div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed p-2">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}