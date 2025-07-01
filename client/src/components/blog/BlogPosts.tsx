import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal, ImageIcon } from "lucide-react";
import { type BlogPost } from "@shared/blogSchema";
import { Button } from "@/components/ui/button";
import ShareButton from "@/components/ui/ShareButton";
import { useState } from "react";

interface BlogPostsProps {
  posts: BlogPost[];
  isLoading: boolean;
  fullView?: boolean;
  onViewGallery?: () => void;
}

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
        <div className="text-center text-gray-500">
          <ImageIcon className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Không thể tải hình ảnh</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center absolute inset-0`}>
          <div className="text-gray-400">
            <ImageIcon className="w-8 h-8" />
          </div>
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

export default function BlogPosts({ posts, isLoading, fullView = false, onViewGallery }: BlogPostsProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-32 bg-gray-200 rounded mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.id} className={`${fullView ? 'bg-white rounded-lg p-6' : ''} relative`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <ImageWithFallback
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d95c1f148207527.62d1246c25004.jpg"
                  alt="Thanh nguyen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900">Thanh nguyen</div>
                <div className="text-sm text-gray-500">
                  {post.createdAt ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }) : '1 day ago'}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ShareButton
                url={`${window.location.origin}${import.meta.env.PROD ? '/GoParking' : ''}/blog/post/${post.id}`}
                title={post.title}
                description={post.excerpt || post.content.substring(0, 200)}
                className="z-10"
              />
              <Button variant="ghost" size="sm" className="text-gray-400">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {post.excerpt || post.content.substring(0, 200) + (post.content.length > 200 ? '...' : '')}
          </p>

          {post.imageUrl && (
            <div className="mb-4">
              <ImageWithFallback
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {fullView && (
            <div className="text-gray-600 leading-relaxed mb-4">
              {post.content}
            </div>
          )}

          {!fullView && (
            <div className="flex justify-end pt-4 border-t border-gray-100">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-600 hover:text-blue-600 hover:border-blue-600"
                onClick={onViewGallery}
              >
                View Gallery
              </Button>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}