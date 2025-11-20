import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'works' | 'about' | 'services' | 'testimonial' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Works', id: 'works' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonial', id: 'testimonial' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 md:px-12 md:py-6 transition-all duration-300 bg-gradient-to-b from-cream/90 to-transparent backdrop-blur-[2px] animate-slide-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logotype */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight italic">
            Shiven.
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors relative group ${
                currentPage === link.id ? 'text-black font-semibold' : 'text-muted-black hover:text-black'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${
                currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" onClick={() => handleNavClick('contact')}>Contact</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-black hover:text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream/95 backdrop-blur-md border-b border-gray-200 md:hidden shadow-lg animate-slide-down">
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-lg font-medium hover:text-black ${
                   currentPage === link.id ? 'text-black font-bold' : 'text-muted-black'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button variant="primary" onClick={() => handleNavClick('contact')}>
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;