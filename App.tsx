import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-cream text-primary-black font-sans selection:bg-accent-orange selection:text-white">
      <Navbar />
      <main className="h-full w-full">
        <Hero />
      </main>
    </div>
  );
};

export default App;