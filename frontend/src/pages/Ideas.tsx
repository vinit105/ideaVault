import React from 'react';

const Ideas: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Ideas
          </h1>
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
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Web Apps</option>
              <option>Mobile Apps</option>
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
          {/* Sample Idea Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Web App
              </span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Smart Recipe Optimizer
            </h3>
            <p className="text-gray-600 mb-4">
              AI-powered app that optimizes recipes based on available ingredients, 
              dietary restrictions, and nutritional goals.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">👍 12</span>
                <span className="text-gray-500">👁 45</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                View License
              </button>
            </div>
          </div>

          {/* More sample cards would go here */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Mobile App
              </span>
              <span className="text-gray-500 text-sm">5 days ago</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Micro-Learning Platform
            </h3>
            <p className="text-gray-600 mb-4">
              Mobile app for delivering personalized 5-minute learning sessions 
              based on user interests and schedule.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">👍 8</span>
                <span className="text-gray-500">👁 32</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                View License
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                AI/ML
              </span>
              <span className="text-gray-500 text-sm">1 week ago</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Code Review Assistant
            </h3>
            <p className="text-gray-600 mb-4">
              AI assistant that provides intelligent code reviews, suggests improvements, 
              and identifies potential security vulnerabilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">👍 24</span>
                <span className="text-gray-500">👁 87</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                View License
              </button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
