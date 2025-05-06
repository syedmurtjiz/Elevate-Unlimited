'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}) => {
  const getAnimation = () => {
    const distance = 50;
    let initial = {};
    
    switch (direction) {
      case 'up':
        initial = { y: distance };
        break;
      case 'down':
        initial = { y: -distance };
        break;
      case 'left':
        initial = { x: -distance };
        break;
      case 'right':
        initial = { x: distance };
        break;
      default:
        initial = { y: distance };
    }

    return {
      initial: { ...initial, opacity: 0 },
      animate: { 
        x: 0, 
        y: 0, 
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: 'easeOut'
        }
      }
    };
  };

  const { initial, animate } = getAnimation();

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 