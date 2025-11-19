import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Works', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Testimonial', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 md:px-12 md:py-6 transition-all duration-300 bg-gradient-to-b from-cream/90 to-transparent backdrop-blur-[2px] animate-slide-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logotype */}
        <div className="flex-shrink-0">
          <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tight italic">
            Shiven.
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-black hover:text-black transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary">Contact</Button>
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
        <div className="absolute top-full left-0 w-full bg-cream/95 backdrop-blur-md border-b border-gray-200 md:hidden shadow-lg">
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-muted-black hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;