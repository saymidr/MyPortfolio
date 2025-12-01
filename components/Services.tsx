import React from 'react';
import { DoodleWrapper } from './DoodleWrapper';
import { Zap, Film, Type } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Retention Editing",
      icon: <Zap size={32} />,
      desc: "Fast cuts, visual hooks, and sound design that keeps retention high.",
      color: "bg-accent-blue",
    },
    {
      title: "Storytelling",
      icon: <Film size={32} />,
      desc: "Documentary style flow with sourced B-roll and narrative pacing.",
      color: "bg-highlight",
    },
    {
      title: "Captions & GFX",
      icon: <Type size={32} />,
      desc: "Hormozi-style, animated captions, and clean minimal motion graphics.",
      color: "bg-accent-pink",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4 relative inline-block">
          My Toolkit
          <svg className="absolute -top-6 -right-8 w-12 h-12 text-black animate-wiggle" viewBox="0 0 100 100">
            <path d="M20 80 Q 50 10 80 80" stroke="currentColor" fill="none" strokeWidth="5" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
          </svg>
        </h2>
        <p className="font-sans text-xl text-gray-600">What I bring to the timeline</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <DoodleWrapper 
            key={idx} 
            className={`p-8 flex flex-col items-center text-center gap-4 ${service.color}`}
            rotate={idx === 1 ? -2 : 2}
            hoverRotate={0}
          >
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-2 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black">{service.title}</h3>
            <p className="font-sans font-medium">{service.desc}</p>
          </DoodleWrapper>
        ))}
      </div>
    </div>
  );
};