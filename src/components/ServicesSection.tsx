import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Zap, Cog, Brain, Wrench, FileCheck, ArrowRight } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  color: string;
}

const KeySolutionsSection: React.FC = () => {
  const navigate = useNavigate();

  const solutions: Solution[] = [
    {
      id: 'ai-threat-intelligence',
      title: 'AI-Powered Threat Intelligence',
      icon: <Brain className="w-8 h-8" />,
      shortDescription: 'Advanced AI algorithms detect and analyze cyber threats in real-time, providing proactive security intelligence to protect your digital infrastructure from emerging attacks.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'secure-digital-transformation',
      title: 'Secure Digital Transformation',
      icon: <Shield className="w-8 h-8" />,
      shortDescription: 'Comprehensive digital transformation services with security-first approach, ensuring your business modernization maintains the highest standards of data protection and compliance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'smartops-platform',
      title: 'SmartOps Platform',
      icon: <Cog className="w-8 h-8" />,
      shortDescription: 'Intelligent operations platform that automates IT processes, optimizes resource allocation, and provides predictive insights for enhanced operational efficiency.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'neural-cyber-defense',
      title: 'Neural Cyber Defense',
      icon: <Zap className="w-8 h-8" />,
      shortDescription: 'Next-generation cybersecurity powered by neural networks, providing adaptive defense mechanisms that learn and evolve to counter sophisticated cyber attacks.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'predictive-maintenance-ai',
      title: 'Predictive Maintenance AI',
      icon: <Wrench className="w-8 h-8" />,
      shortDescription: 'AI-driven predictive maintenance solutions that analyze equipment data to prevent failures, reduce downtime, and optimize maintenance schedules for maximum efficiency.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'llm-compliance-agents',
      title: 'LLM Agents for Compliance',
      icon: <FileCheck className="w-8 h-8" />,
      shortDescription: 'Large Language Model agents specialized in regulatory compliance, automating compliance monitoring, reporting, and ensuring adherence to industry standards.',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const handleReadMore = (solutionId: string) => {
    navigate(`/solutions/${solutionId}`);
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-primary-dark via-primary-medium to-primary-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Left-Right Layout with Enhanced Styling */}
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
              Key{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            
            {/* Bottom decorative element */}
            <div className="flex items-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
              <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
              <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
            </div>
          </div>
          
          {/* Right Side - Description with Subtle Styling */}
          <div className="text-left lg:text-left relative">
            {/* Subtle accent line for mobile/tablet */}
            <div className="lg:hidden flex items-center mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
            </div>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed relative">
              Cutting-edge technology solutions powered by AI and advanced security frameworks. Our key solutions are designed to transform your business operations, enhance security posture, and drive intelligent automation across your enterprise.
            </p>
            
            {/* Subtle corner accent */}
            <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent"></div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 border border-white/20 backdrop-blur-xl relative overflow-hidden flex flex-col h-full"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Card accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
              
              {/* Solution Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
              </div>

              {/* Solution Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Solution Description - This will grow to fill available space */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm flex-grow">
                {solution.shortDescription}
              </p>

              {/* Read More Button - This will always be at the bottom */}
              <div className="mt-auto">
                <button
                  onClick={() => handleReadMore(solution.id)}
                  className="flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-200 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
              
              {/* Bottom corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-primary-500/30 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySolutionsSection;