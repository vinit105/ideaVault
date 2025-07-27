import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            About IdeaVault
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              IdeaVault is an open-source SaaS platform that empowers developers and founders 
              to license their original software project ideas under a unique 1% attribution model.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that great ideas deserve recognition and fair compensation. Our platform 
              provides a digital timestamp and licensing model for your startup or project idea, 
              ensuring you get credited and compensated when others build upon your innovations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h3 className="font-bold text-gray-900">Submit Your Idea</h3>
                  <p className="text-gray-600">Register your software project idea with detailed description and implementation concepts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h3 className="font-bold text-gray-900">Get Timestamped Proof</h3>
                  <p className="text-gray-600">Receive a timestamped certificate with hash verification for legal protection.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h3 className="font-bold text-gray-900">Earn Attribution</h3>
                  <p className="text-gray-600">When someone builds your idea commercially, they must attribute you and share 1% of gross revenue.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The 1% Model</h2>
            <p className="text-gray-600 mb-6">
              Under our modified MIT-style license, your idea is publicly registered and others 
              must attribute you and share 1% of their revenue if they use it commercially. 
              This creates a fair ecosystem where innovation is rewarded while still encouraging 
              open collaboration.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Backend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• TypeScript & Node.js</li>
                  <li>• Express.js REST API</li>
                  <li>• MongoDB for data storage</li>
                  <li>• Redis for caching</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Frontend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• React.js with TypeScript</li>
                  <li>• Vite for fast development</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• React Router for navigation</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Source</h2>
            <p className="text-gray-600 mb-6">
              IdeaVault is proudly open source under the MIT License. We believe in transparency 
              and community-driven development. Contributions are welcome and encouraged!
            </p>

            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Start Licensing Your Ideas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
