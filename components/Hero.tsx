import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Zap, Scissors } from 'lucide-react';
import { DoodleWrapper } from './DoodleWrapper';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center">
      
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 text-accent-blue opacity-50 hidden md:block"
      >
        <Sparkles size={64} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-accent-pink opacity-50 hidden md:block"
      >
        <Zap size={64} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="inline-block"
        >
          <span className="bg-black text-white px-4 py-2 text-xl font-bold transform -rotate-3 inline-block rounded-sm shadow-[4px_4px_0px_0px_#c084fc]">
            Hello! I'm The Editor
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight relative">
          Short-Form
          <br />
          <span className="relative inline-block mx-2">
            <span className="relative z-10">Video Wizard</span>
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-highlight z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
          I turn boring footage into <span className="font-bold underline decoration-wavy decoration-accent-pink">viral-ready</span> reels, shorts, and tiktoks.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
          <DoodleWrapper className="px-8 py-4 bg-highlight cursor-pointer" hoverRotate={-2}>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-2xl font-bold flex items-center gap-2"
            >
              <Play size={24} fill="black" /> See My Work
            </button>
          </DoodleWrapper>
          
          <DoodleWrapper className="px-8 py-4 bg-white cursor-pointer" hoverRotate={2}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-2xl font-bold flex items-center gap-2"
            >
              <Scissors size={24} /> Let's Edit
            </button>
          </DoodleWrapper>
        </div>
      </div>
    </div>
  );
};