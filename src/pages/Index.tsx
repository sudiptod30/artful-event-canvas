
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import ArtistSection from '@/components/sections/ArtistSection';
import CorporateSection from '@/components/sections/CorporateSection';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ArtistSection />
        <CorporateSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
