'use client';

import React, { useState } from 'react';
import { BsCalendar2Week } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ScrollAnimation } from '../shared/ScrollAnimation';

export default function SectionThree() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      left: {
        icon: <BsCalendar2Week size={28} color="white" />,
        title: "Transform Your Daily Routine",
        description: "Unlock the power of mindfulness and seamlessly integrate it into your everyday life with our morning rituals. Whether you're navigating a busy schedule or seeking moments of peace, our sessions are designed to effortlessly fit into any routine, allowing you to cultivate a more balanced and fulfilling lifestyle.",
        image: "/Subtract.png"
      },
      right: {
        icon: <AiOutlineClockCircle size={28} color="white" />,
        title: "Guided And Unguided Options For Every Mood",
        description: "Tailor your meditation experience to your needs. Choose from our length MP3 audio guided sessions that offer calming instructions to help you stay focused or embrace the simplicity of timer-only meditations, giving you the freedom to explore your inner landscape at your own pace.",
        image: "/Rectangle1.png"
      }
    },
    {
      left: {
        icon: <BsCalendar2Week size={28} color="white" />,
        title: "Transform Your Daily Routine",
        description: "Unlock the power of mindfulness and seamlessly integrate it into your everyday life with our morning rituals. Whether you're navigating a busy schedule or seeking moments of peace, our sessions are designed to effortlessly fit into any routine, allowing you to cultivate a more balanced and fulfilling lifestyle.",
        image: "/Subtract.png"
      },
      right: {
        icon: <AiOutlineClockCircle size={28} color="white" />,
        title: "Guided And Unguided Options For Every Mood",
        description: "Tailor your meditation experience to your needs. Choose from our length MP3 audio guided sessions that offer calming instructions to help you stay focused or embrace the simplicity of timer-only meditations, giving you the freedom to explore your inner landscape at your own pace.",
        image: "/Rectangle1.png"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen w-full bg-[url('/flower1.png')] bg-cover bg-top-center bg-no-repeat flex items-center py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase mb-2 mt-4 sm:mt-6 md:mt-10">
              <span className="text-[#333] font-light">DISCOVER</span> <br />
              <span className="text-[#1a2942] font-bold">ELEVATE UNLIMITED</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
              Meditation is not just about sitting still. Walking meditations combine
              the benefits of physical movement with mindfulness, allowing you to
              open up your heart and mind while engaging your body. Perfect for
              people who find it challenging to meditate in a traditional seated
              posture, walking meditations bring you into the present moment with
              each step.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <div className="relative overflow-hidden w-full max-w-5xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full flex-shrink-0">
                  <ScrollAnimation direction="left" delay={0.4}>
                    <div className="relative w-full sm:w-[300px] md:w-[400px] h-[200px] sm:h-[250px] overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <img src={slide.left.image} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full -mt-1 mb-2 sm:mb-3">
                          {slide.left.icon}
                        </div>
                        <div className="px-4 sm:px-8">
                          <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-1.5 text-center">{slide.left.title}</h3>
                          <p className="text-white text-[10px] sm:text-xs leading-snug text-center">
                            {slide.left.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.4}>
                    <div className="relative w-full sm:w-[300px] md:w-[400px] h-[200px] sm:h-[250px] overflow-hidden rounded-lg">
                      <div className="absolute inset-0"></div>
                      <img src={slide.right.image} alt="" className="w-full h-full object-cover opacity-50" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full">
                          {slide.right.icon}
                        </div>
                        <div className="px-4 sm:px-8">
                          <h3 className="text-sm sm:text-base font-semibold text-white text-center">{slide.right.title}</h3>
                          <p className="text-white text-[10px] sm:text-xs leading-snug text-center">
                            {slide.right.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.5}>
          <div className="flex items-center space-x-2 mt-4 sm:mt-6">
            <button 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-75 transition-opacity"
              onClick={prevSlide}
            >
              <IoIosArrowBack size={20} className="text-gray-400" />
            </button>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                } hover:bg-gray-400`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <button 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-75 transition-opacity"
              onClick={nextSlide}
            >
              <IoIosArrowForward size={20} className="text-gray-400" />
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}