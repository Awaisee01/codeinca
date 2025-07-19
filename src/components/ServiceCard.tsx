import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card3D } from "./AnimatedHero";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  href, 
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <Card3D className="h-full" intensity={5}>
        <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
          <CardContent className="p-8 relative">
            {/* Floating background elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-accent/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 relative z-10"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="text-2xl text-white" size={32} />
            </motion.div>
            
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
              {title}
            </h3>
            <p className="text-muted-foreground mb-6 relative z-10">
              {description}
            </p>
            <motion.a 
              href={href} 
              className="text-primary hover:text-purple-600 transition-colors duration-200 font-medium inline-flex items-center gap-2 relative z-10"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </CardContent>
        </Card>
      </Card3D>
    </motion.div>
  );
}
