import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Animation */}
          <motion.div
            className="text-8xl md:text-9xl font-bold text-gradient-accent mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            404
          </motion.div>

          <Card className="bg-card border-border mb-8">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex justify-center mb-6">
                  <Search className="w-16 h-16 text-muted-foreground" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Page Not Found
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Oops! The page you're looking for seems to have wandered off into the digital void. 
                  Don't worry, even the best developers get lost sometimes.
                </p>
                
                {/* Floating Elements */}
                <div className="relative py-8">
                  <motion.div 
                    className="absolute left-1/4 top-0 w-4 h-4 bg-primary/30 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute right-1/4 top-4 w-3 h-3 bg-purple-600/30 rounded-full"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.div 
                    className="absolute left-1/3 bottom-0 w-2 h-2 bg-primary/20 rounded-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Here are some helpful links to get you back on track:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-accent hover:opacity-90 text-white">
                      <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Go Home
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">
                        Contact Support
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/services" 
              className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 text-sm"
            >
              <div className="font-medium">Services</div>
              <div className="text-muted-foreground text-xs mt-1">Our Solutions</div>
            </Link>
            <Link 
              href="/about" 
              className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 text-sm"
            >
              <div className="font-medium">About</div>
              <div className="text-muted-foreground text-xs mt-1">Our Story</div>
            </Link>
            <Link 
              href="/blog" 
              className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 text-sm"
            >
              <div className="font-medium">Blog</div>
              <div className="text-muted-foreground text-xs mt-1">Latest Posts</div>
            </Link>
            <Link 
              href="/faq" 
              className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 text-sm"
            >
              <div className="font-medium">FAQ</div>
              <div className="text-muted-foreground text-xs mt-1">Get Answers</div>
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p>
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact our support team
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
