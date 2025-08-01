import React, { useState } from 'react';

interface Idea {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  likes: number;
  views: number;
  bgColor: string;
  textColor: string;
}

const allIdeas: Idea[] = [
  {
    id: 1,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 2,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 3,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 4,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 5,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 6,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 7,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 8,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 9,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 10,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 11,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 12,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 13,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 14,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 15,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 16,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 17,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 18,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 19,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 20,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 21,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 22,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 23,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 24,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 25,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 26,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 27,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 28,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 29,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 30,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 31,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 32,
    title: 'Micro-Learning Platform',
    category: 'Mobile App',
    date: '5 days ago',
    description:
      '5-minute learning sessions based on user interests and schedule.',
    likes: 8,
    views: 32,
    bgColor: "bg-green-100",
    textColor: "text-green-800"
  },
  {
    id: 33,
    title: 'Code Review Assistant',
    category: 'AI/ML',
    date: '1 week ago',
    description:
      'AI assistant that reviews code and detects security flaws.',
    likes: 24,
    views: 87,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800"
  },{
    id: 34,
    title: 'Smart Recipe Optimizer',
    category: 'Web App',
    date: '2 days ago',
    description:
      'AI-powered app that optimizes recipes based on available ingredients.',
    likes: 12,
    views: 45,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  }
  // ➕ Add more dummy items to test pagination (up to 15–20+)
];

const Ideas: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredIdeas =
    selectedCategory === 'All Categories'
      ? allIdeas
      : allIdeas.filter((idea) => idea.category === selectedCategory);

  
  const ideasPerPage = 9;
  const totalPages = Math.ceil(allIdeas.length / ideasPerPage);

  const paginatedIdeas = filteredIdeas.slice(
    (activePage - 1) * ideasPerPage,
    activePage * ideasPerPage
  );

  const handlePageClick = (page: number) => {
    setActivePage(page);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setActivePage(1); // reset to page 1 when filter changes
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Ideas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore innovative software project ideas licensed by our community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search ideas..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select onChange={handleCategoryChange}
              value={selectedCategory}  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Web App</option>
              <option>Mobile App</option>
              <option>AI/ML</option>
              <option>Blockchain</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Sort by Latest</option>
              <option>Sort by Popular</option>
              <option>Sort by Revenue</option>
            </select>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedIdeas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={` ${idea.bgColor} ${idea.textColor} px-3 py-1 rounded-full text-sm font-medium`}>
                  {idea.category}
                </span>
                <span className="text-gray-500 text-sm">{idea.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{idea.title}</h3>
              <p className="text-gray-600 mb-4">{idea.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">👍 {idea.likes}</span>
                  <span className="text-gray-500">👁 {idea.views}</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  View License
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActivePage((p) => Math.max(1, p - 1))}
              disabled={activePage === 1}
              className={`px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 ${
                activePage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-400'
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= activePage - 1 && page <= activePage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-2 rounded-md text-sm ${
                      activePage === page
                        ? 'bg-blue-600 text-white'
                        : 'border text-gray-400 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              }
              if (
                page === activePage - 2 ||
                page === activePage + 2
              ) {
                return (
                  <span key={`dots-${page}`} className="px-2 text-gray-400">
                    ...
                  </span>
                );
              }
              return null;
            })}

            <button
              onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))}
              disabled={activePage === totalPages}
              className={`px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 ${
                activePage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-400'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
