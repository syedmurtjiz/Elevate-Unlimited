'use client';
import React from 'react';
import Image from 'next/image';

export default function SectionOne() {
  return (
    <div className='bg-[#CCDDD7] p-12'>
      <div className='text-center max-w-2xl mx-auto py-8'>
        <h1 className='text-5xl uppercase text-[#344648] font-bold'>
          Influences and Inspirations
        </h1>
      </div>
      <div className='text-center mx-auto'>
        <span className='text-sm text-[#344648]'>Anthony La Rocca has dedicated over 20 years to the world of internet marketing and project<br />
          management, working with brands, agencies, and entrepreneurs all over the globe. After experiencing<br />
          a profound personal transformation, he discovered his true passion lay beyond digital campaigns and<br />
          business strategies. Through a two-year spiritual journey, Anthony lost over 50 lbs and embraced the<br />
          powerful realms of meditation, music, and energy healing.
        </span>

        {/* Inspiration Card */}
        <div className=" mx-auto py-30 flex flex-row justify-center gap-20">
    <div className="bg-[#344648] p-3  w-50">
      <div className="aspect-square w-full h-48 bg-[#CCDDD7]  flex items-center justify-center relative">
        <div className="absolute -mt-22 -ml-8 inset-0">
          <img
            src="/Teal.png"
            alt="Tony Robbins"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="text-white mt-2">
        <h3 className="text-lg font-semibold">Tony Robbins</h3>
        <p className="text-xs text-gray-300">Motivational speaker</p>
      </div>
    </div>

    <div className="bg-white  p-3  w-50">
      <div className="aspect-square w-full h-48 bg-[#CCDDD7]  flex items-center justify-center relative">
        <div className="absolute -mt-22  inset-0">
          <img
            src="/Depak.png"
            alt="Tony Robbins"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className=" text-black mt-2">
        <h3 className="text-lg font-semibold">Tony Robbins</h3>
        <p className="text-xs">Motivational speaker</p>
      </div>
    </div>

    <div className="bg-[#344648] p-3 w-50">
      <div className="w-full h-48 bg-[#CCDDD7] flex items-center justify-center relative">
        <div className="absolute -mt-30  inset-0">
          <img
            src="/Tony.png"
            alt="Tony Robbins"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
      <div className="text-white mt-2">
        <h3 className="text-lg font-semibold">Tony Robbins</h3>
        <p className="text-xs text-gray-300">Motivational speaker</p>
      </div>
    </div>
    </div>

    <div className='flex flex-row max-w-4xl mx-auto gap-20'>
    <div className="bg-[#344648] p-3 w-50">
      <div className="aspect-square w-full h-48 bg-[#CCDDD7] flex items-center justify-center relative">
        <div className="absolute -mt-30  inset-0">
          <img
            src="/Bob.png"
            alt="Tony Robbins"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
      <div className="text-white mt-2">
        <h3 className="text-lg font-semibold">Tony Robbins</h3>
        <p className="text-xs text-gray-300">Motivational speaker</p>
      </div>
    </div>
    <div className="bg-[#344648] p-3 w-50">
      <div className="aspect-square w-full h-48 bg-[#CCDDD7] flex items-center justify-center relative">
        <div className="absolute -mt-30  inset-0">
          <img
            src="/Sean.png"
            alt="Tony Robbins"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
      <div className="text-white mt-2">
        <h3 className="text-lg font-semibold">Tony Robbins</h3>
        <p className="text-xs text-gray-300">Motivational speaker</p>
      </div>
    </div>
<div className=''>
    
    <img src="/Social.png" alt="Arrow" />
    
    <div className='-mt-50'>
    <span className='text-sm text-[#344648] '>
    These teachers have inspired <br />
     Elevate Unlimited’s approach <br />
      to meditative practice, <br />
       blending movement, sound, <br />
        and mindfulness to create a <br />
         holistic experience for personal <br />
          transformation.
    </span>
    </div>
</div>

    </div>
    </div>
    </div>
  );
}