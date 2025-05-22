
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-richblack text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-2xl mb-4">ARTISAN<span className="text-gold">EVENTS</span></h3>
            <p className="text-white/70 text-sm mb-6">
              Crafting sublime artistic experiences through elite production services 
              for performing artists and discerning corporate clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#artists" className="text-white/70 hover:text-gold transition-colors">Artist Partnerships</a></li>
              <li><a href="#corporate" className="text-white/70 hover:text-gold transition-colors">Corporate Clients</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Production Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Technical Direction</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Artistic Curation</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Venue Selection</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Audience Experience</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Event Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-gold">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/70">123 Fifth Avenue<br />New York, NY 10010</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-gold">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:inquiries@artisanevents.com" className="text-white/70 hover:text-gold transition-colors">inquiries@artisanevents.com</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-gold">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+12123456789" className="text-white/70 hover:text-gold transition-colors">+1 (212) 345-6789</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>&copy; 2025 Artisan Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
