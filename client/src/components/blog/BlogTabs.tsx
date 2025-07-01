interface BlogTabsProps {
  activeTab: 'about' | 'gallery' | 'posts';
  onTabChange: (tab: 'about' | 'gallery' | 'posts') => void;
}

export default function BlogTabs({ activeTab, onTabChange }: BlogTabsProps) {
  const tabs = [
    { id: 'about' as const, label: 'About' },
    { id: 'gallery' as const, label: 'Gallery' },
    { id: 'posts' as const, label: 'Posts' },
  ];

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}