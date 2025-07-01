import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectData {
  title: string;
  content: React.ReactNode;
}

const projectData: Record<string, ProjectData> = {
  manufacturing: {
    title: 'Hệ thống ERP cho Công ty Sản xuất',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Dự án triển khai hệ thống ERP toàn diện cho công ty sản xuất với hơn 500 nhân viên, 
          bao gồm các module Inventory, Manufacturing, Sales, Accounting và HR.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Thách thức</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Quy trình sản xuất phức tạp với nhiều giai đoạn
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Quản lý kho nguyên liệu và thành phẩm
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Tích hợp với hệ thống legacy
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Báo cáo real-time cho management
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Giải pháp</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Custom Manufacturing module cho quy trình riêng
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                API integration với máy móc sản xuất
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Barcode tracking toàn bộ quy trình
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Dashboard executive cho leadership
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Kết quả đạt được</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-custom">30%</div>
              <div className="text-sm text-gray-600">Giảm thời gian xử lý đơn hàng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-custom">25%</div>
              <div className="text-sm text-gray-600">Tăng hiệu suất sản xuất</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-custom">40%</div>
              <div className="text-sm text-gray-600">Tối ưu quy trình kế toán</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  retail: {
    title: 'Giải pháp Retail cho Chuỗi Bán lẻ',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Triển khai hệ thống quản lý chuỗi bán lẻ với 20+ cửa hàng, tích hợp POS, e-commerce 
          và quản lý kho tập trung.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tính năng chính</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Multi-store POS system
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Centralized inventory management
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                E-commerce integration
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Customer loyalty program
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Lợi ích</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Quản lý thống nhất toàn chuỗi
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Real-time stock monitoring
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Omnichannel customer experience
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Advanced analytics & reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  service: {
    title: 'Hệ thống Quản lý Dự án',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Customization Project Management system cho công ty dịch vụ IT với 100+ nhân viên, 
          quản lý timesheet và portfolio dự án.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Module tùy chỉnh</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Advanced Project Planning
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Resource allocation & scheduling
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Timesheet với AI tracking
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-custom rounded-full mr-2 mt-2"></div>
                Automated invoicing
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tích hợp</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Jira & GitHub integration
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Slack notifications
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Google Workspace sync
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1" size={16} />
                Banking API cho payments
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default function ProjectModal() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    const handleProjectClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const projectCard = target.closest('[data-project]') as HTMLElement;
      if (projectCard) {
        const projectId = projectCard.getAttribute('data-project');
        if (projectId && projectData[projectId]) {
          setSelectedProject(projectId);
        }
      }
    };

    // Add event listeners to project cards
    const projectCards = document.querySelectorAll('[data-project]');
    projectCards.forEach(card => {
      card.addEventListener('click', handleProjectClick);
    });

    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('click', handleProjectClick);
      });
    };
  }, []);

  const currentProject = selectedProject ? projectData[selectedProject] : null;

  return (
    <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
            {currentProject?.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          {currentProject?.content}
        </div>
      </DialogContent>
    </Dialog>
  );
}
