
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-bold font-playfair tracking-wider">
              ARTISAN<span className="text-gold">EVENTS</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center">
            <a href="#" className="nav-link">HOME</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#portfolio" className="nav-link">PORTFOLIO</a>
            <a href="#artists" className="nav-link">ARTISTS</a>
            <a href="#corporate" className="nav-link">CORPORATE</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-md">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block" onClick={() => setMobileMenuOpen(false)}>HOME</a>
            <a href="#about" className="block" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
            <a href="#services" className="block" onClick={() => setMobileMenuOpen(false)}>SERVICES</a>
            <a href="#portfolio" className="block" onClick={() => setMobileMenuOpen(false)}>PORTFOLIO</a>
            <a href="#artists" className="block" onClick={() => setMobileMenuOpen(false)}>ARTISTS</a>
            <a href="#corporate" className="block" onClick={() => setMobileMenuOpen(false)}>CORPORATE</a>
            <a href="#contact" className="block" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
