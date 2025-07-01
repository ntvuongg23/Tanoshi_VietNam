import { useState } from "react";
import { type Gallery } from "@shared/blogSchema";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface BlogGalleryProps {
  items: Gallery[];
  isLoading: boolean;
  onViewGallery?: () => void;
}

interface GalleryImageProps {
  src: string;
  alt: string;
  className: string;
}

function GalleryImage({ src, alt, className }: GalleryImageProps) {
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
        <ImageIcon className="w-6 h-6 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center absolute inset-0`}>
          <ImageIcon className="w-6 h-6 text-gray-400" />
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

export default function BlogGallery({ items, isLoading, onViewGallery }: BlogGalleryProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Gallery</h3>
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-24 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-900">Gallery</h3>
        <Button
          variant="link"
          size="sm"
          className="text-blue-600 p-0 hover:text-blue-800"
          onClick={onViewGallery}
        >
          View Gallery
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        {items.slice(0, 4).map((item) => (
          <div key={item.id} className="relative group cursor-pointer">
            <GalleryImage
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-24 object-cover rounded transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Badges</h4>
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
            <span className="text-teal-600 text-sm">✚</span>
          </div>
        </div>
      </div>
    </div>
  );
}