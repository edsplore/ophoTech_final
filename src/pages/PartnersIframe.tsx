import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PartnersIframe: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header Section */}
        <section className="py-8 bg-gradient-to-r from-primary-dark/50 to-primary-medium/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Welcome to Our <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">Partner Portal</span>
                </h2>
              </div>
              
              {/* Open in New Tab Button */}
              <div className="ml-8">
                <a
                  href="https://portal-dashboard-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Iframe Container */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-effect rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl">
              {/* Iframe Header */}
              <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Partner Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Secure Connection</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Iframe */}
              <div className="relative">
                <iframe
                  src="https://portal-dashboard-sigma.vercel.app/"
                  className="w-full h-[800px] border-0"
                  title="OphoTech Partner Portal"
                  loading="lazy"
                  allow="fullscreen"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
                />
                
                {/* Loading Overlay */}
                <div className="absolute inset-0 bg-primary-dark/90 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none" id="loading-overlay">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white">Loading Partner Portal...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-8 bg-gradient-to-t from-primary-950/50 to-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Our partnership team is here to support you every step of the way.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="mailto:partners@ophotech.com"
                  className="flex items-center justify-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 hover:text-white transition-all duration-200 no-underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Support</span>
                </a>
                
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 hover:text-white transition-all duration-200 no-underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Us</span>
                </a>
                
                <button
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 hover:text-white transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Live Chat</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-primary-dark/50 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/tech.png" 
                alt="Opho Tech" 
                className="h-6 w-auto"
              />
              <span className="text-gray-400 text-sm">© 2024 OphoTech. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => navigate('/contact')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => navigate('/')}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnersIframe;