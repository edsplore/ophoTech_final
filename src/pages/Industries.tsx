import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Landmark, Truck, Factory, MapPin, Zap, TrendingUp, CheckCircle, ArrowRight, Users, Shield, Brain } from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  solutions: string[];
  stats: {
    clients: string;
    projects: string;
    satisfaction: string;
  };
  challenges: string[];
  benefits: string[];
  color: string;
  bgGradient: string;
  caseStudy: {
    title: string;
    description: string;
    result: string;
  };
}

const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('government');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries: Industry[] = [
    {
      id: 'government',
      name: 'Government',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Modernizing public services with secure, scalable technology solutions that enhance citizen engagement and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      solutions: ['Digital Transformation', 'Cybersecurity', 'Data Analytics', 'Cloud Migration', 'AI Automation'],
      challenges: ['Legacy system modernization', 'Data security compliance', 'Citizen service digitization', 'Inter-agency collaboration'],
      benefits: ['Improved citizen services', 'Enhanced security', 'Cost reduction', 'Operational efficiency'],
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      caseStudy: {
        title: 'Digital Citizen Services Platform',
        description: 'Implemented a comprehensive digital platform for citizen services, reducing processing time by 70%.',
        result: '70% faster service delivery'
      }
    },
    {
      id: 'banking',
      name: 'Banking',
      icon: <Landmark className="w-8 h-8" />,
      description: 'Transforming financial services with cutting-edge fintech solutions, enhanced security, and seamless customer experiences.',
      image: 'https://images.unsplash.com/photo-1551260627-fd1b6daa6224?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      solutions: ['Fraud Detection AI', 'Digital Banking', 'Risk Management', 'Compliance Automation', 'Customer Analytics'],
      challenges: ['Regulatory compliance', 'Fraud prevention', 'Digital transformation', 'Customer experience'],
      benefits: ['Reduced fraud losses', 'Faster transactions', 'Better compliance', 'Enhanced customer satisfaction'],
      color: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-600/10 to-blue-700/5',
      caseStudy: {
        title: 'AI-Powered Fraud Detection',
        description: 'Deployed machine learning algorithms that reduced fraudulent transactions by 85%.',
        result: '85% reduction in fraud'
      }
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: <Truck className="w-8 h-8" />,
      description: 'Optimizing logistics and transportation networks with IoT, AI-powered route optimization, and real-time tracking solutions.',
      image: 'https://images.unsplash.com/photo-1512704515581-de233a09dae8?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      solutions: ['Fleet Management', 'Route Optimization', 'Predictive Maintenance', 'Supply Chain Analytics', 'IoT Integration'],
      challenges: ['Route optimization', 'Fleet maintenance', 'Supply chain visibility', 'Cost management'],
      benefits: ['Reduced fuel costs', 'Improved delivery times', 'Better asset utilization', 'Enhanced visibility'],
      color: 'from-blue-400 to-blue-500',
      bgGradient: 'from-blue-400/10 to-blue-500/5',
      caseStudy: {
        title: 'Smart Fleet Management System',
        description: 'Implemented IoT-based fleet tracking that improved delivery efficiency by 45%.',
        result: '45% efficiency improvement'
      }
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: <Factory className="w-8 h-8" />,
      description: 'Revolutionizing manufacturing with Industry 4.0 solutions, predictive maintenance, and intelligent automation systems.',
      image: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      solutions: ['Smart Factory', 'Predictive Analytics', 'Quality Control AI', 'Supply Chain Optimization', 'IoT Sensors'],
      challenges: ['Equipment downtime', 'Quality control', 'Production optimization', 'Supply chain disruptions'],
      benefits: ['Reduced downtime', 'Improved quality', 'Higher efficiency', 'Cost savings'],
      color: 'from-blue-700 to-blue-800',
      bgGradient: 'from-blue-700/10 to-blue-800/5',
      caseStudy: {
        title: 'Predictive Maintenance AI',
        description: 'Reduced equipment downtime by 60% using AI-powered predictive maintenance.',
        result: '60% less downtime'
      }
    },
    {
      id: 'smart-cities',
      name: 'Smart Cities',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Building intelligent urban ecosystems with IoT infrastructure, smart governance, and sustainable technology solutions.',
      image: 'https://images.unsplash.com/photo-1503642551022-c011aafb3c88?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      solutions: ['Smart Infrastructure', 'Traffic Management', 'Energy Optimization', 'Waste Management', 'Citizen Apps'],
      challenges: ['Urban planning', 'Resource management', 'Traffic congestion', 'Environmental sustainability'],
      benefits: ['Better quality of life', 'Reduced emissions', 'Efficient resource use', 'Improved governance'],
      color: 'from-blue-800 to-blue-900',
      bgGradient: 'from-blue-800/10 to-blue-900/5',
      caseStudy: {
        title: 'Smart City Infrastructure',
        description: 'Deployed IoT sensors and analytics that reduced energy consumption by 30%.',
        result: 'Significant energy savings'
      }
    }
  ];

  const currentIndustry = industries.find(industry => industry.id === selectedIndustry) || industries[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>


      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            {/* Decorative line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Industries{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                We Serve
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Delivering specialized technology solutions across diverse industries, helping organizations 
              transform their operations and achieve sustainable growth through innovative AI, cloud, and data solutions.
            </p>

            {/* Bottom decorative element */}
            <div className="flex items-center justify-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
              <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
              <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Selection Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`p-4 rounded-xl border transition-all duration-300 text-center group hover:scale-105 ${
                  selectedIndustry === industry.id
                    ? `bg-gradient-to-r ${industry.bgGradient} border-white/30 shadow-lg shadow-primary-500/20`
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center text-white mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                <h3 className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                  selectedIndustry === industry.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {industry.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Industry Details */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Industry Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="glass-effect rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl">
                  <img
                    src={currentIndustry.image}
                    alt={currentIndustry.name}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${currentIndustry.color} rounded-full text-white shadow-lg`}>
                      {currentIndustry.icon}
                      <span className="font-semibold">{currentIndustry.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              {/* Decorative line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {currentIndustry.name}
                <span className="block text-lg md:text-xl text-primary-400 font-normal mt-2">
                  Industry Solutions
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {currentIndustry.description}
              </p>
              {/* Bottom decorative element */}
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
                <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Solutions and Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Solutions */}
            <div className={`glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 bg-gradient-to-br ${currentIndustry.bgGradient}`}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentIndustry.color} flex items-center justify-center text-white`}>
                  <Zap className="w-5 h-5" />
                </div>
                Key Solutions
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentIndustry.solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors duration-200">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm font-medium">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className={`glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 bg-gradient-to-br ${currentIndustry.bgGradient}`}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentIndustry.color} flex items-center justify-center text-white`}>
                  <TrendingUp className="w-5 h-5" />
                </div>
                Key Benefits
              </h3>
              <div className="space-y-4">
                {currentIndustry.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study Highlight */}
          <div className="mb-16">
            <div className={`glass-effect rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 bg-gradient-to-br ${currentIndustry.bgGradient}`}>
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentIndustry.color} flex items-center justify-center text-white shadow-lg`}>
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Success Story</h3>
                      <p className="text-primary-400 text-sm">Real Impact, Real Results</p>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {currentIndustry.caseStudy.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {currentIndustry.caseStudy.description}
                  </p>
                  
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200 group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                <div className="text-center lg:text-right">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 border-4 border-primary-500/30 mb-4 text-center">
                    <div className="text-lg font-bold text-primary-400">
                      {currentIndustry.caseStudy.result}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">Success Story</div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges We Solve */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Challenges We Solve in{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                {currentIndustry.name}
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentIndustry.challenges.map((challenge, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentIndustry.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your {currentIndustry.name} Operations?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Let's discuss how our specialized solutions can drive innovation and growth in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/engagement-model"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;