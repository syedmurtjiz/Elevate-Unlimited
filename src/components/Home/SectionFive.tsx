'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '../ScrollAnimation';

const SectionFive = () => {
  return (
    <div className=''>
      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-20 sm:gap-0 md:gap-0 lg:gap-0 p-0 sm:p-6 md:p-8 lg:p-10 '>
        <div className='left flex flex-col gap-2 sm:gap-3 md:gap-4 w-full p-4 sm:p-6 md:p-8'>
          <ScrollAnimation direction="left" delay={0.2}>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl uppercase text-[#2C4343] font-extrabold  text-left'>
              READY TO ELEVATE <br/> YOUR JOURNEY?
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={0.3}>
            <p className='text-base sm:text-lg text-[#2C4343] leading-relaxed text-left lg:w-4/6'>
              Ready to Elevate Your Journey? Join a community dedicated to personal growth and transformation through walking meditation digital downloads. By joining, you will dive deeper into our offerings, including our private online community group, which allows one to discover with others how you can begin your journey towards a more mindful, balanced life.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.6}>
            <button className='bg-[#2C4343] text-white py-2 px-4 sm:px-6 rounded-md hover:bg-[#3a5757] transition-colors text-sm sm:text-base w-full lg:w-auto mt-2 sm:mt-4 font-semibold shadow-md text-center'>
              Explore Elevate Unlimited
            </button>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation direction="right" delay={0.3}>
            <div className='w-full lg:w-80 h-[400px]'>
              <Image 
                src="/Journey.png" 
                width={500}
                height={500}
 
                alt="Journey" 
              />
            </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SectionFive;