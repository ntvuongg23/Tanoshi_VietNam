import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show button when user scrolls past the hero section (approximately 600px)
          // This should be around the Partners or About section
          setIsVisible(currentScrollY > 600);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position
    const initialScrollY = window.scrollY;
    setIsVisible(initialScrollY > 600);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 active:from-green-800 active:to-green-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none group"
        aria-label="Scroll to top of page"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </Button>
    </div>
  );
}
