export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Về Go Parking</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi đang số hóa cách thức đỗ xe tại Việt Nam với công nghệ AI và IoT tiên tiến
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Sứ mệnh của chúng tôi</h3>
            <p className="text-gray-600 leading-relaxed">
              Go Parking được thành lập với mục tiêu giải quyết vấn đề đỗ xe khó khăn tại các thành phố lớn. Chúng tôi tin rằng công nghệ có thể mang lại sự thuận tiện và tối ưu hóa trải nghiệm đỗ xe cho mọi người.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực công nghệ và quản lý đô thị, chúng tôi không ngừng đổi mới để đem đến giải pháp tối ưu cho khách hàng.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-blue-50-custom rounded-lg">
                <div className="text-3xl font-bold text-primary-custom">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Bãi xe đối tác</div>
              </div>
              <div className="text-center p-4 bg-blue-50-custom rounded-lg">
                <div className="text-3xl font-bold text-primary-custom">50k+</div>
                <div className="text-sm text-gray-600 mt-1">Người dùng hài lòng</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Drone technology" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
