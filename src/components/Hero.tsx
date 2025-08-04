import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import DemoModal from './DemoModal';
import LicenseLeveragingSlide from './LicenseLeveragingSlide';
import TechnologyScoutingSlide from './TechnologyScoutingSlide';
import CapabilityGapsSlide from './CapabilityGapsSlide';
import EnterpriseSolutionsSlide from './EnterpriseSolutionsSlide';
import PlatformIntegrationSlide from './PlatformIntegrationSlide';
import FeedbackLoopSlide from './FeedbackLoopSlide';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Handle hash navigation to specific slides
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleScrollToNext = () => {
    // Scroll to the next section (GlobalPresence)
    const nextSection = document.querySelector('#global-presence');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dummy navigation function for slides that still expect it
  const handleSlideNavigation = (slideNumber: number) => {
    // No-op since we're displaying all slides vertically
  };

  return (
    <>
      <div id="hero" className="relative">
        {/* Vertical Slides Container - All slides stacked vertically */}
        <div className="w-full">
          {/* Slide 1: License Leveraging */}
          <LicenseLeveragingSlide onNavigate={handleSlideNavigation} />
          
          {/* Slide 2: Technology Scouting */}
          <TechnologyScoutingSlide onNavigate={handleSlideNavigation} />
          
          {/* Slide 3: Capability Gaps */}
          <CapabilityGapsSlide />
          
          {/* Slide 4: Enterprise Solutions - Placeholder */}
          <EnterpriseSolutionsSlide onNavigate={handleSlideNavigation} />
          
          {/* Slide 5: Platform Integration */}
          <PlatformIntegrationSlide onNavigate={handleSlideNavigation} />
          
          {/* Slide 6: Feedback Loop */}
          <FeedbackLoopSlide onNavigate={handleSlideNavigation} />
          
          {/* Scroll Down Indicator - Only show on the last slide to go to next section */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={handleScrollToNext}
              className="text-white hover:text-accent-cyan transition-transform transform hover:scale-110 animate-bounce"
              aria-label="Scroll to Global Presence"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
};

export default Hero;