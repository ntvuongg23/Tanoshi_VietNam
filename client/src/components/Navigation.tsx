import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { label: "Home", id: "home", isRoute: false },
    { label: "About", id: "about", isRoute: false },
    { label: "Service", id: "services", isRoute: false },
    { label: "Project", id: "/project", isRoute: true },
    { label: "Blog", id: "/blog", isRoute: true },
    { label: "FaQ", id: "faq", isRoute: false },
    { label: "Contact", id: "contact", isRoute: false },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm"
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co/gMrnFSgY/Gemini-Generated-Image-8bg4kw8bg4kw8bg4.png"
              alt="Go Parking Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-blue-800">Go Parking</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.isRoute ? (
                <Link key={item.id} href={item.id}>
                  <span className="text-gray-600 hover:text-primary-custom transition-colors font-medium cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-primary-custom transition-colors font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  item.isRoute ? (
                    <Link key={item.id} href={item.id}>
                      <span className="text-left text-gray-600 hover:text-primary-custom transition-colors font-medium py-2 block">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-600 hover:text-primary-custom transition-colors font-medium py-2"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
