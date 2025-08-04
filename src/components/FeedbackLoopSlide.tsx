import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import DemoModal from "./DemoModal";
import {
  Search,
  Zap,
  Bot,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

interface FeedbackLoopSlideProps {
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

// ---------- 3D Torus Network Diagram ----------
interface TorusNetworkDiagramProps {
  handleBubbleClick: (bubbleId: string) => void;
}

const TorusNetworkDiagram: React.FC<TorusNetworkDiagramProps> = ({ handleBubbleClick }) => {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = React.useState<string | null>(null);

  // Dimensions
  const width = isMobile ? 600 : 800;
  const height = isMobile ? 500 : 420;
  const centerX = width / 2;
  const centerY = isMobile ? 250 : 210;

  // Simplified orbital system parameters
  const earthRadius = isMobile ? 45 : 55;
  const mainOrbitRadius = isMobile ? 120 : 160;

  // Three text bubbles positioned around the orbital system
  const textBubbles = [
    {
      id: "find-broken",
      x: centerX - (isMobile ? 140 : 180),
      y: centerY - (isMobile ? 90 : 120),
      title: "Find What's\nBroken and\nWhy",
      Icon: Search,
      color: "#0EA5E9", // sky-500
    },
    {
      id: "fix-improve",
      x: centerX - (isMobile ? 140 : 180),
      y: centerY + (isMobile ? 90 : 120),
      title: "Fix Quickly,\nImprove\nContinuously",
      Icon: Zap,
      color: "#0284C7", // sky-600
    },
    {
      id: "ai-better",
      x: centerX + (isMobile ? 140 : 180),
      y: centerY + (isMobile ? 50 : 70),
      title: "Let AI Keep\nThings Getting\nBetter\nOver Time",
      Icon: Bot,
      color: "#0369A1", // sky-700
    },
  ];

  // Simplified orbital connection points
  const orbitPoints = Array.from({ length: 8 }).map((_, i) => {
    const angle = (i * 45 * Math.PI) / 180;
    return {
      x: centerX + Math.cos(angle) * mainOrbitRadius,
      y: centerY + Math.sin(angle) * mainOrbitRadius * 0.6,
    };
  });

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

      {/* Central Earth-like Core */}
      <g>
        {/* Earth gradient definitions */}
        <defs>
          <radialGradient id="earthGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="earthHighlight" cx="20%" cy="20%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Central Earth core */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={earthRadius}
          fill="url(#earthGradient)"
          stroke="#0EA5E9"
          strokeWidth={2}
          className="opacity-80"
          animate={{
            opacity: hovered ? [0.8, 1, 0.8] : [0.7, 0.9, 0.7],
            strokeWidth: hovered ? [2, 3, 2] : [2, 2, 2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* Earth surface details */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={earthRadius * 0.7}
          fill="url(#earthHighlight)"
          className="opacity-40"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />

        {/* Earth core highlight */}
        <motion.circle
          cx={centerX - earthRadius/3}
          cy={centerY - earthRadius/3}
          r={earthRadius * 0.4}
          fill="url(#earthHighlight)"
          className="opacity-40"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />
      </g>

      {/* Single Main Orbital Ring */}
      <motion.ellipse
        cx={centerX}
        cy={centerY}
        rx={mainOrbitRadius}
        ry={mainOrbitRadius * 0.6}
        stroke="#0EA5E9"
        strokeWidth={2}
        fill="none"
        className="opacity-40"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 360],
        }}
        transition={{
          opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 25, ease: "linear" },
        }}
      />

      {/* Main orbit connection points */}
      {orbitPoints.map((point, i) => (
        <motion.circle
          key={`orbit-point-${i}`}
          cx={point.x}
          cy={point.y}
          r={3}
          fill="#0EA5E9"
          className="opacity-60"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            opacity: { repeat: Infinity, duration: 3, delay: i * 0.3, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 3, delay: i * 0.3, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 25, ease: "linear" },
          }}
        />
      ))}

      {/* Connection lines between orbital points */}
      {orbitPoints.map((point, i) => {
        const nextPoint = orbitPoints[(i + 1) % orbitPoints.length];
        return (
          <motion.line
            key={`orbit-line-${i}`}
            x1={point.x}
            y1={point.y}
            x2={nextPoint.x}
            y2={nextPoint.y}
            stroke="#0EA5E9"
            strokeWidth={1}
            className="opacity-30"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Connection lines from earth core to text bubbles */}
      {textBubbles.map((bubble, i) => (
        <motion.line
          key={`connection-${bubble.id}`}
          x1={centerX}
          y1={centerY}
          x2={bubble.x}
          y2={bubble.y}
          stroke={bubble.color}
          strokeWidth={1.5}
          className="opacity-40"
          animate={{
            opacity:
              hovered === bubble.id ? [0.4, 0.8, 0.4] : [0.3, 0.5, 0.3],
            strokeWidth:
              hovered === bubble.id ? [1.5, 2.5, 1.5] : [1.5, 2, 1.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Text bubbles */}
      {textBubbles.map((bubble) => {
        const Icon = bubble.Icon;
        const isHovered = hovered === bubble.id;
        const lines = bubble.title.split("\n");
        const bubbleRadius = isMobile ? 35 : 45;
        const iconSize = isMobile ? 18 : 22;

        return (
          <g key={bubble.id}>
            {/* Bubble glow effect */}
            <motion.circle
              cx={bubble.x}
              cy={bubble.y}
              r={bubbleRadius + 8}
              fill={`radial-gradient(circle at 50% 50%, ${bubble.color}40 0%, transparent 70%)`}
              className="opacity-25"
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.4 : 0.2,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Main bubble circle */}
            <motion.circle
              cx={bubble.x}
              cy={bubble.y}
              r={bubbleRadius}
              fill="rgba(15, 23, 42, 0.9)"
              stroke={bubble.color}
              strokeWidth={2}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(bubble.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleBubbleClick(bubble.id)}
              whileHover={{ scale: 1.05 }}
              animate={{
                strokeWidth: isHovered ? [2, 3, 2] : [1.5, 2, 1.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            />

            {/* Icon background circle */}
            <circle
              cx={bubble.x}
              cy={bubble.y}
              r={iconSize + 2}
              fill={bubble.color}
              opacity={0.15}
            />

            {/* Icon */}
            <g
              transform={`translate(${bubble.x - iconSize / 2}, ${
                bubble.y - iconSize / 2
              })`}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(bubble.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleBubbleClick(bubble.id)}
            >
              <Icon
                width={iconSize}
                height={iconSize}
                stroke={bubble.color}
                strokeWidth={2}
                fill="none"
              />
            </g>

            {/* Title text positioned outside bubble */}
            <text
              x={bubble.x + (bubble.id === "ai-better" ? -bubbleRadius - 10 : bubbleRadius + 10)}
              y={bubble.y - (lines.length - 1) * 6}
              textAnchor={bubble.id === "ai-better" ? "end" : "start"}
              className="fill-white font-semibold cursor-pointer"
              style={{ fontSize: isMobile ? 11 : 13 }}
              onMouseEnter={() => setHovered(bubble.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleBubbleClick(bubble.id)}
            >
              {lines.map((line, idx) => (
                <tspan
                  key={idx}
                  x={bubble.x + (bubble.id === "ai-better" ? -bubbleRadius - 10 : bubbleRadius + 10)}
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

      {/* Simplified revolving satellites */}
      {[0, 1].map((i) => (
        <motion.circle
          key={`satellite-${i}`}
          r={4}
          fill="#0EA5E9"
          className="opacity-60"
          animate={{
            cx: [
              centerX + mainOrbitRadius * 0.8,
              centerX,
              centerX - mainOrbitRadius * 0.8,
              centerX,
              centerX + mainOrbitRadius * 0.8,
            ],
            cy: [
              centerY,
              centerY - mainOrbitRadius * 0.48,
              centerY,
              centerY + mainOrbitRadius * 0.48,
              centerY,
            ],
            opacity: [0.4, 0.7, 0.4],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 20 + i * 8,
            delay: i * 10,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
};

// ---------------------------------------------
// Main slide
// ---------------------------------------------
const FeedbackLoopSlide: React.FC<FeedbackLoopSlideProps> = ({
  onNavigate,
}) => {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  const handleGetStartedClick = () => {
    navigate('/find-whats-broken-and-why');
  };
  const handleLearnMoreClick = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const handleBubbleClick = (bubbleId: string) => {
    switch (bubbleId) {
      case 'find-broken':
        navigate('/find-whats-broken-and-why');
        break;
      case 'fix-improve':
        navigate('/fix-quickly-improve-continuously');
        break;
      case 'ai-better':
        navigate('/let-ai-keep-things-getting-better-over-time');
        break;
      default:
        console.log(`Clicked: ${bubbleId}`);
    }
  };

  return (
    <>
    <section
      id="feedback-loop"
      className="relative isolate overflow-hidden h-screen text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1637164153353-ef260e2e7e7e?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
                  FEEDBACK
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-cyan-400 tracking-tight leading-none mb-6 lg:mb-8">
                    LOOP
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
              <TorusNetworkDiagram handleBubbleClick={handleBubbleClick} />
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

export default FeedbackLoopSlide;