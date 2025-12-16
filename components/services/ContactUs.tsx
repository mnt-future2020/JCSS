'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';

interface ContactUsProps {
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  isTransitioning: boolean;
}

interface LocationData {
  name: string;
  country: string;
  coordinates: [number, number];
  address: string;
  phone: string;
  fax: string;
}

export default function ContactUs({ currentScreen, onScreenChange, isTransitioning }: ContactUsProps) {
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  
  const locations: LocationData[] = [
    { 
      name: 'Bangalore', 
      country: 'India', 
      coordinates: [77.5946, 12.9716],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Ahmedabad', 
      country: 'India', 
      coordinates: [72.5714, 23.0225],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Chennai', 
      country: 'India', 
      coordinates: [80.2707, 13.0827],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Gurgaon', 
      country: 'India', 
      coordinates: [77.0266, 28.4595],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Hyderabad', 
      country: 'India', 
      coordinates: [78.4867, 17.3850],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Pune', 
      country: 'India', 
      coordinates: [73.8567, 18.5204],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Singapore', 
      country: 'Singapore', 
      coordinates: [103.8198, 1.3521],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Tokyo', 
      country: 'Japan', 
      coordinates: [139.6917, 35.6895],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    },
    { 
      name: 'Jakarta', 
      country: 'Indonesia', 
      coordinates: [106.8451, -6.2088],
      address: 'Mena Kempala Arcade, 7A, 7th floor, A Block, New No. 18 & 20 (Old No. 113), Sir Theeagaraya Road, T.Nagar, Chennai – 600 017',
      phone: '+91-44-42075580',
      fax: '+91-44-42075581'
    }
  ];

  const handleMarkerClick = (location: LocationData) => {
    console.log('Marker clicked:', location.name); // Debug log
    setSelectedLocation(selectedLocation?.name === location.name ? null : location);
  };

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#042d4d]">
      {/* World Map Background */}
      <div className="absolute inset-0 w-full h-full">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 400,
            center: [90, 15]
          }}
          width={200}
          height={600}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1e3a8a"
                  stroke="#1e40af"
                  strokeWidth={0.5}
                  style={{
                    default: { fill: "#1d4e77", outline: "none" },
                    hover: { fill: "#1d4e77", outline: "none" },
                    pressed: { fill: "#1d4e77", outline: "none" }
                  }}
                />
              ))
            }
          </Geographies>
          
          {/* Custom Location Markers */}
          {locations.map((location, index) => (
            <Marker key={index} coordinates={location.coordinates}>
              <g 
                onClick={() => handleMarkerClick(location)}
                style={{ cursor: 'pointer' }}
                className="hover:scale-125 transition-transform duration-300"
              >
                {/* Custom Pin Marker */}
                <g transform="translate(-12, -24)">
                  {/* Pin Shadow */}
                  <ellipse
                    cx="12"
                    cy="26"
                    rx="4"
                    ry="2"
                    fill="#000000"
                    fillOpacity={0.2}
                  />
                  
                  {/* Pin Body */}
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 9 12 12 12 12s12-3 12-12c0-6.627-5.373-12-12-12z"
                    fill={selectedLocation?.name === location.name ? "#ea580c" : "#f97316"}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  
                  {/* Inner Circle */}
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="#ffffff"
                  />
                  
                  {/* Location Dot */}
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    fill={selectedLocation?.name === location.name ? "#ea580c" : "#f97316"}
                  />
                </g>
                
                {/* Pulsing Ring Animation */}
                <circle
                  r="15"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  className="animate-ping"
                />
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Location Popup - Simple Working Version */}
      {selectedLocation && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedLocation(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-w-[90vw] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 uppercase">
                {selectedLocation.name}
              </h3>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            
            {/* Content */}
            <div className="p-4">
              {/* Address */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedLocation.address}
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="mb-4 space-y-2">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Tel:</span> {selectedLocation.phone}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Fax:</span> {selectedLocation.fax}
                </div>
              </div>
              
              {/* Mini Map */}
              <div className="w-full h-24 bg-linear-to-br from-blue-100 to-blue-200 rounded border border-gray-200 relative overflow-hidden">
                {/* Map grid pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Center pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                
                {/* Map label */}
                <div className="absolute bottom-2 right-2 text-xs text-blue-600 font-medium bg-white bg-opacity-80 px-2 py-1 rounded">
                  Map View
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Container - Left Side */}
      <div className="relative z-10 h-full flex items-start justify-start pl-12 pt-32">
        <div className="text-left max-w-lg">
          {/* Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-orange-500 mb-4">
              Contact Us
            </h1>
            <div className="text-base text-white mb-2">
              2nd Floor, Dhiworth Plaza, # 20 Sankey Road, Bangalore – 560 020
            </div>
            <div className="flex items-center gap-4 text-base">
              <a href="tel:+918023347000" className="text-white hover:text-orange-500 transition-colors flex items-center gap-1">
                <IconPhone size={16} /> +91-80-23347000
              </a>
              <a href="mailto:ask@jcssglobal.com" className="text-white hover:text-orange-500 transition-colors flex items-center gap-1">
                <IconMail size={16} /> ask@jcssglobal.com
              </a>
              <button className="text-white hover:text-orange-500 transition-colors flex items-center gap-1">
                 <IconMapPin size={16} /> Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Location Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-12">
          <div className="flex items-center justify-start gap-8 text-base">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-semibold">India:</span>
              <span className="text-white">Bangalore</span>
              <span className="text-slate-500">|</span>
              <span className="text-white">Ahmedabad</span>
              <span className="text-slate-500">|</span>
              <span className="text-white">Chennai</span>
              <span className="text-slate-500">|</span>
              <span className="text-white">Gurgaon</span>
              <span className="text-slate-500">|</span>
              <span className="text-white">Hyderabad</span>
              <span className="text-slate-500">|</span>
              <span className="text-white">Pune</span>
            </div>
            <div className="text-slate-500">|</div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-semibold">Singapore</span>
            </div>
            <div className="text-slate-500">|</div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-semibold">Japan:</span>
              <span className="text-white">Tokyo</span>
            </div>
            <div className="text-slate-500">|</div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-semibold">Indonesia:</span>
              <span className="text-white">Jakarta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
