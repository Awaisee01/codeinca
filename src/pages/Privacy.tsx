import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you contact us through our website, we collect information such as your name, email address, phone number, and any messages you send to us.",
      "We may also collect technical information about your visit, including your IP address, browser type, and pages visited.",
      "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use your personal information to respond to your inquiries and provide the services you request.",
      "We may use your contact information to send you updates about our services, with your consent.",
      "Technical information helps us improve our website and ensure it functions properly.",
      "We may use aggregated, non-personal information for analytics and business insights.",
    ],
  },
  {
    title: "Information Sharing and Disclosure",
    content: [
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.",
      "We may share information with trusted service providers who assist us in operating our website and conducting business.",
      "We may disclose information when required by law or to protect our rights, property, or safety.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "We use SSL encryption for data transmission and secure servers for data storage.",
      "Despite our security measures, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "Your Rights and Choices",
    content: [
      "You have the right to access, update, or delete your personal information.",
      "You can opt out of receiving marketing communications from us at any time.",
      "You can disable cookies in your browser settings, though this may affect website functionality.",
      "For any privacy-related requests, please contact us using the information provided below.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy.",
      "Contact form submissions are typically retained for up to 2 years unless you request deletion.",
      "Technical data and analytics information may be retained for longer periods in aggregated form.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our services are not directed to children under the age of 13.",
      "We do not knowingly collect personal information from children under 13.",
      "If we become aware that we have collected information from a child under 13, we will delete it promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.",
      "We will notify you of any material changes by posting the updated policy on our website.",
      "Your continued use of our services after any changes constitutes acceptance of the updated policy.",
    ],
  },
];

export default function Privacy() {
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
            Privacy <span className="text-gradient-accent">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
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
                At CodeInca, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
                Please read this policy carefully to understand our practices
                regarding your personal data.
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
                Questions About This Policy?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data
                practices, please don't hesitate to contact us.
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
