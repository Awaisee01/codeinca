import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MorphingShapes, FloatingCodeSnippets, TypingAnimation } from "./AnimatedHero";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Morphing Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10"></div>
      <MorphingShapes />
      <FloatingCodeSnippets />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <TypingAnimation 
              texts={["Digital Innovation", "Creative Solutions", "Future Tech", "Amazing Apps"]}
              className="text-gradient-accent"
            />
            <br />
            Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We craft exceptional digital experiences that drive growth and transform businesses through cutting-edge technology and creative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-8 py-4"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="font-semibold px-8 py-4"
            >
              <Link href="/services">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
