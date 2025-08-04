import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Heart, ArrowRight } from 'lucide-react';

const CareersSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllJobs = () => {
    navigate('/careers');
  };

  const handleLearnAboutCulture = () => {
    navigate('/careers');
  };

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-primary-medium via-primary-950 to-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 backdrop-blur-xl border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Shape the Future?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Explore all our open positions and find the perfect role for your skills and passion. Join a team 
              that values innovation, collaboration, and making a real impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleViewAllJobs}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30 text-lg"
              >
                <Users className="w-5 h-5" />
                View All Positions
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleLearnAboutCulture}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 text-lg"
              >
                <Heart className="w-5 h-5" />
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;