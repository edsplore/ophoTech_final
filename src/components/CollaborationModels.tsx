import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Handshake, Target, Lightbulb, Building, MessageCircle, ArrowRight } from 'lucide-react';

const CollaborationModels: React.FC = () => {
  const [activeModel, setActiveModel] = useState('strategic');

  const collaborationTypes = [
    {
      id: 'strategic',
      title: 'Strategic Partnerships',
      description: 'Display of partner logos with tooltips',
      icon: <Target className="w-6 h-6" />,
    },
    {
      id: 'collaboration',
      title: 'Collaboration Models',
      description: 'Types of partnership agreements',
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 'cta',
      title: 'Call to Action',
      description: 'Invitation to become a partner',
      icon: <Handshake className="w-6 h-6" />,
    }
  ];

  const partnershipModels = [
    {
      title: 'Strategic Technology Partnership',
      description: 'Deep integration of technologies and shared innovation roadmaps',
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: 'Solution Enablement Partnership (OEM / White-label)',
      description: 'Embed our solutions into your products with full white-label support',
      icon: <Building className="w-5 h-5" />
    },
    {
      title: 'Joint Venture / Co-Creation Models',
      description: 'Collaborative development of new solutions and market opportunities',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Channel / Reseller Partnership',
      description: 'Expand market reach through our established channel network',
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      title: 'Ecosystem & Innovation Partner',
      description: 'Join our innovation ecosystem for continuous collaboration',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'Consulting & Advisory Partnerships',
      description: 'Strategic guidance and consulting services for digital transformation',
      icon: <MessageCircle className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary-medium via-primary-950 to-primary-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Collaboration Models for{' '}
            <span className="text-primary-400">OphoTech</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive partnership ecosystem designed to accelerate innovation 
            and drive mutual success through strategic collaboration.
          </p>
        </div>

        {/* Main Collaboration Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {collaborationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveModel(type.id)}
              className={`group text-left p-6 transition-all duration-300 hover:scale-105 border-l-4 ${
                activeModel === type.id
                  ? 'border-primary-400 bg-primary-500/10'
                  : 'border-transparent hover:border-primary-500 hover:bg-primary-500/5'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 flex items-center justify-center text-white transition-colors ${
                  activeModel === type.id ? 'text-primary-400' : 'text-gray-400 group-hover:text-primary-400'
                }`}>
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${
                    activeModel === type.id ? 'text-primary-400' : 'text-white group-hover:text-primary-400'
                  }`}>
                    {type.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Partner Access Banner */}
        <div className="mb-12">
          <div className="bg-primary-500 text-center py-4">
            <h3 className="text-xl font-bold text-white">PARTNER ACCESS</h3>
            <p className="text-primary-100 text-sm">Exclusive benefits and resources for our strategic partners</p>
          </div>
        </div>

        {/* Partnership Models Grid */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipModels.map((model, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 hover:bg-primary-500/10 transition-all duration-300 border-l-2 border-primary-500/30 hover:border-primary-400"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-500 flex items-center justify-center text-white group-hover:bg-primary-400 transition-colors">
                    {model.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {model.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Banners */}
        <div className="space-y-3 mb-12">
          <div className="bg-primary-500 text-center py-3">
            <h3 className="text-lg font-bold text-white">COLLABORATION ENABLEMENT PROCESS</h3>
          </div>
          <div className="bg-gray-700 text-center py-3">
            <h3 className="text-lg font-bold text-white">STRATEGY EXECUTION</h3>
          </div>
        </div>

        {/* Strategic Partnership Overview */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-white/5 p-8 border-l-4 border-primary-400">
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Partnership Overview</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our strategic partnership framework is designed to create lasting value through 
              collaborative innovation, shared expertise, and mutual growth opportunities.
            </p>
            <Link
              to="/partner-portal"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 no-underline"
            >
              <Handshake className="w-5 h-5" />
              Become a Partner
            </Link>
          </div>
        </div>

        {/* Subtle Geometric Accents */}
        <div className="absolute top-1/4 left-0 w-1 h-32 bg-primary-500/20"></div>
        <div className="absolute top-1/2 right-0 w-1 h-24 bg-primary-400/20"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500/20"></div>
      </div>
    </section>
  );
};

export default CollaborationModels;