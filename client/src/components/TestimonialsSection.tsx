import { useState } from "react";
import { Star, ImageIcon } from "lucide-react";

interface Testimonial {
  content: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  alt: string;
}

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
}

function TestimonialAvatar({ src, alt, name }: AvatarProps) {
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
      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-4 flex items-center justify-center shadow-md ring-2 ring-white">
        <span className="text-white font-semibold text-sm">
          {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-12 h-12 mr-4 flex-shrink-0">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse flex items-center justify-center">
          <ImageIcon className="w-5 h-5 text-gray-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md transition-all duration-300 hover:ring-blue-200 hover:shadow-lg hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />

      {/* Online indicator */}
      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      content: "Tanoshi Vietnam đã giúp chúng tôi triển khai Odoo một cách chuyên nghiệp và hiệu quả. Đội ngũ support rất tận tâm và quy trình triển khai rất chặt chẽ.",
      name: "Nguyễn Văn Minh",
      position: "Giám đốc IT - ABC Manufacturing",
      company: "ABC Manufacturing Co.",
      avatar: "https://tse4.mm.bing.net/th/id/OIP.s8EyCPda98ucKviFG7VndQHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Nguyễn Văn Minh - Giám đốc IT ABC Manufacturing"
    },
    {
      content: "Sau khi triển khai Odoo với Tanoshi, việc quản lý kho hàng của chúng tôi đã trở nên dễ dàng hơn rất nhiều. Thời gian xử lý đơn hàng giảm đáng kể.",
      name: "Trần Thị Hương",
      position: "CFO - XYZ Retail Chain",
      company: "XYZ Retail Co.",
      avatar: "https://tse1.explicit.bing.net/th/id/OIP.V1lXtOCEgQ8RRRjtdO9UVQHaLO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Trần Thị Hương - CFO XYZ Retail Chain"
    },
    {
      content: "Chúng tôi đã làm việc với nhiều nhà cung cấp ERP khác nhưng Tanoshi Vietnam là đối tác tốt nhất. Customization chính xác, training tỉ mỉ và sau-sale tuyệt vời.",
      name: "Lê Hoàng Nam",
      position: "CEO - Tech Solutions Ltd",
      company: "Tech Solutions Ltd",
      avatar: "https://tse1.mm.bing.net/th/id/OIP.kO1ra7OG8Du7ei5iqDEQ1QHaLs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Lê Hoàng Nam - CEO Tech Solutions Ltd"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Khách hàng nói về chúng tôi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hơn 100+ doanh nghiệp đã tin tưởng và hài lòng với dịch vụ Odoo của Tanoshi Vietnam
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              {/* Rating Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    size={16}
                    className="transition-transform duration-200 group-hover:scale-110"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                <span className="text-blue-500 text-2xl leading-none">"</span>
                {testimonial.content}
                <span className="text-blue-500 text-2xl leading-none">"</span>
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <TestimonialAvatar
                  src={testimonial.avatar}
                  alt={testimonial.alt}
                  name={testimonial.name}
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 font-medium">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
