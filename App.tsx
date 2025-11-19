import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-full w-full overflow-hidden bg-cream text-primary-black font-sans selection:bg-accent-orange selection:text-white">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main className="h-full w-full">
            <Hero />
          </main>
        </>
      )}
    </div>
  );
};

export default App;