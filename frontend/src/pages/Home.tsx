import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              💡 License Your Ideas.<br />Get Recognized.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Welcome to IdeaVault, where original software project ideas get the credit they deserve 
              under a unique 1% attribution model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                Submit Your Idea
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Browse Ideas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protect and monetize your creative software ideas with our innovative platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">Register Ideas</h3>
              <p className="text-gray-600">
                Register your software ideas with attribution license and timestamped proof
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧾</div>
              <h3 className="text-xl font-bold mb-2">1% Revenue Model</h3>
              <p className="text-gray-600">
                Enforceable 1% gross revenue clause via our unique licensing system
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4 text-black">🛡</div>
              <h3 className="text-xl font-bold mb-2">License Certificates</h3>
              <p className="text-gray-600">
                Download official license certificates for each idea submission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to License Your Ideas?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of innovative developers and founders. Start protecting your ideas today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
