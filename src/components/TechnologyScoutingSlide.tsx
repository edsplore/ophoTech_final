import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import DemoModal from "./DemoModal";
import {
  Lightbulb,
  TrendingUp,
  Radar,
  Play,
} from "lucide-react";

interface TechnologyScoutingSlideProps {
  onNavigate: (slide: number) => void;
}

/* ------------------------------------------------------------------ */
/*                       Beautiful Symmetric Radar                    */
/* ------------------------------------------------------------------ */
interface BeautifulRadarDiagramProps {
  handleServiceClick: (serviceId: string) => void;
}

const BeautifulRadarDiagram: React.FC<BeautifulRadarDiagramProps> = ({ handleServiceClick }) => {
  const [hoveredService, setHoveredService] = React.useState<string | null>(
    null
  );

  /* ------------------------------------------------------------- */
  /*  Perfect 120°-apart positioning of the three service bubbles  */
  /* ------------------------------------------------------------- */
  const getServicePositions = () => {
    const isMobile = window.innerWidth < 1024;
    const radarCenterX = isMobile ? 300 : 400;
    const radarCenterY = isMobile ? 180 : 200;
    const textRadius = isMobile ? 140 : 180; // distance from centre → text

    return [
      {
        id: "cross-industry",
        angle: -90, // 12 o'clock
        x: radarCenterX + textRadius * Math.cos((-90 * Math.PI) / 180),
        y: radarCenterY + textRadius * Math.sin((-90 * Math.PI) / 180),
        title: "Cross-Industry Solution\nMatching",
        icon: Lightbulb,
        color: "#00D4FF",
      },
      {
        id: "collaborative",
        angle: 30, // ~2 o'clock
        x: radarCenterX + textRadius * Math.cos((30 * Math.PI) / 180),
        y: radarCenterY + textRadius * Math.sin((30 * Math.PI) / 180),
        title: "Collaborative Innovation\nwith Experts",
        icon: TrendingUp,
        color: "#00B5FF",
      },
      {
        id: "emerging",
        angle: 150, // ~10 o'clock
        x: radarCenterX + textRadius * Math.cos((150 * Math.PI) / 180),
        y: radarCenterY + textRadius * Math.sin((150 * Math.PI) / 180),
        title: "Emerging Tech\nRadar",
        icon: Radar,
        color: "#0099FF",
      },
    ];
  };

  const [serviceItems, setServiceItems] = React.useState(getServicePositions);

  React.useEffect(() => {
    const handleResize = () => setServiceItems(getServicePositions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = window.innerWidth < 1024;
  const viewBoxDimensions = isMobile ? "0 0 600 360" : "0 0 800 400";
  const radarCenterX = isMobile ? 300 : 400;
  const radarCenterY = isMobile ? 180 : 200;
  const radarRadius = isMobile ? 100 : 130;

  /* outer radius used by the ripple animation */
  const outerRadius = radarRadius * 1.2;

  return (
    <svg className="w-full h-full" viewBox={viewBoxDimensions} aria-hidden>
      {/* ----------------------------------------------------------- */}
      {/*  Ambient particles                                         */}
      {/* ----------------------------------------------------------- */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={100 + Math.random() * (isMobile ? 400 : 600)}
          cy={50 + Math.random() * (isMobile ? 260 : 300)}
          r={Math.random() * 2 + 0.5}
          fill="#00D4FF"
          className="opacity-20"
          animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.5, 1.5, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ----------------------------------------------------------- */}
      {/*  Concentric radar rings                                    */}
      {/* ----------------------------------------------------------- */}
      {[40, 65, 90, 115, 130].map((radius, i) => (
        <motion.circle
          key={`radar-circle-${i}`}
          cx={radarCenterX}
          cy={radarCenterY}
          r={radius * (isMobile ? 0.77 : 1)}
          stroke="#00D4FF"
          strokeWidth={i === 4 ? 2 : 1}
          fill="none"
          className={i === 4 ? "opacity-60" : "opacity-30"}
          animate={{
            opacity: i === 4 ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
            strokeWidth: i === 4 ? [2, 3, 2] : [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.5,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ----------------------------------------------------------- */}
      {/*  Radial grid lines                                         */}
      {/* ----------------------------------------------------------- */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const x2 =
          radarCenterX + radarRadius * Math.cos((angle * Math.PI) / 180);
        const y2 =
          radarCenterY + radarRadius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.line
            key={`grid-line-${i}`}
            x1={radarCenterX}
            y1={radarCenterY}
            x2={x2}
            y2={y2}
            stroke="#00D4FF"
            strokeWidth={0.8}
            className="opacity-25"
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* ----------------------------------------------------------- */}
      {/*  *** NEW RADAR-PING RIPPLE ANIMATION ***                   */}
      {/* ----------------------------------------------------------- */}
      {[0, 1].map((i) => (
        <motion.circle
          key={`ripple-${i}`}
          cx={radarCenterX}
          cy={radarCenterY}
          r={0}
          stroke="#00D4FF"
          strokeWidth={1}
          fill="none"
          animate={{ r: [0, outerRadius], opacity: [0.3, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            delay: i * 2.5, // staggering → continuous ripple train
            ease: "easeOut",
          }}
        />
      ))}

      {/* ----------------------------------------------------------- */}
      {/*  Connection lines to service bubbles                        */}
      {/* ----------------------------------------------------------- */}
      {serviceItems.map((service, i) => (
        <motion.line
          key={`connection-${service.id}`}
          x1={radarCenterX}
          y1={radarCenterY}
          x2={service.x}
          y2={service.y - (isMobile ? 25 : 30)}
          stroke={service.color}
          strokeWidth={1.5}
          className="opacity-40"
          animate={{
            opacity:
              hoveredService === service.id ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
            strokeWidth:
              hoveredService === service.id
                ? [1.5, 2.5, 1.5]
                : [1.5, 2, 1.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ----------------------------------------------------------- */}
      {/*  Service bubbles (icon + text)                              */}
      {/* ----------------------------------------------------------- */}
      {serviceItems.map((service) => {
        const Icon = service.icon;
        const isHovered = hoveredService === service.id;
        const iconSize = isMobile ? 18 : 24;
        const lines = service.title.split("\n");

        return (
          <g key={service.id}>
            {/* glow behind icon */}
            <motion.circle
              cx={service.x}
              cy={service.y - (isMobile ? 25 : 30)}
              r={iconSize + 4}
              fill={service.color}
              className="opacity-15 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                opacity: isHovered ? [0.15, 0.3, 0.15] : [0.1, 0.15, 0.1],
                r: isHovered
                  ? [iconSize + 4, iconSize + 6, iconSize + 4]
                  : [iconSize + 3, iconSize + 4, iconSize + 3],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.id)}
            />

            {/* circular icon background */}
            <motion.circle
              cx={service.x}
              cy={service.y - (isMobile ? 25 : 30)}
              r={iconSize}
              fill="rgba(15, 23, 42, 0.8)"
              stroke={service.color}
              strokeWidth={2}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                strokeWidth: isHovered ? [2, 3, 2] : [1.5, 2, 1.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.id)}
            />

            {/* Lucide icon */}
            <motion.g
              className="cursor-pointer"
              animate={{
                scale: isHovered ? [1, 1.15, 1] : [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.id)}
            >
              <Icon
                x={service.x - iconSize / 2}
                y={service.y - (isMobile ? 25 : 30) - iconSize / 2}
                width={iconSize}
                height={iconSize}
                stroke={service.color}
                strokeWidth={1.5}
                fill="none"
              />
            </motion.g>

            {/* multi-line title text */}
            <motion.text
              x={service.x}
              y={service.y + (isMobile ? 5 : 10)}
              textAnchor="middle"
              className="fill-white font-medium cursor-pointer"
              style={{ fontSize: isMobile ? "11px" : "13px" }}
              animate={{
                opacity: isHovered ? 1 : 0.9,
                scale: isHovered ? 1.05 : 1,
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.id)}
            >
              {lines.map((line, idx) => (
                <tspan
                  key={idx}
                  x={service.x}
                  dy={idx === 0 ? "0" : isMobile ? "12" : "14"}
                >
                  {line}
                </tspan>
              ))}
            </motion.text>
          </g>
        );
      })}

      {/* ----------------------------------------------------------- */}
      {/*  Central pulsing dot                                        */}
      {/* ----------------------------------------------------------- */}
      <motion.circle
        cx={radarCenterX}
        cy={radarCenterY}
        r={6}
        fill="#00D4FF"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* ----------------------------------------------------------- */}
      {/*  Gradients + filters (unchanged)                            */}
      {/* ----------------------------------------------------------- */}
      <defs>
        <linearGradient id="spotlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.1" />
        </linearGradient>

        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/*                       Main Slide Component                         */
/* ------------------------------------------------------------------ */
interface TechnologyScoutingSlideProps {
  onNavigate: (slide: number) => void;
  handleServiceClick?: (serviceId: string) => void;
}

const TechnologyScoutingSlide: React.FC<TechnologyScoutingSlideProps> = ({
  onNavigate,
  handleServiceClick: propHandleServiceClick,
}) => {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  const handleGetStartedClick = () => {
    navigate('/cross-industry-solution-matching');
  };
  const handleLearnMoreClick = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const handleServiceClick = (serviceId: string) => {
    switch (serviceId) {
      case "cross-industry":
        navigate("/cross-industry-solution-matching");
        break;
      case "collaborative":
        navigate("/collaborative-innovation");
        break;
      case "emerging":
        navigate("/emerging-tech-radar");
        break;
      default:
        console.log(`Unknown service: ${serviceId}`);
    }
  };

  return (
    <>
    <section
      id="technology-scouting"
      className="relative isolate overflow-hidden h-screen text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlays */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/70" />
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
              linear-gradient(rgba(14, 165, 233, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "400px 400px, 400px 400px, 50px 50px, 50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 h-full">
        {/* --------------------------------------------------------- */}
        {/*  Layout — left: title; right: radar                      */}
        {/* --------------------------------------------------------- */}
        <div className="h-full flex flex-col lg:flex-row">
          {/* ---------- Left column ---------- */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start px-6 lg:px-16 pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left max-w-md"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-none mb-2">
                  TECHNOLOGY
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-cyan-400 tracking-tight leading-none mb-6 lg:mb-8">
                    SCOUTING
                  </h2>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* buttons */}
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

          {/* ---------- Right column (radar) ---------- */}
          <div className="w-full lg:w-3/5 flex items-center justify-center relative flex-1 lg:flex-none px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full h-full max-w-4xl"
            >
              <BeautifulRadarDiagram handleServiceClick={handleServiceClick} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* floating blur blobs for ambience */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 bg-cyan-400/3 rounded-full blur-lg"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-20 h-20 bg-blue-500/3 rounded-full blur-lg"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          delay: 2,
          ease: "easeInOut",
        }}
      />
    </section>

    {/* Demo Modal */}
    <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
};

export default TechnologyScoutingSlide;