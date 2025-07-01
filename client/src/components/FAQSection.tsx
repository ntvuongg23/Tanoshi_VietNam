import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Go Parking hoạt động như thế nào?",
      answer: "Go Parking sử dụng công nghệ AI và IoT để quản lý bãi đỗ xe thông minh. Người dùng có thể tìm kiếm, đặt chỗ và thanh toán qua ứng dụng di động một cách dễ dàng."
    },
    {
      question: "Ứng dụng có miễn phí không?",
      answer: "Ứng dụng Go Parking hoàn toàn miễn phí để tải xuống và sử dụng. Bạn chỉ phải trả phí đỗ xe theo giá niêm yết của từng bãi xe."
    },
    {
      question: "Có thể đặt chỗ trước không?",
      answer: "Có, bạn có thể đặt chỗ trước từ 1 giờ đến 24 giờ tùy theo chính sách của từng bãi xe. Điều này giúp đảm bảo bạn luôn có chỗ đỗ khi cần."
    },
    {
      question: "Nếu xe bị hỏng ở bãi đỗ thì sao?",
      answer: "Chúng tôi có đội ngũ hỗ trợ kỹ thuật 24/7 và bảo hiểm xe cho trường hợp khẩn cấp. Bạn có thể liên hệ hotline để được hỗ trợ nhanh chóng."
    },
    {
      question: "Go Parking có hỗ trợ ở thành phố nào?",
      answer: "Hiện tại Go Parking đang hoạt động tại Hà Nội, TP.HCM, Đà Nẵng, và Cần Thơ. Chúng tôi đang mở rộng dịch vụ ra các tỉnh thành khác trong năm 2024."
    },
    {
      question: "Làm sao để trở thành đối tác của Go Parking?",
      answer: "Bạn có thể đăng ký làm đối tác qua website hoặc liên hệ trực tiếp với đội ngũ phát triển kinh doanh của chúng tôi. Chúng tôi hỗ trợ thiết bị và đào tạo miễn phí cho đối tác."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Câu hỏi thường gặp</h2>
          <p className="text-xl text-gray-600">
            Tìm hiểu thêm về Go Parking qua những câu hỏi phổ biến
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`text-gray-400 transform transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                    size={20}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Không tìm thấy câu trả lời?{" "}
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-primary-custom hover:underline font-medium"
            >
              Liên hệ với chúng tôi
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
