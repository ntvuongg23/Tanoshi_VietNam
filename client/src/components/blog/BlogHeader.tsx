import { useState, useRef, useEffect } from "react";
import { Menu, MoreHorizontal, X, Home, User, Settings, LogOut, Mail, Info, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { icon: Home, label: 'Trang chủ', href: '/', isExternal: false },
    { icon: Info, label: 'Giới thiệu', href: '/#about', isExternal: true },
    { icon: FileText, label: 'Dự án', href: '/#projects', isExternal: true },
    { icon: Mail, label: 'Liên hệ', href: '/#contact', isExternal: true },
    { icon: User, label: 'Hồ sơ', href: '/profile', isExternal: false },
    { icon: Settings, label: 'Cài đặt', href: '/settings', isExternal: false },
  ];

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="h-64 md:h-80 relative overflow-hidden">
        <img
          src="https://img.freepik.com/premium-photo/osaka-castle-autumn-foliage-season-is-famous-japanese-castle-landmark-popular-tourist-attractions-osaka-kansai-japan_42256-9902.jpg?w=1060"
          alt="Japanese castle with autumn foliage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-40">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d95c1f148207527.62d1246c25004.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-medium">Thanh nguyen</span>
        </div>

        <div className="relative" ref={menuRef}>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Menu Dropdown */}
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <div className="fixed inset-0 bg-black/50 z-40 sm:hidden" onClick={closeMenu}></div>

              {/* Menu Content */}
              <div className="fixed sm:absolute top-0 sm:top-12 right-0 w-full sm:w-72 h-full sm:h-auto bg-white sm:rounded-lg shadow-xl border-0 sm:border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200">
                {/* Mobile Header */}
                <div className="sm:hidden flex items-center justify-between p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeMenu}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                {/* User Info Section */}
                <div className="p-4 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d95c1f148207527.62d1246c25004.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-base sm:text-sm">Thanh nguyen</div>
                      <div className="text-sm sm:text-xs text-gray-500">ko: fi.com/tanoshivietnamhello</div>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="py-2 flex-1 overflow-y-auto">
                  {menuItems.map((item, index) => (
                    item.isExternal ? (
                      <a
                        key={index}
                        href={`${import.meta.env.PROD ? '/GoParking' : ''}${item.href}`}
                        onClick={closeMenu}
                        className="block"
                      >
                        <div className="menu-item flex items-center px-4 sm:px-4 py-4 sm:py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer border-b sm:border-b-0 border-gray-100 last:border-b-0">
                          <item.icon className="w-6 h-6 sm:w-5 sm:h-5 mr-4 sm:mr-3 text-gray-400 group-hover:text-blue-500" />
                          <span className="font-medium text-base sm:text-sm">{item.label}</span>
                        </div>
                      </a>
                    ) : (
                      <Link key={index} href={item.href} onClick={closeMenu}>
                        <div className="menu-item flex items-center px-4 sm:px-4 py-4 sm:py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer border-b sm:border-b-0 border-gray-100 last:border-b-0">
                          <item.icon className="w-6 h-6 sm:w-5 sm:h-5 mr-4 sm:mr-3 text-gray-400 group-hover:text-blue-500" />
                          <span className="font-medium text-base sm:text-sm">{item.label}</span>
                        </div>
                      </Link>
                    )
                  ))}
                </div>

                {/* Logout Section */}
                <div className="border-t border-gray-100 py-2 mt-auto">
                  <button
                    className="flex items-center w-full px-4 sm:px-4 py-4 sm:py-3 text-red-600 hover:bg-red-50 transition-colors"
                    onClick={() => {
                      closeMenu();
                      // Add logout logic here
                      console.log('Logout clicked');
                    }}
                  >
                    <LogOut className="w-6 h-6 sm:w-5 sm:h-5 mr-4 sm:mr-3" />
                    <span className="font-medium text-base sm:text-sm">Đăng xuất</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative -mt-8 px-4">
        <div className="flex items-end space-x-4">
          <div className="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d95c1f148207527.62d1246c25004.jpg" 
              alt="Thanh nguyen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pb-2">
            <h1 className="text-2xl font-bold text-gray-900">Thanh nguyen</h1>
            <p className="text-gray-600">ko: fi.com/tanoshivietnamhello</p>
          </div>
          <div className="flex space-x-2 pb-2">
            <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
              Follow
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}