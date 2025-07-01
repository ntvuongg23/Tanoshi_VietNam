import { useState, useEffect, useRef } from "react";
import { ImageIcon } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

interface PartnerLogoProps {
  partner: Partner;
}

function CarouselPartnerLogo({ partner }: PartnerLogoProps) {
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
      <div className="relative p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-20 flex items-center justify-center group border border-gray-100 hover:border-blue-200">
        <div className="text-center">
          <ImageIcon className="w-6 h-6 text-gray-400 mx-auto mb-1" />
          <span className="text-xs font-medium text-gray-500 block truncate max-w-full">
            {partner.name}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 h-20 flex items-center justify-center group border border-gray-100 hover:border-blue-200 overflow-hidden">
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl">
          <div className="w-6 h-6 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Logo image */}
      <img
        src={partner.logo}
        alt={partner.alt}
        className={`max-w-full max-h-12 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 ${
          isLoading ? 'opacity-0' : ''
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

      {/* Partner name tooltip on hover */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg">
        {partner.name}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const partners: Partner[] = [
    {
      name: "RON",
      logo: "https://tse1.mm.bing.net/th/id/OIP.tqCSN7mUtMzJFVcJiJtA-AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "RON Logo"
    },
    {
      name: "SHERATON",
      logo: "https://tse4.mm.bing.net/th/id/OIP.napCUL1EohYaEzLohAJLhwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Sheraton Hotels Logo"
    },
    {
      name: "MELIA",
      logo: "https://th.bing.com/th/id/R.90fda62bd4c12d84cc86232e8890ec2f?rik=LClXxKw4g4aWgg&pid=ImgRaw&r=0",
      alt: "Melia Hotels Logo"
    },
    {
      name: "Sun World",
      logo: "https://demo-ads.vietnamnetjsc.vn/Multimedia/eMag%20template/Sun%20World%20Fansipan%20Legend/SW-FANSIPAN-LEGEND.png",
      alt: "Sun World Logo"
    },
    {
      name: "FLC",
      logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FLC-Group-H.png",
      alt: "FLC Group Logo"
    },
    {
      name: "InterContinental",
      logo: "https://www.liblogo.com/img-logo/in3067ibe7-intercontinental-logo-intercontinental-hotels-group-tii-ihg-tiicker.png",
      alt: "InterContinental Hotels Logo"
    },
    {
      name: "JW Marriott",
      logo: "https://th.bing.com/th/id/R.b3feef3c1cf35e1d2e60d45395b679ce?rik=eEEHVngCaMMO4Q&pid=ImgRaw&r=0",
      alt: "JW Marriott Logo"
    },
    {
      name: "Mandala",
      logo: "https://tse2.mm.bing.net/th/id/OIP.TNiciW2aY407vQC8vo6ISwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Mandala Logo"
    },
    {
      name: "SUNT",
      logo: "https://www.pngkey.com/png/full/73-732523_sun-logo-png-transparent-sun-microsystems.png",
      alt: "Sun Microsystems Logo"
    }
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];



  return (
    <section className="py-16 bg-blue-50-custom" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="partners-heading" className="text-2xl font-bold text-primary-custom mb-12">
          ĐỐI TÁC TIÊU BIỂU
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Chúng tôi tự hào hợp tác cùng những thương hiệu hàng đầu trong ngành khách sạn và du lịch
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden carousel-container py-8">

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className={`flex items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 ${
              prefersReducedMotion || isPaused ? '' : 'animate-scroll'
            }`}
            onMouseEnter={() => !prefersReducedMotion && setIsPaused(true)}
            onMouseLeave={() => !prefersReducedMotion && setIsPaused(false)}
            role="list"
            aria-label="Danh sách đối tác"
            aria-live="polite"
            style={{
              width: `${duplicatedPartners.length * 240}px`,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 partner-logo"
                role="listitem"
              >
                <CarouselPartnerLogo partner={partner} />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-50-custom to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-50-custom to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Và nhiều đối tác khác trên toàn thế giới
          </p>
          {prefersReducedMotion && (
            <p className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Animation đã được tắt theo cài đặt accessibility của bạn
            </p>
          )}

          {/* Performance indicator */}
          <div className="mt-4 flex justify-center items-center space-x-1">
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
