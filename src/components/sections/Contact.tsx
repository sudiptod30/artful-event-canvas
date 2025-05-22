
import React from 'react';
import { ButtonOutline } from '../ui/button-outline';
import { Mail, MapPin, Phone, User, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
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
                  <MapPin size={18} strokeWidth={1.5} />
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
                  <Mail size={18} strokeWidth={1.5} />
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
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">Telephone</h3>
                  <a href="tel:+12123456789" className="text-charcoal/80 text-sm hover:text-gold transition-colors">
                    +1 (212) 345-6789
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-secondary p-4 text-center rounded">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gold">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-xs text-charcoal/80">New York</p>
              </div>
              <div className="bg-secondary p-4 text-center rounded">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gold">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-xs text-charcoal/80">London</p>
              </div>
              <div className="bg-secondary p-4 text-center rounded">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gold">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-xs text-charcoal/80">Paris</p>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-8 rounded shadow-sm">
            <h3 className="text-2xl font-playfair mb-6">Inquiry Form</h3>
            <form>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal/80 mb-1">First Name</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                        <User size={14} />
                      </span>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full p-2 pl-9 bg-white/80 rounded border-0 focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal/80 mb-1">Last Name</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                        <User size={14} />
                      </span>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full p-2 pl-9 bg-white/80 rounded border-0 focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                      <Mail size={14} />
                    </span>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 pl-9 bg-white/80 rounded border-0 focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-charcoal/80 mb-1">Inquiry Type</label>
                  <select 
                    id="inquiryType" 
                    className="w-full p-2 pl-4 bg-white/80 rounded border-0 focus:ring-1 focus:ring-gold outline-none"
                  >
                    <option>Artist Partnership</option>
                    <option>Corporate Event</option>
                    <option>General Inquiry</option>
                    <option>Press/Media</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-1">Your Message</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-charcoal/30">
                      <MessageSquare size={14} />
                    </span>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full p-2 pl-9 bg-white/80 rounded border-0 focus:ring-1 focus:ring-gold outline-none"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <ButtonOutline type="submit" className="flex items-center gap-2">
                    <span>SEND INQUIRY</span>
                    <Send size={14} />
                  </ButtonOutline>
                </div>

                <div className="text-xs text-center text-charcoal/60 mt-4">
                  <p>We'll respond within 24 hours</p>
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
