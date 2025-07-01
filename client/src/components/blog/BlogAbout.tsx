import { MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlogAbout() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        On the journey to becoming a happy person
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <LinkIcon className="h-4 w-4 mr-2" />
          <span className="text-sm">tanoshivietnam.com</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">News</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">Art</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <span className="text-sm mr-2">Lifestyle</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <span className="text-sm mr-2">Memory</span>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Badges</h3>
        <div className="flex justify-center">
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
            ✚
          </Badge>
        </div>
      </div>
    </div>
  );
}