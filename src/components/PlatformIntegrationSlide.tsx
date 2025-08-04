import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import DemoModal from "./DemoModal";
import {
  Link,
  Lightbulb,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

interface PlatformIntegrationSlideProps {
  onNavigate: (slide: number) => void;
}

// ---------- responsive hook ----------
const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  React.useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [breakpoint]);
  return isMobile;
};

// ---------- 3D Cube Integration Diagram ----------
interface CubeIntegrationDiagramProps {
  handleNodeClick: (nodeId: string) => void;
}

const CubeIntegrationDiagram: React.FC<CubeIntegrationDiagramProps> = ({ handleNodeClick }) => {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = React.useState<string | null>(null);

  // Dimensions
  const width = isMobile ? 600 : 800;
  const height = isMobile ? 500 : 420;
  const centerX = width / 2;
  const centerY = isMobile ? 250 : 210;

  // 3D Cube parameters (isometric view)
  const cubeSize = isMobile ? 80 : 100;
  const nodeRadius = isMobile ? 30 : 35;
  const iconSize = isMobile ? 18 : 22;
  const connectionLength = isMobile ? 80 : 100;

  // Isometric cube vertices (3D effect)
  const cubeVertices = {
    // Front face
    frontTopLeft: { x: centerX - cubeSize/2, y: centerY - cubeSize/2 },
    frontTopRight: { x: centerX + cubeSize/2, y: centerY - cubeSize/2 },
    frontBottomLeft: { x: centerX - cubeSize/2, y: centerY + cubeSize/2 },
    frontBottomRight: { x: centerX + cubeSize/2, y: centerY + cubeSize/2 },
    
    // Back face (offset for 3D effect)
    backTopLeft: { x: centerX - cubeSize/2 + 30, y: centerY - cubeSize/2 - 30 },
    backTopRight: { x: centerX + cubeSize/2 + 30, y: centerY - cubeSize/2 - 30 },
    backBottomLeft: { x: centerX - cubeSize/2 + 30, y: centerY + cubeSize/2 - 30 },
    backBottomRight: { x: centerX + cubeSize/2 + 30, y: centerY + cubeSize/2 - 30 },
  };

  // Node positions around the cube
  const nodes = [
    {
      id: "connect-systems",
      x: centerX,
      y: centerY - cubeSize - connectionLength,
      title: "Connect Old Systems\nwith New Tech",
      Icon: Link,
      color: "#0EA5E9", // sky-500
    },
    {
      id: "flexible-systems",
      x: centerX - cubeSize - connectionLength,
      y: centerY + cubeSize/2,
      title: "Build Flexible Systems\nThat Talk to Each Other",
      Icon: Lightbulb,
      color: "#0284C7", // sky-600
    },
    {
      id: "smart-workflows",
      x: centerX + cubeSize + connectionLength,
      y: centerY + cubeSize/2,
      title: "One Dashboard,\nSmarter Workflows",
      Icon: TrendingUp,
      color: "#0369A1", // sky-700
    },
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className="overflow-visible"
    >
      {/* Background ambient particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={100 + Math.random() * (width - 200)}
          cy={50 + Math.random() * (height - 100)}
          r={Math.random() * 2 + 0.5}
          fill="#0EA5E9"
          className="opacity-20"
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [0.5, 1.2, 0.5],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3D Cube Structure */}
      <g>
        {/* Cube faces with gradient fills */}
        <defs>
          <linearGradient id="topFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="leftFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="rightFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0369A1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#075985" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Top face */}
        <motion.path
          d={`M ${cubeVertices.frontTopLeft.x} ${cubeVertices.frontTopLeft.y} 
              L ${cubeVertices.frontTopRight.x} ${cubeVertices.frontTopRight.y}
              L ${cubeVertices.backTopRight.x} ${cubeVertices.backTopRight.y}
              L ${cubeVertices.backTopLeft.x} ${cubeVertices.backTopLeft.y} Z`}
          fill="url(#topFace)"
          stroke="#0EA5E9"
          strokeWidth={2}
          className="opacity-80"
          animate={{
            opacity: hovered ? [0.8, 1, 0.8] : [0.7, 0.9, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* Left face */}
        <motion.path
          d={`M ${cubeVertices.frontTopLeft.x} ${cubeVertices.frontTopLeft.y}
              L ${cubeVertices.backTopLeft.x} ${cubeVertices.backTopLeft.y}
              L ${cubeVertices.backBottomLeft.x} ${cubeVertices.backBottomLeft.y}
              L ${cubeVertices.frontBottomLeft.x} ${cubeVertices.frontBottomLeft.y} Z`}
          fill="url(#leftFace)"
          stroke="#0284C7"
          strokeWidth={2}
          className="opacity-70"
          animate={{
            opacity: hovered ? [0.7, 0.9, 0.7] : [0.6, 0.8, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />

        {/* Right face */}
        <motion.path
          d={`M ${cubeVertices.frontTopRight.x} ${cubeVertices.frontTopRight.y}
              L ${cubeVertices.backTopRight.x} ${cubeVertices.backTopRight.y}
              L ${cubeVertices.backBottomRight.x} ${cubeVertices.backBottomRight.y}
              L ${cubeVertices.frontBottomRight.x} ${cubeVertices.frontBottomRight.y} Z`}
          fill="url(#rightFace)"
          stroke="#0369A1"
          strokeWidth={2}
          className="opacity-60"
          animate={{
            opacity: hovered ? [0.6, 0.8, 0.6] : [0.5, 0.7, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: 1,
            ease: "easeInOut",
          }}
        />

        {/* Cube edges for definition */}
        {[
          [cubeVertices.frontTopLeft, cubeVertices.frontTopRight],
          [cubeVertices.frontTopRight, cubeVertices.frontBottomRight],
          [cubeVertices.frontBottomRight, cubeVertices.frontBottomLeft],
          [cubeVertices.frontBottomLeft, cubeVertices.frontTopLeft],
        ].map((edge, i) => (
          <motion.line
            key={`edge-${i}`}
            x1={edge[0].x}
            y1={edge[0].y}
            x2={edge[1].x}
            y2={edge[1].y}
            stroke="#0EA5E9"
            strokeWidth={2}
            className="opacity-60"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              strokeWidth: [2, 3, 2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>

      {/* Connection lines from cube to nodes */}
      {nodes.map((node, i) => (
        <motion.line
          key={`connection-${node.id}`}
          x1={centerX}
          y1={centerY}
          x2={node.x}
          y2={node.y}
          stroke={node.color}
          strokeWidth={2}
          className="opacity-50"
          animate={{
            opacity:
              hovered === node.id ? [0.5, 0.9, 0.5] : [0.4, 0.7, 0.4],
            strokeWidth:
              hovered === node.id ? [2, 4, 2] : [2, 3, 2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data flow particles along connections */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`flow-particle-${i}`}
          r={3}
          fill={node.color}
          className="opacity-70"
          animate={{
            cx: [centerX, node.x],
            cy: [centerY, node.y],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: i * 1.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Integration nodes */}
      {nodes.map((node) => {
        const isHovered = hovered === node.id;
        const lines = node.title.split("\n");

        return (
          <g key={node.id}>
            {/* Outer glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={nodeRadius + 8}
              fill={`radial-gradient(circle at 50% 50%, ${node.color}40 0%, transparent 70%)`}
              className="opacity-25"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.4 : 0.2,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Main node circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={nodeRadius}
              fill="rgba(15, 23, 42, 0.9)"
              stroke={node.color}
              strokeWidth={3}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleNodeClick(node.id)}
              whileHover={{ scale: 1.05 }}
              animate={{
                strokeWidth: isHovered ? [3, 4, 3] : [2, 3, 2],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            />

            {/* Icon background circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={iconSize + 2}
              fill={node.color}
              opacity={0.15}
            />

            {/* Icon */}
            <g
              transform={`translate(${node.x - iconSize / 2}, ${
                node.y - iconSize / 2
              })`}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleNodeClick(node.id)}
            >
              <node.Icon
                width={iconSize}
                height={iconSize}
                stroke={node.color}
                strokeWidth={2}
                fill="none"
              />
            </g>

            {/* Title text */}
            <text
              x={node.x}
              y={node.y + (isMobile ? 55 : 65)}
              textAnchor="middle"
              className="fill-white font-semibold cursor-pointer"
              style={{ fontSize: isMobile ? 11 : 13 }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleNodeClick(node.id)}
            >
              {lines.map((line, idx) => (
                <tspan
                  key={idx}
                  x={node.x}
                  dy={idx === 0 ? "0" : isMobile ? "13" : "15"}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* Central cube glow effect */}
    </svg>
  );
};

// ---------------------------------------------
// Main slide
// ---------------------------------------------
const PlatformIntegrationSlide: React.FC<PlatformIntegrationSlideProps> = ({
  onNavigate,
}) => {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  const handleGetStartedClick = () => {
    navigate('/connect-old-systems-with-new-tech');
  };
  const handleLearnMoreClick = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const handleNodeClick = (nodeId: string) => {
    switch (nodeId) {
      case 'connect-systems':
        navigate('/connect-old-systems-with-new-tech');
        break;
      case 'flexible-systems':
        navigate('/build-flexible-systems-that-talk-to-each-other');
        break;
      case 'smart-workflows':
        navigate('/one-dashboard-smarter-workflows');
        break;
      default:
        console.log(`Clicked: ${nodeId}`);
    }
  };

  return (
    <>
    <section
      id="platform-integration"
      className="relative isolate overflow-hidden h-screen text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/70" />

      <div className="relative z-10 h-full">
        <div className="h-full flex flex-col lg:flex-row">
          {/* Left column */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start px-8 lg:pl-16 pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-none mb-2">
                  PLATFORM
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-cyan-400 tracking-tight leading-none mb-6 lg:mb-8">
                    INTEGRATION
                  </h2>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

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

          {/* Right diagram */}
          <div className="w-full lg:w-3/5 flex items-center justify-center relative px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full h-full max-w-3xl"
            >
              <CubeIntegrationDiagram handleNodeClick={handleNodeClick} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating ambient elements */}
      <motion.div
        className="absolute top-16 right-16 w-24 h-24 bg-cyan-400/3 rounded-full blur-lg"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 left-16 w-20 h-20 bg-sky-500/3 rounded-full blur-lg"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          delay: 1,
          ease: "easeInOut",
        }}
      />
    </section>

    {/* Demo Modal */}
    <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
};

export default PlatformIntegrationSlide;