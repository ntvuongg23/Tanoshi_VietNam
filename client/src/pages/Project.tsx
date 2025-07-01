import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, Folder, FileText, ExternalLink, GitBranch, Globe } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  type: 'category' | 'project';
  children?: ProjectItem[];
  description?: string;
  image?: string;
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

const projectData: ProjectItem[] = [
  {
    id: 'web-development',
    title: 'Phát triển Web',
    type: 'category',
    children: [
      {
        id: 'frontend-projects',
        title: 'E-Commerce',
        type: 'category',
        children: [
          {
            id: 'Metric tạo ra báo cáo phân tích dữ liệu thị trường chỉ trong 30 giây',
            title: 'Metric tạo ra báo cáo phân tích dữ liệu thị trường chỉ trong 30 giây',
            type: 'project',
            description: 'Dashboard hiện đại với React, TypeScript và Material-UI. Bao gồm biểu đồ, bảng dữ liệu và quản lý người dùng.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['React', 'TypeScript', 'Material-UI', 'Chart.js'],
            demoUrl: 'https://metric.vn/',
            githubUrl: 'https://github.com/example/react-dashboard',
            status: 'completed'
          },
          {
            id: 'vue-portfolio',
            title: 'Vue.js Portfolio Website',
            type: 'project',
            description: 'Website portfolio cá nhân được xây dựng với Vue.js 3, Composition API và Tailwind CSS.',
            image: 'https://i.ytimg.com/vi/7yd5Q6b-rss/maxresdefault.jpg',
            technologies: ['Vue.js', 'Composition API', 'Tailwind CSS', 'Vite'],
            demoUrl: 'https://demo-portfolio.example.com',
            githubUrl: 'https://github.com/example/vue-portfolio',
            status: 'completed'
          }
        ]
      },
      {
        id: 'backend-projects',
        title: 'Backend Projects',
        type: 'category',
        children: [
          {
            id: 'rest-api',
            title: 'RESTful API với Node.js',
            type: 'project',
            description: 'API RESTful hoàn chỉnh với authentication, authorization, và CRUD operations. Sử dụng Express.js và MongoDB.',
            image: 'https://user-images.githubusercontent.com/34340232/153480904-1983e530-fca7-4ffe-9bd0-35ab0a2b34e9.png',
            technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
            githubUrl: 'https://github.com/example/rest-api',
            status: 'completed'
          },
          {
            id: 'graphql-api',
            title: 'GraphQL API Server',
            type: 'project',
            description: 'Server GraphQL với Apollo Server, hỗ trợ subscriptions và real-time updates.',
            image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/graphql-mutation-1.jpg',
            technologies: ['GraphQL', 'Apollo Server', 'PostgreSQL', 'Redis'],
            githubUrl: 'https://github.com/example/graphql-api',
            status: 'in-progress'
          }
        ]
      },
      {
        id: 'fullstack-projects',
        title: 'Fullstack Projects',
        type: 'category',
        children: [
          {
            id: 'ecommerce-platform',
            title: 'Nền tảng Thương mại Điện tử',
            type: 'project',
            description: 'Hệ thống thương mại điện tử hoàn chỉnh với quản lý sản phẩm, giỏ hàng, thanh toán và quản lý đơn hàng.',
            image: 'https://the7.vn/wp-content/uploads/2021/06/cac-buoc-xay-dung-website-thuong-mai-dien-tu-5.png',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: 'https://demo-ecommerce.example.com',
            githubUrl: 'https://github.com/example/ecommerce',
            status: 'completed'
          },
          {
            id: 'cms-system',
            title: 'Hệ thống Quản lý Nội dung',
            type: 'project',
            description: 'CMS linh hoạt cho phép tạo và quản lý nội dung website một cách dễ dàng.',
            image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1200,h_565/https://dichvuquantriweb.com/wp-content/uploads/2020/01/dichvuquantriweb-quan-ly-noi-dung-website-de-hay-kho-01-1200x565.jpg',
            technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
            demoUrl: 'https://demo-cms.example.com',
            githubUrl: 'https://github.com/example/cms',
            status: 'completed'
          },
          {
            id: 'social-media-app',
            title: 'Ứng dụng Mạng xã hội',
            type: 'project',
            description: 'Nền tảng mạng xã hội với tính năng đăng bài, bình luận, like và chat real-time.',
            image: 'https://tse1.mm.bing.net/th/id/OIP.dRPd1EB5Iq391s7eWJf9GAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
            demoUrl: 'https://demo-social.example.com',
            status: 'in-progress'
          }
        ]
      }
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Ứng dụng Di động',
    type: 'category',
    children: [
      {
        id: 'react-native-apps',
        title: 'React Native Apps',
        type: 'category',
        children: [
          {
            id: 'fitness-tracker',
            title: 'Ứng dụng Theo dõi Sức khỏe',
            type: 'project',
            description: 'Ứng dụng theo dõi hoạt động thể chất, dinh dưỡng và sức khỏe tổng thể với tích hợp wearable devices.',
            image: 'https://th.bing.com/th/id/R.10e8c7e297c12968cdf86ff707d9cacb?rik=S2jFZbptLv0ICQ&pid=ImgRaw&r=0',
            technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
            demoUrl: 'https://play.google.com/store/apps/details?id=com.example.fitness',
            status: 'in-progress'
          },
          {
            id: 'expense-tracker',
            title: 'Ứng dụng Quản lý Chi tiêu',
            type: 'project',
            description: 'Ứng dụng theo dõi thu chi cá nhân với phân tích thống kê và báo cáo chi tiết.',
            image: 'https://th.bing.com/th/id/R.9d5f2ddee313e71678ab29258b14a45f?rik=2e4CrApVYMUAHA&pid=ImgRaw&r=0',
            technologies: ['React Native', 'SQLite', 'Expo', 'Victory Charts'],
            githubUrl: 'https://github.com/example/expense-tracker',
            status: 'completed'
          }
        ]
      },
      {
        id: 'flutter-apps',
        title: 'Flutter Apps',
        type: 'category',
        children: [
          {
            id: 'food-delivery',
            title: 'Ứng dụng Giao đồ ăn',
            type: 'project',
            description: 'Nền tảng giao đồ ăn với tính năng đặt hàng, theo dõi đơn hàng real-time và thanh toán đa dạng.',
            image: 'https://www.emg.com.vn/wp-content/uploads/2022/01/cach-dat-do-an-tren-ung-dung-baemin.png',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
            status: 'planned'
          },
          {
            id: 'learning-app',
            title: 'Ứng dụng Học tập',
            type: 'project',
            description: 'Nền tảng học tập trực tuyến với video lessons, quiz và theo dõi tiến độ học tập.',
            image: 'https://th.bing.com/th/id/R.bb928123afe7e860afc262d29142b92b?rik=jPwugPGaoEZzPg&pid=ImgRaw&r=0',
            technologies: ['Flutter', 'Dart', 'Node.js', 'MongoDB'],
            demoUrl: 'https://demo-learning.example.com',
            status: 'in-progress'
          }
        ]
      },
      {
        id: 'native-apps',
        title: 'Native Apps',
        type: 'category',
        children: [
          {
            id: 'ios-weather',
            title: 'iOS Weather App',
            type: 'project',
            description: 'Ứng dụng thời tiết native iOS với UI/UX hiện đại và dự báo chi tiết.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Swift', 'UIKit', 'Core Location', 'Weather API'],
            githubUrl: 'https://github.com/example/ios-weather',
            status: 'completed'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    type: 'category',
    children: [
      {
        id: 'nlp-projects',
        title: 'Natural Language Processing',
        type: 'category',
        children: [
          {
            id: 'chatbot-ai',
            title: 'Chatbot AI Thông minh',
            type: 'project',
            description: 'Chatbot sử dụng AI để hỗ trợ khách hàng tự động với khả năng hiểu ngôn ngữ tự nhiên và context awareness.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Python', 'TensorFlow', 'BERT', 'FastAPI'],
            demoUrl: 'https://demo-chatbot.example.com',
            githubUrl: 'https://github.com/example/ai-chatbot',
            status: 'completed'
          },
          {
            id: 'sentiment-analysis',
            title: 'Phân tích Cảm xúc',
            type: 'project',
            description: 'Hệ thống phân tích cảm xúc từ text và social media posts sử dụng deep learning.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Python', 'NLTK', 'Transformers', 'Streamlit'],
            githubUrl: 'https://github.com/example/sentiment-analysis',
            status: 'completed'
          }
        ]
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision',
        type: 'category',
        children: [
          {
            id: 'image-recognition',
            title: 'Nhận diện Hình ảnh',
            type: 'project',
            description: 'Hệ thống nhận diện và phân loại hình ảnh sử dụng CNN và transfer learning.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Python', 'PyTorch', 'OpenCV', 'Docker'],
            demoUrl: 'https://demo-vision.example.com',
            status: 'in-progress'
          },
          {
            id: 'face-detection',
            title: 'Nhận diện Khuôn mặt',
            type: 'project',
            description: 'Ứng dụng nhận diện và xác thực khuôn mặt real-time với độ chính xác cao.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Python', 'OpenCV', 'dlib', 'Flask'],
            githubUrl: 'https://github.com/example/face-detection',
            status: 'completed'
          }
        ]
      },
      {
        id: 'data-science',
        title: 'Data Science',
        type: 'category',
        children: [
          {
            id: 'sales-prediction',
            title: 'Dự đoán Doanh số',
            type: 'project',
            description: 'Mô hình machine learning dự đoán doanh số bán hàng dựa trên dữ liệu lịch sử.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
            githubUrl: 'https://github.com/example/sales-prediction',
            status: 'completed'
          }
        ]
      }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    type: 'category',
    children: [
      {
        id: 'defi-projects',
        title: 'DeFi Projects',
        type: 'category',
        children: [
          {
            id: 'nft-marketplace',
            title: 'Sàn giao dịch NFT',
            type: 'project',
            description: 'Nền tảng tạo, mua bán và giao dịch NFT trên blockchain Ethereum với smart contracts bảo mật.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Solidity', 'Web3.js', 'React', 'IPFS'],
            demoUrl: 'https://demo-nft.example.com',
            githubUrl: 'https://github.com/example/nft-marketplace',
            status: 'completed'
          },
          {
            id: 'defi-lending',
            title: 'DeFi Lending Platform',
            type: 'project',
            description: 'Nền tảng cho vay phi tập trung với yield farming và liquidity mining.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Solidity', 'Hardhat', 'Next.js', 'Ethers.js'],
            status: 'in-progress'
          }
        ]
      },
      {
        id: 'crypto-tools',
        title: 'Crypto Tools',
        type: 'category',
        children: [
          {
            id: 'portfolio-tracker',
            title: 'Crypto Portfolio Tracker',
            type: 'project',
            description: 'Ứng dụng theo dõi danh mục đầu tư cryptocurrency với real-time prices và analytics.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['React', 'CoinGecko API', 'Chart.js', 'Firebase'],
            demoUrl: 'https://demo-crypto-tracker.example.com',
            status: 'completed'
          }
        ]
      }
    ]
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    type: 'category',
    children: [
      {
        id: 'ci-cd-pipelines',
        title: 'CI/CD Pipelines',
        type: 'category',
        children: [
          {
            id: 'docker-kubernetes',
            title: 'Docker & Kubernetes Setup',
            type: 'project',
            description: 'Containerization và orchestration setup cho microservices với monitoring và logging.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Docker', 'Kubernetes', 'Helm', 'Prometheus'],
            githubUrl: 'https://github.com/example/k8s-setup',
            status: 'completed'
          },
          {
            id: 'terraform-aws',
            title: 'AWS Infrastructure as Code',
            type: 'project',
            description: 'Infrastructure automation trên AWS sử dụng Terraform và CloudFormation.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Terraform', 'AWS', 'CloudFormation', 'Ansible'],
            githubUrl: 'https://github.com/example/aws-terraform',
            status: 'completed'
          }
        ]
      },
      {
        id: 'monitoring-tools',
        title: 'Monitoring & Observability',
        type: 'category',
        children: [
          {
            id: 'elk-stack',
            title: 'ELK Stack Implementation',
            type: 'project',
            description: 'Hệ thống logging và monitoring tập trung sử dụng Elasticsearch, Logstash và Kibana.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats'],
            githubUrl: 'https://github.com/example/elk-stack',
            status: 'in-progress'
          }
        ]
      }
    ]
  },
  {
    id: 'game-development',
    title: 'Game Development',
    type: 'category',
    children: [
      {
        id: 'unity-games',
        title: 'Unity Games',
        type: 'category',
        children: [
          {
            id: '2d-platformer',
            title: '2D Platformer Game',
            type: 'project',
            description: 'Game platformer 2D với physics, animations và level design sử dụng Unity.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Unity', 'C#', 'Photoshop', 'Audacity'],
            demoUrl: 'https://play.unity.com/mg/other/2d-platformer',
            status: 'completed'
          }
        ]
      },
      {
        id: 'web-games',
        title: 'Web Games',
        type: 'category',
        children: [
          {
            id: 'puzzle-game',
            title: 'HTML5 Puzzle Game',
            type: 'project',
            description: 'Game puzzle browser-based sử dụng HTML5 Canvas và JavaScript.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['HTML5', 'JavaScript', 'Canvas API', 'Web Audio API'],
            demoUrl: 'https://demo-puzzle.example.com',
            githubUrl: 'https://github.com/example/html5-puzzle',
            status: 'completed'
          }
        ]
      }
    ]
  },
  {
    id: 'iot-embedded',
    title: 'IoT & Embedded Systems',
    type: 'category',
    children: [
      {
        id: 'arduino-projects',
        title: 'Arduino Projects',
        type: 'category',
        children: [
          {
            id: 'smart-home',
            title: 'Smart Home System',
            type: 'project',
            description: 'Hệ thống nhà thông minh với Arduino, sensors và mobile app control.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Arduino', 'ESP32', 'React Native', 'MQTT'],
            githubUrl: 'https://github.com/example/smart-home',
            status: 'in-progress'
          }
        ]
      },
      {
        id: 'raspberry-pi',
        title: 'Raspberry Pi Projects',
        type: 'category',
        children: [
          {
            id: 'weather-station',
            title: 'IoT Weather Station',
            type: 'project',
            description: 'Trạm thời tiết IoT với Raspberry Pi, sensors và web dashboard.',
            image: 'https://static2-images.vnncdn.net/files/publish/2022/12/26/metricvn-1240.png',
            technologies: ['Raspberry Pi', 'Python', 'Flask', 'SQLite'],
            githubUrl: 'https://github.com/example/weather-station',
            status: 'completed'
          }
        ]
      }
    ]
  }
];

// Helper function to find first project
const findFirstProject = (items: ProjectItem[]): ProjectItem | null => {
  for (const item of items) {
    if (item.type === 'project') {
      return item;
    }
    if (item.children) {
      const found = findFirstProject(item.children);
      if (found) return found;
    }
  }
  return null;
};

export default function Project() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['web-development', 'frontend-projects']));
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    findFirstProject(projectData)
  );

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const selectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const renderCategoryTree = (items: ProjectItem[], level: number = 0, isMobile: boolean = false) => {
    return items.map((item) => (
      <div key={item.id} style={{ marginLeft: `${level * 12}px` }}>
        {item.type === 'category' ? (
          <>
            <button
              onClick={() => toggleCategory(item.id)}
              className="flex items-center w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Folder className="w-4 h-4 mr-2 text-gray-500" />
              <span className="flex-1 font-medium">{item.title}</span>
              {expandedCategories.has(item.id) ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {expandedCategories.has(item.id) && item.children && (
              <div className="mt-2 space-y-1">
                {renderCategoryTree(item.children, level + 1, isMobile)}
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => {
              selectProject(item);
              if (isMobile) {
                setExpandedCategories(new Set()); // Close mobile menu
              }
            }}
            className={`flex items-center w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
              selectedProject?.id === item.id
                ? 'bg-blue-100 text-blue-700 border-l-2 border-blue-500'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="w-4 h-4 mr-2" />
            <span className="flex-1">{item.title}</span>
          </button>
        )}
      </div>
    ));
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'planned':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'Hoàn thành';
      case 'in-progress':
        return 'Đang phát triển';
      case 'planned':
        return 'Lên kế hoạch';
      default:
        return 'Không xác định';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding-top to account for fixed navbar */}
      <div className="flex pt-20">
        {/* Sidebar */}
        <div className="w-80 bg-gray-50 border-r border-gray-200 min-h-screen sticky top-20 hidden lg:block">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Danh mục Dự án</h1>
            
            <nav className="space-y-2">
              {renderCategoryTree(projectData)}
            </nav>
          </div>
        </div>

        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden fixed top-20 left-4 z-10">
          <button
            onClick={() => setExpandedCategories(new Set(expandedCategories.size > 0 ? [] : ['web-development']))}
            className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg"
          >
            <Folder className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {expandedCategories.size > 0 && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20 top-20">
            <div className="w-80 bg-gray-50 border-r border-gray-200 h-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Danh mục Dự án</h1>
                  <button
                    onClick={() => setExpandedCategories(new Set())}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {renderCategoryTree(projectData, 0, true)}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8 lg:ml-0">
          {selectedProject ? (
            <div className="max-w-4xl mx-auto">
              {/* Project Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {getStatusText(selectedProject.status)}
                  </span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Project Image */}
              {selectedProject.image && (
                <div className="mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Technologies */}
              {selectedProject.technologies && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Công nghệ sử dụng</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Xem Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors w-full sm:w-auto"
                  >
                    <GitBranch className="w-5 h-5 mr-2" />
                    Mã nguồn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Chọn một dự án</h2>
              <p className="text-gray-600">Vui lòng chọn một dự án từ danh mục bên trái để xem chi tiết.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
