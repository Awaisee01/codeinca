import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/mockData";
import type { Review } from "../shared/schema";

export default function Reviews() {
  const isLoading = false;

  const averageRating = reviews ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length : 0;

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Client <span className="text-gradient-accent">Reviews</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our clients have to say about working with CodeInca.
          </p>

          {/* Rating Summary */}
          {reviews && reviews.length > 0 && (
            <motion.div
              className="flex items-center justify-center space-x-8 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-400 fill-current"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  Based on {reviews.length} reviews
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 skeleton" />
            ))}
          </div>
        ) : reviews && reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {reviews.map((review, index) => (
              <TestimonialCard
                key={review.id}
                review={review}
                delay={index * 0.1}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-muted-foreground">
              No reviews available at the moment.
            </p>
          </motion.div>
        )}

        {/* Featured Testimonial */}
        {reviews && reviews.length > 0 && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/20">
              <CardContent className="p-12 text-center">
                <Quote className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
                <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
                  "{reviews[0].review}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-lg">{reviews[0].name}</div>
                    <div className="text-muted-foreground">
                      {reviews[0].position}, {reviews[0].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-muted/50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Clients?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the same level of excellence and dedication that our clients rave about.
              </p>
              <Button 
                asChild 
                className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-8 py-4"
              >
                <a href="/contact">Start Your Project</a>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
