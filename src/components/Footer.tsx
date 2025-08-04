import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/careers' },
    // { name: 'News & Updates', href: '/engagement-model' },
    { name: 'Contact Us', href: '/engagement-model' }
  ];

  const solutionLinks = [
    { name: 'License Leveraging', href: '/#license-leveraging', slideIndex: 0 },
    { name: 'Technology Scouting', href: '/#technology-scouting', slideIndex: 1 },
    { name: 'Capability Gaps', href: '/#capability-gaps', slideIndex: 2 },
    { name: 'Enterprise Solutions', href: '/#enterprise-solutions', slideIndex: 3 },
    { name: 'Platform Integration', href: '/#platform-integration', slideIndex: 4 },
    { name: 'Feedback Loop', href: '/#feedback-loop', slideIndex: 5 }
  ];

  const resourceLinks = [
    { name: 'Case Studies', href: '/resources' },
    { name: 'White Papers', href: '/resources' },
    { name: 'Documentation', href: '/resources' },
    { name: 'Support Center', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Compliance', href: '/data-protection' }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/opho_tech/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/ophotech',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/ophotech/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'X (Twitter)', 
      href: 'https://x.com/opho_tech',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      )
    },
    { 
      name: 'Threads', 
      href: 'https://www.threads.com/@opho_tech',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.811-.365-.479-.856-.735-1.414-.735-.71 0-1.235.375-1.235.375s-.74-.735-1.414-.735c-.71 0-1.235.375-1.235.375l-.74-.735c.74-.735 1.414-.735 1.414-.735.71 0 1.235.375 1.235.375s.74-.735 1.414-.735c.71 0 1.235.375 1.235.375l.74.735c-.74.735-1.414.735-1.414.735-.71 0-1.235-.375-1.235-.375s-.74.735-1.414.735c-.71 0-1.235-.375-1.235-.375l-.74.735c.74-.735 1.414-.735 1.414-.735.71 0 1.235.375 1.235.375s.74-.735 1.414-.735c.558 0 1.049.256 1.414.735.365.479.614 1.069.74 1.811a13.853 13.853 0 0 1 3.02-.142c1.464.084 2.703.531 3.583 1.291.922.797 1.395 1.892 1.33 3.082-.067 1.224-.689 2.275-1.752 2.964-.898.583-2.057.866-3.259.801-1.59-.086-2.844-.688-3.73-1.79-.662-.826-1.092-1.92-1.284-3.272-.761.45-1.324 1.04-1.634 1.75-.528 1.205-.557 3.185 1.09 4.798 1.442 1.414 3.177 2.025 5.8 2.045z"/>
        </svg>
      )
    },
    { 
      name: 'Reddit', 
      href: 'https://www.reddit.com/user/ophotech/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      )
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, slideIndex?: number) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'auto' });
        
        // If slideIndex is provided, set the hero slide after scrolling
        if (slideIndex !== undefined) {
          setTimeout(() => {
            // Dispatch custom event to change slide
            window.dispatchEvent(new CustomEvent('changeHeroSlide', { 
              detail: { slideIndex } 
            }));
          }, 500); // Wait for scroll to complete
        }
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-dark via-primary-950 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/tech.png" 
                alt="OphoTech" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering businesses with cutting-edge AI, cloud, and data solutions. Transform your organization into a smarter, more agile enterprise.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>info@ophotech.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+18885796686</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>2302 - 228 Queens Quay W Downtown, Toronto M5J2X1 Canada</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.slideIndex)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center gap-2 group cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest insights on AI, cloud technologies, and digital transformation.
              </p>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[400px]">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
                <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left order-3 lg:order-1">
              © {currentYear} OphoTech. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 order-1 lg:order-2">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group relative"
                    title={social.name}
                  >
                    {social.icon}
                    <ExternalLink className="w-3 h-3 absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <div className="order-2 lg:order-3">
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="text-gray-400 hover:text-primary-400 text-sm flex items-center gap-2 transition-colors duration-200 group"
              >
                <span>Back to Top</span>
                <ArrowRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;