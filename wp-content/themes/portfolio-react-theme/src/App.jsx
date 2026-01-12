import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App({ wpData }) {
  const [apiData, setApiData] = useState(null);

  // Example: Fetch data from WordPress REST API
  useEffect(() => {
    if (wpData?.restUrl) {
      fetch(`${wpData.restUrl}portfolio/v1/theme-data`)
        .then(response => response.json())
        .then(data => setApiData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [wpData]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header siteName={wpData?.siteName} />
      
      <main className="flex-grow">
        <Hero 
          siteName={wpData?.siteName} 
          description={wpData?.description}
          apiData={apiData}
        />
        
        {/* Add more sections here */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Welcome to Your Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p className="text-gray-600">
                Build interactive UIs with React components
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">
                Style your site with utility-first CSS
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">WordPress</h3>
              <p className="text-gray-600">
                Manage content with WordPress CMS
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
