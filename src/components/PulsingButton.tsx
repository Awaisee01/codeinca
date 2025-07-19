import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

interface PulsingButtonProps extends ButtonProps {
  pulseColor?: string;
  intensity?: "low" | "medium" | "high";
}

const PulsingButton = forwardRef<HTMLButtonElement, PulsingButtonProps>(
  ({ className, children, pulseColor = "rgb(59, 130, 246)", intensity = "medium", ...props }, ref) => {
    const pulseIntensity = {
      low: { scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] },
      medium: { scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] },
      high: { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }
    }[intensity];

    return (
      <motion.div className="relative inline-block">
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-md opacity-30"
          style={{
            background: `linear-gradient(45deg, ${pulseColor}, transparent)`,
          }}
          animate={pulseIntensity}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Button */}
        <Button 
          ref={ref}
          className={`relative z-10 ${className}`}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

PulsingButton.displayName = "PulsingButton";

export default PulsingButton;