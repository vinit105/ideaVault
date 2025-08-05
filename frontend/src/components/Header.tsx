import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

const navLinks = [
  {
    name:"Home",
    to:"/"
  },
  {
    name:"Browse Ideas",
    to:"/ideas"
  },
  {
    name:"About",
    to:"/about"
  }
]


  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              💡 IdeaVault
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((navLink)=>(
              <Link 
              key={navLink.name}
              to={navLink.to}
              className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              {navLink.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Submit Idea
            </button>
            <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
