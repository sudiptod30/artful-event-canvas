
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
        "fixed top-0 w-full z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-sm py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-medium font-playfair">
              ARTISAN<span className="text-gold font-light">EVENTS</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="nav-link text-sm tracking-wide">HOME</a>
            <a href="#about" className="nav-link text-sm tracking-wide">ABOUT</a>
            <a href="#services" className="nav-link text-sm tracking-wide">SERVICES</a>
            <a href="#portfolio" className="nav-link text-sm tracking-wide">PORTFOLIO</a>
            <a href="#artists" className="nav-link text-sm tracking-wide">ARTISTS</a>
            <a href="#corporate" className="nav-link text-sm tracking-wide">CORPORATE</a>
            <a href="#contact" className="nav-link text-sm tracking-wide">CONTACT</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-sm">
          <div className="px-6 py-6 space-y-5 flex flex-col">
            <a href="#" className="nav-link text-sm tracking-wide" onClick={() => setMobileMenuOpen(false)}>HOME</a>
            <a href="#about" className="nav-link text-sm tracking-wide" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
            <a href="#services" className="nav-link text-sm tracking-wide" onClick={() => setMobileMenuOpen(false)}>SERVICES</a>
            <a href="#portfolio" className="nav-link text-sm tracking-wide" onClick={() => setMobileMenuOpen(false)}>PORTFOLIO</a>
            <a href="#artists" className="nav-link text-sm tracking-wide" onClick={() => setMobileMenuOpen(false)}>ARTISTS</a>
            <a href="#corporate" className="nav-link text-sm tracking-wide" onClick={() => setMobileMenuOpen(false)}>CORPORATE</a>
            <a href="#contact" className="nav-link text-sm tracking-wide" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
