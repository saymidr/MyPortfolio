import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4"
    >
      <div className="bg-white/90 backdrop-blur-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full px-6 py-3 flex gap-2 md:gap-6 overflow-x-auto max-w-full">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`relative px-3 py-1 text-sm md:text-lg font-bold transition-colors whitespace-nowrap ${
              activeSection === link.id ? 'text-black' : 'text-gray-500 hover:text-black'
            }`}
          >
            {activeSection === link.id && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 bg-highlight -z-10 rounded-md transform -rotate-2"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {link.name}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};