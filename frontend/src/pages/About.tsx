import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            About <span className="text-blue-600">IdeaVault</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An open-source SaaS platform that empowers developers and founders 
            to license their original software project ideas under a unique 1% attribution model.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mission Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 transition hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-8 bg-blue-600 rounded-full mr-4"></span>
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that great ideas deserve recognition and fair compensation. Our platform 
              provides a digital timestamp and licensing model for your startup or project idea, 
              ensuring you get credited and compensated when others build upon your innovations.
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl border border-blue-300 p-8 text-white transition hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Platform Stats</h3>
            <div className="space-y-4">
              <div className="hover:scale-105 transform transition">
                <div className="text-3xl font-bold">1%</div>
                <div className="text-blue-100">Revenue Attribution</div>
              </div>
              <div className="hover:scale-105 transform transition">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-100">Open Source</div>
              </div>
              <div className="hover:scale-105 transform transition">
                <div className="text-3xl font-bold">∞</div>
                <div className="text-blue-100">Ideas Welcome</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-16 transition hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Submit Your Idea",
                description: "Register your software project idea with detailed description and implementation concepts.",
                icon: "💡"
              },
              {
                step: "2", 
                title: "Get Timestamped Proof",
                description: "Receive a timestamped certificate with hash verification for legal protection.",
                icon: "🔒"
              },
              {
                step: "3",
                title: "Earn Attribution", 
                description: "When someone builds your idea commercially, they must attribute you and share 1% of gross revenue.",
                icon: "💰"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* 1% Model */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-8 bg-green-500 rounded-full mr-4"></span>
              The 1% Model
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Under our modified MIT-style license, your idea is publicly registered and others 
              must attribute you and share 1% of their revenue if they use it commercially. 
              This creates a fair ecosystem where innovation is rewarded while still encouraging 
              open collaboration.
            </p>
          </div>

          {/* Open Source */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-8 bg-purple-500 rounded-full mr-4"></span>
              Open Source
            </h2>
            <p className="text-gray-600 leading-relaxed">
              IdeaVault is proudly open source under the MIT License. We believe in transparency 
              and community-driven development. Contributions are welcome and encouraged!
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-16 hover:shadow-2xl transition">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                BE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend</h3>
              <div className="space-y-3">
                {[
                  "TypeScript & Node.js",
                  "Express.js REST API", 
                  "MongoDB for data storage",
                  "Redis for caching"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-600">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                FE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frontend</h3>
              <div className="space-y-3">
                {[
                  "React.js with TypeScript",
                  "Vite for fast development",
                  "Tailwind CSS for styling", 
                  "React Router for navigation"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 hover:shadow-2xl transition">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to License Your Ideas?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the revolution of fair idea attribution and start protecting your innovations today.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg text-xl font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Start Licensing Your Ideas
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
