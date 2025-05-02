'use client'; // only needed if using client-side interactivity (e.g., state, hooks)

import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function WalkingMeditationHero() {
  const backgroundControls = useAnimation();
  const contentControls = useAnimation();

  // Mouse parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse movement to subtle parallax values
  const backgroundX = useTransform(x, [-100, 100], [-10, 10]);
  const backgroundY = useTransform(y, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Convert mouse position to range -100 to 100
      const xPos = ((clientX / innerWidth) - 0.5) * 200;
      const yPos = ((clientY / innerHeight) - 0.5) * 200;
      
      x.set(xPos);
      y.set(yPos);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const handleHeroHover = async () => {
    // Animate background
    backgroundControls.start({
      scale: 1.05,
      transition: { duration: 1.2, ease: "easeOut" }
    });

    // Animate content
    await contentControls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  };

  const handleHeroLeave = async () => {
    // Reset background
    backgroundControls.start({
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    });

    // Reset content
    await contentControls.start({
      y: 20,
      opacity: 0.8,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  };

  return (
    <div className="p-2">
      <motion.div
        className="relative h-screen w-full overflow-hidden rounded-3xl"
        onHoverStart={handleHeroHover}
        onHoverEnd={handleHeroLeave}
      >
        {/* Background Image Container with Reveal Animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        >
          {/* Background Image with Hover Effect and Parallax */}
          <motion.div
            className="absolute inset-0"
            animate={backgroundControls}
            initial={{ scale: 1 }}
            style={{
              x: backgroundX,
              y: backgroundY
            }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Image
                src="/herobg.png"
                alt="Hero background"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Gradient Overlay with Animation */}
            <motion.div 
              className="absolute inset-0"
              initial={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)' }}
              animate={{
                background: [
                  'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
                  'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
                  'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)'
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-black/30"
                whileHover={{ 
                  backdropFilter: "blur(4px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  transition: { duration: 0.5 }
                }}
                animate={{
                  backgroundPosition: [
                    '0% 0%',
                    '100% 100%',
                    '0% 0%'
                  ],
                }}
                style={{
                  background: 'linear-gradient(45deg, rgba(0,0,0,0.3), rgba(0,0,0,0.4))',
                  backgroundSize: '200% 200%'
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative h-full flex flex-col items-center justify-center px-6"
          animate={contentControls}
          initial={{ y: 20, opacity: 0.8 }}
          style={{
            x: useTransform(x, [-100, 100], [5, -5]),
            y: useTransform(y, [-100, 100], [5, -5])
          }}
        >
          <motion.h1
            className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-center text-white px-4 uppercase leading-tight tracking-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]"
            whileHover={{
              scale: 1.02,
              y: -10,
              transition: { 
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }
            }}
          >
            Awaken Your True Potential Through Walking Meditations
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-base text-white font-medium pt-4 uppercase leading-tight tracking-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { 
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }
            }}
          >
            Rewire your mind and body for a life of limitless possibilities.
          </motion.h2>

          <motion.button
            className="mt-8 text-white border border-white/50 p-3 px-6 rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              y: -5,
              transition: { 
                duration: 0.3,
                type: "spring",
                stiffness: 400
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Walking Meditation Series
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
