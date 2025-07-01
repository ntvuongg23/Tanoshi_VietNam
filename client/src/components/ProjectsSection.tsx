import { useState } from "react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "manufacturing",
      title: "Hệ thống ERP cho Công ty Sản xuất",
      description: "Triển khai đầy đủ các module Inventory, Manufacturing, Sales, Accounting cho công ty sản xuất.",
      category: "Manufacturing",
      categoryColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      results: [
        "Giảm 30% thời gian xử lý đơn hàng",
        "Tăng 25% hiệu suất sản xuất",
        "Tối ưu 40% quy trình kế toán"
      ]
    },
    {
      id: "retail",
      title: "Giải pháp Retail cho Chuỗi Bán lẻ",
      description: "Tích hợp POS, Inventory, e-commerce và CRM cho chuỗi cửa hàng bán lẻ đa kênh.",
      category: "Retail",
      categoryColor: "bg-green-600",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      results: [
        "Quản lý thống nhất chuỗi cửa hàng",
        "Tăng 40% doanh thu online",
        "Real-time analytics cho toàn hệ thống"
      ]
    },
    {
      id: "service",
      title: "Hệ thống Quản lý Dự án",
      description: "Customization Project Management, Timesheet, và Portfolio cho Công ty dịch vụ IT.",
      category: "Service",
      categoryColor: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      results: [
        "Theo dõi chính xác dự án real-time",
        "Tối ưu 50% quy trình finance",
        "Tăng 35% productivity"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Dự án tiêu biểu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những dự án Odoo thành công mà Tanoshi Vietnam đã triển khai
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className={`relative h-48 bg-gradient-to-br from-${project.categoryColor.split('-')[1]}-500 to-${project.categoryColor.split('-')[1]}-600 flex items-center justify-center`}>
                <span className={`${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium z-10`}>
                  {project.category}
                </span>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900">Kết quả đạt được:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
