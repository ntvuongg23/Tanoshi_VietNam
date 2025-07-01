import { users, contacts, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { type BlogPost, type InsertBlogPost, type Gallery, type InsertGallery } from "@shared/blogSchema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getGalleryItems(): Promise<Gallery[]>;
  createGalleryItem(item: InsertGallery): Promise<Gallery>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private blogPosts: Map<number, BlogPost>;
  private galleries: Map<number, Gallery>;
  private currentUserId: number;
  private currentContactId: number;
  private currentBlogPostId: number;
  private currentGalleryId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.galleries = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBlogPostId = 1;
    this.currentGalleryId = 1;
    
    // Add sample blog posts
    this.initializeSampleData();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      id,
      name: insertContact.name,
      email: insertContact.email,
      phone: insertContact.phone || null,
      message: insertContact.message,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = {
      id,
      title: insertPost.title,
      content: insertPost.content,
      excerpt: insertPost.excerpt || null,
      imageUrl: insertPost.imageUrl || null,
      published: insertPost.published || false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getGalleryItems(): Promise<Gallery[]> {
    return Array.from(this.galleries.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async createGalleryItem(insertGallery: InsertGallery): Promise<Gallery> {
    const id = this.currentGalleryId++;
    const gallery: Gallery = {
      id,
      title: insertGallery.title,
      imageUrl: insertGallery.imageUrl,
      description: insertGallery.description || null,
      createdAt: new Date()
    };
    this.galleries.set(id, gallery);
    return gallery;
  }

  private initializeSampleData() {
    // Sample blog posts
    const samplePosts = [
      {
        title: "Trở thành Solo Entrepreneur",
        content: "Hạnh phúc không phải là đích đến—mà là con đường chúng ta đi mỗi ngày. Qua những suy ngẫm, bài học và niềm vui nhỏ, tôi đang học cách sống chánh niệm hơn và trân trọng vẻ đẹp trong những điều giản dị. Đây là nơi tôi chia sẻ những suy nghĩ, câu chuyện và trải nghiệm khi tôi phát triển thành phiên bản của mình cảm thấy nhẹ nhàng, tử tế và bình an hơn.",
        excerpt: "Hạnh phúc không phải là đích đến—mà là con đường chúng ta đi mỗi ngày.",
        imageUrl: "https://masculinemindset.com/wp-content/uploads/2021/03/dreamstime_s_71973539.jpg",
        published: true
      },
      {
        title: "Du lịch Nhật Bản - Khám phá đất nước mặt trời mọc",
        content: "Nhật Bản là một quốc gia Đông Á đầy mê hoặc, nổi tiếng với nền văn hóa truyền thống đặc sắc và công nghệ hiện đại phát triển mạnh. Từ những ngôi đền cổ kính với kiến trúc độc đáo đến những thành phố hiện đại tại Tokyo và Osaka, Nhật Bản mang đến cho du khách một trải nghiệm đa dạng và phong phú. Ẩm thực Nhật cũng vô cùng hấp dẫn, từ sushi tươi ngon đến ramen thơm lừng, từ tempura giòn rụm đến wagyu beef thượng hạng. Chúng ta cùng khám phá vẻ đẹp của đất nước mặt trời mọc này qua những trải nghiệm độc đáo và khó quên.",
        excerpt: "Nhật Bản là một quốc gia Đông Á đầy mê hoặc, nổi tiếng với nền văn hóa truyền thống đặc sắc.",
        imageUrl: "https://r2.nucuoimekong.com/wp-content/uploads/tour-nhat-ban-5-ngay-4-dem.jpg",
        published: true
      },
      {
        title: "Công nghệ AI và tương lai của lập trình",
        content: "Trí tuệ nhân tạo đang thay đổi cách chúng ta tiếp cận lập trình và phát triển phần mềm. Từ việc tự động hóa các tác vụ lặp đi lặp lại đến việc hỗ trợ viết code thông minh hơn, AI đang mở ra những cơ hội mới cho các developer. Trong bài viết này, chúng ta sẽ khám phá những xu hướng mới nhất trong lĩnh vực AI và cách chúng ta có thể tận dụng chúng để trở thành những lập trình viên hiệu quả hơn.",
        excerpt: "Trí tuệ nhân tạo đang thay đổi cách chúng ta tiếp cận lập trình và phát triển phần mềm.",
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.C3mZCz8P58iC_yu2WBm9iQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        published: true
      },
      {
        title: "Thiết kế UI/UX hiện đại với Tailwind CSS",
        content: "Tailwind CSS đã trở thành một trong những framework CSS phổ biến nhất hiện nay. Với approach utility-first, Tailwind giúp developers xây dựng giao diện đẹp mắt và responsive một cách nhanh chóng. Trong bài viết này, chúng ta sẽ tìm hiểu các best practices khi sử dụng Tailwind CSS và cách tạo ra những component tái sử dụng hiệu quả.",
        excerpt: "Tailwind CSS đã trở thành một trong những framework CSS phổ biến nhất hiện nay.",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.uyLCpzc_m3lWo2z-Hvl2nwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        published: true
      }
    ];

    // Sample gallery items
    const sampleGallery = [
      {
        title: "Autumn Castle",
        imageUrl: "https://picsum.photos/400/300?random=1",
        description: "Beautiful autumn colors around Japanese castle"
      },
      {
        title: "Mountain View",
        imageUrl: "https://picsum.photos/400/300?random=2",
        description: "Serene mountain landscape in autumn"
      },
      {
        title: "City Lights",
        imageUrl: "https://picsum.photos/400/300?random=3",
        description: "Urban nightscape with vibrant lights"
      },
      {
        title: "Ocean Waves",
        imageUrl: "https://picsum.photos/400/300?random=4",
        description: "Peaceful ocean waves at sunset"
      },
      {
        title: "Forest Path",
        imageUrl: "https://picsum.photos/400/300?random=5",
        description: "Mystical forest path in morning light"
      },
      {
        title: "Desert Dunes",
        imageUrl: "https://picsum.photos/400/300?random=6",
        description: "Golden sand dunes under blue sky"
      }
    ];

    samplePosts.forEach(post => this.createBlogPost(post));
    sampleGallery.forEach(item => this.createGalleryItem(item));
  }
}

export const storage = new MemStorage();
