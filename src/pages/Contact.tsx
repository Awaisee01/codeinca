import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedContactIcon } from "@/components/FloatingParticles";
import { FloatingShapes } from "@/components/AnimatedIllustrations";

export default function Contact() {
  return (
    <div className="py-20 relative overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-gradient-accent">Amazing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to transform your ideas into reality? Get in touch and let's
            discuss your next project.
          </p>

          {/* Animated Contact Icon */}
          <div className="flex justify-center">
            <AnimatedContactIcon />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">
                          codeincdeveloper@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-primary rounded-lg flex items-center justify-center mr-4">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-muted-foreground">
                          +923000199138
                        </div>
                        <div className="text-muted-foreground">
                          +923356797707
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-muted-foreground">
                          Bahawalpur, Pakistan{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.587-2.226 4.987C13.342 15.477 11.036 16 8.596 16c-1.747 0-3.368-.374-4.8-1.028.24.028.487.042.738.042 1.448 0 2.777-.494 3.832-1.324-.1.355-.354.67-.699.9-.345.23-.746.364-1.172.364-.678 0-1.289-.301-1.699-.779.265.208.595.332.954.332.196 0 .388-.025.571-.072-.707-.142-1.241-.762-1.241-1.506v-.019c.207.115.444.184.696.192-.414-.277-.686-.748-.686-1.283 0-.282.076-.547.209-.775.76.934 1.898 1.548 3.181 1.612-.264-.113-.45-.329-.516-.588-.066-.259-.002-.527.177-.727.358-.399.862-.625 1.39-.625 1.208 0 2.188.98 2.188 2.188-.001.045-.009.09-.013.134z" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.75802333382!2d71.60761057736995!3d29.376914970473106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1752949413273!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
