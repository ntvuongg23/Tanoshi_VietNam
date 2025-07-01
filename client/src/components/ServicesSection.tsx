import { Code, Wrench, GraduationCap, Headphones, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      title: "Triển khai Odoo",
      description: "Cài đặt và cấu hình hệ thống Odoo hoàn chỉnh phù hợp với quy trình kinh doanh của bạn",
      features: [
        "Phân tích yêu cầu",
        "Cấu hình hệ thống", 
        "Migration dữ liệu",
        "Đào tạo người dùng"
      ]
    },
    {
      icon: Wrench,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Tùy chỉnh & Phát triển",
      description: "Phát triển module và tính năng đặc thù phù hợp với doanh nghiệp",
      features: [
        "Custom modules",
        "API Integration",
        "Third party connectors",
        "Mobile application"
      ]
    },
    {
      icon: GraduationCap,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      title: "Đào tạo & Hỗ trợ",
      description: "Đào tạo nhân viên sử dụng Odoo hiệu quả và hỗ trợ kỹ thuật 24/7",
      features: [
        "User training",
        "Admin training",
        "Documentation",
        "24/7 support"
      ]
    },
    {
      icon: Headphones,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "Bảo trì & Nâng cấp",
      description: "Đảm bảo hệ thống luôn được vận hành và cập nhật những tính năng mới nhất",
      features: [
        "System maintenance",
        "Version upgrade",
        "Performance optimization",
        "Security updates"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Dịch vụ của chúng tôi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tanoshi Vietnam cung cấp giải pháp Odoo toàn diện từ tư vấn, triển khai đến hỗ trợ dài hạn
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`${service.iconColor}`} size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
