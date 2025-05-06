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
    <div className="h-screen w-full bg-[url('/flower1.png')] bg-cover bg-top-center bg-no-repeat flex items-center">
      <div className="container mx-auto px-4 flex flex-col items-start pl-8 md:pl-16 lg:pl-24">
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="max-w-3xl">
            <h1 className="text-4xl uppercase mb-2 mt-10">
              <span className="text-[#333] font-light">DISCOVER</span> <br />
              <span className="text-[#1a2942] font-bold">ELEVATE UNLIMITED</span>
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4 max-w-2xl">
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
                <div key={index} className="flex space-x-8 w-full flex-shrink-0">
                  <ScrollAnimation direction="left" delay={0.4}>
                    <div className="relative w-[400.08px] h-[250.53px] overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <img src={slide.left.image} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex flex-col items-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full -mt-1 mb-3">
                          {slide.left.icon}
                        </div>
                        <div className="px-8">
                          <h3 className="text-base font-semibold text-white mb-1.5 text-center">{slide.left.title}</h3>
                          <p className="text-white text-xs leading-snug text-center">
                            {slide.left.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.4}>
                    <div className="relative w-[400.08px] h-[250.53px] overflow-hidden rounded-lg">
                      <div className="absolute inset-0"></div>
                      <img src={slide.right.image} alt="" className="w-full h-full object-cover opacity-50" />
                      <div className="absolute inset-0 flex flex-col items-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full ">
                          {slide.right.icon}
                        </div>
                        <div className="px-8">
                          <h3 className="text-base font-semibold text-white text-center">{slide.right.title}</h3>
                          <p className="text-white text-xs leading-snug text-center">
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
          <div className="flex items-center space-x-2 mt-6">
            <button 
              className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity"
              onClick={prevSlide}
            >
              <IoIosArrowBack size={16} className="text-gray-400" />
            </button>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                } hover:bg-gray-400`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <button 
              className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity"
              onClick={nextSlide}
            >
              <IoIosArrowForward size={16} className="text-gray-400" />
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}