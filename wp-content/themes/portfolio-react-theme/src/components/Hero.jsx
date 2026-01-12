function Hero({ siteName, description, apiData }) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-purple-50 py-20 md:py-32">
      <div className="container-custom">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to{' '}
            <span className="text-gradient">
              {siteName || 'Your Portfolio'}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {description || 'A modern WordPress theme built with React and Tailwind CSS'}
          </p>

          {/* Show API data if available */}
          {apiData && (
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto mb-8">
              <p className="text-sm text-gray-700">
                <strong>API Response:</strong> {apiData.message}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary text-lg px-8 py-3">
              Get Started
            </button>
            <button className="btn btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
