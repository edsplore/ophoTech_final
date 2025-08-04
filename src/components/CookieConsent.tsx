import React, { useState, useEffect } from 'react';
import { X, Cookie, ExternalLink } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const minimizeBanner = () => {
    setIsMinimized(true);
  };

  const expandBanner = () => {
    setIsMinimized(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Minimized Version */}
      {isMinimized && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={expandBanner}
            className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            title="Cookie Settings"
          >
            <Cookie className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Full Banner */}
      {!isMinimized && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-t border-white/20 shadow-2xl animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              {/* Cookie Icon and Content */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">We use cookies to enhance your experience</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We use cookies and similar technologies to improve your browsing experience, analyze website traffic, 
                    and provide personalized content. By continuing to use our site, you consent to our use of cookies.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <a 
                      href="/privacy-policy" 
                      className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors"
                    >
                      Privacy Policy
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="/cookie-policy" 
                      className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors"
                    >
                      Cookie Policy
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={declineCookies}
                  className="flex-1 lg:flex-none px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 lg:flex-none px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  Accept All
                </button>
                <button
                  onClick={minimizeBanner}
                  className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                  title="Minimize"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;