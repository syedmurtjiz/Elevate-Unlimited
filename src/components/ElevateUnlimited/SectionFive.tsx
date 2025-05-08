'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image';
// Social media icons removed

const SectionFive = () => {
  const router = useRouter();

  return (
    <div className='p-8'>
    <div className="relative min-h-screen ">
      <div className="absolute inset-0 bg-white/10 rounded-lg" /> {/* Dark overlay */}
      
      <div className="relative container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4">
         {/* Main Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-wide">
              START YOUR
            </h2>

            <h2 className="text-white text-5xl md:text-6xl font-semibold tracking-wide">
            TRANSFORMATION TODAY
            </h2>
          </div>

          {/* Description */}
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join Elevate Unlimited for just $9.99/month and start your journey toward a <br /> more balanced, energized, and mindful life.
          </p>

          {/* Start Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-3xl py-2 bg-[#CCDDD7] text-black text-xl font-semibold  border-white rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={() => router.push('/signup')}
          >
            Get Unlimited Access Now
          </motion.button>
<div className='mt-6'>        
        <Image src="/Frame82.png" alt="ElevateUnlimited" className="w-3xl" width={500} height={300} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default SectionFive
