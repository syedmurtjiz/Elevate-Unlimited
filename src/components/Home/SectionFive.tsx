'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '../ScrollAnimation';

const SectionFive = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 p-4 sm:p-6 md:p-8 lg:p-10'>
        <div className='left flex flex-col gap-2 sm:gap-3 md:gap-4 w-full md:w-1/2'>
          <ScrollAnimation direction="left" delay={0.2}>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-[#2C4343] font-extrabold leading-tight'>
              Ready to Elevate <br/> Your Journey?
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={0.3}>
            <p className='text-base sm:text-lg text-[#2C4343] leading-relaxed'>
              Ready to Elevate Your Journey? Join a community dedicated
              to personal growth and transformation through walking meditation
              digital downloads. By joining, you will dive deeper into our offerings,
              discover with others how you can begin your journey towards a
              more mindful, balanced life.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.6}>
            <button className='bg-[#2C4343] text-white py-2 px-4 sm:px-6 rounded-md hover:bg-[#3a5757] transition-colors text-sm sm:text-base w-full sm:w-auto mt-2 sm:mt-4'>
              Explore Elevate Unlimited
            </button>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation direction="right" delay={0.3}>
          <div className='right w-full md:w-1/2 flex justify-center'>
            <div className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]'>
              <Image 
                src="/Journey.png" 
                width={400}
                height={550}
                className='w-full h-auto object-cover rounded-lg shadow-lg' 
                alt="anthony" 
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SectionFive;