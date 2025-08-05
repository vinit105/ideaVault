import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme.js";
import { Sun, Moon } from "lucide-react";

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "Browse Ideas",
            to: "/ideas",
        },
        {
            name: "About",
            to: "/about",
        },
    ];

    return (
        <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
                        >
                            💡 IdeaVault
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((navLink) => (
                            <Link
                                key={navLink.name}
                                to={navLink.to}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {navLink.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Submit Idea Button */}
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                            Submit Idea
                        </button>

                        {/* Sign In Button */}
                        <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                            Sign In
                        </button>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                            className="transition duration-300 ease-in-out cursor-pointer flex items-center justify-center p-2 rounded-full border bg-white dark:bg-gray-900 text-blue-800 dark:text-white border-blue-300 dark:border-purple-600 hover:bg-blue-100 dark:hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-purple-500"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-blue-600" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
