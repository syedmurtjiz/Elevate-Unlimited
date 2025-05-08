'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '../shared/ScrollAnimation';

const SectionOne = () => {
  return (
      <div className="relative min-h-screen w-full lg:p-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.png"
            alt="Misty mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center text-center px-4 sm:px-6 lg:items-start lg:text-left lg:px-0">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 min-h-screen">
            <div className="order-1 lg:order-2 w-full lg:w-2/3 flex flex-col lg:pl-12 xl:pl-20 2xl:pl-32 pt-4 sm:pt-6 md:pt-8">
              <div className="lg:ml-4">
                <ScrollAnimation direction="down" delay={0.3}>
                  <Image
                    src="/leaf.png"
                    alt="Leaf"
                    width={48}
                    height={48}
                    className="block lg:hidden mx-auto mb-4"
                  />
                  <h1 className="text-white lg:text-[#2C4343] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 sm:mb-6 max-w-2xl text-center lg:text-left">
                    When you download the Free <br className="hidden sm:block" />
                    Walking Meditation Series,<br className="hidden sm:block" />
                    you will gain access to
                  </h1>
                </ScrollAnimation>

                <div className="space-y-4 sm:space-y-6">
                  <ScrollAnimation direction="right" delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 lg:ml-2">
                      <div className="block sm:hidden w-8 h-8 mx-auto mb-2">
                        <Image src="/Vector.png" width={32} height={32} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div className="hidden sm:block flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                        <Image src="/Vector.png" width={24} height={24} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div className="w-full">
                        <h3 className="text-white text-center sm:text-left text-base sm:text-lg font-extrabold">2 Powerful Walking Meditations</h3>
                        <p className="text-white text-center sm:text-left text-xs sm:text-sm">
                          Start your journey with a curated selection of crystal clear studio quality MP3 audio designed to fit easily into your daily routine
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.5}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 lg:ml-8">
                      <div className="block sm:hidden w-8 h-8 mx-auto mb-2">
                        <Image src="/Vector.png" width={32} height={32} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div className="hidden sm:block flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                        <Image src="/Vector.png" width={24} height={24} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div className="w-full">
                        <h3 className="text-white text-center sm:text-left text-base sm:text-lg font-extrabold">Guided And Unguided Options</h3>
                        <p className="text-white text-center sm:text-left text-xs sm:text-sm">
                          Whether you prefer the gentle guidance of a calming voice or the freedom of silent reflection, our series has you covered.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 lg:ml-16">
                      <div className="block sm:hidden w-8 h-8 mx-auto mb-2">
                        <Image src="/Vector.png" width={32} height={32} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div className="hidden sm:block flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                        <Image src="/Vector.png" width={24} height={24} alt="Feature icon" className="w-full h-full" />
                      </div>
                      <div className="w-full">
                        <h3 className="text-white text-center sm:text-left text-base sm:text-lg font-extrabold">Bonus Hz Frequency Meditation</h3>
                        <p className="text-white text-center sm:text-left text-xs sm:text-sm">
                          Enhance your healing process with a special meditation track that incorporates Hz frequencies known to promote deep relaxation and emotional balance.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1 w-full lg:w-1/3 flex items-start lg:items-end pt-4 sm:pt-6 md:pt-8 lg:pt-80 lg:pl-22">
              <ScrollAnimation direction="left" delay={0.2}>
                <div className="w-full ">
                  <div className="bg-white/10 border border-white/20 rounded-3xl text-white shadow-2xl backdrop-blur-2xl max-w-md mx-auto px-4 py-6 sm:px-8 sm:py-8 animate-fade-in transition-all duration-500 sm:mt-6">
                    <hr className="block sm:block lg:hidden border-t border-white/30 mb-4" />
                    <p className="text-lg sm:text-xl font-extrabold text-center mb-5 tracking-tight drop-shadow-lg">
                      Download the series today and take the first step towards transforming your mind and body, one walk at a time.
                    </p>
                    <div className="space-y-4 sm:space-y-5">
                      <label className="block text-xs text-white/80 mb-1 ml-1 font-semibold">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md placeholder-white/70 text-white border border-white/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-200 outline-none text-base transition-all duration-200"
                      />
                      <label className="block text-xs text-white/80 mb-1 ml-1 font-semibold">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md placeholder-white/70 text-white border border-white/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-200 outline-none text-base transition-all duration-200"
                      />
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-200 to-teal-400 hover:from-teal-300 hover:to-teal-500 text-teal-900 font-extrabold py-3 rounded-lg shadow-lg transition-all duration-300 text-base uppercase tracking-wide mt-2"
                      >
                        DOWNLOAD NOW
                      </button>
                      <div className="text-center mt-3">
                        <p className="text-xs text-white/80">
                          More Info? <a href="#" className="text-white font-bold underline">Click Here</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation direction="up" delay={0.7}>
            <div className="mt-4 sm:mt-6 md:mt-8 order-3 w-full">
              <p className="text-white text-center lg:text-left text-sm sm:text-base lg:text-lg w-full lg:px-22">
                Welcome to Elevate Unlimited by Anthony La Rocca – a unique approach to meditation designed for those who seek personal transformation on the go. Whether you're a seasoned meditator or new to mindfulness, our walking meditations help you connect with yourself, find balance, and elevate your life.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
  );
};

export default SectionOne;

<style jsx global>{`
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
  }
`}</style>