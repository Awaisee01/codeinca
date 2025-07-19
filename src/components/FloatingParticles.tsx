import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
    
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 2 + 1,
      direction: Math.random() * Math.PI * 2
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + Math.cos(particle.direction) * 200,
              particle.x + Math.cos(particle.direction + Math.PI) * 200,
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + Math.sin(particle.direction) * 200,
              particle.y + Math.sin(particle.direction + Math.PI) * 200,
              particle.y,
            ],
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.1, 0.3, 0.1, 0.2],
          }}
          transition={{
            duration: 20 + particle.speed * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.5,
          }}
        />
      ))}
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Animated Contact Form Icons
export function AnimatedContactIcon() {
  return (
    <motion.svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      className="text-primary"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Envelope */}
      <motion.rect
        x="25"
        y="45"
        width="100"
        height="70"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      {/* Envelope flap */}
      <motion.path
        d="M25 45 L75 80 L125 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      
      {/* Flying message */}
      <motion.circle
        cx="75"
        cy="75"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1, 0],
          x: [0, 30, 60],
          y: [0, -20, -40]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          delay: 3,
          repeatDelay: 2
        }}
      />
    </motion.svg>
  );
}

// Animated Success Icon
export function AnimatedSuccessIcon() {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="text-green-500"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.path
        d="M30 50 L45 65 L70 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
    </motion.svg>
  );
}