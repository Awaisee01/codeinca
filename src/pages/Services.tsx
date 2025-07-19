import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Palette, Settings, Zap, Shield } from "lucide-react";
import { AnimatedCodeIcon, AnimatedMobileIcon, AnimatedDesignIcon, FloatingShapes } from "@/components/AnimatedIllustrations";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js for optimal performance.",
    href: "/contact"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter for maximum reach.",
    href: "/contact"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create engaging and intuitive digital experiences.",
    href: "/contact"
  },
  {
    icon: Settings,
    title: "Digital Consulting",
    description: "Strategic guidance to help you navigate digital transformation and make informed technology decisions.",
    href: "/contact"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications with our proven optimization techniques and best practices.",
    href: "/contact"
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments to protect your digital assets and ensure compliance with industry standards.",
    href: "/contact"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your goals, challenges, and requirements through detailed consultations."
  },
  {
    step: "02", 
    title: "Strategy",
    description: "We develop a comprehensive strategy and roadmap tailored to your specific needs and objectives."
  },
  {
    step: "03",
    title: "Design", 
    description: "Our design team creates beautiful, user-centered interfaces that align with your brand and vision."
  },
  {
    step: "04",
    title: "Development",
    description: "We bring designs to life using cutting-edge technologies and industry best practices."
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing ensures your solution works flawlessly across all devices and platforms."
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your solution and provide ongoing support to ensure continued success."
  }
];

export default function Services() {
  return (
    <div className="py-20 relative overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Animated Icons */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-accent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Comprehensive digital solutions designed to transform your business and accelerate growth through innovative technology.
          </p>
          
          {/* Service Icons Preview */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <AnimatedCodeIcon />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hidden md:block"
            >
              <AnimatedMobileIcon />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <AnimatedDesignIcon />
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-gradient-accent mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-muted/50 rounded-2xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              We stay at the forefront of technology to deliver cutting-edge solutions
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'TypeScript', 'PostgreSQL', 'MongoDB', 'GraphQL', 'React Native', 'Flutter'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-background rounded-lg p-4 shadow-sm border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sm font-medium">{tech}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
