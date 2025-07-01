import { type BlogPost, type Gallery } from "@shared/blogSchema";

// Static blog posts data (from server/storage.ts sample data)
export const staticBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring Modern Web Development",
    content: "In today's rapidly evolving tech landscape, web development continues to push boundaries with new frameworks, tools, and methodologies. From React to Vue, from serverless to edge computing, developers have more options than ever before.",
    excerpt: "A deep dive into the latest trends and technologies shaping modern web development.",
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.A6Fwbi6xXxoNsVO_YxcjUQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    published: true,
    createdAt: new Date("2024-01-15T10:00:00Z"),
    updatedAt: new Date("2024-01-15T10:00:00Z")
  },
  {
    id: 2,
    title: "The Art of UI/UX Design",
    content: "Great design is not just about making things look beautiful—it's about creating intuitive, accessible, and meaningful experiences for users. Every color choice, typography decision, and interaction pattern contributes to the overall user journey.",
    excerpt: "Understanding the principles that make digital experiences truly exceptional.",
    imageUrl: "https://media.calibraint.com/calibraint-wordpress/wp-content/uploads/2020/02/12044002/UI-UX-Design-Elements-Calibraint.jpg",
    published: true,
    createdAt: new Date("2024-01-10T14:30:00Z"),
    updatedAt: new Date("2024-01-10T14:30:00Z")
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    content: "Scalability isn't just about handling more users—it's about building systems that can grow and adapt over time. This involves careful architecture decisions, performance optimization, and thinking about maintainability from day one.",
    excerpt: "Key strategies for creating applications that grow with your business needs.",
    imageUrl: "https://www.technetmagazine.com/wp-content/uploads/2024/07/building-scalable-applications-with-azure-cosmos-db-best-practices-and-real-world-success-stories1-1024x640.jpg",
    published: true,
    createdAt: new Date("2024-01-05T09:15:00Z"),
    updatedAt: new Date("2024-01-05T09:15:00Z")
  },
  {
    id: 4,
    title: "The Future of Mobile Development",
    content: "Mobile development continues to evolve with cross-platform solutions, progressive web apps, and native performance optimizations. Understanding these trends helps developers make informed decisions about their mobile strategy.",
    excerpt: "Exploring emerging trends and technologies in mobile app development.",
    imageUrl: "https://www.taazaa.com/wp-content/uploads/2024/03/The-Future-of-Mobile-App-Development-Trends-and-Predictions-creative.jpg",
    published: true,
    createdAt: new Date("2023-12-28T16:45:00Z"),
    updatedAt: new Date("2023-12-28T16:45:00Z")
  },
  {
    id: 5,
    title: "DevOps and Continuous Integration",
    content: "Modern software development relies heavily on automation, continuous integration, and deployment pipelines. These practices enable teams to deliver high-quality software faster and more reliably.",
    excerpt: "How DevOps practices transform software development workflows.",
    imageUrl: "https://picsum.photos/800/400?random=5",
    published: true,
    createdAt: new Date("2023-12-20T11:20:00Z"),
    updatedAt: new Date("2023-12-20T11:20:00Z")
  }
];

// Static gallery data (from server/storage.ts sample data)
export const staticGalleryItems: Gallery[] = [
  {
    id: 1,
    title: "Autumn Castle",
    imageUrl: "https://picsum.photos/400/300?random=1",
    description: "Beautiful autumn colors around Japanese castle",
    createdAt: new Date("2024-01-15T10:00:00Z")
  },
  {
    id: 2,
    title: "Mountain View",
    imageUrl: "https://picsum.photos/400/300?random=2",
    description: "Serene mountain landscape in autumn",
    createdAt: new Date("2024-01-14T10:00:00Z")
  },
  {
    id: 3,
    title: "City Lights",
    imageUrl: "https://picsum.photos/400/300?random=3",
    description: "Urban nightscape with vibrant lights",
    createdAt: new Date("2024-01-13T10:00:00Z")
  },
  {
    id: 4,
    title: "Ocean Waves",
    imageUrl: "https://picsum.photos/400/300?random=4",
    description: "Peaceful ocean waves at sunset",
    createdAt: new Date("2024-01-12T10:00:00Z")
  },
  {
    id: 5,
    title: "Forest Path",
    imageUrl: "https://picsum.photos/400/300?random=5",
    description: "Mystical forest path in morning light",
    createdAt: new Date("2024-01-11T10:00:00Z")
  },
  {
    id: 6,
    title: "Desert Dunes",
    imageUrl: "https://picsum.photos/400/300?random=6",
    description: "Golden sand dunes under blue sky",
    createdAt: new Date("2024-01-10T10:00:00Z")
  }
];
