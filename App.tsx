import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { LoadingScreen } from './components/LoadingScreen';

type Page = 'home' | 'works' | 'about' | 'services' | 'testimonial' | 'contact';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'works':
        return <Works />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'testimonial':
        return <Testimonial />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="h-full w-full overflow-hidden bg-cream text-primary-black font-sans selection:bg-accent-orange selection:text-white">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="h-full w-full">
            {renderPage()}
          </main>
        </>
      )}
    </div>
  );
};

export default App;