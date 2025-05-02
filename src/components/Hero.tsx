'use client'; // only needed if using client-side interactivity (e.g., state, hooks)

import React from 'react';

export default function WalkingMeditationHero() {
  return (
    <div className="p-2">
<div
  className="h-screen w-full bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col  items-center px-6">
    <h1
  className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-center text-white px-4 pt-12 uppercase leading-tight tracking-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]"
>
  Awaken Your True Potential Through Walking Meditations
</h1>



<h2
  className="text-lg sm:text-xl md:text-base text-white font-medium pt-2 uppercase leading-tight tracking-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]"
>
  Rewire your mind and body for a life of limitless possibilities.
</h2>

        <button className='text-white border-1 p-2 rounded-lg mt-34'>Get Your Free Walking Meditation Series</button>
      </div>
    </div>
  );
}
