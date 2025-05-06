'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '../shared/ScrollAnimation';

const SectionOne = () => {
  return (
    <div className="p-2">
      <div className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.png"
            alt="Misty mountains"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Content Container */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 min-h-screen">
            {/* Left Section with Form */}
            <div className="w-full lg:w-1/3 flex items-end pt-8 sm:pt-12 md:pt-16 lg:pt-80">
              <ScrollAnimation direction="left" delay={0.2}>
                <div className="w-full">
                  {/* Glass Card */}
                  <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 text-white">
                    <p className="text-base mb-6">
                      Download the series today and take the first step towards transforming your mind and body, one walk at a time.
                    </p>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-md bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-600 text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-md bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-600 text-sm"
                      />
                      <button
                        type="submit"
                        className="w-full bg-teal-800 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 text-sm uppercase"
                      >
                        DOWNLOAD NOW
                      </button>
                      <div className="text-center">
                        <p className="text-xs">
                          Need Help? <a href="#" className="text-white hover:underline">Click Here</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Section with Features */}
            <div className="w-full lg:w-2/3 flex flex-col lg:pl-20 xl:pl-32 2xl:pl-44 -mt-12">
              <div className="lg:ml-8 lg:mt-8">
                <ScrollAnimation direction="down" delay={0.3}>
                  <h1 className="text-[#2C4343] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 max-w-2xl">
                    When you download the Free <br className="hidden sm:block" />
                    Walking Meditation Series,<br className="hidden sm:block" />
                    you will gain access to
                  </h1>
                </ScrollAnimation>

                {/* Feature Points */}
                <div className="space-y-4">
                  {/* Feature 1 */}
                  <ScrollAnimation direction="right" delay={0.4}>
                    <div className="flex items-start gap-3 lg:ml-2">
                      <div className="flex-shrink-0 w-6 h-6">
                        <Image src="/Vector.png" width={24} height={24} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div>
                        <h3 className="text-[#2C4343] text-lg font-medium">2 Powerful Walking Meditations</h3>
                        <p className="text-[#2C4343] text-sm">
                          Start your journey with a curated selection of crystal clear studio quality MP3 audio designed to fit easily into your daily routine
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Feature 2 */}
                  <ScrollAnimation direction="right" delay={0.5}>
                    <div className="flex items-start gap-3 lg:ml-18">
                      <div className="flex-shrink-0 w-6 h-6">
                        <Image src="/Vector.png" width={24} height={24} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div>
                        <h3 className="text-[#2C4343] text-lg font-medium">Guided And Unguided Options</h3>
                        <p className="text-[#2C4343] text-sm">
                          Whether you prefer the gentle guidance of a calming voice or the freedom of silent reflection, our series has you covered.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Feature 3 */}
                  <ScrollAnimation direction="right" delay={0.6}>
                    <div className="flex items-start gap-3 lg:ml-32">
                      <div className="flex-shrink-0 w-6 h-6">
                        <Image src="/Vector.png" width={24} height={24} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div>
                        <h3 className="text-[#2C4343] text-lg font-medium">Bonus Hz Frequency Meditation</h3>
                        <p className="text-[#2C4343] text-sm">
                          Enhance your healing process with a special meditation track that incorporates Hz frequencies known to promote deep relaxation and emotional balance.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
          <ScrollAnimation direction="up" delay={0.7}>
            <div>
              <p className='text-white text-center'>Welcome to Elevate Unlimited by Anthony La Rocca – a unique approach to meditation designed for those who seek personal transformation on the go. Whether you are a seasoned meditator or new to mindfulness, our walking meditations help you connect with yourself, find balance, and elevate your life.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;