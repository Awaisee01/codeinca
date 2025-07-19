import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faqs as allFaqsData } from "@/data/mockData";
import type { Faq } from "../shared/schema";
import { useState } from "react";

const faqCategories = [
  "All",
  "Services", 
  "Timeline",
  "Support",
  "Process",
  "Integration"
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredFaqs = selectedCategory === "All" 
    ? allFaqsData 
    : allFaqsData.filter(faq => faq.category === selectedCategory);

  // Show only first 5 FAQs initially, unless "Show More" is clicked
  const faqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 5);
  const isLoading = false;

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we work with clients.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqCategories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-6 py-2 text-sm transition-all duration-200 ${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false); // Reset pagination when category changes
              }}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 skeleton" />
            ))}
          </div>
        ) : faqs && faqs.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <AccordionItem 
                        value={`item-${faq.id}`}
                        className="border-b border-border last:border-b-0"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6">
                          <div className="flex items-start space-x-4">
                            {faq.category && (
                              <Badge variant="secondary" className="text-xs">
                                {faq.category}
                              </Badge>
                            )}
                            <span className="font-semibold text-lg">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 pt-2">
                          <div className="text-muted-foreground leading-relaxed pl-4 md:pl-20">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
            
            {/* Show More Button */}
            {filteredFaqs && filteredFaqs.length > 5 && !showAll && (
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  className="px-8 py-3 text-lg"
                >
                  Show More FAQs ({filteredFaqs.length - 5} more)
                </Button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-muted-foreground">
              No FAQs found in this category.
            </p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-muted/50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you with any questions or concerns.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
