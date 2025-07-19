import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Smartphone, Palette } from "lucide-react";
import { AnimatedCodeIcon, AnimatedMobileIcon, AnimatedDesignIcon, FloatingShapes, AnimatedChart, AnimatedNetwork } from "@/components/AnimatedIllustrations";
import { InteractiveGrid, GlowingOrbs } from "@/components/InteractiveBackground";
import PulsingButton from "@/components/PulsingButton";
import { blogPosts, reviews } from "@/data/mockData";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    href: "/services"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    href: "/services"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that engage users and drive conversions.",
    href: "/services"
  }
];

export default function Home() {
  const blogLoading = false;
  const reviewsLoading = false;

  return (
    <div className="relative">
      <InteractiveGrid />
      <GlowingOrbs />
      <Hero />
      
      {/* Services Preview */}
      <section className="py-20 bg-muted/50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Animated Illustrations */}
      <section className="py-20 relative overflow-hidden z-10">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future,{" "}
                <span className="text-gradient-accent">One Line at a Time</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                CodeInca is a forward-thinking digital agency specializing in creating innovative solutions that push the boundaries of what's possible. Our team of experts combines creativity with technical excellence to deliver results that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <motion.div 
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <motion.div 
                    className="text-3xl font-bold text-purple-600 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    99%
                  </motion.div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
              <Button asChild className="bg-gradient-accent hover:opacity-90 text-white">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </motion.div>
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <AnimatedNetwork />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-xl opacity-80"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-primary rounded-full opacity-60"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the clients who've experienced our exceptional service
            </p>
          </motion.div>

          {reviewsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-64 skeleton" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews?.slice(0, 3).map((review, index) => (
                <TestimonialCard
                  key={review.id}
                  review={review}
                  delay={index * 0.2}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20  z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 z-50">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our experts
            </p>
          </motion.div>

          {blogLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 skeleton" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts?.slice(0, 3).map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  delay={index * 0.2}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12 ">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
