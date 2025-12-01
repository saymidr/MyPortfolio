import React from 'react';
import { motion } from 'framer-motion';

interface DoodleWrapperProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  hoverRotate?: number;
  bgColor?: string;
  borderColor?: string;
}

export const DoodleWrapper: React.FC<DoodleWrapperProps> = ({ 
  children, 
  className = '', 
  rotate = 0,
  hoverRotate = 2,
  bgColor = 'bg-white',
  borderColor = 'border-black'
}) => {
  // We use standard border radius values to create a "wobbly" organic shape
  // The logic is mimicking hand-drawn boxes which are rarely perfect rectangles
  const borderRadius = '255px 15px 225px 15px / 15px 225px 15px 255px';

  return (
    <motion.div
      initial={{ rotate: rotate, scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        rotate: rotate + hoverRotate, 
        scale: 1.02,
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.8)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative border-2 ${borderColor} ${bgColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}
      style={{ borderRadius }}
    >
      {children}
    </motion.div>
  );
};
