import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "wouter";
import type { BlogPost } from "../shared/schema";
import { format } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
  delay?: number;
}

export default function BlogCard({ post, delay = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
        {post.imageUrl && (
          <div className="relative overflow-hidden">
            <motion.img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-2 text-primary">
            {post.category}
          </Badge>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
            <Link href='#' className="">
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{post.createdAt ? format(new Date(post.createdAt), 'MMM dd, yyyy') : ''}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
