import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ExternalLink, Users, Package, Truck } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.logo-dropdown-container')) {
        setIsLogoDropdownOpen(false);
      }
      if (!target.closest('.partner-dropdown-container')) {
        setIsPartnerDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogoDropdown = () => {
    setIsLogoDropdownOpen(!isLogoDropdownOpen);
  };

  const togglePartnerDropdown = () => {
    setIsPartnerDropdownOpen(!isPartnerDropdownOpen);
  };

  const handleWebsiteNavigation = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsLogoDropdownOpen(false);
  };

  const partnerOptions = [
    {
      id: 'customers',
      title: 'For customers',
      description: 'Solutions and services for our valued customers',
      icon: <Users className="w-5 h-5" />,
      href: '/partner-portal'
    },
    {
      id: 'vendors',
      title: 'For vendors',
      description: 'Partnership opportunities for technology vendors',
      icon: <Package className="w-5 h-5" />,
      href: '/vendors'
    },
    {
      id: 'suppliers',
      title: 'For suppliers',
      description: 'Collaboration opportunities for service suppliers',
      icon: <Truck className="w-5 h-5" />,
      href: '/suppliers'
    }
  ];

  const websites = [
    {
      name: 'OphoDigital',
      description: 'Digital Marketing & Strategy',
      url: 'https://radiant-sfogliatella-1938a8.netlify.app',
      current: false
    },
    {
      name: 'OphoWorld',
      description: 'Global Business Solutions',
      url: 'https://venerable-pegasus-78f69b.netlify.app/',
      current: false
    },
    {
      name: 'OphoSecure',
      description: 'Security & Compliance Solutions',
      url: 'https://elegant-biscotti-53e2a2.netlify.app',
      current: false
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle scroll behavior for hash links on the homepage
    if (location.pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'auto' });
        setIsMenuOpen(false);
      }
    } else if (href.startsWith('#')) {
      // For hash links on other pages, prevent default and let React Router handle navigation
      e.preventDefault();
    }
    // For regular page navigation, let React Router handle it normally and close menu
    setIsMenuOpen(false);
  };

  // Add useEffect to scroll to top when location changes
  useEffect(() => {
    // Scroll to top immediately when navigating to a new page
    if (!location.pathname.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Add useEffect to handle hash navigation after page load
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location.hash]);

  const handlePageNavigation = () => {
    // Close mobile menu and scroll to top for page navigation
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'auto' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
      isScrolled ? 'bg-primary-dark/98 shadow-lg shadow-black/10 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo with Dropdown */}
        <div className="relative logo-dropdown-container">
          <button
            onClick={toggleLogoDropdown}
            onMouseEnter={() => setIsLogoDropdownOpen(true)}
            className="flex items-center gap-2 group transition-all duration-200 hover:scale-105"
          >
            <img 
              src="/tech.png" 
              alt="OphoTech" 
              className="h-10 w-auto transition-all duration-200 group-hover:brightness-110"
            />
            <ChevronDown className={`w-4 h-4 text-gray-300 transition-all duration-200 ${
              isLogoDropdownOpen ? 'rotate-180 text-primary-400' : 'group-hover:text-white'
            }`} />
          </button>

          {/* Dropdown Menu */}
          {isLogoDropdownOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-80 bg-gray-900 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl shadow-black/20 overflow-hidden animate-fade-in-up"
              onMouseLeave={() => setIsLogoDropdownOpen(false)}
            >
              <div className="p-2">
                <div className="text-xs text-gray-400 px-4 py-2 font-semibold uppercase tracking-wider">
                  Opho Ecosystem
                </div>
                {websites.map((website, index) => (
                  <button
                    key={index}
                    onClick={() => handleWebsiteNavigation(website.url)}
                    className="w-full text-left p-4 rounded-xl transition-all duration-200 group hover:bg-white/10 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-semibold mb-1 flex items-center gap-2 text-white group-hover:text-primary-400">
                          {website.name}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300">
                          {website.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primary-400 transition-colors duration-200" />
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Footer */}
              <div className="bg-white/5 px-4 py-3 border-t border-white/10">
                <p className="text-xs text-gray-400 text-center">
                  Connect • Create • Evolve
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/#hero" 
           onClick={() => {
             setIsMenuOpen(false);
             // Always scroll to hero section
             setTimeout(() => {
               const target = document.querySelector('#hero');
               if (target) {
                 target.scrollIntoView({ behavior: 'smooth' });
               }
             }, 100);
           }}
            className="text-gray-300 font-medium nav-link-hover"
          >
            Home
          </Link>
          <Link 
            to="/about"
           onClick={handlePageNavigation}
            className="text-gray-300 font-medium nav-link-hover"
          >
            About
          </Link>
          <Link 
            to="/#global-presence" 
           onClick={() => {
             setIsMenuOpen(false);
             // Always scroll to global presence section
             setTimeout(() => {
               const target = document.querySelector('#global-presence');
               if (target) {
                 target.scrollIntoView({ behavior: 'smooth' });
               }
             }, 100);
           }}
            className="text-gray-300 font-medium nav-link-hover"
          >
            Global Presence
          </Link>
          <Link 
            to="/industries"
            onClick={handlePageNavigation}
            className="text-gray-300 font-medium nav-link-hover"
          >
            Industries
          </Link>
          <Link 
            to="/careers" 
            onClick={handlePageNavigation}
            className="text-gray-300 font-medium nav-link-hover"
          >
            Careers
          </Link>
          <Link 
            to="/contact"
            onClick={handlePageNavigation}
            className="text-gray-300 font-medium nav-link-hover"
          >
            Contact
          </Link>
          
          {/* Partner with us Dropdown */}
          <div className="relative partner-dropdown-container">
            <button
              onClick={togglePartnerDropdown}
              onMouseEnter={() => setIsPartnerDropdownOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              Partner with us
              <ChevronDown className={`w-4 h-4 transition-all duration-200 ${
                isPartnerDropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Partner Dropdown Menu */}
            {isPartnerDropdownOpen && (
              <div 
                className="absolute top-full right-0 mt-2 w-80 bg-gray-900 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl shadow-black/20 overflow-hidden animate-fade-in-up z-50"
                onMouseLeave={() => setIsPartnerDropdownOpen(false)}
              >
                <div className="p-2">
                  <div className="text-xs text-gray-400 px-4 py-2 font-semibold uppercase tracking-wider">
                    Partnership Options
                  </div>
                  {partnerOptions.map((option) => (
                    <Link
                      key={option.id}
                      to={option.href}
                     onClick={() => {
                       setIsPartnerDropdownOpen(false);
                       handlePageNavigation();
                     }}
                      className="w-full text-left p-4 rounded-xl transition-all duration-200 group hover:bg-white/10 hover:scale-[1.02] block"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/30 transition-colors duration-200">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                            {option.title}
                          </div>
                          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                            {option.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="bg-white/5 px-4 py-3 border-t border-white/10">
                  <p className="text-xs text-gray-400 text-center">
                    Connect • Create • Evolve
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <button 
          className="lg:hidden flex flex-col p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-150 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-white mt-1 transition-all duration-150 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-white mt-1 transition-all duration-150 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 left-0 right-0 bg-primary-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 flex-col p-8 space-y-6 transition-all duration-300 ${
        isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
      }`}>
        <Link 
          to="/#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
         onClick={() => {
           setIsMenuOpen(false);
           setTimeout(() => {
             const target = document.querySelector('#hero');
             if (target) {
               target.scrollIntoView({ behavior: 'smooth' });
             }
           }, 100);
         }}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          Home
        </Link>
        <Link 
          to="/about"
          onClick={(e) => handleNavClick(e, '/about')}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          About
        </Link>
        <Link 
          to="/#global-presence" 
          onClick={(e) => handleNavClick(e, '#global-presence')}
         onClick={() => {
           setIsMenuOpen(false);
           setTimeout(() => {
             const target = document.querySelector('#global-presence');
             if (target) {
               target.scrollIntoView({ behavior: 'smooth' });
             }
           }, 100);
         }}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          Global Presence
        </Link>
        <Link 
          to="/strategic-impact"
          onClick={() => setIsMenuOpen(false)}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          Licensing
        </Link>
        <Link 
          to="/industries"
          onClick={() => setIsMenuOpen(false)}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          Industries
        </Link>
        <Link 
          to="/#careers" 
          onClick={(e) => handleNavClick(e, '#careers')}
         onClick={() => {
           setIsMenuOpen(false);
           setTimeout(() => {
             const target = document.querySelector('#careers');
             if (target) {
               target.scrollIntoView({ behavior: 'smooth' });
             }
           }, 100);
         }}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          Careers
        </Link>
        <Link 
          to="/contact"
          onClick={handlePageNavigation}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          Contact
        </Link>
        <Link 
          to="/resources"
          onClick={handlePageNavigation}
          className="text-gray-300 font-medium nav-link-hover block"
        >
          Resources
        </Link>
        
        {/* Mobile Partner Section */}
        <div className="pt-4 border-t border-white/20 space-y-4">
          <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Partner with us
          </div>
          {partnerOptions.map((option) => (
            <Link
              key={option.id}
              to={option.href}
             onClick={handlePageNavigation}
              className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 py-2"
            >
              <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                {option.icon}
              </div>
              <div>
                <div className="font-medium">{option.title}</div>
                <div className="text-xs text-gray-500">{option.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;