import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Review } from "../shared/schema";

interface TestimonialCardProps {
  review: Review;
  delay?: number;
}

export default function TestimonialCard({ review, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full bg-card border-border">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mb-6 italic">
            "{review.review}"
          </p>
          <div className="flex items-center">
            <Avatar className="w-12 h-12 mr-4">
              <AvatarImage src={review.imageUrl || undefined} alt={review.name} />
              <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{review.name}</div>
              <div className="text-muted-foreground text-sm">
                {review.position}, {review.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
