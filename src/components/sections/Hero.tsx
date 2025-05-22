
import React from 'react';
import { ButtonOutline } from '@/components/ui/button-outline';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2731" 
          alt="Symphony orchestra performance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-richblack/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-widest mb-2 animate-fade-in-down">Exceptional Performing Arts Experiences</p>
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-medium text-white mb-6",
            "animate-fade-in"
          )}>
            Crafting Sublime<br />Artistic Moments
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up">
            Elevating performing arts through meticulous production, artistic excellence, 
            and creative innovation for discerning audiences worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up">
            <ButtonOutline variant="light" onClick={() => document.getElementById('artists')?.scrollIntoView({behavior: 'smooth'})}>
              ARTIST PARTNERSHIPS
            </ButtonOutline>
            <ButtonOutline variant="light" onClick={() => document.getElementById('corporate')?.scrollIntoView({behavior: 'smooth'})}>
              CORPORATE COLLABORATIONS
            </ButtonOutline>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
