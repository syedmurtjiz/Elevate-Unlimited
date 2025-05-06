'use client';
import React from 'react';
import Header from '../header';
import Image from 'next/image';

export default function SectionOne() {
  return (
      <div className="bg-[#CCDDD7]">      
        <Header />
        
          <div className="h-screen">
<div className='text-2xl text-[#344648] px-30 py-12'>
              <span className="">Meet </span>
              <br />
              <span className="font-bold md:text-5xl">Anthony </span>
              <br />
              <span className="font-bold md:text-6xl">La Rocca</span>
              <br />
              </div>
              <div className=" flex justify-start -mt-42">
  <Image src="/autumnlogo.png" alt="autumn" width={200} height={200 } />
</div>         


          </div>
        </div>
  );
}