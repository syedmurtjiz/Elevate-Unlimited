'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '../shared/ScrollAnimation';

const SectionTwo = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 p-4 sm:p-6 md:p-8 lg:p-10'>
        <ScrollAnimation direction="left" delay={0.2} className='left flex flex-col gap-2 sm:gap-3 md:gap-4 lg:w-1/2'>
          <div className="mb-2 lg:mb-4">
            <span className="block text-base lg:text-lg tracking-widest text-[#2C4343] font-light uppercase mb-1 lg:mb-2">MEET</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase text-[#2C4343] font-extrabold leading-tight">ANTHONY LA ROCCA</span>
          </div>
          <ScrollAnimation direction="left" delay={0.3}>
            <p className='text-base sm:text-sm lg:text-md text-[#2C4343] leading-relaxed text-left max-w-xl'>
              Anthony La Rocca is a passionate seeker for continuous
              growth through energetic personal transformation. With
              over 20 years of experience in the internet marketing
              space, he underwent a set of life-changing spiritual
              journeys, which shifted his focus to follow his new true
              passions for meditation, music, and walking.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.4}>
            <p className="text-base sm:text-sm lg:text-md text-[#2C4343] leading-relaxed text-left max-w-xl">
              After losing over 50 lbs and embracing a new way of life,
              Anthony now shares the transformative power of walking
              meditations with the world. His mission is to help others
              find balance, growth, and healing through the practice of
              mindful movement which was his true inspiration behind
              the creation of Elevate Unlimited.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.5}>
            <p className="text-base sm:text-sm lg:text-md text-[#2C4343] leading-relaxed text-left max-w-xl">
              Learn more about Anthony's story and the inspiration
              behind Elevate Unlimited.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <button className='bg-[#2C4343] w-full text-white py-2 px-4 sm:px-6 rounded-md hover:bg-[#3a5757] transition-colors sm:text-sm lg:text-md font-semibold shadow-md mt-2'>
              Read More About Anthony
            </button>
          </ScrollAnimation>
        </ScrollAnimation>
        <ScrollAnimation direction="right" delay={0.3} className='right lg:w-1/2 flex justify-center items-center'>
          <div className='w-full max-w-[320px] sm:max-w-[350px] md:max-w-[400px] '>
            <Image 
              src="/anothy.png" 
              width={400}
              height={400}
              className='w-full h-full object-cover ' 
              alt="anthony" 
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default SectionTwo