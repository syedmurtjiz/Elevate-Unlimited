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
        <div className="container mx-auto flex flex-col px-8 py-12">
          {/* Image First on Mobile */}
          <div className="order-1 lg:order-2 lg:hidden mb-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-[250px] rounded-md overflow-hidden">
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
                className="text-[#2C4343] text-sm leading-relaxed mt-4"
              >
                Transform Your Daily Walks Into A Journey Of Self-Discovery And Healing. Our Powerful Walking Meditations Are Designed To Help You Cultivate Mindfulness, Release Stress, And Achieve Personal Growth—All While Staying Active.
              </motion.p>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="flex flex-col lg:flex-row items-center min-h-[70vh] gap-8">
            {/* Left Content - Visible on All Screens */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 lg:w-1/2"
            >
              <div className="space-y-2">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-light text-3xl text-[#2C4343]"
                >
                  AWAKEN
                </motion.h1>
                
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-4xl lg:text-5xl font-bold text-[#2C4343] leading-tight"
                >
                  <span className="block">YOUR TRUE</span>
                  <span className="block mt-2">POTENTIAL</span>
                  <span className="block mt-2">THROUGH</span>
                  <span className="block mt-2">WALKING</span>
                  <span className="block mt-2">MEDITATIONS</span>
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
              <div className="space-y-6">
                <div className="relative w-full h-[250px] rounded-md overflow-hidden">
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
                  className="text-[#2C4343] text-sm leading-relaxed"
                >
                  Transform Your Daily Walks Into A Journey Of Self-Discovery And Healing. Our Powerful Walking Meditations Are Designed To Help You Cultivate Mindfulness, Release Stress, And Achieve Personal Growth—All While Staying Active.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Explore Button */}
          <div className="order-3 mt-auto pt-8">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => router.push('/home')}
              className="w-full py-4 bg-[#2C4343] text-white text-center rounded-sm transition-all duration-300"
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