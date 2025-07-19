import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

const sections = [
  {
    title: "General Information",
    content: [
      "The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, CodeInca excludes all representations, warranties, obligations, and liabilities arising out of or in connection with the information provided.",
      "While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained therein.",
      "Any reliance you place on such information is therefore strictly at your own risk."
    ]
  },
  {
    title: "Professional Services Disclaimer",
    content: [
      "CodeInca provides digital agency services including web development, mobile applications, and design services. These services are provided based on our professional expertise and industry best practices.",
      "Results may vary depending on various factors including but not limited to market conditions, competition, client cooperation, and external circumstances beyond our control.",
      "We do not guarantee specific outcomes, revenue increases, or business success as a result of our services.",
      "All estimates, timelines, and projections are based on available information and may be subject to change."
    ]
  },
  {
    title: "Technical Disclaimer",
    content: [
      "While we strive to develop secure and robust applications, no software or system is completely immune to security vulnerabilities or technical issues.",
      "We recommend regular security updates, backups, and monitoring for all deployed applications.",
      "Third-party integrations and services may have their own terms, limitations, and potential points of failure that are beyond our control.",
      "Performance may vary based on hosting environment, traffic patterns, and user behavior."
    ]
  },
  {
    title: "Third-Party Links and Content",
    content: [
      "Our website may contain links to third-party websites and services. These links are provided for convenience only and do not constitute an endorsement.",
      "We have no control over the content, privacy policies, or practices of third-party sites and are not responsible for their content or practices.",
      "Any transactions or interactions with third-party services are solely between you and the third party.",
      "We recommend reviewing the terms and privacy policies of any third-party services you access through our website."
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      "In no event shall CodeInca, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, punitive, consequential, or special damages.",
      "This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our services.",
      "Our total liability shall not exceed the total amount paid by you for the specific service giving rise to the claim.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you."
    ]
  },
  {
    title: "No Professional Advice",
    content: [
      "The information provided on this website is for general informational purposes only and should not be considered professional advice.",
      "You should consult with appropriate professionals for specific advice tailored to your situation.",
      "Any decisions made based on information from this website are your sole responsibility.",
      "We recommend seeking independent professional advice before making significant business or technical decisions."
    ]
  },
  {
    title: "Force Majeure",
    content: [
      "CodeInca shall not be liable for any delay or failure to perform resulting from causes outside our reasonable control.",
      "This includes, but is not limited to, acts of God, natural disasters, war, terrorism, strikes, government actions, or technical failures.",
      "In such events, we will make reasonable efforts to notify affected parties and minimize any impact.",
      "Performance obligations will be suspended for the duration of such events."
    ]
  },
  {
    title: "Updates and Changes",
    content: [
      "This disclaimer may be updated from time to time without prior notice.",
      "Your continued use of our website and services after any changes constitutes acceptance of the updated disclaimer.",
      "We recommend reviewing this disclaimer periodically for any changes.",
      "The most current version will always be available on our website."
    ]
  }
];

export default function Disclaimer() {
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
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
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
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-accent">Disclaimer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Important information about the use of our website and services. Please read carefully.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            Last updated: January 1, 2024
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-yellow-500/10 border-yellow-500/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
                    Important Notice
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This disclaimer sets out the terms under which we provide our website and services. 
                    By using our website or services, you acknowledge that you have read, understood, 
                    and agree to be bound by this disclaimer. If you do not agree with any part of this 
                    disclaimer, please do not use our website or services.
                  </p>
                </div>
              </div>
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
                      <p key={pIndex} className="text-muted-foreground leading-relaxed">
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
              <h2 className="text-2xl font-semibold mb-4">Questions About This Disclaimer?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this disclaimer or need clarification on any points, please contact us.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>Email: codeincdeveloper@gmail.com</p>
                <p>Phone: +923000199139</p>
                <p>Phone: +923356797707</p>
                <p>Address: Bahawalpur, Pakistan </p>
              </div>
              <Button asChild className="bg-gradient-accent hover:opacity-90 text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
