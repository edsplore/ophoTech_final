import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, MapPin, Award, Globe, User } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [selectedLocation, setSelectedLocation] = useState({
    city: '2302 - 228 Queens Quay W Downtown, Toronto M5J2X1 ',
    country: 'Canada',
    lat: 43.5890,
    lng: -79.6441,
    zoom: '50000',
    coords: 'NDPCsDM1JzIwLjEiTiA3OcKwMzgnMzguOCJX',
    label: 'M'
  });

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client Success',
      description: 'Your success is our success. We build lasting partnerships through exceptional service and results.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business relationships.'
    }
  ];

  const leadership = [
    {
      name: 'Mr. Bhavneet',
      position: 'Founder',
      image: '/member_3.jpeg',
      bio: 'Visionary entrepreneur with extensive experience in organizational leadership, AI, and strategic innovation',
      expertise: ['Organizational Leadership', 'Artificial Intelligence (AI)', 'Strategic Visionary', 'Team Building', 'Creativity and Innovation'],
      id: 'bhavneet'
    },
    {
      name: 'Mr. Shivender Sofat',
      position: 'Advisory Board Member',
      image: '/member_1.jpeg',
      bio: 'CPA, CFE, FCA - Seasoned finance professional with extensive US & India experience',
      expertise: ['Corporate Finance', 'Taxation', 'Audit & Compliance'],
      id: 'shivender-sofat'
    },
    {
      name: 'Mr. Rajvir Singh',
      position: 'Advisory Board Member',
      image: '/member_2.jpeg',
      bio: 'ICS 1991 - Retired as Addl.Dy CAG at Special Secretary level, Government of India',
      expertise: ['Government Administration', 'Legal Affairs', 'Financial Audit', 'Sports Development'],
      id: 'rajvir-singh'
    }
  ];

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
console.log(selectedLocation);


  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary-950 via-primary-dark to-primary-medium">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-1 lg:order-1">
              {/* Decorative line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              
              {/* Bottom decorative element */}
              <div className="flex items-center mb-8">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
                <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                Founded in 2019, Opho Tech is the leader in global technology solutions and we are passionate about infusing intelligence into every business decision. We believe by having visibility to the right information early, businesses can directly impact success and profitability, and optimize all aspects across the technology lifecycle.
              </p>

              {/* Statistics */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center">
                  <div className="text-gray-300 font-medium">Global Clients</div>
                </div>
                <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center">
                  <div className="text-gray-300 font-medium">Expert Team</div>
                </div>
                <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center">
                  <div className="text-gray-300 font-medium">AI Solutions</div>
                </div>
              </div> */}
            </div>

            {/* Right Side - Image */}
            {/* <div className="order-2 lg:order-2">
              <div className="relative">
                <div className="glass-effect overflow-hidden border border-white/20 backdrop-blur-xl">
                  <img
                    src="/cce.jpg"
                    alt="OphoTech team collaboration"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div> */}
            <div className="order-2 lg:order-2 w-full">
  <div className="relative w-full">
    <div className="glass-effect overflow-hidden border border-white/20 backdrop-blur-xl rounded-lg">
      <img
        src="/cce.jpg"
        alt="OphoTech team collaboration"
        className="w-full h-auto max-h-[70vh] object-cover aspect-video sm:aspect-[4/3] md:aspect-[3/2]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
    </div>
  </div>
</div>

          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Foundation
            </h3>
            <p className="text-lg text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="glass-effect rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-center">
              {activeTab === 'mission' && (
                <div className="animate-fade-in-up">
                  <Target className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    At Opho Tech, our mission is to revolutionize the way businesses leverage technology to achieve their goals. We are committed to delivering exceptional solutions that exceed client expectations, enhance operational efficiency, and drive sustainable growth. Through continuous innovation and collaboration, we strive to be the trusted partner for businesses seeking to thrive in the digital age.
                  </p>
                </div>
              )}
              
              {activeTab === 'vision' && (
                <div className="animate-fade-in-up">
                  <Eye className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Our vision at Opho Tech is to be at the forefront of technological innovation, shaping the future of industries worldwide. We envision a world where businesses harness the full potential of emerging technologies to solve complex challenges, drive innovation, and create lasting value. By empowering organizations with advanced technological solutions, we aspire to drive positive change and shape a brighter, more connected future.
                  </p>
                </div>
              )}
              
              {activeTab === 'values' && (
                <div className="animate-fade-in-up">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                          {value.icon}
                        </div>
                        <h5 className="text-lg font-bold text-white mb-3">{value.title}</h5>
                        <p className="text-sm text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h3>
            <p className="text-lg text-gray-300">Meet the visionaries driving our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {leadership.map((leader, index) => (
              <Link
                key={index}
                to={`/team/${leader.id}`}
                className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center group hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer no-underline flex flex-col h-full"
              >
                <div className="relative mb-6">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover object-top border-4 border-primary-500/30 group-hover:border-primary-500 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center border-4 border-primary-500/30 group-hover:border-primary-500 transition-all duration-300">
                      <User className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">{leader.name}</h4>
                <p className="text-primary-400 font-semibold mb-3">{leader.position}</p>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">{leader.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {leader.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 pt-4 text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors mt-auto">
                  View Full Profile →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Global Presence
            </h3>
            <p className="text-lg text-gray-300">Serving clients across four continents</p>
          </div>

          <div className="glass-effect rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            {/* Interactive Google Maps */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 rounded-2xl overflow-hidden border border-primary-500/30">
                <div className="relative">
                  <iframe
                    id="global-presence-map"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${selectedLocation.zoom}!2d${selectedLocation.lng}!3d${selectedLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${selectedLocation.coords}!5e0!3m2!1sen!2sus!4v1642089876543!5m2!1sen!2sus&markers=color:blue%7Clabel:${selectedLocation.label}%7C${selectedLocation.lat},${selectedLocation.lng}`}
                    // src={`https://maps.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&z=14&output=embed`}
                    width="100%"
                    height="400"
                    style={{ border: 0, filter: 'hue-rotate(220deg) saturate(0.8) brightness(0.9)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96 rounded-2xl transition-all duration-500"
                  ></iframe>
                  {/* <iframe
  id="global-presence-map"
  src={`https://maps.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&z=14&output=embed`}
  key={`${selectedLocation.lat}-${selectedLocation.lng}`} // Forces React to reload iframe on location change
  width="100%"
  height="400"
  style={{
    border: 0,
    filter: 'hue-rotate(220deg) saturate(0.8) brightness(0.9)'
  }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-96 rounded-2xl transition-all duration-500"
/> */}

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

      </div>
    </section>
  );
};

export default AboutSection;