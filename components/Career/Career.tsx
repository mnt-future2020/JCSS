'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CareerProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

export default function Career({ currentScreen, onScreenChange, isTransitioning }: CareerProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/care.jpg"
          alt="Career Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-10 h-full overflow-y-auto flex items-start justify-start pl-32 pt-32 pb-8">
        <div className="text-left max-w-2xl">
          {/* Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-medium text-orange-500 mb-6">
              Careers
            </h1>
            <p className="text-slate-200 text-sm leading-relaxed mb-8">
              We always look for new minds, ideas and dynamism in our global 
              consulting arena. Send across your interest with a detailed note and 
              one of our team members will reach out to you for a suitable fit.
            </p>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-white bg-opacity-95 rounded-lg p-6 shadow-xl animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              {/* File Upload */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <label className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300 transition-colors">
                    <span className="text-sm">Choose file</span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.pptx"
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-gray-500">
                  Accepted file format: PPTX, PDF. File size not more than 10 mb
                </p>
                </div>
               
              </div>

              {/* Submit Button */}
              <div className="text-end">
                <button
                  type="submit"
                  className="w-28 bg-orange-400 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}