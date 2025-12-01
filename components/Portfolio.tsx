import React, { useState } from 'react';
import { DoodleWrapper } from './DoodleWrapper';
import { Play, X, ExternalLink, FolderOpen } from 'lucide-react';
import { PortfolioItem } from '../types';
import { AnimatePresence, motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const items: PortfolioItem[] = [
    { 
      id: '1', 
      title: 'High Retention Edit', 
      category: 'Shorts', 
      views: '1.2M Views', 
      image: 'https://picsum.photos/400/600?random=1',
      embedUrl: 'https://drive.google.com/file/d/1yCDsd_cmWQdyVkfEIBQ2FuY_sqOAlb63/preview' 
    },
    { 
      id: '2', 
      title: 'Dynamic Storytelling', 
      category: 'Reels', 
      views: '850K Views', 
      image: 'https://picsum.photos/400/600?random=2',
      embedUrl: 'https://drive.google.com/file/d/1VQIAi2RaZEZzhPm56JS9kVMMfgwFpqxz/preview' 
    },
    { 
      id: '3', 
      title: 'Viral Motion GFX', 
      category: 'TikTok', 
      views: '2.1M Views', 
      image: 'https://picsum.photos/400/600?random=3',
      embedUrl: 'https://drive.google.com/file/d/1dNCPyYU7hcJGKHk3wal751bqWUdM5PBL/preview'
    },
    { 
      id: '4', 
      title: 'Creator Style Vlog', 
      category: 'Vlog', 
      views: '500K Views', 
      image: 'https://picsum.photos/400/600?random=4',
      embedUrl: 'https://drive.google.com/file/d/1CZ99UwhaNY5E27Mk-0yYIZ5CEIK4yUPA/preview' 
    },
  ];

  return (
    <div className="space-y-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-black border-dashed pb-4">
        <div>
          <h2 className="text-5xl font-bold mb-2">Selected Work</h2>
          <p className="font-sans text-gray-600">Click a thumbnail to watch the edit.</p>
        </div>
        <div className="bg-black text-white px-4 py-1 rounded-full font-bold text-sm transform rotate-3">
          UPDATED 2024
        </div>
      </div>

      {/* Featured Client Section */}
      <DoodleWrapper 
        className="bg-accent-pink p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden" 
        rotate={-1}
        hoverRotate={-1}
        borderColor="border-black"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Play size={120} fill="white" stroke="none" />
        </div>
        
        <div className="text-left relative z-10 text-white">
          <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 mb-3 rounded transform -rotate-2 border border-white">
            ★ FEATURED CLIENT
          </div>
          <h3 className="text-3xl md:text-4xl font-black mb-1">Nolan (ReelyGlaze)</h3>
          <p className="font-sans text-xl font-bold opacity-90 flex items-center gap-2">
            2M+ Followers 
            <span className="text-sm bg-white/20 px-2 py-0.5 rounded">TikTok Star</span>
          </p>
        </div>

        <a 
          href="https://www.tiktok.com/@reelyglaze" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 bg-white text-black px-6 py-3 font-bold text-lg rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 whitespace-nowrap"
        >
          View Profile <ExternalLink size={18} />
        </a>
      </DoodleWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <DoodleWrapper 
            key={item.id} 
            className="p-3 bg-white group cursor-pointer"
            rotate={idx % 2 === 0 ? 1 : -1}
          >
            {/* Click Handler */}
            <div 
              onClick={() => item.embedUrl && setSelectedVideo(item.embedUrl)}
              className="relative aspect-[9/16] overflow-hidden rounded-md border-2 border-black bg-gray-200"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play fill="black" className="ml-1" />
                </div>
              </div>

              {/* Tag */}
              <div className="absolute top-2 right-2 bg-highlight px-2 py-1 text-xs font-bold border border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {item.category}
              </div>
            </div>

            <div className="mt-4 px-1">
              <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
              <p className="font-sans text-sm text-gray-500 mt-1 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
                {item.views}
              </p>
            </div>
          </DoodleWrapper>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center pt-8">
        <a 
          href="https://drive.google.com/drive/folders/1VLrS5u4jj7UHbt8iAsKab_Uy0quexhMA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-y-1 group-hover:translate-x-1 rounded-lg"></span>
          <span className="relative inline-flex items-center gap-2 border-2 border-black bg-highlight px-8 py-4 text-lg font-black uppercase tracking-wider text-black transition-transform rounded-lg group-hover:-translate-y-1 group-hover:-translate-x-1">
            <FolderOpen size={24} /> View All Videos Archive
          </span>
        </a>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-white border-2 border-black rounded-full p-3 hover:bg-red-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 group"
              >
                <X className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform" />
              </button>

              {/* Video Container with Doodle Border */}
              <div 
                className="w-full h-full bg-black border-4 border-white shadow-[8px_8px_0px_0px_#c084fc] overflow-hidden"
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              >
                <iframe 
                  src={selectedVideo} 
                  title="Video Player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};