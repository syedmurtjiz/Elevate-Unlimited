'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const testimonials = [
  {
    id: 1,
    name: "Jenna L.",
    quote: "I found it hard to meditate in a traditional way, but these walking meditations helped me find my rhythm and connect deeply with myself",
    avatar: "/Ellipse 46.png",
    rating: 5
  },
  {
    id: 2,
    name: "Alex M.",
    quote: "The walking meditations have completely transformed how I approach mindfulness. It's like being in a peaceful retreat without needing to go anywhere",
    avatar: "/Ellipse 46 (1).png",
    rating: 5
  },
  {
    id: 3,
    name: "Mike T.",
    quote: "The Hz frequency meditations were a game-changer for me. I feel lighter and more balanced after every session",
    avatar: "/Ellipse 46 (2).png",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);

  // Auto rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying || hovering) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, hovering]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Function to get visible testimonials (always show 3)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/section5.png"
          alt="Forest stream background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 w-full">
        {/* Title with enhanced animation */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-6xl font-bold text-white mb-0 tracking-wide">SUCCESS</h2>
            <div 
              className="text-6xl font-light tracking-wider leading-tight"
              style={{ 
                WebkitTextStroke: '1.5px white', 
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
            >
              STORIES
            </div>
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-0.5 bg-white/30"
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Navigation Arrows with hover effects */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <IoIosArrowBack size={26} />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <IoIosArrowForward size={26} />
          </motion.button>

          {/* Testimonial Cards Container */}
          <div className="flex justify-center items-stretch gap-6 px-10">
            <AnimatePresence mode="sync">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="w-80 flex-shrink-0"
                >
                  <div 
                    className="h-full bg-black/60 backdrop-blur-md rounded-lg p-6 relative overflow-hidden"
                    style={{
                      boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.12)'
                    }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-lg" />
                    
                    <div className="text-white mb-6 relative">
                      <span className="text-5xl font-serif text-white absolute -top-4 left-0 opacity-70">&ldquo;</span>
                      <p className="text-sm leading-relaxed pt-5 text-white/90">{testimonial.quote}</p>
                      <span className="text-5xl font-serif text-white absolute -bottom-6 right-2 opacity-70">&rdquo;</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 relative z-10">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 ring-2 ring-white/10 ring-offset-1 ring-offset-black/50">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-white font-medium text-sm">{testimonial.name}</div>
                        <div className="flex justify-center gap-0.5 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-3 h-3 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Enhanced Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70 w-1.5'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;