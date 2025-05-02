import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
const footer = () => {
  return (
<div className='pl-2 pr-2'>
  <div className='flex flex-col justify-center items-center space-y-6 bg-[#E0FFFF] p-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-md'>
    <div className='top'>
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Anthony La Rocca Logo"
          width={24}
          height={24}
        />
        <span className="text-gray-800 font-medium">Anthony La Rocca</span>
      </Link>
    </div>
    <div className='bottom flex flex-row uppercase space-x-2'>
      <Link href="/" className="flex items-center hover:text-gray-600 transition duration-200">
        Home
      </Link>
      <Link href="/" className="flex items-center hover:text-gray-600 transition duration-200">
        meet anthony
      </Link>
      <Link href="/" className="flex items-center hover:text-gray-600 transition duration-200">
        Elevate Unlimited
      </Link>
      <Link href="/" className="flex items-center hover:text-gray-600 transition duration-200">
        Support
      </Link>
    </div>
    <div className='middle font-bold text-white flex space-x-4'>
      <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200">
        F
      </Link>
      <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200">
        X
      </Link>
      <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200">
        In
      </Link>
      <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#2C4343] hover:bg-[#375454] transition duration-200">
        Sk
      </Link>
    </div>
    <div>
      <Link href="/" className='text-gray-600 hover:text-gray-800 transition duration-200'>
        Terms & Conditions
      </Link>
      <span className="text-gray-400"> | </span>
      <Link href="/" className='text-gray-600 hover:text-gray-800 transition duration-200'>
        Privacy Policy
      </Link>
      <span className="text-gray-400"> | </span>
      <Link href="/" className='text-gray-600 hover:text-gray-800 transition duration-200'>
        Contact
      </Link>
    </div>
    <div className="text-gray-500 text-sm">
      2025|Copyrights@Elevate Unlimited
    </div>
  </div>
</div>
  )
}

export default footer
