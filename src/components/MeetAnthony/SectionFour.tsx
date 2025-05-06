'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '../shared/ScrollAnimation';

const SectionFour = () => {
  return (
    <div className='p-10 '>
      <div className='flex flex-col md:flex-row justify-center items-center gap-20 p-10 bg-black/60 rounded-lg'>
        <ScrollAnimation direction="left" delay={0.2} className='left flex flex-col gap-2'>
          <h1 className='text-4xl uppercase text-white'> My Journey with  <br/> <span className='font-bold text-6xl'> music</span></h1>
          <ScrollAnimation direction="left" delay={0.3}>
            <div className='text-lg max-w-sm max-auto text-white text-2xl'>
            <p className=''>
            Anthony La Rocca has dedicated over 20 years
             to the world of internet marketing and project
              management, working with brands, agencies,
               and entrepreneurs all over the globe. After
                experiencing a profound personal
                 transformation, he discovered his true passion
                  lay beyond digital campaigns and business 
                  strategies. Through a two-year spiritual 
                  journey, Anthony lost over 50 lbs and embraced
                   the powerful realms of meditation, music, and
                    energy healing.
            </p>
            </div>
          </ScrollAnimation>

        </ScrollAnimation>
        
        <ScrollAnimation direction="right" delay={0.3} className='right'>
          <Image 
            src="/music.png" 
            width={400}
            height={400}
            className='w-[400px] h-[500px] object-cover rounded-lg shadow-lg' 
            alt="anthony" 
          />
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default SectionFour