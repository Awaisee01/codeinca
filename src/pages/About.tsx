import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FloatingShapes, AnimatedChart } from "@/components/AnimatedIllustrations";

const teamMembers = [
  {
    name: "Zaid Ayan",
    position: "CTO & Founder",
    bio: "WordPress Developer | Custom Tool Builder | Scalable Web Application  | SEO Expert ",
    image: "/assets/zaid.jpg"
  },
  {
    name: "Awais Asif",
    position: "CEO & Co-Founder",
    bio: "Expert in MERN Stack • End-to-End Website & App Solutions • Scalable & Fast",
    image: "/assets/awaisp.png"
  },
  
  {
    name: "Saad Ahmed ",
    position: "Lead Designer",
    bio: "UI/UX • Figma • Lead Gen Specialist , Turning ideas into intuitive designs",
    image: "/assets/saad.jpg"
  },
  {
    name: "Umar ",
    position: "Project Manager",
    bio: "Digital Advertising Strategist | Specialized in Meta & Google Ads  ",
    image: "/assets/umar.png"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that set you apart."
  },
  {
    title: "Excellence",
    description: "Quality is never an accident. It's the result of high intention, sincere effort, and skilled execution."
  },
  {
    title: "Collaboration",
    description: "We believe the best results come from working closely with our clients as true partners."
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, honesty, and delivering on our promises."
  }
];

export default function About() {
  return (
    <div className="py-20 relative overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-accent">CodeInca</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're a team of passionate developers, designers, and strategists who believe in the power of technology to transform businesses and create meaningful connections.
          </p>
          
          {/* Animated Chart */}
          <div className="flex justify-center">
            <AnimatedChart />
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We're committed to turning complex challenges into simple, elegant solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Every project we undertake is an opportunity to push creative boundaries and deliver results that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To be the leading digital agency that sets the standard for innovation, quality, and client satisfaction in the technology industry.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a world where technology seamlessly integrates with human needs, creating experiences that are not just functional, but truly transformative.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The talented individuals behind CodeInca's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 text-center">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
