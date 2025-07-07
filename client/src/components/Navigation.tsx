import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Determine scroll direction with a smaller threshold
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down and past 50px
            setIsScrollingDown(true);
          } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
            // Scrolling up or near top
            setIsScrollingDown(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position
    const initialScrollY = window.scrollY;
    setIsScrollingDown(initialScrollY > 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { label: "Home", id: "/", isRoute: true },
    { label: "Services", id: "services", isRoute: false },
    { label: "Projects", id: "/project", isRoute: true },
    { label: "Blog", id: "/blog", isRoute: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
      isScrollingDown
        ? "bg-white/30 backdrop-blur-sm shadow-none border-gray-100/20"
        : "bg-white/95 backdrop-blur-lg shadow-lg border-gray-200"
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img
                src="https://i.postimg.cc/jCgx28dn/Tanoshi-Vietnam.jpg"
                alt="Tanoshi Vietnam Logo"
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
              <span className="text-xl font-bold text-green-600">Tanoshi Vietnam</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.isRoute ? (
                <Link key={item.id} href={item.id}>
                  <span className="text-gray-600 hover:text-green-600 transition-colors font-medium cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Contact
            </button>
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
                      <span className="text-left text-gray-600 hover:text-green-600 transition-colors font-medium py-2 block">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-600 hover:text-green-600 transition-colors font-medium py-2"
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
