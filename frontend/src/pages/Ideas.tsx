import React, { useState, useEffect } from 'react';

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

// --- Template for idea repetition ---
const allIdeasTemplate: Idea[] = [
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
  }
];

const repeatCount = 20;
const allIdeas: Idea[] = [];

for (let i = 0; i < repeatCount; i++) {
  for (let j = 0; j < allIdeasTemplate.length; j++) {
    const template = allIdeasTemplate[j];
    allIdeas.push({
      ...template,
      id: i * allIdeasTemplate.length + j + 1
    });
  }
}

const Ideas: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
  const stored = localStorage.getItem("favoriteIdeas");
  return stored ? JSON.parse(stored) : [];
});
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
 useEffect(() => {
    localStorage.setItem("favoriteIdeas", JSON.stringify(favoriteIds));
  }, [favoriteIds]);
  // --- Filter based on category ---
  const categoryFilteredIdeas =
    selectedCategory === 'All Categories'
      ? allIdeas
      : allIdeas.filter((idea) => idea.category === selectedCategory);

  // --- Filter based on favorite toggle ---
  const finalFilteredIdeas = showFavoritesOnly
    ? categoryFilteredIdeas.filter((idea) => favoriteIds.includes(idea.id))
    : categoryFilteredIdeas;

  const ideasPerPage = 9;
  const totalPages = Math.ceil(finalFilteredIdeas.length / ideasPerPage);

  const paginatedIdeas = finalFilteredIdeas.slice(
    (activePage - 1) * ideasPerPage,
    activePage * ideasPerPage
  );

  const handlePageClick = (page: number) => {
    setActivePage(page);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setActivePage(1);
  };

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {showFavoritesOnly ? 'Your Favorite Ideas' : 'Browse Ideas'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore innovative software project ideas licensed by our community
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search ideas..."
              className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-4">
            <select
              onChange={handleCategoryChange}
              value={selectedCategory}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
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
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`px-4 py-2 rounded-lg border ${
                showFavoritesOnly
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-yellow-600 border-yellow-400'
              }`}
            >
              {showFavoritesOnly ? 'Show All' : 'Show Favorites'}
            </button>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedIdeas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg relative"
            >
              {/* Category & Date */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`${idea.bgColor} ${idea.textColor} px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {idea.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {idea.date}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {idea.description}
              </p>

              {/* Likes & Views */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 dark:text-green-400">
                    👍 {idea.likes}
                  </span>
                  <span className="text-gray-500 dark:text-gray-300">
                    👁 {idea.views}
                  </span>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  View License
                </button>
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(idea.id)}
                className="absolute top-2 right-2 text-xl"
                title="Toggle Favorite"
              >
                {favoriteIds.includes(idea.id) ? '❤️' : '🤍'}
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActivePage((p) => Math.max(1, p - 1))}
              disabled={activePage === 1}
              className={`px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-500 ${
                activePage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-400'
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
              if (page === activePage - 2 || page === activePage + 2) {
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
              className={`px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-500 ${
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
