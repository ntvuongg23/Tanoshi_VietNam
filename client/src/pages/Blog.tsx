import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogTabs from "@/components/blog/BlogTabs";
import BlogAbout from "@/components/blog/BlogAbout";
import BlogGallery from "@/components/blog/BlogGallery";
import BlogPosts from "@/components/blog/BlogPosts";
import { type BlogPost, type Gallery } from "@shared/blogSchema";
import { ImageIcon } from "lucide-react";
import { staticBlogPosts, staticGalleryItems } from "@/data/staticData";

export default function Blog() {
  const [activeTab, setActiveTab] = useState<'about' | 'gallery' | 'posts'>('about');

  const handleViewGallery = () => {
    setActiveTab('gallery');
    // Smooth scroll to top of content area
    setTimeout(() => {
      const contentArea = document.querySelector('.blog-content-area');
      if (contentArea) {
        contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Old API calls - commented out for static deployment
  // const { data: blogPosts = [], isLoading: postsLoading } = useQuery<BlogPost[]>({
  //   queryKey: ['/api/blog/posts'],
  // });

  // const { data: galleryItems = [], isLoading: galleryLoading } = useQuery<Gallery[]>({
  //   queryKey: ['/api/gallery'],
  // });

  // Using static data instead of API calls
  const blogPosts = staticBlogPosts;
  const postsLoading = false;
  const galleryItems = staticGalleryItems;
  const galleryLoading = false;

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <BlogTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <BlogAbout />
            <div className="mt-8">
              <BlogGallery
                items={galleryItems}
                isLoading={galleryLoading}
                onViewGallery={handleViewGallery}
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 blog-content-area">
            {activeTab === 'about' && (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Feed</h2>
                <BlogPosts
                  posts={blogPosts}
                  isLoading={postsLoading}
                  onViewGallery={handleViewGallery}
                />
              </div>
            )}
            
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Latest Gallery</h2>
                {galleryLoading ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-gray-200 h-48 rounded-lg animate-pulse flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    ))}
                  </div>
                ) : galleryItems.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {galleryItems.map((item) => (
                      <div key={item.id} className="relative group cursor-pointer">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                  <div class="text-center text-gray-500">
                                    <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <p class="text-sm">Không thể tải hình ảnh</p>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                        <div className="absolute bottom-2 left-2">
                          <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                            {item.title}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Chưa có hình ảnh</h3>
                    <p className="text-gray-500">Gallery sẽ được cập nhật sớm.</p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'posts' && (
              <div className="space-y-6">
                <BlogPosts
                  posts={blogPosts}
                  isLoading={postsLoading}
                  fullView
                  onViewGallery={handleViewGallery}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}