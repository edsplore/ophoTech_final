import React, { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';

const GlobalPresence: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    city: '2302 - 228 Queens Quay W Downtown, Toronto M5J2X1 ',
    country: 'Canada',
    lat: 43.5890,
    lng: -79.6441,
    zoom: '50000',
    coords: 'NDPCsDM1JzIwLjEiTiA3OcKwMzgnMzguOCJX',
    label: 'M'
  });

  const globalPresence = [
    { city: '2302 - 228 Queens Quay W Downtown, Toronto M5J2X1', country: 'Canada', type: 'Head Office', address: '2302 - 228 Queens Quay W Downtown, Toronto M5J2X1 Canada' },
    { city: '5565 silver creek valley rd Suite#600 San Jose CA 95138', country: 'USA', type: 'Operations', address: '5565 silver creek valley rd Suite#600 San Jose CA 95138' },
    { city: 'New Delhi', country: 'India', type: 'India Office', address: 'B1/1, Community Centre, Janakpuri, New Delhi 110058' },
    { city: 'Andorra la Vella', country: 'Andorra', type: 'Europe Operations', address: 'CARRER PERE D\'URG, NÚM. 9, 5F PIS, 4A PORTA AD500- ANDORRA LA VELLA' },
  ];

  const locationCoordinates = {
    '2302 - 228 Queens Quay W Downtown, Toronto M5J2X1': {
      city: '2302 - 228 Queens Quay W Downtown, Toronto M5J2X1',
      country: 'Canada',
      lat: 43.5890,
      lng: -79.6441,
      zoom: '50000',
      coords: 'NDPCsDM1JzIwLjEiTiA3OcKwMzgnMzguOCJX',
      label: 'M'
    },
    'New Delhi': {
      city: 'New Delhi',
      country: 'India',
      lat: 28.628469,
      lng: 77.091483,
      zoom: '50000',
      coords: 'MjjCsDM3JzQyLjUiTiA3N8KwMDUnMjkuMyJF',
      label: 'ND'
    },
    '5565 silver creek valley rd Suite#600 San Jose CA 95138': {
      city: '5565 silver creek valley rd Suite#600 San Jose CA 95138',
      country: 'USA',
      lat: 37.7749295,
      lng: -122.4194155,
      zoom: '50000',
      coords: 'Mzc3NDkuMyJOIDEyMjI1MTcuMyJX',
      label: 'BA'
    },
    'Andorra la Vella': {
      city: 'Andorra la Vella',
      country: 'Andorra',
      lat: 42.5063,
      lng: 1.5218,
      zoom: '50000',
      coords: 'NDLCsDMwJzIyLjgiTiAxwrAzMScxOC41IkU=',
      label: 'AD'
    }
  };

  const handleLocationClick = (location: typeof globalPresence[0]) => {
    const coords = locationCoordinates[location.city as keyof typeof locationCoordinates];
    if (coords) {
      setSelectedLocation(coords);
      
      // Smooth scroll to map if on mobile
      const mapElement = document.getElementById('global-presence-map');
      if (mapElement && window.innerWidth < 768) {
        mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section id="global-presence" className="py-20 bg-gradient-to-b from-primary-950 via-primary-dark to-primary-medium">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Heading with Decorative Elements */}
          <div className="text-left relative">
            {/* Top decorative line */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Global{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                Presence
              </span>
            </h2>
            
            {/* Bottom decorative element */}
            <div className="flex items-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
              <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
              <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
            </div>
          </div>
          
          {/* Right Side - Description */}
          <div className="text-left lg:text-left relative">
            {/* Subtle accent line for mobile/tablet */}
            <div className="lg:hidden flex items-center mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
            </div>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed relative">
              Serving clients across four continents with strategically located offices and operations centers. 
              Our global presence ensures we can provide localized support while maintaining consistent quality and innovation standards worldwide.
            </p>
            
            {/* Subtle corner accent */}
            <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent"></div>
          </div>
        </div>

        <div className="glass-effect rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20">
          {/* Interactive Google Maps */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 rounded-2xl overflow-hidden border border-primary-500/30">
              <div className="relative">
                <iframe
                  id="global-presence-map"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${selectedLocation.zoom}!2d${selectedLocation.lng}!3d${selectedLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${selectedLocation.coords}!5e0!3m2!1sen!2sus!4v1642089876543!5m2!1sen!2sus&markers=color:blue%7Clabel:${selectedLocation.label}%7C${selectedLocation.lat},${selectedLocation.lng}`}
                  width="100%"
                  height="400"
                  style={{ border: 0, filter: 'hue-rotate(220deg) saturate(0.8) brightness(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 rounded-2xl transition-all duration-500"
                ></iframe>

                {/* Location Info Overlay */}
                <div className="absolute top-4 left-4 bg-primary-900/90 backdrop-blur-sm rounded-lg p-4 border border-primary-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="text-white font-semibold">{selectedLocation.city}</h4>
                      <p className="text-primary-400 text-sm">{selectedLocation.country}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay for styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {globalPresence.map((location, index) => (
              <button
                key={index}
                onClick={() => handleLocationClick(location)}
                className={`relative bg-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 group border cursor-pointer transform hover:scale-105 w-full ${
                  selectedLocation.city === location.city 
                    ? 'border-primary-500 bg-primary-500/20 shadow-lg shadow-primary-500/30 ring-2 ring-primary-500/50' 
                    : 'border-primary-500/20 hover:border-primary-500/40'
                }`}
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{location.city}</h4>
                <p className="text-sm text-gray-300 mb-2">{location.country}</p>
                <p className="text-xs text-primary-400 font-semibold mb-2">{location.type}</p>
                <p className="text-xs text-gray-400 leading-tight line-clamp-3">{location.address}</p>
                
                {/* Active indicator */}
                {selectedLocation.city === location.city && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-4 bg-white/10 rounded-full px-6 py-3 hover:bg-white/15 transition-all duration-300 border border-primary-500/30">
              <Globe className="w-5 h-5 text-primary-400 animate-spin-slow" />
              <span className="text-white font-semibold">Serving Clients Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;