import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Morphing Background Shapes
export function MorphingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* Large morphing blob */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 0.8, 1],
          x: [0, 50, -30, 0],
          y: [0, -20, 40, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Medium morphing blob */}
      <motion.div
        className="absolute top-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full filter blur-2xl"
        animate={{
          scale: [0.8, 1.3, 1, 0.8],
          x: [0, -40, 60, 0],
          y: [0, 30, -25, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Small morphing blob */}
      <motion.div
        className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/25 to-purple-600/25 rounded-full filter blur-xl"
        animate={{
          scale: [1, 0.7, 1.4, 1],
          x: [0, 30, -50, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}

// Animated Code Snippets
export function FloatingCodeSnippets() {
  const codeSnippets = [
    "const magic = () => { return 'amazing' }",
    "function buildDreams() { code(); }",
    "app.use(innovation)",
    "render(<Future />)",
    "async function createAwesome()",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-primary/40"
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${10 + (index * 20)}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [20, -50, -100],
            x: [0, 20, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2,
            ease: "easeInOut",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
}

// Interactive Cursor Particles
export function CursorParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    let particleId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create particle trail
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      };
      
      setParticles(prev => [...prev, newParticle].slice(-20));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({ ...p, opacity: p.opacity * 0.95 }))
           .filter(p => p.opacity > 0.1)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            opacity: particle.opacity,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
}

// Typing Animation
export function TypingAnimation({ 
  texts, 
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000 
}: {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-8 bg-current ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}

// 3D Card Hover Effect
export function Card3D({ 
  children, 
  className = "",
  intensity = 10 
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * intensity;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
    
    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={className}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}