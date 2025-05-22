
import React from 'react';
import { ButtonOutline } from '../ui/button-outline';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">Get in <span className="text-gradient">Touch</span></h2>
            <p className="text-charcoal mb-8">
              We look forward to discussing how our production expertise can elevate your artistic vision
              or corporate event. Please reach out to start a conversation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-charcoal/80 text-sm">
                    123 Fifth Avenue<br />
                    New York, NY 10010
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:inquiries@artisanevents.com" className="text-charcoal/80 text-sm hover:text-gold transition-colors">
                    inquiries@artisanevents.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Telephone</h3>
                  <a href="tel:+12123456789" className="text-charcoal/80 text-sm hover:text-gold transition-colors">
                    +1 (212) 345-6789
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-8">
            <h3 className="text-2xl font-playfair mb-6">Inquiry Form</h3>
            <form>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal/80 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full p-2 bg-white/80 border-0 focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal/80 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full p-2 bg-white/80 border-0 focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 bg-white/80 border-0 focus:ring-1 focus:ring-gold outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-charcoal/80 mb-1">Inquiry Type</label>
                  <select 
                    id="inquiryType" 
                    className="w-full p-2 bg-white/80 border-0 focus:ring-1 focus:ring-gold outline-none"
                  >
                    <option>Artist Partnership</option>
                    <option>Corporate Event</option>
                    <option>General Inquiry</option>
                    <option>Press/Media</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-2 bg-white/80 border-0 focus:ring-1 focus:ring-gold outline-none"
                  ></textarea>
                </div>
                
                <div>
                  <ButtonOutline type="submit">SEND INQUIRY</ButtonOutline>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
