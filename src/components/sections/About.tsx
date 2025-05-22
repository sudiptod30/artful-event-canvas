
import React from 'react';
import { ButtonOutline } from '../ui/button-outline';

const About = () => {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">About <span className="text-gradient">Artisan Events</span></h2>
            <p className="text-charcoal mb-6">
              Founded in 2010, Artisan Events has established itself as a preeminent production company 
              in the performing arts sphere, orchestrating exceptional experiences that transcend ordinary events.
            </p>
            <p className="text-charcoal mb-6">
              Our team of dedicated production specialists brings decades of combined experience across music, 
              dance, theater, and multimedia arts, collaborating with the world's most distinguished artists 
              and prestigious corporate partners.
            </p>
            <p className="text-charcoal mb-10">
              We believe in the transformative power of performing arts to connect, inspire, and elevate. 
              Each production is approached with meticulous attention to artistic integrity, technical excellence, 
              and audience engagement.
            </p>
            <ButtonOutline>OUR PHILOSOPHY</ButtonOutline>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=1740" 
                alt="Ballet performance on stage" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1596377761548-0fd23585d431?auto=format&fit=crop&q=80&w=1740" 
                alt="Theater performance" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="col-span-1">
              <div className="bg-gold h-48 flex items-center justify-center p-4 text-center">
                <p className="text-white font-playfair text-lg">Crafting sublime artistic experiences since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
