
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type PortfolioItem = {
  id: number;
  title: string;
  category: 'music' | 'theater' | 'dance' | 'corporate';
  image: string;
  clientName?: string;
  location?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Symphony Under the Stars',
    category: 'music',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1740',
    clientName: 'National Symphony Orchestra',
    location: 'Central Park, New York'
  },
  {
    id: 2,
    title: 'Contemporary Dance Gala',
    category: 'dance',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1740',
    clientName: 'Modern Dance Collective',
    location: 'Lincoln Center'
  },
  {
    id: 3,
    title: 'Shakespeare in the Modern Era',
    category: 'theater',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1740',
    clientName: 'Royal Theater Company',
    location: 'West End'
  },
  {
    id: 4,
    title: 'Annual Executive Retreat',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1740',
    clientName: 'Global Financial Group',
    location: 'Aspen, Colorado'
  },
  {
    id: 5,
    title: 'Jazz Legends Live',
    category: 'music',
    image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80&w=2731',
    clientName: 'Blue Note Records',
    location: 'New Orleans'
  },
  {
    id: 6,
    title: 'Product Launch Experience',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1740',
    clientName: 'Tech Innovations Inc.',
    location: 'San Francisco'
  }
];

type FilterCategory = 'all' | 'music' | 'theater' | 'dance' | 'corporate';

const Portfolio = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-charcoal/80 mb-8">
            Explore our carefully curated portfolio of exceptional performing arts productions
            and corporate event collaborations.
          </p>
          
          {/* Portfolio filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider transition-colors",
                filter === 'all' ? 'bg-gold text-white' : 'bg-transparent text-charcoal hover:bg-gold/10'
              )}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider transition-colors",
                filter === 'music' ? 'bg-gold text-white' : 'bg-transparent text-charcoal hover:bg-gold/10'
              )}
              onClick={() => setFilter('music')}
            >
              Music
            </button>
            <button 
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider transition-colors",
                filter === 'theater' ? 'bg-gold text-white' : 'bg-transparent text-charcoal hover:bg-gold/10'
              )}
              onClick={() => setFilter('theater')}
            >
              Theater
            </button>
            <button 
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider transition-colors",
                filter === 'dance' ? 'bg-gold text-white' : 'bg-transparent text-charcoal hover:bg-gold/10'
              )}
              onClick={() => setFilter('dance')}
            >
              Dance
            </button>
            <button 
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider transition-colors",
                filter === 'corporate' ? 'bg-gold text-white' : 'bg-transparent text-charcoal hover:bg-gold/10'
              )}
              onClick={() => setFilter('corporate')}
            >
              Corporate
            </button>
          </div>
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-500"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-playfair font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-1">{item.clientName}</p>
                <p className="text-white/80 text-sm">{item.location}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-gold/30 text-white rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center text-gold hover:text-gold/80 transition-colors">
            <span className="mr-2">View All Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
