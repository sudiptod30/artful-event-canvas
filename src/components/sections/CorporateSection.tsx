
import React from 'react';
import { ButtonOutline } from '../ui/button-outline';

const CorporateSection = () => {
  return (
    <section id="corporate" className="section-padding bg-richblack text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">Corporate <span className="text-gold">Collaborations</span></h2>
          <p className="text-white/80">
            We partner with discerning businesses to create distinctive performing arts experiences 
            that elevate brand prestige and create memorable impressions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-xl font-playfair mb-6 text-gold">Why Choose Performing Arts?</h3>
            <p className="mb-6 text-white/80">
              In a digital age where authentic experiences are increasingly valuable, performing arts 
              offer a distinctive approach to corporate engagement that resonates on a deeper level.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-medium mb-2">Elevated Brand Perception</h4>
                <p className="text-white/70 text-sm">
                  Association with fine arts positions your brand in a sphere of sophistication and cultural relevance.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Memorable Client Experiences</h4>
                <p className="text-white/70 text-sm">
                  Create lasting impressions through curated artistic experiences that transcend conventional corporate events.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Differentiated Engagement</h4>
                <p className="text-white/70 text-sm">
                  Stand apart with events that blend artistic excellence with your corporate messaging.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Cultural Leadership</h4>
                <p className="text-white/70 text-sm">
                  Demonstrate commitment to arts and culture while providing unique value to your stakeholders.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair mb-6 text-gold">Our Corporate Services</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold/20 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Signature Events</h4>
                  <p className="text-white/70 text-sm">
                    Bespoke performing arts experiences for product launches, milestone celebrations, and annual gatherings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/20 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Executive Entertainment</h4>
                  <p className="text-white/70 text-sm">
                    Refined artistic performances for board meetings, investor events, and C-suite gatherings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/20 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Brand Activations</h4>
                  <p className="text-white/70 text-sm">
                    Performance-driven brand experiences that integrate your message with artistic excellence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/20 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <path d="M12 17v5"></path>
                    <path d="M6 9v12"></path>
                    <path d="M18 9v12"></path>
                    <path d="M12 17v-3a2 2 0 0 1 2-2h.5"></path>
                    <path d="M6 9v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Client Entertainment</h4>
                  <p className="text-white/70 text-sm">
                    VIP cultural experiences and private performances for your most valued clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <ButtonOutline variant="light">REQUEST CORPORATE CONSULTATION</ButtonOutline>
            </div>
          </div>
        </div>
        
        {/* Corporate Clients */}
        <div className="mt-24">
          <h3 className="text-xl font-playfair mb-12 text-center">Trusted by Distinguished Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex items-center justify-center">
              <p className="text-gold font-playfair">GOLDMAN SACHS</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-gold font-playfair">CARTIER</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-gold font-playfair">BMW</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-gold font-playfair">SOTHEBY'S</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-gold font-playfair">FOUR SEASONS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
