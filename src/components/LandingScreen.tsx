'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const LandingScreen = () => {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        header, footer {
          display: none !important;
        }
      `}</style>
      <div className="min-h-screen bg-[#E6EFE9]">
        <div className="container mx-auto flex flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-8">
          {/* Image First on Mobile */}
          <div className="order-1 lg:order-2 lg:hidden mb-4 sm:mb-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] rounded-md overflow-hidden">
                <Image
                  src="/Explore.png"
                  alt="Walking meditation in nature - couple walking on a path through misty mountains"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-[#2C4343] text-sm sm:text-base leading-relaxed mt-3 sm:mt-4"
              >
                Transform Your Daily Walks Into A Journey Of Self-Discovery And Healing. Our Powerful Walking Meditations Are Designed To Help You Cultivate Mindfulness, Release Stress, And Achieve Personal Growth—All While Staying Active.
              </motion.p>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center min-h-[50vh] sm:min-h-[60vh] gap-4 sm:gap-6">
            {/* Left Content - Visible on All Screens */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 lg:w-1/2"
            >
              <div className="space-y-1 sm:space-y-2">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-light text-2xl sm:text-3xl text-[#2C4343]"
                >
                  AWAKEN
                </motion.h1>
                
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C4343] leading-tight"
                >
                  <span className="block">YOUR TRUE</span>
                  <span className="block mt-1 sm:mt-2">POTENTIAL</span>
                  <span className="block mt-1 sm:mt-2">THROUGH</span>
                  <span className="block mt-1 sm:mt-2">WALKING</span>
                  <span className="block mt-1 sm:mt-2">MEDITATIONS</span>
                </motion.h2>
              </div>
            </motion.div>

            {/* Right Content - Hidden on Mobile (Shown Above) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 hidden lg:block lg:w-1/2"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="relative w-full h-[250px] sm:h-[300px] rounded-md overflow-hidden">
                  <Image
                    src="/Explore.png"
                    alt="Walking meditation in nature - couple walking on a path through misty mountains"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-[#2C4343] text-sm sm:text-base leading-relaxed"
                >
                  Transform Your Daily Walks Into A Journey Of Self-Discovery And Healing. Our Powerful Walking Meditations Are Designed To Help You Cultivate Mindfulness, Release Stress, And Achieve Personal Growth—All While Staying Active.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Explore Button */}
          <div className="order-3 mt-4 sm:mt-6">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => router.push('/home')}
              className="w-full py-3 sm:py-4 bg-[#2C4343] text-white text-center rounded-sm transition-all duration-300 text-sm sm:text-base"
            >
              Explore
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;