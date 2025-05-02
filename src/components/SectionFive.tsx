'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from './ScrollAnimation';

const SectionFive = () => {
  return (
    <div className='p-10 '>
      <div className='flex flex-col md:flex-row justify-center items-center gap-20 p-10'>
        <ScrollAnimation direction="left" delay={0.2} className='left flex flex-col gap-2'>
        <h1 className='text-6xl uppercase text-[#2C4343] font-extrabold'> Ready to Elevate <br/> Your Journey?</h1>          <ScrollAnimation direction="left" delay={0.3}>
            <p className='text-lg text-[#2C4343]'>Ready to Elevate Your Journey? Join a community dedicated <br/>
            to personal growth and transformation through walking meditation <br/>
            digital downloads. By joining, you will dive deeper into our offerings,<br/>
            discover with others how you can begin your journey towards a<br/>
            more mindful, balanced life.
            </p>
          </ScrollAnimation>
         
      
          <ScrollAnimation direction="up" delay={0.6}>
            <button className='bg-[#2C4343] text-white py-2 w-full rounded-md hover:bg-[#3a5757] transition-colors'>
              Explore Elevate Unlimited
            </button>
          </ScrollAnimation>
        </ScrollAnimation>
        
        <ScrollAnimation direction="right" delay={0.3} className='right'>
          <Image 
            src="/Journey.png" 
            width={400}
            height={550}
            className='w-[400px] h-[550px] object-cover rounded-lg shadow-lg' 
            alt="anthony" 
          />
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default SectionFive