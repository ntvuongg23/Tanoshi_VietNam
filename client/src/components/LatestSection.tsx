import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, User, ArrowRight, ImageIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import { type BlogPost, type Gallery } from "@shared/blogSchema";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className: string;
}

function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <ImageIcon className="w-8 h-8 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center absolute inset-0`}>
          <ImageIcon className="w-8 h-8 text-gray-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
}

export default function LatestSection() {
  const { data: blogPosts = [], isLoading: postsLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/posts'],
  });

  const { data: galleryItems = [], isLoading: galleryLoading } = useQuery<Gallery[]>({
    queryKey: ['/api/gallery'],
  });

  const latestPosts = blogPosts.slice(0, 3);
  const latestGallery = galleryItems.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nội dung mới nhất
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những bài viết và hình ảnh mới nhất từ blog của chúng tôi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Latest Blog Posts */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Bài viết mới</h3>
              <Link href="/blog">
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Xem tất cả
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {postsLoading ? (
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                    <div className="flex space-x-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {latestPosts.map((post) => (
                  <Link key={post.id} href="/blog">
                    <article className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex space-x-4">
                        {post.imageUrl && (
                          <div className="flex-shrink-0">
                            <ImageWithFallback
                              src={post.imageUrl}
                              alt={post.title}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {post.excerpt || post.content.substring(0, 100) + '...'}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 space-x-4">
                            <div className="flex items-center">
                              <User className="w-3 h-3 mr-1" />
                              <span>Thanh Nguyen</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>
                                {post.createdAt
                                  ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: vi })
                                  : '1 ngày trước'
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Latest Gallery */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Gallery mới</h3>
              <Link href="/blog">
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Xem tất cả
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {galleryLoading ? (
              <div className="grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-200 h-24 rounded-lg animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {latestGallery.map((item) => (
                  <Link key={item.id} href="/blog">
                    <div className="relative group cursor-pointer">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-24 object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                      <div className="absolute bottom-1 left-1">
                        <span className="bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!galleryLoading && latestGallery.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Chưa có hình ảnh trong gallery</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
