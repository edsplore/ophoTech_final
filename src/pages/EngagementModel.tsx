import React, { useState, useEffect } from 'react';
import { Target, Users, Zap, Shield, ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  details: string[];
  color: string;
}

const EngagementModel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    projectType: 'ai-solutions'
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps: Step[] = [
    {
      id: 1,
      title: 'Discovery & Analysis',
      description: 'We dive deep into your business challenges and opportunities',
      duration: '3s',
      icon: <Target className="w-6 h-6" />,
      details: [
        'Comprehensive business audit',
        'Technology stack assessment',
        'Security vulnerability analysis',
        'Growth opportunity identification'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Strategic Planning',
      description: 'Custom roadmap tailored to your specific goals and constraints',
      duration: '4s',
      icon: <Users className="w-6 h-6" />,
      details: [
        'Solution architecture design',
        'Implementation timeline',
        'Resource allocation planning',
        'Risk mitigation strategies'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Rapid Implementation',
      description: 'Agile deployment with continuous feedback and optimization',
      duration: '5s',
      icon: <Zap className="w-6 h-6" />,
      details: [
        'Modular development approach',
        'Real-time progress tracking',
        'Continuous testing & QA',
        'Stakeholder communication'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 4,
      title: 'Secure & Scale',
      description: 'Robust security implementation and scalable infrastructure',
      duration: '3s',
      icon: <Shield className="w-6 h-6" />,
      details: [
        'Zero-trust security model',
        'Automated monitoring systems',
        'Performance optimization',
        'Scalability planning'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const resetToFirstStep = () => {
    setCurrentStep(0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Hero Section with Corporate Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className="relative h-[28rem] md:h-[32rem] lg:h-[36rem] rounded-3xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/40"></div>
            
            <div className="relative h-full flex items-center px-8 lg:px-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in-up leading-tight">
                  Our <span className="hero-title-gradient">Engagement Model</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200">
                  A systematic approach to transforming your business with cutting-edge technology solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Main Step Display */}
            <div className="glass-effect rounded-2xl p-6 lg:p-8 backdrop-blur-xl border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center text-white shadow-xl`}>
                  {steps[currentStep].icon}
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 text-center">
                {steps[currentStep].title}
              </h2>
              
              <p className="text-gray-300 text-base mb-6 text-center leading-relaxed">
                {steps[currentStep].description}
              </p>

              <div className="space-y-3 mb-6">
                {steps[currentStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-200">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400">Step {currentStep + 1} of {steps.length}</span>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={prevStep}
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                  title="Previous Step"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={resetToFirstStep}
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                  title="Reset to First Step"
                >
                  <Target className="w-4 h-4" />
                </button>
                <button
                  onClick={nextStep}
                  className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                  title="Next Step"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Step Navigation */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group hover:scale-[1.01] ${
                    index === currentStep
                      ? 'bg-white/10 border-primary-500 shadow-lg shadow-primary-500/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white group-hover:text-primary-400 transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-xs text-gray-400">{step.duration}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                      index === currentStep ? 'text-primary-500' : 'text-gray-500 group-hover:text-white'
                    }`} />
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-16 bg-gradient-to-t from-primary-950 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="hero-title-gradient">Get Started?</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Let's discuss how our engagement model can transform your business
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="ai-solutions" className="bg-primary-dark">AI Solutions</option>
                  <option value="cloud-migration" className="bg-primary-dark">Cloud Migration</option>
                  <option value="data-analytics" className="bg-primary-dark">Data Analytics</option>
                  <option value="security-audit" className="bg-primary-dark">Security Audit</option>
                  <option value="custom-development" className="bg-primary-dark">Custom Development</option>
                  <option value="consultation" className="bg-primary-dark">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project requirements and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Start Your Transformation Journey
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-300 text-sm">info@ophotech.com</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-300 text-sm">+18885796686</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                    <p className="text-gray-300 text-sm">2302 - 228 Queens Quay W Downtown, Toronto M5J2X1 Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngagementModel;