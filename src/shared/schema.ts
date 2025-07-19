// Shared types for frontend-only version
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  readTime: string;
  published: boolean;
  createdAt: string | Date;

}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
  
}

export interface Review {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  review: string;
  imageUrl: string;
 
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
  
}