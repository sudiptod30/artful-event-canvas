
import React from 'react';
import { ButtonOutline } from '../ui/button-outline';

const ArtistSection = () => {
  return (
    <section id="artists" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">
              Artist <span className="text-gradient">Partnerships</span>
            </h2>
            <p className="text-charcoal mb-6">
              We collaborate with distinguished performing artists across disciplines, 
              providing comprehensive production support that allows creative visions to flourish.
            </p>
            
            <h3 className="text-xl font-medium mb-4 font-playfair">What We Offer Artists:</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Production expertise that elevates artistic expression</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Access to premier venues and discerning audiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Technical resources that bring creative concepts to life</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Promotional and marketing support for performances</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Opportunities for corporate and private engagements</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonOutline>ARTIST INQUIRY</ButtonOutline>
              <ButtonOutline>VIEW ARTIST TESTIMONIALS</ButtonOutline>
            </div>
          </div>
          
          <div className="bg-secondary p-8">
            <blockquote className="italic text-charcoal/80 mb-6">
              "Artisan Events understood my artistic vision immediately and provided the technical expertise 
              to bring it to life. Their production quality and attention to detail allowed me to focus entirely 
              on my performance, knowing everything else was in capable hands."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-playfair text-xl">M</div>
              <div className="ml-4">
                <p className="font-medium">Maria Callas</p>
                <p className="text-sm text-charcoal/70">Opera Singer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured artists section */}
        <div className="mt-24">
          <h3 className="text-2xl font-playfair font-medium mb-8 text-center">Featured Artist Collaborations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-secondary flex items-center justify-center">
              <p className="font-playfair text-charcoal/70">VIENNA<br/>PHILHARMONIC</p>
            </div>
            <div className="aspect-square bg-secondary flex items-center justify-center">
              <p className="font-playfair text-charcoal/70">ALVIN<br/>AILEY</p>
            </div>
            <div className="aspect-square bg-secondary flex items-center justify-center">
              <p className="font-playfair text-charcoal/70">ROYAL<br/>SHAKESPEARE</p>
            </div>
            <div className="aspect-square bg-secondary flex items-center justify-center">
              <p className="font-playfair text-charcoal/70">YO-YO<br/>MA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
