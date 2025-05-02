'use client';

import React, { useState } from 'react';
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

const SectionFour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Function to get visible testimonials
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <div className='p-2'>
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section5.png"
          alt="Forest stream background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white mb-2">SUCCESS</h2>
          <div className="text-6xl font-light tracking-wider text-white/90" style={{ WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent' }}>
            STORIES
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-[1400px] mx-auto px-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors transform -translate-x-8"
            aria-label="Previous testimonial"
          >
            <IoIosArrowBack size={40} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors transform translate-x-8"
            aria-label="Next testimonial"
          >
            <IoIosArrowForward size={40} />
          </button>

          {/* Testimonial Cards Container */}
          <div className="flex justify-center items-stretch gap-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  className="w-[350px] flex-shrink-0"
                >
                  <div 
                    className="h-full bg-black/40 backdrop-blur-[8px] rounded-2xl p-8 relative group"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="text-white text-lg mb-8">
                      <span className="text-5xl font-serif text-white absolute -top-4 left-4 opacity-80">“</span>
                      <p className="text-base leading-relaxed pt-4">{testimonial.quote}</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-white/90 font-medium text-sm">{testimonial.name}</div>
                        <div className="flex justify-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400"
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

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectionFour;
