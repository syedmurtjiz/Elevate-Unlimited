"use client"
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

type Direction = NonNullable<ScrollAnimationProps['direction']>;

type DirectionOffset = {
  x?: number;
  y?: number;
};

export const ScrollAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionOffset: Record<Direction, DirectionOffset> = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  const initialOffset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : initialOffset?.y ?? 0,
        x: isInView ? 0 : initialOffset?.x ?? 0,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 