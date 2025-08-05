import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const keyFeatures = [
        {
            icon: "📝",
            title: "Register Ideas",
            desc: "Register your software ideas with attribution license and timestamped proof",
        },
        {
            icon: "🧾",
            title: "1% Revenue Model",
            desc: "Enforceable 1% gross revenue clause via our unique licensing system",
        },
        {
            icon: "🛡",
            title: "License Certificates",
            desc: "Download official license certificates for each idea submission",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white dark:from-purple-900 dark:to-purple-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            💡 License Your Ideas.
                            <br />
                            Get Recognized.
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 dark:text-white/80">
                            Welcome to IdeaVault, where original software project ideas get the
                            credit they deserve under a unique 1% attribution model.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105 dark:hover:bg-purple-100 dark:hover:text-purple-900">
                                Submit Your Idea
                            </button>
                            <Link
                                to="/ideas"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105 dark:hover:bg-purple-100 dark:hover:text-purple-900"
                            >
                                Browse Ideas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Key Features
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Protect and monetize your creative software ideas with our innovative
                            platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {keyFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="text-center p-6 border-2 border-blue-100 rounded-lg hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:bg-blue-50 transform hover:-translate-y-1 dark:border-purple-700 dark:hover:border-purple-400 dark:hover:bg-purple-950"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 dark:bg-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to License Your Ideas?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join our community of innovative developers and founders. Start protecting
                        your ideas today.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 dark:bg-purple-600 dark:hover:bg-purple-700">
                        Get Started Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
