import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Link, Lightbulb, TrendingUp,ChevronDown } from 'lucide-react';
import DemoModal from './DemoModal';


interface SlideData {
  id: string;
  title: string;
  titleParts: string[];
  blueWords: number[];
  backgroundImage: string;
//   connectData: {
//     title: string;
//     items: string[];
//   };
//   createData: {
//     title: string;
//     items: string[];
//   };
//   evolveData: {
//     title: string;
//     items: string[];
//   };
}

const HeroImage: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const slides: SlideData[] = [
    {
      id: 'strategic-impact',
      title: 'You lead. We power your tech. ',
      titleParts: ['  You lead. We power your tech.'],
      blueWords: [1], // second word will be blue
      backgroundImage: 'https://i.postimg.cc/W4TsvzrT/adi-goldstein-EUs-Vw-EOsbl-E-unsplash.jpg',
   
    },
  
  ];

  const currentSlideData = slides[currentSlide];

  // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, slides.length]);

  // Listen for external slide change events (from footer navigation)
  useEffect(() => {
    const handleSlideChange = (event: CustomEvent) => {
      const { slideIndex } = event.detail;
      if (slideIndex >= 0 && slideIndex < slides.length) {
        setCurrentSlide(slideIndex);
        setIsAutoPlaying(false); // Stop auto-play when manually navigated
      }
    };

    window.addEventListener('changeHeroSlide', handleSlideChange as EventListener);
    return () => window.removeEventListener('changeHeroSlide', handleSlideChange as EventListener);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const handleEngagementModelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRippleEffect(e);
    setTimeout(() => {
      if (currentSlideData.id === 'strategic-impact') {
        // Navigate to Strategic Impact section
        const strategicSection = document.querySelector('#strategic-impact-section');
        if (strategicSection) {
          strategicSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        navigate('/engagement-model');
      }
    }, 200);
  };

  const handleLetsBeginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRippleEffect(e);
    setTimeout(() => {
      setIsDemoModalOpen(true);
    }, 200);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen overflow-hidden bg-gray-900">
        {/* Background Images with Transitions */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                  backgroundImage: `url('${slide.backgroundImage}')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 md:py-0">
              {/* Left Content */}
              <div className="lg:col-span-8">
                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-nunito  leading-tight mb-8 md:mb-12 animate-fade-in-up animation-delay-400">
                  {currentSlideData.titleParts.map((part, index) => (
                    <div key={index} className="block">
                      <span className={`block relative inline-block ${
                        currentSlideData.blueWords.includes(index)
                          ? 'text-transparent bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text'
                          : 'text-white'
                      }`}>
                        {part}
                        {currentSlideData.blueWords.includes(index) && (
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-cyan"></span>
                        )}
                      </span>
                    </div>
                  ))}
                </h1>
                
          

                {/* CTA Buttons - Only for non-strategic-impact slides */}
                {currentSlideData.id !== 'strategic-impact' && (
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                    <button 
                      className="btn-primary relative overflow-hidden group"
                      onClick={handleLetsBeginClick}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" />
                    </button>
                    <button 
                      className="btn-secondary relative overflow-hidden group"
                      onClick={handleEngagementModelClick}
                    >
                      <span className="text-xs">▶</span>
                      <span>Learn More</span>
                    </button>
                  </div>
                )}
              </div>

             {/* Scroll Down Arrow */}
{/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
  <button
    onClick={() => {
      const nextSection = document.querySelector('#hero');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="text-white hover:text-accent-cyan transition-transform transform hover:scale-110"
    aria-label="Scroll Down"
  >
    <ChevronDown className="w-8 h-8 animate-bounce" />
  </button>
</div> */}
{/* Scroll Down Arrow */}
 {/* Scroll Down Arrow */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
  <button
    onClick={() => {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }}
    className="text-white hover:text-accent-cyan transition-transform transform hover:scale-110"
    aria-label="Scroll Down"
  >
    <ChevronDown className="w-8 h-8 animate-bounce" />
  </button>
</div>



            </div>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-24 right-6 hidden lg:block">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
            }`}
            title={isAutoPlaying ? 'Auto-playing' : 'Paused'}
          />
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
};

export default HeroImage;