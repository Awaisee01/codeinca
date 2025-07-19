import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Interactive Grid Background
export function InteractiveGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ opacity: 0.1 }}
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Interactive spotlight */}
        <motion.circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="200"
          fill="url(#gradient)"
          animate={{
            cx: mousePos.x,
            cy: mousePos.y,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        />
      </svg>
    </div>
  );
}

// Animated Wave Background
export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M0,200 C300,50 600,350 900,200 C1050,125 1150,225 1200,200 L1200,800 L0,800 Z"
          fill="url(#waveGradient1)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,400 C300,250 600,550 900,400 C1050,325 1150,425 1200,400 L1200,800 L0,800 Z"
          fill="url(#waveGradient2)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />
        
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

// Glowing Orbs
export function GlowingOrbs() {
  const orbs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: i * 2,
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.3, 0.8, 0.2, 0.3],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}

// Particle System
export function ParticleSystem() {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 20 + 10,
      direction: Math.random() * Math.PI * 2,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/30 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
          }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + Math.cos(particle.direction) * 20}%`,
              `${particle.x + Math.cos(particle.direction + Math.PI) * 20}%`,
              `${particle.x}%`,
            ],
            y: [
              `${particle.y}%`,
              `${particle.y + Math.sin(particle.direction) * 20}%`,
              `${particle.y + Math.sin(particle.direction + Math.PI) * 20}%`,
              `${particle.y}%`,
            ],
            opacity: [0, 1, 0.5, 0],
            scale: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.5,
          }}
        />
      ))}
    </div>
  );
}