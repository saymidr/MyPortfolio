import React from 'react';
import { DoodleWrapper } from './DoodleWrapper';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="relative max-w-3xl mx-auto text-center space-y-12">
      
      {/* Decorative arrow */}
      <div className="absolute -top-10 -left-10 hidden md:block opacity-50">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="transform rotate-45">
          <path d="M10 10 Q 50 50 90 90" strokeDasharray="5,5" />
          <path d="M80 70 L 90 90 L 70 80" />
        </svg>
      </div>

      <div>
        <h2 className="text-6xl font-bold mb-6 text-accent-pink">Ready to Scale?</h2>
        <p className="font-sans text-xl text-gray-700 max-w-xl mx-auto">
          I'm currently accepting new clients for long-term partnerships. Let's create something awesome.
        </p>
      </div>

      <DoodleWrapper className="p-8 md:p-12 bg-white" rotate={1}>
        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-bold ml-2">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-paper border-2 border-black rounded-lg p-3 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px_#c084fc] transition-shadow"
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold ml-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-paper border-2 border-black rounded-lg p-3 font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px_#c084fc] transition-shadow"
                placeholder="john@example.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-bold ml-2">Project Details</label>
            <textarea 
              className="w-full bg-paper border-2 border-black rounded-lg p-3 font-sans h-32 focus:outline-none focus:shadow-[4px_4px_0px_0px_#c084fc] transition-shadow"
              placeholder="Tell me about your channel and what you need..."
            ></textarea>
          </div>

          <button className="w-full bg-black text-white font-bold text-xl py-4 rounded-lg hover:bg-gray-800 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 group">
            <Mail className="group-hover:animate-bounce" /> Send Message
          </button>
        </form>
      </DoodleWrapper>

      <div className="flex justify-center gap-6 pt-8">
        {[
            { icon: <Instagram />, label: "Instagram", href: "https://www.instagram.com/aymid.r/" },
            { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/syedahmedrehmani" },
            { icon: <Mail />, label: "Email", href: "mailto:syedahmedrehmani3@gmail.com" }
        ].map((social, i) => (
            <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-highlight hover:-translate-y-1 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                title={social.label}
            >
                {social.icon}
            </a>
        ))}
      </div>
    </div>
  );
};