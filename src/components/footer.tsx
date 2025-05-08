import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='px-2 sm:px-4 md:px-6'>
      <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-6 bg-[#E0FFFF] p-4 sm:p-6 md:p-8 rounded-lg shadow-md'>
        <div className='top'>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Anthony La Rocca Logo"
              width={24}
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-gray-800 font-medium text-sm sm:text-base">Anthony La Rocca</span>
          </Link>
        </div>

        <div className='bottom flex flex-wrap justify-center gap-2 sm:gap-4 uppercase text-sm sm:text-base'>
          <Link href="/" className="hover:text-gray-600 transition duration-200">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-600 transition duration-200">
            meet anthony
          </Link>
          <Link href="/" className="hover:text-gray-600 transition duration-200">
            Elevate Unlimited
          </Link>
          <Link href="/" className="hover:text-gray-600 transition duration-200">
            Support
          </Link>
        </div>

        <div className='middle font-bold text-white flex flex-wrap justify-center gap-2 sm:gap-4'>
          <Link href="/" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200 text-sm sm:text-base">
            F
          </Link>
          <Link href="/" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200 text-sm sm:text-base">
            X
          </Link>
          <Link href="/" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200 text-sm sm:text-base">
            In
          </Link>
          <Link href="/" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200 text-sm sm:text-base">
            Sk
          </Link>
        </div>

        <div className='flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base'>
          <Link href="/" className='text-gray-600 hover:text-gray-800 transition duration-200'>
            Terms & Conditions
          </Link>
          <span className="text-gray-400 hidden sm:inline"> | </span>
          <Link href="/" className='text-gray-600 hover:text-gray-800 transition duration-200'>
            Privacy Policy
          </Link>
          <span className="text-gray-400 hidden sm:inline"> | </span>
          <Link href="/contact" className='text-gray-600 hover:text-gray-800 transition duration-200'>
            Contact
          </Link>
        </div>

        <div className="text-gray-500 text-xs sm:text-sm">
          2025|Copyrights@Elevate Unlimited
        </div>
      </div>
    </div>
  )
}

export default Footer
