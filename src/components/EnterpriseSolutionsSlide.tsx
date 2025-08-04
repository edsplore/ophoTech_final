import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import DemoModal from "./DemoModal";
import {
  Link2,
  TrendingUp,
  Lightbulb,
  Play,
  ArrowRight
} from "lucide-react";

// ---------------------------------------------
// Enhanced Process Flow Diagram
// ---------------------------------------------
interface ProcessFlowDiagramProps {
  handleStepClick: (stepId: string) => void;
}

const ProcessFlowDiagram: React.FC<ProcessFlowDiagramProps> = ({ handleStepClick }) => {
  const [hoveredStep, setHoveredStep] = React.useState<string | null>(null);

  // Responsive positioning
  const getStepPositions = () => {
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile) {
      return {
        spine: { x: 300, startY: 80, endY: 400 },
        steps: [
          { 
            id: 'understand', 
            x: 300, 
            y: 120, 
            icon: Link2, 
            title: ['Understand', 'What the Business', 'Really Needs'],
            color: '#00D4FF'
          },
          { 
            id: 'test', 
            x: 300, 
            y: 240, 
            icon: Lightbulb, 
            title: ['Test Fast'],
            color: '#00B5FF'
          },
          { 
            id: 'scale', 
            x: 300, 
            y: 360, 
            icon: TrendingUp, 
            title: ['Scale Smart', 'with Automation', 'and AI'],
            color: '#0099FF'
          }
        ],
        server: { x: 450, y: 240 }
      };
    }
    
    // Desktop layout
    return {
      spine: { x: 400, startY: 100, endY: 500 },
      steps: [
        { 
          id: 'understand', 
          x: 400, 
          y: 150, 
          icon: Link2, 
          title: ['Understand', 'What the Business', 'Really Needs'],
          color: '#00D4FF'
        },
        { 
          id: 'test', 
          x: 400, 
          y: 280, 
          icon: Lightbulb, 
          title: ['Test Fast'],
          color: '#00B5FF'
        },
        { 
          id: 'scale', 
          x: 400, 
          y: 410, 
          icon: TrendingUp, 
          title: ['Scale Smart', 'with Automation', 'and AI'],
          color: '#0099FF'
        }
      ],
      server: { x: 580, y: 280 }
    };
  };

  const [layout, setLayout] = React.useState(getStepPositions());

  React.useEffect(() => {
    const handleResize = () => {
      setLayout(getStepPositions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = window.innerWidth < 1024;
  const viewBoxDimensions = isMobile ? "0 0 600 480" : "0 0 800 600";

  return (
    <svg
      className="w-full h-full"
      viewBox={viewBoxDimensions}
      aria-hidden
    >
      {/* Background particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={50 + Math.random() * (isMobile ? 500 : 700)}
          cy={50 + Math.random() * (isMobile ? 380 : 500)}
          r={Math.random() * 2 + 0.5}
          fill="#00D4FF"
          className="opacity-20"
          animate={{ 
            opacity: [0.1, 0.5, 0.1],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4 + Math.random() * 4, 
            delay: Math.random() * 3,
            ease: "easeInOut" 
          }}
        />
      ))}

      {/* Main vertical spine */}
      <line
        x1={layout.spine.x}
        y1={layout.spine.startY}
        x2={layout.spine.x}
        y2={layout.spine.endY}
        stroke="#00D4FF"
        strokeWidth={2}
        strokeLinecap="round"
        className="opacity-80"
      />

      {/* Enhanced server/container on the right */}
      <motion.g
        animate={{ 
          y: hoveredStep ? [-2, 2, -2] : [0, 0, 0],
          scale: hoveredStep ? [1, 1.05, 1] : [1, 1.02, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
      >
        {/* Server container layers */}
        <rect
          x={layout.server.x - 60}
          y={layout.server.y - 80}
          width={120}
          height={160}
          rx={8}
          fill="rgba(15, 23, 42, 0.8)"
          stroke="#00D4FF"
          strokeWidth={2}
          className="opacity-90"
        />
        
        {/* Internal server elements */}
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={layout.server.x - 45}
            y={layout.server.y - 60 + i * 30}
            width={90}
            height={20}
            rx={4}
            fill="#00D4FF"
            className="opacity-50"
          />
        ))}
      </motion.g>

      {/* Process steps with enhanced design */}
      {layout.steps.map((step, index) => {
        const Icon = step.icon;
        const isHovered = hoveredStep === step.id;
        const lines = step.title;
        
        return (
          <g
            key={step.id}
            onMouseEnter={() => setHoveredStep(step.id)}
            onMouseLeave={() => setHoveredStep(null)}
            onClick={() => handleStepClick(step.id)}
          >
            {/* Horizontal connector to server */}
            <line
              x1={layout.spine.x}
              y1={step.y}
              x2={layout.server.x - 60}
              y2={step.y}
              stroke={step.color}
              strokeWidth={isHovered ? 2.5 : 1.5}
              strokeLinecap="round"
              className="opacity-70"
            />

            {/* Step circle/bubble */}
            <motion.circle
              cx={step.x}
              cy={step.y}
              r={isMobile ? 35 : 45}
              fill="rgba(15, 23, 42, 0.9)"
              stroke={step.color}
              strokeWidth={2}
              className="cursor-pointer"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
                strokeWidth: isHovered ? [2, 3, 2] : [2, 2.5, 2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: "easeInOut" 
              }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleStepClick(step.id)}
            />
            
            {/* Step glow effect */}
            <motion.circle
              cx={step.x}
              cy={step.y}
              r={isMobile ? 50 : 60}
              fill={step.color}
             className="opacity-5 cursor-pointer"
              animate={{
               scale: isHovered ? [1, 1.1, 1] : [0.9, 1.05, 0.9],
               opacity: isHovered ? [0.1, 0.2, 0.1] : [0.03, 0.05, 0.03]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut"
              }}
            />

            {/* Icon */}
            <motion.g
              className="cursor-pointer"
              animate={{ 
                scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: "easeInOut" 
              }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleStepClick(step.id)}
            >
              <Icon
                x={step.x - (isMobile ? 14 : 18)}
                y={step.y - (isMobile ? 14 : 18)}
                width={isMobile ? 28 : 36}
                height={isMobile ? 28 : 36}
                stroke={step.color}
                strokeWidth={1.5}
                fill="none"
              />
            </motion.g>
            
            {/* Step title - positioned to the left */}
            <text
              x={step.x - (isMobile ? 80 : 120)}
              y={step.y - (lines.length - 1) * (isMobile ? 8 : 12)}
              textAnchor="end"
              className="fill-white font-semibold cursor-pointer"
             style={{ fontSize: isMobile ? "9px" : "11px" }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleStepClick(step.id)}
            >
              {lines.map((t, i) => (
                <tspan 
                  key={i} 
                  x={step.x - (isMobile ? 80 : 120)} 
                  dy={i === 0 ? 0 : (isMobile ? 16 : 20)}
                >
                  {t}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.4" />
        </linearGradient>
        
        <filter id="processGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

// ---------------------------------------------
// Main Enterprise Solutions Slide Component
// ---------------------------------------------
interface EnterpriseSolutionsSlideProps {
  onNavigate: (slide: number) => void;
}

const EnterpriseSolutionsSlide: React.FC<EnterpriseSolutionsSlideProps> = () => {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  const handleGetStartedClick = () => {
    navigate('/understand-business-needs');
  };

  const handleLearnMoreClick = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const handleStepClick = (stepId: string) => {
    switch (stepId) {
      case 'understand':
        navigate('/understand-business-needs');
        break;
      case 'test':
        navigate('/test-fast-with-simulations');
        break;
      case 'scale':
        navigate('/scale-smart-with-automation');
        break;
      default:
        console.log(`Clicked: ${stepId}`);
    }
  };
  return (
    <>
    <section
      id="enterprise-solutions"
      className="relative isolate overflow-hidden h-screen text-white"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/70"></div>
      
      <div className="relative z-10 h-full">
        {/* Main Layout Container */}
        <div className="h-full flex flex-col lg:flex-row">
          
          {/* Left Column - Title and Buttons */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start px-8 lg:pl-16 pt-16 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-none mb-2">
                  ENTERPRISE
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-cyan-400 tracking-tight leading-none mb-6 lg:mb-8">
                    SOLUTIONS
                  </h2>
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              >
                <Button 
                  size="lg" 
                  className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
                  onClick={handleGetStartedClick}
                >
                  GET STARTED
                </Button>

                <Button 
                  size="lg" 
                  className="group flex items-center space-x-3 bg-transparent border-2 border-slate-500 hover:border-cyan-400 text-white hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg cursor-pointer active:scale-95"
                  onClick={handleLearnMoreClick}
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>LEARN MORE</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Enhanced Process Flow Diagram */}
          <div className="w-full lg:w-2/3 flex items-center justify-center relative flex-1 lg:flex-none px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full h-full max-w-4xl"
            >
              <ProcessFlowDiagram handleStepClick={handleStepClick} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24 bg-cyan-400/3 rounded-full blur-lg"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-20 h-20 bg-blue-500/3 rounded-full blur-lg"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, delay: 2, ease: "easeInOut" }}
      />
    </section>

    {/* Demo Modal */}
    <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
};

export default EnterpriseSolutionsSlide;