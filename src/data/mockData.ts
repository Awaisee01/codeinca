import type { BlogPost, Faq, Review } from "../shared/schema";

export const blogPosts: BlogPost[] = [
  // Web Development Posts
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-trends-2024",
    excerpt:
      "Explore the emerging technologies and methodologies that are shaping the future of web development...",
    content:
      "Web development continues to evolve at a rapid pace. From the rise of WebAssembly to the growing adoption of serverless architectures, developers have more tools and technologies at their disposal than ever before. Progressive Web Apps (PWAs) are bridging the gap between web and native experiences. AI-powered development tools like GitHub Copilot are transforming how we write code. Modern frameworks like Next.js 14, Svelte 5, and Astro are pushing performance boundaries while improving developer experience. TypeScript adoption continues to grow, providing better code reliability and developer productivity. Edge computing and serverless functions are changing deployment strategies, while Web3 technologies open new possibilities for decentralized applications.",
    category: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "5 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
  {
    id: "2",
    title: "Building Scalable Web Applications with Modern Architecture",
    slug: "scalable-web-applications-modern-architecture",
    excerpt:
      "Learn architectural patterns and best practices for building web applications that scale to millions of users...",
    content:
      "Scalability is crucial for modern web applications. Microservices architecture allows independent scaling of different application components. Container orchestration with Kubernetes provides deployment flexibility and automatic scaling. Database sharding and caching strategies with Redis improve performance under high load. CDN optimization and edge computing reduce latency globally. Monitoring and observability tools help identify bottlenecks before they impact users. Load balancing and auto-scaling ensure consistent performance during traffic spikes. Modern CI/CD pipelines enable rapid, reliable deployments across multiple environments.",
    category: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "8 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
  {
    id: "3",
    title: "Full-Stack JavaScript: Complete Development Guide",
    slug: "full-stack-javascript-development-guide",
    excerpt:
      "Master the JavaScript ecosystem from frontend frameworks to backend APIs and database integration...",
    content:
      "JavaScript has evolved into a complete development platform spanning frontend and backend. Node.js enables server-side JavaScript with excellent performance. React, Vue, and Angular dominate frontend development with component-based architectures. TypeScript adds type safety and better tooling support. Modern build tools like Vite and Webpack optimize development workflows. Database integration with ORMs like Prisma simplifies data management. API design with REST and GraphQL provides flexible data access. Authentication and security best practices protect user data and application integrity.",
    category: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "10 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },

  // Mobile Development Posts
  {
    id: "4",
    title: "Mobile App Performance: Optimization Strategies",
    slug: "mobile-app-performance-optimization",
    excerpt:
      "Discover proven techniques to optimize your mobile app's performance and user experience...",
    content:
      "Mobile app performance directly impacts user satisfaction and retention. Slow loading times and laggy interactions lead to poor app store ratings and user abandonment. Image optimization and lazy loading reduce initial load times. Code splitting and bundle optimization minimize app size. Efficient state management prevents memory leaks and improves responsiveness. Background processing and caching strategies enhance perceived performance. Native optimization techniques leverage platform-specific features for better performance. Performance monitoring tools help identify and resolve bottlenecks proactively.",
    category: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "6 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
  {
    id: "5",
    title: "React Native vs Flutter: Comprehensive Comparison",
    slug: "react-native-vs-flutter-comparison",
    excerpt:
      "Compare the leading cross-platform frameworks to make informed decisions for your mobile projects...",
    content:
      "Cross-platform development has matured with React Native and Flutter leading the market. React Native leverages JavaScript and React knowledge, making it accessible to web developers. Its mature ecosystem and Meta's backing provide stability and community support. Flutter uses Dart and offers excellent performance with compiled code. It provides more consistent UI across platforms and superior animation capabilities. Development experience varies with React Native offering hot reload and extensive debugging tools, while Flutter provides comprehensive tooling and widget inspector. Performance considerations, team expertise, and project requirements should guide framework selection.",
    category: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "9 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
  {
    id: "6",
    title: "Progressive Web Apps: Native Experience on the Web",
    slug: "progressive-web-apps-native-experience",
    excerpt:
      "Build app-like experiences that work offline, send push notifications, and install on devices...",
    content:
      "Progressive Web Apps combine the best of web and mobile technologies. Service workers enable offline functionality, background sync, and push notifications. The Web App Manifest allows installation on device home screens. Modern browser APIs provide access to camera, geolocation, and sensors. PWAs offer universal accessibility across devices and platforms. Automatic updates eliminate app store approval delays. Reduced development costs and simplified distribution make PWAs attractive for businesses. Companies like Twitter and Starbucks have seen significant success with PWA implementations.",
    category: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "7 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },

  // Design Posts
  {
    id: "7",
    title: "Creating User-Centered Design: A Comprehensive Guide",
    slug: "user-centered-design-guide",
    excerpt:
      "Learn how to design experiences that truly resonate with your users and drive engagement...",
    content:
      "User-centered design puts users at the heart of the design process. Understanding user needs through research, interviews, and personas guides design decisions. Information architecture and wireframing create intuitive navigation structures. Visual hierarchy and typography guide users through interfaces naturally. Accessibility ensures products work for users with diverse abilities. Usability testing validates design decisions with real user feedback. Iterative design allows continuous improvement based on user insights. Modern UX considers emerging technologies like voice interfaces and AI-powered personalization.",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "7 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
  {
    id: "8",
    title: "Design Systems: Building Scalable UI Components",
    slug: "design-systems-scalable-ui-components",
    excerpt:
      "Create consistent, maintainable design systems that scale across teams and products...",
    content:
      "Design systems provide consistency and efficiency across teams and products. Component libraries, design tokens, and documentation ensure coherent user experiences. Tools like Figma and Storybook facilitate design-development collaboration. Atomic design principles organize components hierarchically from basic elements to complex layouts. Version control and automated testing maintain system reliability. Design systems accelerate development while maintaining exceptional user experiences. Companies like Airbnb and Shopify demonstrate the value of robust design systems.",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "8 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },

  // Technology Posts
  {
    id: "9",
    title: "Artificial Intelligence in Software Development",
    slug: "ai-in-software-development",
    excerpt:
      "Explore how AI tools are transforming coding, testing, and deployment processes...",
    content:
      "Artificial Intelligence is revolutionizing software development workflows. GitHub Copilot and similar tools provide intelligent code completion and generation. AI-powered testing creates comprehensive test suites and identifies edge cases automatically. Code review automation maintains quality standards and catches security vulnerabilities. Natural language interfaces make programming more accessible through conversational coding. Machine learning optimizes application performance and predicts system failures. Automated deployment decisions and infrastructure scaling reduce operational overhead. As AI tools mature, developers focus more on architecture and problem-solving.",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "6 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
  {
    id: "10",
    title: "Cloud Computing Evolution: Serverless and Edge",
    slug: "cloud-computing-serverless-edge",
    excerpt:
      "Understand modern cloud architectures and their impact on application development...",
    content:
      "Cloud computing continues evolving with serverless and edge computing leading innovation. Serverless platforms eliminate server management while providing automatic scaling. Edge computing reduces latency by processing data closer to users. Container orchestration with Kubernetes offers flexibility across cloud providers. Infrastructure as Code enables reproducible, version-controlled deployments. Multi-cloud strategies prevent vendor lock-in while optimizing costs. Security and compliance considerations drive architectural decisions in distributed environments.",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "9 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },

  // Business Posts
  {
    id: "11",
    title: "Digital Transformation: Modern Business Strategies",
    slug: "digital-transformation-business-strategies",
    excerpt:
      "Navigate digital transformation successfully and stay competitive in the digital economy...",
    content:
      "Digital transformation is essential for business competitiveness. Successful transformation encompasses technology adoption, cultural change, and process optimization. Customer experience drives digital initiatives with data-driven insights guiding decisions. Cloud migration and automation improve operational efficiency and reduce costs. Employee training and change management ensure successful technology adoption. Agile methodologies enable faster iteration and continuous improvement. Security and compliance must be integrated throughout transformation initiatives. Measuring ROI and KPIs justifies investments and guides future digital strategies.",
    category: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "10 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
  {
    id: "12",
    title: "Building Remote-First Development Teams",
    slug: "remote-first-development-teams",
    excerpt:
      "Best practices for managing distributed development teams in the modern workplace...",
    content:
      "Remote work has permanently changed development team dynamics. Successful remote teams require intentional communication practices and clear documentation. Project management platforms maintain visibility and accountability across distributed teams. Video conferencing and collaborative tools facilitate real-time collaboration when needed. Time zone considerations require careful planning for global teams. Company culture and team building need deliberate effort in remote environments. Performance management shifts to outcome-based evaluation focusing on deliverables and impact rather than hours worked.",
    category: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "8 min read",
    published: true,
    createdAt: new Date().toISOString(), // ✅ FIXED
  },
];

export const faqs: Faq[] = [
  // Services Category
  {
    id: "1",
    question: "What services does CodeInca offer?",
    answer:
      "CodeInca offers comprehensive digital solutions including web development, mobile app development, UI/UX design, and digital consulting services. We specialize in modern technologies like React, Node.js, React Native, Flutter, and cloud platforms to deliver scalable, high-performance solutions.",
    category: "Services",
  },
  {
    id: "2",
    question: "Do you develop both web and mobile applications?",
    answer:
      "Yes, we develop both web and mobile applications. Our web development includes responsive websites, progressive web apps (PWAs), and complex web applications. For mobile, we create native iOS/Android apps and cross-platform solutions using React Native and Flutter.",
    category: "Services",
  },
  {
    id: "3",
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern JavaScript/TypeScript ecosystems including React, Next.js, Node.js, Express, and various databases. For mobile development, we use React Native, Flutter, and native technologies. We also work with cloud platforms like AWS, Google Cloud, and Azure.",
    category: "Services",
  },
  {
    id: "4",
    question: "Do you provide UI/UX design services?",
    answer:
      "Yes, we offer comprehensive UI/UX design services including user research, wireframing, prototyping, visual design, and design systems. Our designers work closely with developers to ensure seamless implementation of design concepts.",
    category: "Services",
  },
  {
    id: "5",
    question: "Can you help with digital transformation initiatives?",
    answer:
      "Absolutely! We provide digital transformation consulting to help businesses modernize their technology stack, improve operational efficiency, and enhance customer experiences through strategic technology adoption and process optimization.",
    category: "Services",
  },

  // Timeline Category
  {
    id: "6",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary significantly based on complexity and scope. Simple landing pages take 1-2 weeks, business websites require 3-6 weeks, complex web applications need 2-4 months, and enterprise-level solutions can take 6+ months. We provide detailed timelines during initial consultation.",
    category: "Timeline",
  },
  {
    id: "7",
    question: "What factors affect project timeline?",
    answer:
      "Timeline factors include project complexity, feature requirements, design complexity, third-party integrations, content availability, feedback cycles, and technical challenges. Clear requirements and prompt feedback help maintain schedules.",
    category: "Timeline",
  },
  {
    id: "8",
    question: "How do you handle project delays?",
    answer:
      "We proactively communicate potential delays, analyze root causes, and adjust timelines accordingly. Our agile approach allows flexibility while maintaining quality standards. We prioritize transparent communication throughout the project lifecycle.",
    category: "Timeline",
  },
  {
    id: "9",
    question: "Can you work with tight deadlines?",
    answer:
      "Yes, we can accommodate urgent projects when possible. However, we prioritize quality over speed and will honestly assess whether tight deadlines are achievable without compromising the final product quality.",
    category: "Timeline",
  },
  {
    id: "10",
    question: "Do you provide project milestone updates?",
    answer:
      "Yes, we provide regular milestone updates and progress reports. Clients receive weekly status updates, can access project management tools, and participate in scheduled review meetings to track progress and provide feedback.",
    category: "Timeline",
  },

  // Support Category
  {
    id: "11",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages including bug fixes, security updates, performance optimization, content updates, and feature enhancements. Our support plans are tailored to your specific needs and budget.",
    category: "Support",
  },
  {
    id: "12",
    question: "What is included in your maintenance packages?",
    answer:
      "Maintenance packages include security updates, bug fixes, performance monitoring, backup services, uptime monitoring, minor content updates, and technical support. Premium packages include feature enhancements and priority support.",
    category: "Support",
  },
  {
    id: "13",
    question: "How quickly do you respond to support requests?",
    answer:
      "Response times depend on your support plan and issue severity. Critical issues receive immediate attention (within 2-4 hours), while general support requests are addressed within 24-48 hours. Emergency support is available for critical production issues.",
    category: "Support",
  },
  {
    id: "14",
    question: "Do you provide training for our team?",
    answer:
      "Yes, we provide comprehensive training for content management systems, administrative interfaces, and basic maintenance tasks. Training can be conducted remotely or on-site, with documentation and video guides provided.",
    category: "Support",
  },
  {
    id: "15",
    question: "What happens if something breaks after launch?",
    answer:
      "We provide warranty coverage for bugs and issues related to our development work. Post-launch issues are addressed promptly based on your support plan. We also offer emergency support for critical production problems.",
    category: "Support",
  },

  // Process Category
  {
    id: "16",
    question: "What is your development process?",
    answer:
      "Our development process follows agile methodologies with phases including discovery, planning, design, development, testing, and deployment. We maintain regular client communication through weekly updates, milestone reviews, and collaborative project management tools.",
    category: "Process",
  },
  {
    id: "17",
    question: "How do you handle project requirements gathering?",
    answer:
      "We conduct thorough discovery sessions to understand your business goals, user needs, and technical requirements. This includes stakeholder interviews, market research, competitor analysis, and technical feasibility assessments to ensure comprehensive project planning.",
    category: "Process",
  },
  {
    id: "18",
    question: "Do you use agile development methodologies?",
    answer:
      "Yes, we use agile methodologies including Scrum and Kanban to ensure flexibility, transparency, and continuous improvement. This allows for iterative development, regular feedback incorporation, and adaptive planning throughout the project lifecycle.",
    category: "Process",
  },
  {
    id: "19",
    question: "How do you ensure quality in your deliverables?",
    answer:
      "Quality assurance includes code reviews, automated testing, manual testing, performance optimization, security audits, and accessibility compliance. We follow industry best practices and maintain high coding standards throughout development.",
    category: "Process",
  },
  {
    id: "20",
    question: "What project management tools do you use?",
    answer:
      "We use modern project management tools like Jira, Notion, or Linear for task tracking, Slack or Teams for communication, GitHub for code management, and Figma for design collaboration. Clients receive access to relevant project dashboards.",
    category: "Process",
  },

  // Integration Category
  {
    id: "21",
    question: "Can you work with existing systems and databases?",
    answer:
      "Absolutely! We have extensive experience integrating with existing systems, APIs, databases, and third-party services. We ensure seamless data migration, API connectivity, and system interoperability while maintaining security and performance standards.",
    category: "Integration",
  },
  {
    id: "22",
    question: "Do you integrate with popular third-party services?",
    answer:
      "Yes, we integrate with popular services including payment processors (Stripe, PayPal), CRM systems (Salesforce, HubSpot), marketing tools (Mailchimp, Google Analytics), social media platforms, and cloud services (AWS, Google Cloud, Azure).",
    category: "Integration",
  },
  {
    id: "23",
    question: "How do you handle data migration from legacy systems?",
    answer:
      "Data migration involves careful planning, data mapping, validation testing, and phased migration strategies. We ensure data integrity, implement backup procedures, and provide rollback options to minimize business disruption during transitions.",
    category: "Integration",
  },
  {
    id: "24",
    question: "Can you build custom APIs for integration?",
    answer:
      "Yes, we design and develop custom APIs using REST and GraphQL standards. Our APIs include proper authentication, rate limiting, documentation, and monitoring to ensure reliable integration with internal and external systems.",
    category: "Integration",
  },
  {
    id: "25",
    question: "Do you provide API documentation and support?",
    answer:
      "Yes, we provide comprehensive API documentation including endpoint descriptions, request/response examples, authentication guides, and code samples. We also offer ongoing API support and maintenance as part of our service packages.",
    category: "Integration",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechCorp",
    rating: 5,
    review:
      "CodeInca transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations. The team delivered a stunning website that perfectly captures our brand identity.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Founder",
    company: "StartupX",
    rating: 5,
    review:
      "Outstanding work! The team at CodeInca delivered a solution that not only met our requirements but also brought creative insights we hadn't considered. Their mobile app development expertise is top-notch.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "GrowthLab",
    rating: 5,
    review:
      "Working with CodeInca was an absolute pleasure. They understood our vision from day one and delivered a beautiful, functional website that has significantly improved our conversion rates.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b056c8ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    id: "4",
    name: "David Kim",
    position: "Product Manager",
    company: "InnovateNow",
    rating: 5,
    review:
      "The quality of work and professionalism shown by CodeInca is remarkable. They delivered our complex web application on time and within budget, with exceptional attention to user experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    position: "Operations Director",
    company: "StreamlineCo",
    rating: 5,
    review:
      "CodeInca's expertise in both design and development is impressive. They created a seamless user experience that our customers love, and the backend systems they built are robust and scalable.",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    id: "6",
    name: "James Wilson",
    position: "CTO",
    company: "DataFlow Systems",
    rating: 5,
    review:
      "Exceptional technical expertise and project management. CodeInca helped us modernize our entire technology stack with a smooth transition and minimal downtime. Highly recommended!",
    imageUrl:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
];
