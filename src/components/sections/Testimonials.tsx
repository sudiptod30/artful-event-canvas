
import React from 'react';
import { cn } from '@/lib/utils';

type Testimonial = {
  quote: string;
  author: string;
  title: string;
  category: 'artist' | 'corporate';
};

const testimonials: Testimonial[] = [
  {
    quote: "Working with Artisan Events elevated our annual gala to an artistic experience our donors still talk about. Their attention to detail and ability to merge our foundation's message with world-class performances created a truly memorable evening.",
    author: "Jonathan Reynolds",
    title: "Director of Development, Global Heritage Foundation",
    category: "corporate"
  },
  {
    quote: "As a performing artist, I've worked with many production companies, but none match Artisan's understanding of artistic integrity and technical excellence. They create environments where performers can truly excel.",
    author: "Elena Kovacs",
    title: "Principal Dancer, National Ballet",
    category: "artist"
  },
  {
    quote: "Our product launch needed to make a lasting impression on industry leaders. Artisan Events designed an experience that perfectly balanced our technology showcase with subtle artistic elements, creating an atmosphere of innovation and sophistication.",
    author: "Marcus Chen",
    title: "Chief Marketing Officer, NexGen Technologies",
    category: "corporate"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="text-charcoal/80">
            The experiences of our artists and corporate partners speak to our commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={cn(
                "p-8 relative",
                testimonial.category === 'corporate' ? "bg-richblack text-white" : "bg-white"
              )}
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className={cn(
                  "absolute top-4 right-4 opacity-10",
                  testimonial.category === 'corporate' ? "text-gold" : "text-richblack"
                )}
              >
                <path d="M14 22C14 16.477 18.477 12 24 12V12C29.523 12 34 16.477 34 22V31C34 32.105 33.105 33 32 33H16C14.895 33 14 32.105 14 31V22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 28H20.01M28 28H28.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              
              <p className="italic mb-6 text-sm leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-white font-playfair",
                    testimonial.category === 'corporate' ? "bg-gold" : "bg-richblack"
                  )}
                >
                  {testimonial.author[0]}
                </div>
                <div className="ml-3">
                  <p className={cn(
                    "font-medium",
                    testimonial.category === 'corporate' ? "text-white" : "text-richblack"
                  )}>
                    {testimonial.author}
                  </p>
                  <p className={cn(
                    "text-xs",
                    testimonial.category === 'corporate' ? "text-white/70" : "text-richblack/70"
                  )}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
