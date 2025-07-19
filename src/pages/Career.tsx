import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    description:
      "We’re looking for a React/Next.js developer passionate about creating modern, responsive UI experiences."
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-Time",
    description:
      "Help shape user experiences with intuitive, clean, and beautiful design. Must be Figma-proficient."
  },
  {
    title: "Marketing Specialist",
    location: "Remote",
    type: "Contract",
    description:
      "Drive digital campaigns and manage paid ads. SEO and social marketing skills are a plus."
  }
];

export default function Career() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Careers at <span className="text-gradient-accent">CodeInca</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our team of creative thinkers and tech wizards. We're always looking for passionate, driven individuals who want to build amazing things.
        </p>
      </motion.div>

      {/* Why Work With Us */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {["Flexible Work Culture", "Creative Freedom", "Skill Growth & Learning"].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card border-border">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">{point}</h3>
                  <p className="text-muted-foreground">
                    {point === "Flexible Work Culture"
                      ? "Work from anywhere and enjoy a balance that suits your life."
                      : point === "Creative Freedom"
                      ? "We value your ideas and give you space to experiment and innovate."
                      : "Access mentorship, tools, and time to continuously improve your craft."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="mb-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We’re hiring across departments. Explore our openings and find where you fit in best.
          </p>
        </motion.div>

        <div className="space-y-8">
          {jobOpenings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="bg-muted/50 border-border hover:border-primary/60 transition">
                <CardContent className="p-6">
                  <div className="flex justify-between flex-wrap items-center mb-2">
                    <h3 className="text-2xl font-semibold text-primary">{job.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {job.location} • {job.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
                  >
                    Apply Now
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center">
        <p className="text-lg text-muted-foreground mb-4">
          Don’t see a role that fits? We’d still love to hear from you.
        </p>
       <Link href="/contact"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
        >
          Send Us Your Resume
        </Link>
      </div>
    </div>
  );
}
