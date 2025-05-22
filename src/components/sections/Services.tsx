
import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-gold mb-4 text-3xl">{icon}</div>
    <h3 className="text-xl font-playfair font-medium mb-3">{title}</h3>
    <p className="text-charcoal/80">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-charcoal/80">
            We offer comprehensive production services for performing arts events, 
            tailored to the unique needs of artists and corporate clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Production Design"
            description="Comprehensive production planning and design, merging artistic vision with flawless technical execution."
            icon={<IconStage />}
          />
          <ServiceCard 
            title="Technical Direction"
            description="Expert technical management including sound, lighting, staging, and multimedia integration."
            icon={<IconLighting />}
          />
          <ServiceCard 
            title="Artistic Curation"
            description="Thoughtful curation of performing artists and performances aligned with event objectives."
            icon={<IconCuration />}
          />
          <ServiceCard 
            title="Venue Selection"
            description="Access to exclusive venues and transformation of spaces into immersive artistic environments."
            icon={<IconVenue />}
          />
          <ServiceCard 
            title="Audience Experience"
            description="Carefully crafted audience journeys that enhance engagement and create lasting impressions."
            icon={<IconAudience />}
          />
          <ServiceCard 
            title="Event Management"
            description="End-to-end event logistics, scheduling, and coordination with meticulous attention to detail."
            icon={<IconManagement />}
          />
        </div>
      </div>
    </section>
  );
};

// Simple icon components
const IconStage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="8" y1="22" x2="16" y2="22"></line>
  </svg>
);

const IconLighting = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v8"></path>
    <path d="M6.34 7.34l1.42 1.42"></path>
    <path d="m16.24 8.76 1.42-1.42"></path>
    <path d="M5 12H3"></path>
    <path d="M19 12h2"></path>
    <path d="m7.76 16.24-1.42 1.42"></path>
    <path d="m16.24 16.24 1.42 1.42"></path>
    <path d="M12 19v-7"></path>
  </svg>
);

const IconCuration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m4.93 4.93 14.14 14.14"></path>
  </svg>
);

const IconVenue = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"></path>
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path>
    <path d="M3 9a18.36 18.36 0 0 0 18 0"></path>
  </svg>
);

const IconAudience = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconManagement = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M9 14h.01"></path>
    <path d="M13 14h2"></path>
    <path d="M9 18h.01"></path>
    <path d="M13 18h2"></path>
  </svg>
);

export default Services;
