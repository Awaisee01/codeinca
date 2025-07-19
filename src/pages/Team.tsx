import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Zaid Ayan",
    position: "CTO & Founder",
    bio: "WordPress Developer | Custom Tool Builder | Scalable Web Application | SEO Expert",
    image: "/assets/zaid.jpg"
  },
  {
    name: "Awais Asif",
    position: "CEO & Co-Founder",
    bio: "Expert in MERN Stack • End-to-End Website & App Solutions • Scalable & Fast",
    image: "/assets/awaisp.png"
  },
  {
    name: "Saad Ahmed",
    position: "Lead Designer",
    bio: "UI/UX • Figma • Lead Gen Specialist, Turning ideas into intuitive designs",
    image: "/assets/saad.jpg"
  },
  {
    name: "Umar",
    position: "Project Manager",
    bio: "Digital Advertising Strategist | Specialized in Meta & Google Ads",
    image: "/assets/umar.png"
  }
];

export default function Team() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="text-gradient-accent">CodeInca Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creative minds. Strategic thinkers. Passionate builders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full border border-border bg-card hover:shadow-xl hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
