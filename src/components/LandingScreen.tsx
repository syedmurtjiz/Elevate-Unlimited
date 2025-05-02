'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const LandingScreen = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#E6EFE9] via-[#f0f7f4] to-[#E6EFE9]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5" />
      
      {/* Animated Gradient Orb */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-teal-200 to-teal-100 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-200 to-emerald-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center  min-h-screen -mt-10 p-4  ">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-4"
        >
          <div className="space-y-4 -mt-18">
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#2C4343] leading-tight">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-extralight tracking-wider block"
              >
                AWAKEN
              </motion.span>
              {["YOUR TRUE", "POTENTIAL", "THROUGH", "WALKING", "MEDITATIONS"].map((text, index) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  className="text-[#2C4343] block"
                >
                  {text}
                </motion.span>
              ))}
            </h1>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative mt-8 lg:mt-0"
        >
          <div className="relative w-full h-[300px] lg:h-[400px] group">
            {/* Image Container with Hover Effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Explore.png"
                alt="Walking meditation in nature"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-2 text-center lg:text-left"
          >
            <p className="text-[#2C4343] text-lg lg:text-xl leading-relaxed ">
              Transform Your Daily Walks Into A Journey Of Self-Discovery And Healing. Our Powerful Walking Meditations Are Designed To Help You Cultivate Mindfulness, Release Stress, And Achieve Beyond Growth...All While Staying Active
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Explore Button */}
      <div className="  left-0 right-0 px-4 md:px-16 py-4 lg:px-20 -mt-14">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#1a2942' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={() => router.push('/home')}
          className="w-full py-4 bg-[#2C4343] text-white text-lg font-medium rounded-md transition-all duration-300 shadow-lg relative overflow-hidden group"
        >
          <span className="relative z-10">Click Explore to see the main site content</span>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </div>
  );
};

export default LandingScreen; 