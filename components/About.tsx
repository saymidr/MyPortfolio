import React from 'react';
import { motion } from 'framer-motion';
import { DoodleWrapper } from './DoodleWrapper';
import { Clock, TrendingUp, Layers, MessageSquare, Video, Scissors } from 'lucide-react';
import { StatItem } from '../types';

export const About: React.FC = () => {
  const stats: StatItem[] = [
    { label: 'Followers Reached', value: '2M+' },
    { label: 'Daily Editing', value: '6-8 Hrs' },
    { label: 'Videos/Week', value: '2-3' },
  ];

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Bio */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 flex items-center gap-3">
              About Me <span className="text-6xl">👋</span>
            </h2>
            <div className="prose prose-xl font-sans text-gray-700">
              <p className="mb-4">
                I’m a short-form video editor specializing in <strong className="bg-accent-blue/30 px-1 rounded">high-retention edits</strong> for YouTube, TikTok, and Reels. 
              </p>
              <p className="mb-4">
                I combine <span className="font-bold text-black">After Effects</span> and <span className="font-bold text-black">CapCut Pro</span> to create fast-paced, clean, and engaging videos that keep viewers watching.
              </p>
              <p>
                I’m reliable, deadline-focused, and obsessed with <span className="underline decoration-highlight decoration-4">pacing</span>.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {stats.map((stat, i) => (
              <DoodleWrapper key={i} className="p-4 text-center" rotate={i % 2 === 0 ? 1 : -1}>
                <h3 className="text-4xl font-black text-black mb-1">{stat.value}</h3>
                <p className="font-sans text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </DoodleWrapper>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Skills List */}
        <div className="flex-1 w-full relative">
           {/* Sketchy Background behind skills */}
           <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform rotate-2 z-0 border-2 border-dashed border-gray-300"></div>
           
           <div className="relative z-10 grid grid-cols-1 gap-4 p-6">
             {[
               { icon: <Video />, text: "Faceless reels & creator content" },
               { icon: <TrendingUp />, text: "High-retention shorts" },
               { icon: <Layers />, text: "Minimal motion graphics" },
               { icon: <MessageSquare />, text: "Caption-heavy edits" },
               { icon: <Clock />, text: "Fast turnaround" },
               { icon: <Scissors />, text: "B-roll & Scene building" },
             ].map((skill, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="flex items-center gap-4 bg-white p-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_#9333ea] transform hover:-translate-y-1 transition-transform"
               >
                 <div className="text-black">{skill.icon}</div>
                 <span className="font-bold text-lg">{skill.text}</span>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};