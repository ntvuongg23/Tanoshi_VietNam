import {
  FiDroplet,
  FiMail,
  FiCalendar,
  FiUsers,
  FiBarChart,
  FiShoppingCart,
  FiTruck,
  FiCreditCard,
  FiFileText,
  FiSettings,
  FiGlobe,
  FiMonitor
} from "react-icons/fi";
import {
  SiSlack,
  SiWhatsapp,
  SiGoogledrive,
  SiDiscord
} from "react-icons/si";

export default function TechnologySection() {
  // Apps theo hình ảnh Odoo
  const odooApps = [
    { name: "CRM", icon: FiUsers, color: "text-blue-600", usage: "2.5M" },
    { name: "Sales", icon: FiShoppingCart, color: "text-green-600", usage: "2.3M" },
    { name: "Invoicing", icon: FiFileText, color: "text-purple-600", usage: "2.1M" },
    { name: "Inventory", icon: FiTruck, color: "text-orange-600", usage: "1.8M" },
    { name: "Accounting", icon: FiCreditCard, color: "text-red-600", usage: "1.7M" },
    { name: "Purchase", icon: FiShoppingCart, color: "text-indigo-600", usage: "1.5M" },
    { name: "Manufacturing", icon: FiSettings, color: "text-gray-600", usage: "1.2M" },
    { name: "Project", icon: FiBarChart, color: "text-teal-600", usage: "1.1M" },
    { name: "Timesheet", icon: FiCalendar, color: "text-yellow-600", usage: "900K" },
    { name: "Field Service", icon: FiTruck, color: "text-pink-600", usage: "800K" },
    { name: "Helpdesk", icon: FiMail, color: "text-cyan-600", usage: "750K" },
    { name: "Planning", icon: FiCalendar, color: "text-lime-600", usage: "700K" },
    { name: "Marketing", icon: FiMail, color: "text-rose-600", usage: "650K" },
    { name: "Events", icon: FiCalendar, color: "text-violet-600", usage: "600K" },
    { name: "Surveys", icon: FiFileText, color: "text-amber-600", usage: "550K" },
    { name: "Rental", icon: FiTruck, color: "text-emerald-600", usage: "500K" },
    { name: "POS", icon: FiMonitor, color: "text-slate-600", usage: "450K" },
    { name: "Website", icon: FiGlobe, color: "text-sky-600", usage: "400K" },
    { name: "eCommerce", icon: FiShoppingCart, color: "text-orange-500", usage: "350K" },
    { name: "Email Marketing", icon: FiMail, color: "text-blue-500", usage: "300K" },
  ];

  // Platforms theo hình ảnh
  const platforms = [
    { name: "Slack", icon: SiSlack, color: "text-purple-600" },
    { name: "WhatsApp", icon: SiWhatsapp, color: "text-green-600" },
    { name: "Dropbox", icon: FiDroplet, color: "text-blue-600" },
    { name: "Drive", icon: SiGoogledrive, color: "text-yellow-600" },
    { name: "Teams", icon: SiDiscord, color: "text-blue-600" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Odoo Apps */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Tiết kiệm hơn với Odoo
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Hơn 7 triệu doanh nghiệp trên thế giới đã tin tưởng sử dụng Odoo
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Bạn đã dùng ứng dụng nào?</h3>
              <div className="grid grid-cols-5 gap-3">
                {platforms.map((platform, index) => {
                  const IconComponent = platform.icon;
                  return (
                    <div key={index} className="p-3 bg-white rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                      <IconComponent className={`text-2xl ${platform.color} mx-auto mb-2`} />
                      <p className="text-xs text-gray-600">{platform.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Ứng dụng</span>
                  <span className="text-sm text-gray-600">Người dùng</span>
                </div>

                {/* Top Apps */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium">CRM</span>
                    <span className="text-sm text-gray-600">2.5M người dùng</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium">Sales</span>
                    <span className="text-sm text-gray-600">2.3M người dùng</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium">Invoicing</span>
                    <span className="text-sm text-gray-600">2.1M người dùng</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium">Inventory</span>
                    <span className="text-sm text-gray-600">1.8M người dùng</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium">Accounting</span>
                    <span className="text-sm text-gray-600">1.7M người dùng</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between items-center font-semibold">
                    <span>TỔNG</span>
                    <span className="text-primary-custom">39,840,000 USD/năm</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between items-center font-semibold">
                    <span>All Odoo Apps</span>
                    <span className="text-primary-custom">1,740,000 USD/năm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Calculator */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Bạn có bao nhiêu người dùng?</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <input
                  type="number"
                  defaultValue="20"
                  className="w-20 px-3 py-1 border rounded text-center"
                />
                <span className="text-sm text-gray-600">người dùng</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Bạn tiết kiệm</span>
                <span className="text-2xl font-bold text-primary-custom">35,100,000 USD/năm</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">với một app thay vì mua từng app riêng lẻ</p>
            </div>
          </div>

          {/* Right Side - App Icons Grid */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-5 gap-4">
              {odooApps.map((app, index) => {
                const IconComponent = app.icon;
                return (
                  <div key={index} className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`p-3 rounded-lg bg-gray-100 mb-2`}>
                      <IconComponent className={`text-2xl ${app.color}`} />
                    </div>
                    <p className="text-xs text-gray-600 text-center font-medium">{app.name}</p>
                    <p className="text-xs text-gray-400">{app.usage}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
