import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import DemoModal from "./DemoModal";
import {
  Link as LinkIcon,
  Lightbulb,
  TrendingUp,
  Play,
} from "lucide-react";

interface CapabilityGapsSlideProps {
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

// ---------- Pentagon Flow Diagram ----------
interface PentagonFlowDiagramProps {
  handleNodeClick: (nodeId: string) => void;
}

interface PentagonFlowDiagramProps {
  handleNodeClick: (nodeId: string) => void;
}

const PentagonFlowDiagram: React.FC<PentagonFlowDiagramProps> = ({ handleNodeClick }) => {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = React.useState<string | null>(null);

  // Dimensions
  const width = isMobile ? 600 : 800;
  const height = isMobile ? 500 : 420;
  const centerX = width / 2;
  const centerY = isMobile ? 250 : 210;

  // Pentagon parameters
  const pentagonRadius = isMobile ? 140 : 180;
  const nodeRadius = isMobile ? 35 : 42;
  const iconSize = isMobile ? 20 : 24;

  // Calculate pentagon points (5 corners)
  const pentagonPoints = Array.from({ length: 5 }).map((_, i) => {
    const angleDeg = 72 * i - 90; // Start from top, -90 to rotate
    const angleRad = (Math.PI / 180) * angleDeg;
    return {
      x: centerX + Math.cos(angleRad) * pentagonRadius,
      y: centerY + Math.sin(angleRad) * pentagonRadius,
    };
  });

  // Node positions: only use 3 positions from pentagon
  const nodes = [
    {
      id: "team-skills",
      x: pentagonPoints[0].x, // Top
      y: pentagonPoints[0].y,
      title: "Team Skills vs\nBusiness Needs",
      Icon: LinkIcon,
      color: "#0EA5E9", // sky-500
    },
    {
      id: "practical-tech",
      x: pentagonPoints[3].x, // Bottom left
      y: pentagonPoints[3].y,
      title: "Practical Tech\nDesign Sessions",
      Icon: Lightbulb,
      color: "#0284C7", // sky-600
    },
    {
      id: "growth-plans",
      x: pentagonPoints[2].x, // Bottom right
      y: pentagonPoints[2].y,
      title: "Growth Plans for\nFuture-Ready Teams",
      Icon: TrendingUp,
      color: "#0369A1", // sky-700
    },
  ];

  // Pentagon path for outline
  const pentagonPath = pentagonPoints
    .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ") + " Z";

  // Connection lines between the 3 active nodes
  const connections = [
    { from: nodes[0], to: nodes[1] }, // Top to bottom-left
    { from: nodes[1], to: nodes[2] }, // Bottom-left to bottom-right
    { from: nodes[2], to: nodes[0] }, // Bottom-right to top
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
      {Array.from({ length: 12 }).map((_, i) => (
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

      {/* Pentagon outline with glow effect */}
      <motion.path
        d={pentagonPath}
        stroke="#0EA5E9"
        strokeWidth={3}
        fill="none"
        className="opacity-40"
        animate={{
          opacity: hovered ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
          strokeWidth: hovered ? [3, 4, 3] : [2, 3, 2],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />

      {/* Outer pentagon glow */}
      <motion.path
        d={pentagonPath}
        stroke="#0EA5E9"
        strokeWidth={1}
        fill="rgba(14, 165, 233, 0.05)"
        className="opacity-30"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />

      {/* Connection lines between active nodes */}
      {connections.map((connection, i) => (
        <motion.line
          key={`connection-${i}`}
          x1={connection.from.x}
          y1={connection.from.y}
          x2={connection.to.x}
          y2={connection.to.y}
          stroke="#0EA5E9"
          strokeWidth={2}
          className="opacity-50"
          animate={{
            opacity:
              hovered === connection.from.id || hovered === connection.to.id
                ? [0.5, 0.8, 0.5]
                : [0.4, 0.6, 0.4],
            strokeWidth:
              hovered === connection.from.id || hovered === connection.to.id
                ? [2, 3, 2]
                : [2, 2, 2],
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
      {connections.map((connection, i) => (
        <motion.circle
          key={`flow-particle-${i}`}
          r={2}
          fill="#0EA5E9"
          className="opacity-70"
          animate={{
            cx: [connection.from.x, connection.to.x],
            cy: [connection.from.y, connection.to.y],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: i * 1.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Active nodes (only 3) */}
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
                scale: isHovered ? 1.1 : 1,
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
              y={node.y + (isMobile ? 65 : 75)}
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

      {/* Central energy pulse */}

      {/* Corner accent dots on unused pentagon points */}
      {[pentagonPoints[1], pentagonPoints[4]].map((point, i) => (
        <motion.circle
          key={`accent-${i}`}
          cx={point.x}
          cy={point.y}
          r={4}
          fill="#0EA5E9"
          className="opacity-40"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
};

// ---------------------------------------------
// Main slide
// ---------------------------------------------
const CapabilityGapsSlide: React.FC<CapabilityGapsSlideProps> = ({
  onNavigate,
}) => {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  const handleGetStartedClick = () => {
    navigate('/team-skills-vs-business-needs');
  };
  const handleLearnMoreClick = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const handleNodeClick = (nodeId: string) => {
    switch (nodeId) {
      case 'team-skills':
        navigate('/team-skills-vs-business-needs');
        break;
      case 'practical-tech':
        navigate('/practical-tech-design-sessions');
        break;
      case 'growth-plans':
        navigate('/growth-plans-for-future-ready-teams');
        break;
      default:
        console.log(`Clicked: ${nodeId}`);
    }
  };

  return (
    <>
    <section
      id="capability-gaps"
      className="relative isolate overflow-hidden h-screen text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1644325349124-d1756b79dd42?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
                  CAPABILITY
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-cyan-400 tracking-tight leading-none mb-6 lg:mb-8">
                    GAPS
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
              <PentagonFlowDiagram handleNodeClick={handleNodeClick} />
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

export default CapabilityGapsSlide;