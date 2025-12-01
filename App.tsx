import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Cursor } from './components/Cursor';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper bg-dot-pattern [background-size:20px_20px] overflow-x-hidden font-doodle text-ink cursor-none selection:bg-highlight selection:text-black">
      <Cursor />
      <Navigation activeSection={activeSection} />
      
      <main className="container mx-auto px-4 md:px-8 max-w-6xl pt-24 pb-20 space-y-32">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="w-full py-8 text-center border-t-2 border-black border-dashed font-sans text-gray-500 bg-white/80 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} - Built with React & Tailwind</p>
        <p className="text-xs mt-2">Doodle Design System</p>
      </footer>
    </div>
  );
};

export default App;