import { motion } from "framer-motion";

// Animated Code Icon
export function AnimatedCodeIcon() {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="text-primary"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.path
        d="M70 80 L50 100 L70 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      
      <motion.path
        d="M130 80 L150 100 L130 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      
      <motion.path
        d="M90 70 L110 130"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      />
    </motion.svg>
  );
}

// Animated Mobile Icon
export function AnimatedMobileIcon() {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="text-purple-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <motion.rect
        x="70"
        y="40"
        width="60"
        height="120"
        rx="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.circle
        cx="100"
        cy="150"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      
      <motion.rect
        x="80"
        y="55"
        width="40"
        height="30"
        rx="3"
        fill="currentColor"
        opacity="0.3"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.8, delay: 2 }}
      />
      
      <motion.rect
        x="80"
        y="95"
        width="40"
        height="8"
        rx="2"
        fill="currentColor"
        opacity="0.2"
        initial={{ width: 0 }}
        animate={{ width: 40 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      />
      
      <motion.rect
        x="80"
        y="110"
        width="25"
        height="8"
        rx="2"
        fill="currentColor"
        opacity="0.2"
        initial={{ width: 0 }}
        animate={{ width: 25 }}
        transition={{ duration: 0.5, delay: 2.7 }}
      />
    </motion.svg>
  );
}

// Animated Design Icon
export function AnimatedDesignIcon() {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="text-pink-500"
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      <motion.path
        d="M60 60 Q100 30 140 60 Q170 100 140 140 Q100 170 60 140 Q30 100 60 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      <motion.circle
        cx="80"
        cy="80"
        r="15"
        fill="currentColor"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.3, 1] }}
        transition={{ duration: 0.8, delay: 2.5 }}
      />
      
      <motion.circle
        cx="120"
        cy="120"
        r="10"
        fill="currentColor"
        opacity="0.4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 2.8 }}
      />
      
      <motion.circle
        cx="100"
        cy="100"
        r="5"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5, delay: 3 }}
      />
    </motion.svg>
  );
}

// Floating Geometric Shapes
export function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 border-2 border-primary/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-600/30 transform rotate-45"
        animate={{
          y: [0, -15, 0],
          rotate: [45, 225, 405]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/20 rounded-full"
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-3/4 w-12 h-12 border border-purple-600/20 rounded-lg"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-3 h-3 bg-pink-500/30 rounded-full"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  );
}

// Animated Data Visualization
export function AnimatedChart() {
  return (
    <motion.svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      className="text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Bars */}
      <motion.rect
        x="40"
        y="140"
        width="30"
        height="40"
        fill="currentColor"
        opacity="0.6"
        initial={{ height: 0 }}
        animate={{ height: 40 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <motion.rect
        x="90"
        y="120"
        width="30"
        height="60"
        fill="currentColor"
        opacity="0.7"
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      
      <motion.rect
        x="140"
        y="100"
        width="30"
        height="80"
        fill="currentColor"
        opacity="0.8"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 1, delay: 1.1 }}
      />
      
      <motion.rect
        x="190"
        y="80"
        width="30"
        height="100"
        fill="currentColor"
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ duration: 1, delay: 1.4 }}
      />
      
      {/* Trend Line */}
      <motion.path
        d="M55 160 L105 140 L155 120 L205 100"
        fill="none"
        stroke="rgb(168, 85, 247)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
      
      {/* Data Points */}
      <motion.circle
        cx="55"
        cy="160"
        r="4"
        fill="rgb(168, 85, 247)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      />
      
      <motion.circle
        cx="105"
        cy="140"
        r="4"
        fill="rgb(168, 85, 247)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.4 }}
      />
      
      <motion.circle
        cx="155"
        cy="120"
        r="4"
        fill="rgb(168, 85, 247)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
      />
      
      <motion.circle
        cx="205"
        cy="100"
        r="4"
        fill="rgb(168, 85, 247)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.8 }}
      />
    </motion.svg>
  );
}

// Animated Network Connections
export function AnimatedNetwork() {
  return (
    <motion.svg
      width="250"
      height="250"
      viewBox="0 0 250 250"
      className="text-primary"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Connection Lines */}
      <motion.line
        x1="125"
        y1="125"
        x2="60"
        y2="60"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      
      <motion.line
        x1="125"
        y1="125"
        x2="190"
        y2="60"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />
      
      <motion.line
        x1="125"
        y1="125"
        x2="60"
        y2="190"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      />
      
      <motion.line
        x1="125"
        y1="125"
        x2="190"
        y2="190"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.6 }}
      />
      
      {/* Nodes */}
      <motion.circle
        cx="125"
        cy="125"
        r="12"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.3, 1] }}
        transition={{ duration: 0.8, delay: 2 }}
      />
      
      <motion.circle
        cx="60"
        cy="60"
        r="8"
        fill="rgb(168, 85, 247)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 2.2 }}
      />
      
      <motion.circle
        cx="190"
        cy="60"
        r="8"
        fill="rgb(236, 72, 153)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 2.4 }}
      />
      
      <motion.circle
        cx="60"
        cy="190"
        r="8"
        fill="rgb(59, 130, 246)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 2.6 }}
      />
      
      <motion.circle
        cx="190"
        cy="190"
        r="8"
        fill="rgb(34, 197, 94)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 2.8 }}
      />
      
      {/* Pulse Animation */}
      <motion.circle
        cx="125"
        cy="125"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 3 }}
      />
    </motion.svg>
  );
}