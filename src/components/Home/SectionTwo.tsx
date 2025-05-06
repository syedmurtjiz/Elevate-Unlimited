'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '../shared/ScrollAnimation';

const SectionTwo = () => {
  return (
    <div className='p-10'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-20 p-10'>
        <ScrollAnimation direction="left" delay={0.2} className='left flex flex-col gap-2'>
          <h1 className='text-4xl uppercase text-[#2C4343] font-bold'> <span className='font-thin antialiased'>Meet</span> <br/> Anthony La Rocca</h1>
          <ScrollAnimation direction="left" delay={0.3}>
            <p className='text-lg text-[#2C4343]'>Anthony La Rocca is a passionate seeker for continuous<br/>
             growth through energetic personal transformation. With <br/>
             over 20 years of experience in the internet marketing<br/>
             space, he underwent a set of life-changing spiritual<br/>
             journeys, which shifted his focus to follow his new true<br/>
             passions for meditation, music, and walking.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.4}>
            <p className="text-lg text-[#2C4343]">After losing over 50 lbs and embracing a new way of life,<br/>
            Anthony now shares the transformative power of walking<br/>
             meditations with the world. His mission is to help others<br/>
             find balance, growth, and healing through the practice of<br/>
             mindful movement which was his true inspiration behind<br/>
             the creation of Elevate Unlimited.</p>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.5}>
            <p className="text-lg text-[#2C4343]">Learn more about Anthony story and the inspiration <br/> behind Elevate Unlimited.</p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <button className='bg-[#2C4343] text-white py-2 w-full rounded-md hover:bg-[#3a5757] transition-colors'>
              Read More About Anthony
            </button>
          </ScrollAnimation>
        </ScrollAnimation>
        
        <ScrollAnimation direction="right" delay={0.3} className='right'>
          <Image 
            src="/anothy.png" 
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

export default SectionTwo