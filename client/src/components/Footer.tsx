
import { SiApple, SiGoogleplay } from "react-icons/si";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-800-custom text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <span className="text-xl font-bold text-green-400">Tanoshi Vietnam</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Tanoshi drives digital transformation through intelligent software solutions and user-centric design. We help businesses streamline operations and unlock growth.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <SiApple size={20} />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Tải về</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <SiGoogleplay size={20} />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Tải về</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Công nghệ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Đối tác</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-custom rounded-lg flex items-center justify-center transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-custom rounded-lg flex items-center justify-center transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-custom rounded-lg flex items-center justify-center transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary-custom rounded-lg flex items-center justify-center transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; 2024 Tanoshi Vietnam. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
