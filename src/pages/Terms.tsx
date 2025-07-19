import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using the CodeInca website and services, you accept and agree to be bound by the terms and provision of this agreement.",
      "If you do not agree to abide by the above, please do not use this service.",
      "These terms may be updated from time to time without notice. Your continued use of the service constitutes acceptance of any changes.",
    ],
  },
  {
    title: "Description of Service",
    content: [
      "CodeInca provides digital agency services including web development, mobile app development, UI/UX design, and digital consulting.",
      "All services are subject to the terms and conditions outlined in individual service agreements.",
      "We reserve the right to modify or discontinue any service at any time without notice.",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "You are responsible for maintaining the confidentiality of any account credentials provided to you.",
      "You agree to use our services only for lawful purposes and in accordance with these Terms of Service.",
      "You are responsible for all content and data you provide to us and warrant that you have the right to provide such content.",
      "You agree not to use our services to transmit harmful, offensive, or illegal content.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    content: [
      "All content, designs, code, and materials created by CodeInca remain our intellectual property unless otherwise agreed in writing.",
      "Upon full payment, clients receive the agreed-upon usage rights as specified in individual project agreements.",
      "You may not reproduce, distribute, or create derivative works from our proprietary materials without explicit permission.",
      "Any pre-existing intellectual property you provide remains your property, subject to our usage rights for project completion.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Payment terms are specified in individual project agreements and invoices.",
      "All fees are due according to the payment schedule outlined in your service agreement.",
      "Late payments may incur additional fees as specified in your agreement.",
      "All prices are subject to applicable taxes and fees.",
    ],
  },
  {
    title: "Project Delivery and Revisions",
    content: [
      "Project timelines and deliverables are outlined in individual project agreements.",
      "The number of revisions included is specified in each project agreement.",
      "Additional revisions beyond the agreed scope may incur additional charges.",
      "Client feedback and approvals are required within specified timeframes to maintain project schedules.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "CodeInca's liability for any claim related to our services shall not exceed the total amount paid for the specific service giving rise to the claim.",
      "We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
      "We do not warrant that our services will be uninterrupted or error-free.",
      "Any claims must be brought within one year of the date the cause of action arose.",
    ],
  },
  {
    title: "Termination",
    content: [
      "Either party may terminate a service agreement with written notice as specified in the individual agreement.",
      "Upon termination, all outstanding invoices become immediately due and payable.",
      "We reserve the right to terminate services immediately for breach of these terms or non-payment.",
      "Termination does not affect any rights or obligations that have accrued prior to termination.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms shall be governed by and construed in accordance with the laws of the jurisdiction where CodeInca is incorporated.",
      "Any disputes arising from these terms or our services shall be resolved through binding arbitration.",
      "If any provision of these terms is deemed invalid, the remaining provisions shall remain in full force and effect.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            asChild
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms & <span className="text-gradient-accent">Conditions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These terms and conditions govern your use of our website and
            services. Please read them carefully.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            Last updated: January 1, 2024
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                Welcome to CodeInca. These Terms and Conditions ("Terms") govern
                your use of our website located at codeinca.com and our
                services. By accessing or using our service, you agree to be
                bound by these Terms. If you disagree with any part of these
                terms, then you may not access the service.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-primary">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-muted/50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms and Conditions,
                please contact us.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>Email: codeincdeveloper@gmail.com</p>
                <p>Phone: +923000199139</p>
                <p>Phone: +923356797707</p>
                <p>Address: Bahawalpur, Pakistan</p>
              </div>
              <Button
                asChild
                className="bg-gradient-accent hover:opacity-90 text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
