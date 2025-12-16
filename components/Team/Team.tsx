'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconBrandLinkedinFilled } from '@tabler/icons-react';
import { teamMembers } from './teamData';




const Team: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (memberId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set<number>();
      // If the clicked card is already flipped, close it
      // Otherwise, open only the clicked card (closing all others)
      if (!prev.has(memberId)) {
        newSet.add(memberId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-4 team-section" style={{ backgroundColor: '#000000' }}>
      <div className="w-full bg-black team-section" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-360 mx-auto">
          
          {/* Team Grid */}
          <div className="team-grid">
          {teamMembers.map((member) => {
            const isFlipped = flippedCards.has(member.id);
            return (
              <div
                key={member.id}
                className="relative cursor-pointer perspective-1000 w-full h-full"
                onClick={() => handleCardClick(member.id)}
              >
                {/* Flip Card Container */}
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}>
                  
                  {/* Front Side - Polaroid Style Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden gap-2">
                    {/* Polaroid Card */}
                    <div className="bg-white rounded-3xl p-4 shadow-2xl team-card-front h-full flex flex-col min-h-[480px] w-full min-w-[320px] mx-auto group">
                      {/* Photo Container */}
                      <div className="relative flex-1 w-full mb-6 rounded-2xl overflow-hidden bg-gray-100 min-h-[380px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover team-image transition-all duration-500"
                        />
                      </div>
                      
                      {/* Name Label */}
                      <div className="text-center">
                        <h3 className="text-orange-500 font-bold text-xl tracking-wide uppercase team-name transition-all duration-500">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Details Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-white rounded-3xl p-5 shadow-2xl h-full min-h-[520px] w-full max-w-[380px] mx-auto">
                      <div className="h-full flex flex-col justify-between">
                        {/* Header with Name and LinkedIn */}
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-gray-900 font-bold text-lg leading-tight flex-1 pr-2">{member.name}</h3>
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:scale-110 transition-all shrink-0"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <IconBrandLinkedinFilled size={18} className="text-white" />
                              </div>
                            </a>
                          )}
                        </div>
                        
                         {/* Divider */}
                        <div className="border-t border-gray-200 mb-2"></div>

                        {/* Description */}
                        <div className="mb-2">
                          <p className="text-gray-600 text-sm leading-relaxed ">
                            {member.description}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 mb-2"></div>

                        {/* Specialisation */}
                        <div className="mb-4 flex-1">
                          <h4 className="font-bold text-base mb-2 text-gray-900">Specialisation:</h4>
                          <div className="space-y-1">
                            {member.specializations.map((spec, index) => (
                              <div key={index} className="text-gray-600 text-sm">
                                {spec}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 mb-2"></div>

                        {/* Academic */}
                        <div className="mb-2">
                          <h4 className="font-bold text-base mb-2 text-gray-900">Academic:</h4>
                          <div className="space-y-1">
                            {member.academic.map((degree, index) => (
                              <div key={index} className="text-gray-600 text-xs">
                                {degree}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;