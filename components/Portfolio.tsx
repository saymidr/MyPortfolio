import React, { useState } from 'react';
import { DoodleWrapper } from './DoodleWrapper';
import { Play, X } from 'lucide-react';
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