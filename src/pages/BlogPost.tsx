import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link, useParams } from "wouter";
import type { BlogPost } from "../shared/schema";
import { format } from "date-fns";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
    enabled: !!slug
  });

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      const scrollTop = element.scrollTop || document.body.scrollTop;
      const scrollHeight = element.scrollHeight - element.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/2"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/blog">← Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-50">
        <div 
          className="h-1 bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

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
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>

          <article>
            {/* Header */}
            <motion.header
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 text-primary">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {post.createdAt ? format(new Date(post.createdAt), 'MMMM dd, yyyy') : ''}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            {post.imageUrl && (
              <motion.div
                className="mb-12 rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            )}

            {/* Content */}
            <motion.div
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {post.content}
              </div>
            </motion.div>

            {/* Author Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-muted/50">
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <Avatar className="w-16 h-16 mr-6">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" alt="CodeInca Team" />
                      <AvatarFallback>CI</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">CodeInca Team</h3>
                      <p className="text-muted-foreground">
                        Our team of experts shares insights and knowledge to help you stay ahead in the rapidly evolving world of technology.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </article>

          {/* Related Posts Section - would be implemented in a real app */}
          <motion.section
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="text-center text-muted-foreground">
              <p>Related articles would be displayed here based on category and tags</p>
              <Button asChild className="mt-4">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
