import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Clock, Headphones } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50-custom to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Giải pháp <span className="text-primary-custom">giữ xe thông minh</span> cho thời đại mới
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Go Parking mang đến trải nghiệm đỗ xe hiện đại, tiện lợi với sự kết nối toàn với công nghệ AI tiên tiến
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-custom hover:bg-primary-dark text-white px-8 py-4 text-base font-semibold">
                Tải ứng dụng ngay
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 hover:border-primary-custom text-gray-700 hover:text-primary-custom px-8 py-4 text-base font-semibold">
                Tìm hiểu thêm
              </Button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Smartphone className="text-primary-custom mx-auto mb-3" size={24} />
                <p className="text-sm text-gray-600">Ứng dụng đa nền tảng</p>
              </div>
              <div className="text-center">
                <Shield className="text-primary-custom mx-auto mb-3" size={24} />
                <p className="text-sm text-gray-600">Thanh toán an toàn</p>
              </div>
              <div className="text-center">
                <Clock className="text-primary-custom mx-auto mb-3" size={24} />
                <p className="text-sm text-gray-600">Đặt chỗ trước 24/7</p>
              </div>
              <div className="text-center">
                <Headphones className="text-primary-custom mx-auto mb-3" size={24} />
                <p className="text-sm text-gray-600">Hỗ trợ khách hàng</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Smart parking technology" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
