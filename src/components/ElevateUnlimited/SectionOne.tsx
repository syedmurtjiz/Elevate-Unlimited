'use client';
import React from 'react';
import Header from '../header';

export default function SectionOne() {
  return (
    <div className="relative">
      <div className="bg-[url('/pexelslillian.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full">      
        <Header />
        
        <div className="pt-24 flex flex-col items-center justify-center min-h-screen">
          <div className="mx-auto flex flex-col items-center justify-center space-y-8 max-w-4xl">
            <h1 className="text-white text-3xl md:text-5xl font-extralight text-center leading-tight tracking-wide">
              <span className="font-light">Elevate Your Journey With</span>
              <br />
              <span className="font-bold md:text-5xl">UNLIMITED ACCESS TO</span>
              <br />
              <span className="font-bold md:text-6xl">TRANSFORMATIVE WALKING</span>
              <br />
              <span className="font-bold  md:text-6xl">MEDITATIONS</span>
            </h1>
            
            <p className="text-white text-xl md:text-2xl text-center leading-relaxed mt-6 font-light max-w-3xl">
              Unlock the full potential of your meditation practice. With Elevate Unlimited, gain access to a diverse library of walking meditations designed to help you overcome challenges, find balance, and elevate your life.
            </p>
            
            <div className="flex flex-col mb-12">
              <button className="border border-white text-white hover:bg-white hover:bg-opacity-10 px-12 py-4 rounded-lg text-lg transition-all duration-300 font-light">
                Join Elevate Unlimited Now - $9.99/Month
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}