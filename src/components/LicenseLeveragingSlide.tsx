import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Link, Lightbulb, TrendingUp, Play, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * License Leveraging slide component
 * Optimized layout matching the exact design reference.
 */

interface LicenseLeveragingSlideProps {
  onNavigate: (slide: number) => void;
}

// ---------------------------------------------
// Interactive SVG network with proper spacing
// ---------------------------------------------
interface InteractiveNetworkDiagramProps {
  handleNodeClick: (nodeId: string) => void;
}

const InteractiveNetworkDiagram: React.FC<InteractiveNetworkDiagramProps> = ({ handleNodeClick }) => {
  const [hoveredNode, setHoveredNode] = React.useState<string | null>(null);

  // Responsive node positions
  const getNodePositions = () => {
    // Mobile positions (smaller, more compact)
    if (window.innerWidth < 1024) {
      return [
        { 
          id: 'continuous', 
          x: 150, 
          y: 80, 
          title: 'Continuous Growth Engine', 
          icon: Link,
          color: '#00D4FF'
        },
        { 
          id: 'strategic', 
          x: 350, 
          y: 60, 
          title: 'Strategic Growth Partner', 
          icon: Lightbulb,
          color: '#00B5FF'
        },
        { 
          id: 'future', 
          x: 250, 
          y: 160, 
          title: 'Future Leaders Accelerator', 
          icon: TrendingUp,
          color: '#0099FF'
        }
      ];
    }
    
    // Desktop positions (original)
    return [
      { 
        id: 'continuous', 
        x: 200, 
        y: 100, 
        title: 'Continuous Growth Engine', 
        icon: Link,
        color: '#00D4FF'
      },
      { 
        id: 'strategic', 
        x: 450, 
        y: 80, 
        title: 'Strategic Growth Partner', 
        icon: Lightbulb,
        color: '#00B5FF'
      },
      { 
        id: 'future', 
        x: 350, 
        y: 200, 
        title: 'Future Leaders Accelerator', 
        icon: TrendingUp,
        color: '#0099FF'
      }
    ];
  };

  const [serviceNodes, setServiceNodes] = React.useState(getNodePositions());

  React.useEffect(() => {
    const handleResize = () => {
      setServiceNodes(getNodePositions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const viewBoxDimensions = window.innerWidth < 1024 ? "0 0 500 220" : "0 0 650 280";

  return (
    <svg
      className="w-full h-full"
      viewBox={viewBoxDimensions}
      aria-hidden
    >
      {/* Background particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={50 + Math.random() * 550}
          cy={50 + Math.random() * 250}
          r={Math.random() * 1.5 + 0.5}
          fill="#00D4FF"
          className="opacity-20"
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4 + Math.random() * 3, 
            delay: Math.random() * 2,
            ease: "easeInOut" 
          }}
        />
      ))}

      {/* Connection lines between service nodes */}
      {[
        { from: serviceNodes[0], to: serviceNodes[1], delay: 0 },
        { from: serviceNodes[1], to: serviceNodes[2], delay: 1 },
        { from: serviceNodes[2], to: serviceNodes[0], delay: 2 },
      ].map((connection, i) => (
        <motion.line
          key={i}
          x1={connection.from.x}
          y1={connection.from.y}
          x2={connection.to.x}
          y2={connection.to.y}
          stroke="#00D4FF"
          strokeWidth={2}
          className="opacity-40"
          animate={{ 
            opacity: hoveredNode ? [0.2, 0.8, 0.2] : [0.3, 0.6, 0.3],
            strokeWidth: hoveredNode ? [2, 3, 2] : [2, 2, 2]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            delay: connection.delay * 0.5,
            ease: "easeInOut" 
          }}
        />
      ))}

      {/* Interactive Service Nodes */}
      {serviceNodes.map((node) => {
        const Icon = node.icon;
        const isHovered = hoveredNode === node.id;
        const isMobile = window.innerWidth < 1024;
        
        return (
          <g key={node.id}>
            {/* Node glow effect */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={isHovered ? 50 : 40}
              fill={`url(#glow-${node.id})`}
              className="opacity-20"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : [0.8, 1, 0.8],
                opacity: isHovered ? [0.3, 0.5, 0.3] : [0.1, 0.2, 0.1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Main node circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={30}
              stroke={node.color}
              strokeWidth={3}
              fill="rgba(15, 23, 42, 0.8)"
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                strokeWidth: isHovered ? [3, 4, 3] : [2, 3, 2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => handleNodeClick(node.id)}
            />
            
            {/* Icon */}
            <motion.g
              className="cursor-pointer"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : [0.9, 1, 0.9]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => handleNodeClick(node.id)}
            >
              <Icon 
                x={node.x - 10} 
                y={node.y - 10} 
                width={20} 
                height={20} 
                stroke={node.color}
                strokeWidth={2}
                fill="none"
              />
            </motion.g>
            
            {/* Node title */}
            <motion.text
              x={node.x}
              y={node.y + (window.innerWidth < 1024 ? 40 : 50)}
              textAnchor="middle"
              className="fill-white text-xs lg:text-sm font-medium cursor-pointer"
              style={{ fontSize: isMobile ? "9px" : "11px" }}
              animate={{
                opacity: isHovered ? 1 : 0.8,
                scale: isHovered ? 1.05 : 1
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => handleNodeClick(node.id)}
            >
              <tspan x={node.x} dy="0">{node.title.split(' ')[0]} {node.title.split(' ')[1]}</tspan>
              <tspan x={node.x} dy={window.innerWidth < 1024 ? "12" : "16"}>{node.title.split(' ').slice(2).join(' ')}</tspan>
            </motion.text>
            
            {/* Gradient definition for glow */}
            <defs>
              <radialGradient id={`glow-${node.id}`}>
                <stop offset="0%" stopColor={node.color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={node.color} stopOpacity="0" />
              </radialGradient>
            </defs>
          </g>
        );
      })}

      {/* Orbital rings for visual complexity */}
      <motion.circle
        cx={window.innerWidth < 1024 ? 250 : 325}
        cy={window.innerWidth < 1024 ? 110 : 140}
        r={window.innerWidth < 1024 ? 80 : 100}
        stroke="#00D4FF"
        strokeWidth={1}
        fill="none"
        className="opacity-10"
        animate={{ r: window.innerWidth < 1024 ? [75, 85, 75] : [95, 105, 95] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.circle
        cx={window.innerWidth < 1024 ? 250 : 325}
        cy={window.innerWidth < 1024 ? 110 : 140}
        r={window.innerWidth < 1024 ? 100 : 130}
        stroke="#00B5FF"
        strokeWidth={1}
        fill="none"
        className="opacity-5"
        animate={{ r: window.innerWidth < 1024 ? [95, 105, 95] : [125, 135, 125] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </svg>
  );
};

// ---------------------------------------------
// Navigation component - separate and positioned
// Main component with exact layout matching
// ---------------------------------------------
const LicenseLeveragingSlide: React.FC<LicenseLeveragingSlideProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    // Navigate to Strategic Impact page
    window.location.href = '/strategic-impact';
  };

  const handleGetStartedClick = () => {
    navigate('/continuous-growth-engine');
  };

  const handleNodeClick = (nodeId: string) => {
    switch (nodeId) {
      case 'continuous':
        navigate('/continuous-growth-engine');
        break;
      case 'strategic':
        navigate('/transformation-partner');
        break;
      case 'future':
        navigate('/leadership-incubator');
        break;
      default:
        console.log(`Clicked: ${nodeId}`);
    }
  };

  return (
    <section 
      id="license-leveraging"
      className="relative isolate overflow-hidden h-screen text-white"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60"></div>
      
      {/* Subtle tech pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            linear-gradient(rgba(14, 165, 233, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '400px 400px, 400px 400px, 50px 50px, 50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 h-full">
        {/* Main Layout Container - Exact ratio matching */}
        <div className="h-full flex flex-col lg:flex-row">
          
          {/* Left Column - Title and Button */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start px-8 lg:pl-16 pt-16 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-none mb-2">
                  LICENSE
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-cyan-400 tracking-tight leading-none mb-6 lg:mb-8">
                    LEVERAGING
                  </h2>
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              {/* Learn More Button */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
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

          {/* Right Column - Diagram */}
          <div className="w-full lg:w-2/3 flex items-center justify-center relative flex-1 lg:flex-none">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full h-full max-w-4xl px-4 lg:px-0"
            >
              <InteractiveNetworkDiagram handleNodeClick={handleNodeClick} />
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
  );
};

export default LicenseLeveragingSlide;