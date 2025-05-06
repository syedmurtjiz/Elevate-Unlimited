'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const LandingScreen = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
        header, footer {
          display: none !important;
        }
      `}</style>
      <div className="min-h-screen relative bg-gradient-to-br from-[#E6EFE9] via-[#f0f7f4] to-[#E6EFE9] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-200 blur-3xl -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-200 blur-3xl translate-x-1/2 translate-y-1/2"
          />
        </div>

       
        <div className="container mx-auto flex flex-col lg:flex-row items-center min-h-screen px-6 lg:px-12 py-20">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="lg:w-1/2 space-y-6 z-10"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block px-4 py-1 bg-[#2C4343]/10 rounded-full"
            >
              <span className="text-[#2C4343] font-medium text-sm">Mindful Movement Practice</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-[#2C4343] leading-tight"
              >
                <span className="font-light block">AWAKEN</span>
                <span className="block">YOUR TRUE</span>
                <span className="block">POTENTIAL</span>
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-[#2C4343]/80 leading-tight mt-2"
              >
                <span className="block">THROUGH</span>
                <span className="block">WALKING</span>
                <span className="block">MEDITATIONS</span>
              </motion.h2>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-[#2C4343]/90 text-lg leading-relaxed max-w-lg"
            >
              Transform your daily walks into journeys of self-discovery and healing. Our evidence-based walking meditations help you cultivate mindfulness, release stress, and achieve deeper growth—all while staying active.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#2C4343] text-white font-medium rounded-md hover:bg-[#1a2e2e] transition-all duration-300 shadow-lg"
                onClick={() => router.push('/home')}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-[#2C4343] text-[#2C4343] font-medium rounded-md hover:bg-[#2C4343]/10 transition-all duration-300"
                onClick={() => router.push('/learn-more')}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 mt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-[#2C4343]">2,000+ Active Users</div>
                <div className="text-sm text-[#2C4343]/70">Join our growing community</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-1/2 relative mt-12 lg:mt-0 z-10"
          >
            <div className="relative w-full h-[420px] lg:h-[520px]">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full blur-xl opacity-60 z-0" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-200 rounded-full blur-xl opacity-60 z-0" />
              
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                <Image
                  src="/Explore.png"
                  alt="Walking meditation in nature"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Feature Highlights */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Guided Meditations', 'Nature Sounds', 'Progress Tracking'].map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">Discover Your Path to Mindfulness</h3>
                  <p className="text-sm text-white/80">Explore our collection of specialized walking meditations</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-16 lg:px-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
               
                <div>
                  <h4 className="font-semibold text-[#2C4343]">Subscribe to our newsletter</h4>
                  <p className="text-sm text-[#2C4343]/70">Get weekly mindfulness tips and updates</p>
                </div>
              </div>
              <div className="flex w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 bg-white border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#2C4343]/30 flex-grow md:w-64"
                />
                <button className="px-6 py-3 bg-[#2C4343] text-white rounded-r-md hover:bg-[#1a2e2e] transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;