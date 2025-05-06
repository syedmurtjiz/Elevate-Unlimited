'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTelegramPlane, FaDiscord } from 'react-icons/fa';

const SectionSix = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/Top.png')" }}>
      <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      
      <div className="relative container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto"
        >
          {/* Main Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-white text-5xl md:text-6xl font-semibold tracking-wide">
              START YOUR
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold tracking-wide text-stroke">
              TRANSFORMATION
            </h2>
            <h2 className="text-white text-5xl md:text-6xl font-semibold tracking-wide">
              TODAY
            </h2>
          </div>

          {/* Description */}
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sign up now to receive your free walking meditation series<br />
            and begin your journey to a more balanced, energized,<br />
            and mindful life.
          </p>

          {/* Start Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-20 py-4 bg-transparent text-white text-xl font-semibold border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={() => router.push('/signup')}
          >
            Start Now
          </motion.button>

          {/* Login Text */}
          <div className="text-white/90 text-base">
            Already A Member? <button onClick={() => router.push('/login')} className="text-white underline hover:text-white/80">Log In</button> To Access Your Meditations
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-6">
            {[
              { Icon: FaFacebookF, href: '#', color: '#FFFFFF' },
              { Icon: FaInstagram, href: '#', color: '#FFFFFF' },
              { Icon: FaLinkedinIn, href: '#', color: '#FFFFFF' },
              { Icon: FaYoutube, href: '#', color: '#FFFFFF' },
              { Icon: FaTelegramPlane, href: '#', color: '#FFFFFF' },
              { Icon: FaDiscord, href: '#', color: '#FFFFFF' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, color: social.color }}
                className="text-white/90 hover:text-white transition-colors duration-300"
              >
                <social.Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionSix
