import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  isVisible: boolean;
}

function AnimatedCounter({ end, duration, isVisible }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    console.log('Starting animation for:', end); // Debug log
    setHasAnimated(true);

    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end, duration, isVisible, hasAnimated]);

  const formatNumber = (num: number) => {
    if (end >= 50000) {
      return num >= 50000 ? '50k+' : `${Math.floor(num / 1000)}k${num >= 1000 ? '+' : ''}`;
    } else if (end >= 1000) {
      return num >= 1000 ? '1000+' : num.toString();
    }
    return num.toString();
  };

  return <span>{formatNumber(count)}</span>;
}

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback: Also try scroll-based detection
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          console.log('Section is in viewport via scroll'); // Debug log
          setIsVisible(true);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection observed:', entry.isIntersecting); // Debug log
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Add scroll listener as fallback
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Tanoshi Vietnam</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We drive digital transformation through intelligent software solutions and user-centric design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Tanoshi Vietnam was founded with the mission to help businesses unlock their full potential through innovative technology solutions. We believe that great software should be both powerful and intuitive, enabling organizations to streamline operations and accelerate growth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With our team of experienced developers, designers, and digital strategists, we continuously push the boundaries of what's possible, delivering solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-blue-50-custom rounded-lg">
                <div className="text-3xl font-bold text-primary-custom">
                  <AnimatedCounter end={1000} duration={2500} isVisible={isVisible} />
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50-custom rounded-lg">
                <div className="text-3xl font-bold text-primary-custom">
                  <AnimatedCounter end={50000} duration={2800} isVisible={isVisible} />
                </div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Software development team collaboration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
